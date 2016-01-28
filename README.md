<pre>          _____________   __________   ___________   ___   ___   _______________  
         /xxxxxxxxxxxx/  /xxxxxxxxx/  /xxxxxxxxxx/  /xx/  /xx/  /xxxxxxxxxxxxxx/  
        /xxxxxxxxxxxx/  /xxxxxxxxx/  /xxxxxxxxxx/  /xx/  /xx/  /xxxxxxxxxxxxxx/  
       /xx/ \xxxxxxx/  /xx/ \xxxx/  /xx/ \xxxxx/  /xx/  /xx/  /xx/ \xxxxxxxxx/  
      /xx/   \xxxxx/  /xx/   \xx/  /xx/   \xxx/  /xx/  /xx/  /xx/   \xxxxxxx/  
     /xxx\____\xxx/   \xx\_____   |xx|     \x/  |xx|  |xx|  |xx|     \xxxxx/  
    /xxxxxxxxxxxxx\    \xxxxxxx\  |xx|      |   |xx|  |xx|  |xx|      \xxx/  
   /xxxxxxx/    \xx\         \xx\ |xx|      x   |xx|  |xx|  |xx|      /xx/  
  /xx/\xxx/      \xx\  ___   /xx/  \xx\   ___   |xx|  |xx|  |xx|     /xx/  
 /xx/  \x/        \xx\ \xx\_/xx/    \xx\_/xx/   |xx|  |xx|  |xx|    /xx/  
/xx/    |          \xx\ \xxxxx/      \xxxxx/    |xx|  |xx|  |xx|   /xx/  
\x/     |           \x/  \xxx/        \xxx/      \x/   \x/   \xx\ /xx/  
 |      |            |    \x/          \x/        |     |     \xxxxx/  
 |      |            |     |            |         x     |      \xxx/  
 |      x            |     x            |               |       \x/  
 |                   |                  |               x        |  
 x                   |                  x                        |  
                     |                                           |  
                     |                                           x  
                     |  
                     x  </pre>

## v0.0.5

![Alt text](http://i.imgur.com/P05t8n5.png "Preview")

![Alt text](http://i.imgur.com/uTbNDmk.gif "Preview")

------------------

Intended features to be developed (in priority order):  
* [x] DeltaTime on update  
* [x] Print text  
* [x] Sprite loader, it will load a .txt file and add to the GameObject.sprite[0]  
* [x] Spritesheet loader, same as the sprite loader but will add each frame to an index of Gameobject.sprite[]  
* [ ] Play/Stop animation from spritesheet with a framerate handler (BETA)  
* [ ] Keyboard/Mouse input manager  
* [ ] Better overall structure of the engine  
* [ ] Collision detection  
* [ ] A more organized way to separate static objects (like background) from game objects (like a player or a monster)  
* [ ] Independent camera, this will allow the field to be as big as you want, only rendering the parts you need.  
* [ ] Ascii sprite and spritesheet editor made for this engine (the dream)  
* [ ] Import spritesheets from pastebin (or another pastie site)  
* [ ] Documentation

Current features:
- Good ol' init/update/draw loop
- DOM will not be updated if the HTML generated from "field" hasn't changed.
- Each cell from the gameobject sprite have independent colors.
- Basic x/y grid, you can assign non-integer values to gameobject X and Y, but the display will always floor the values (only for display, the gameobject values will be intact)
- Prints text
- Loads sprites (and sheets) from .txt files (see the spritesheet.txt example on how to format them)

------------------

Changelog:

v0.0.1 - 19/01/2016 - https://jsfiddle.net/0y2tfmsv/  
-Git init

v0.0.2 - 20/01/2016 - https://jsfiddle.net/0y2tfmsv/1/  
-Cells now have independent colors, you can use the css standard you like (name, hexadecimal or RGB)

v0.0.3 - 22/01/2016 - https://jsfiddle.net/0y2tfmsv/2/  
-deltaTime is now sent to update(), print() function was added to print text.

v0.0.4 - 26/01/2016 - No more fiddles for now. You also need a local server to be able to load sprites from .txt  
-GameObjects now have the ability to load sprites from .txt files.

v0.0.5 - 28/01/2016 
-GameObjects now have the ability to load spritessheets from .txt, the same function also loads single sprites so you should use "loadSpriteSheet()" for both needs. Animation is still a work in progress, but I just wanted to see it working :')
