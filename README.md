# asciiD
A HTML5 ASCII game engine built with love and ES6

Intended features to be developed (in priority order):  
- Sprite loader, it will load a .txt file and add to the GameObject.sprite[0]
- Spritesheet loader, same as the sprite loader but will add each frame to an index of Gameobject.sprite[]
- Play/Stop animation from spritesheet with a framerate handler
- Keyboard/Mouse input manager
- Better overall structure of the engine
- Collision detection
- A more organized way to separate static objects (like background) from game objects (like a player or a monster)
- Independent camera, this will allow the field to be as big as you want, only rendering the parts you need.
- Ascii sprite and spritesheet editor made for this engine (the dream)

Alpha version preview

https://jsfiddle.net/0y2tfmsv/1/

![Alt text](http://i.imgur.com/HjnvMVc.png "Preview")

Changelog:

v0.0.1 - 19/01/2016  
-Git init

v0.0.2 - 20/01/2016  
-Cells now have independent colors, you can use the css standard you like (name, hexadecimal or RGB)
