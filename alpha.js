'use strict';

class AuxiliarFunctions {
  generateEmptyField(char) {

    //needs es6 implementation when chrome decides to add optional params
    if (char === undefined) {
      char = '&nbsp'
    }

    let field = [];

    for (let i = 0; i < 30; i += 1) {
      let field_rows = [];
      for (let k = 0; k < 66; k += 1) {
        field_rows.push([char]);
      }
      field.push(field_rows);
    }

    return field;
  }

  print(field, text, fieldX, fieldY) {
    for (var i = 0; i < text.length; i++) {
      field[fieldY][fieldX + i] = text[i]
    };
    return field;
  }

}

class Engine {

  constructor(divId) {
    this.auxiliarFunctions = new AuxiliarFunctions();

    // injects the game on the div provided by the user
    let div = document.getElementById(divId);
    div.innerHTML = '<p id="asciiContainer"></p>';
    this.asciiContainer = document.getElementById('asciiContainer');
    this.field = this.auxiliarFunctions.generateEmptyField();
    this.lastDisplayHTML = '';
    this.framesSinceStart = 0;
  }

  start(fps) {
    this.timeLastLoop = Date.now()
    this.fps = fps;
    this.init();
    this.loop();
  }

  loop() {
    let timeNow = Date.now()
    let deltaTime = (timeNow - this.timeLastLoop) / 1000
    this.timeLastLoop = timeNow

    this.update(deltaTime);
    this.draw();
    this.drawFieldToHTML(this.field);

    this.framesSinceStart += 1;
    window.setTimeout(this.loop.bind(this), 1000/this.fps);
  }

  init() {
    // initialization logic, overrided on Game
  }

  update() {
    // game logic, overrided on Game
  }

  draw() {
    // draw logic, overrided on Game
  }

  drawFieldToHTML(field) {

    let displayField = [];
    field.forEach((row, rowIndex) => {
      displayField.push([]);
      row.forEach((cell, columnIndex) => {
        let cellDisplayChar = cell[0]
        let cellDisplayColor = cell[1]

        if (cellDisplayChar === " ") {
          cellDisplayChar = "&nbsp"
        }
        if (cellDisplayColor === undefined) {
          cellDisplayColor = "white"
        }

        displayField[rowIndex].push('<span style="color:'+cellDisplayColor+'" id="'+'x'+columnIndex+'y'+rowIndex+'">'+cellDisplayChar+'</span>');
      });
    });

    let displayHTML = '';
    displayField.forEach((row) => {
      displayHTML += '<span class="row">' + row.join('') + '<BR></span>';
    });

    // only draws if the field has changed
    if (this.lastDisplayHTML !== displayHTML) {
      this.asciiContainer.innerHTML = displayHTML;
    }

    this.lastDisplayHTML = displayHTML;
  }

}

class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = [];
    this.currentFrame = 0;
  }

  draw(field) {

    if (this.sprite[this.currentFrame] === undefined) {
      return field;
    }

    let width = this.sprite[this.currentFrame][0].length;
    let height = this.sprite[this.currentFrame].length;
    let roundX = Math.floor(this.x);
    let roundY = Math.floor(this.y);

    field.forEach((row, rowIndex) => {
      if (roundY <= rowIndex && rowIndex < roundY + height) {
        row.forEach((cell, columnIndex) => {
          if (roundX <= columnIndex && columnIndex < roundX + width) {
            field[rowIndex][columnIndex] = this.sprite[this.currentFrame][rowIndex - roundY][columnIndex - roundX];
          }
        });
      }
    });

    return field;
  }

  loadSpriteSheet(fileName, spriteHeight) {

    let spriteLoader = new XMLHttpRequest();

    spriteLoader.open('GET', fileName);
    spriteLoader.onreadystatechange = function() {
      if (spriteLoader.readyState === 4) {
        let spriteSheetAsText = spriteLoader.responseText;
        let spriteSheetAsLines = spriteSheetAsText.split('\n')
        let spritesNumber = (spriteSheetAsLines.length + 1) / spriteHeight
        let lastParsedLine = 0
        for (let currentFrame = 0; currentFrame < spritesNumber - 1; currentFrame += 1) {
          let currentSprite = []
          let initialLine = 0 + lastParsedLine
          let lastLine = spriteHeight + lastParsedLine
          for (let i = initialLine; i < lastLine; i += 1) {
            currentSprite.push(spriteSheetAsLines[i])
          }
          lastParsedLine += spriteHeight;
          currentSprite = currentSprite.join('\n')
          this.insertSprite(currentSprite, currentFrame)
        }
      }
    }.bind(this)
    spriteLoader.send();

  }

  insertSprite(spriteAsText, frame) {
    let spriteAsTextSplitNewlines = spriteAsText.split('\n')
    let spriteAsArray = []

    spriteAsTextSplitNewlines.forEach(line => {
      let spriteAsArrayLine = []
      for (let i = 0; i < line.length; i++) {
        spriteAsArrayLine.push([line[i]])
      }
      spriteAsArray.push(spriteAsArrayLine)
    })

    this.sprite[frame] = spriteAsArray
  }

  animate(framesSinceStart, frameInterval) {
    if (framesSinceStart % frameInterval === 0) {
      this.currentFrame +=1
    }
    if (this.currentFrame >= this.sprite.length) {
      this.currentFrame = 0
    }
  }
}

class Game extends Engine {

  constructor(divId) {
    super(divId);
  }

  init() {
    this.player = new GameObject(3, 3);
    this.player.sprite[0] = [[['/',"red"], ['-',"red"], ['\\',"red"]],
                          [['|',"red"], ['X',"green"], ['|',"red"]],
                          [['\\',"red"], ['-',"red"], ['/',"red"]]];
    this.player2 = new GameObject(10, 10);
    this.player2.loadSpriteSheet("tieshooter-spritesheet-test.txt", 8)
  }

  update(deltaTime) {
    this.player.x += 3 * deltaTime;
    this.player.y += 1 * deltaTime;
    this.player2.x += 5 * deltaTime;
    this.player2.animate(this.framesSinceStart, 5)
  }

  draw() {
    this.field = this.auxiliarFunctions.generateEmptyField();
    this.field = this.player.draw(this.field);
    this.field = this.player2.draw(this.field);
    this.field = this.auxiliarFunctions.print(this.field, "ola", 10, 20)
  }
}

var game = new Game('gameDiv');
game.start(12);

