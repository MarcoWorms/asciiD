'use strict'

function make_layer_generator(width, heigth) {
  return function(default_char) {
    let layer = [];
    for (let i = 0; i < height; i += 1) {
      let layer_rows = [];
      for (let k = 0; k < width; k += 1) {
        layer_rows.push(default_char);
      }
      layer.push(layer_rows);
    }
    return layer;
  }
}

var asciiD = {}

asciiD.dom_interface = (function(){

  var ascii_canvas = null

  function inject(div_id){
    let canvas_parent = document.getElementById(div_id);
    canvas_parent.innerHTML = '<p class="ascii-canvas"></p>';
    ascii_canvas = document.getElementById('ascii-canvas');
  }

  return {
    inject_canvas: (div_id) => {
      inject(div_id)
    },
    draw_canvas: (final_grid) => {

    }
  }

}())


asciiD.create_canvas = (div_id, width, height) => {

  asciiD.dom_interface.inject_canvas(div_id)

  var generate_layer = make_layer_generator(width, height)  
  var background_grid = {
    display: generate_layer('x'),
    color: generate_layer('white')
  }

  function loop() {

  }

  return {

  }
}





