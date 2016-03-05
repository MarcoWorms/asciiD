'use strict'

var asciiD = (function(){
  var ascii_container = null
  var field = null
  var last_display_html = ''
  var total_frames = 0
  var game_states = {
    example_state : {
      init : () => {console.log('game state init')},
      update : () => {console.log('game state update')},
      draw : () => {console.log('game state draw')},  
    }
  }
  var current_game_state = 'example_state'
  var time_last_loop = Date.now()
  var fps = 12

  function make_field(char) {
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

  function draw_to_html() {
    let display_field = [];
    field.forEach((row, row_index) => {
      display_field.push([]);
      row.forEach((cell, column_index) => {
        let cell_display_char = cell[0]
        let cell_display_color = cell[1]

        if (cell_display_char === " ") {
          cell_display_char = "&nbsp"
        }
        if (cell_display_color === undefined) {
          cell_display_color = "white"
        }

        display_field[row_index].push('<span style="color:'+cell_display_color+'" id="'+'x'+column_index+'y'+row_index+'">'+cell_display_char+'</span>');
      });
    });

    let display_html = '';
    display_field.forEach((row) => {
      display_html += '<span class="row">' + row.join('') + '<BR></span>';
    });

    // only draws if the field has changed
    if (last_display_html !== display_html) {
      ascii_container.innerHTML = display_html;
    }

    last_display_html = display_html;
  }

  function loop(fps) {
    let time_now = Date.now()
      let delta_time = (time_now - time_last_loop) / 1000
      let dt = delta_time
      time_last_loop = time_now
      game_states[current_game_state].update(dt)
      game_states[current_game_state].draw()
      draw_to_html()
      
  }

  return {
    inject: (injecting_div) => {
      let div = document.getElementById(injecting_div)
      div.innerHTML = '<p id="asciiContainer"></p>'
      ascii_container = document.getElementById('asciiContainer')
      field = make_field()
    },
    add_state: (name, state) => {
      game_states[name] = state
    },
    set_state: (name) => {
      current_game_state = game_states[name] ? name : console.log('Game State not found')
    },
    start: (fps) => {
      fps = fps > 0 ? fps : 12
      loop(fps, state)
    },
    print: (text, x, y) => {
      for (var i = 0; i < text.length; i++) {
        field[y][x + i] = text[i]
      }
    }
  }
}())