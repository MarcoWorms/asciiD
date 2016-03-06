// Nothing here is either final or considered correct.

'use strict'

var asciiD = {}

asciiD.make_grid_generator = (width, heigth) => {
  return function(default_char) {
    let grid = [];
    for (let i = 0; i < height; i += 1) {
      let grid_rows = [];
      for (let k = 0; k < width; k += 1) {
        grid_rows.push(default_char);
      }
      grid.push(grid_rows);
    }
    return grid;
  }
}

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
    draw_canvas: (final_layer) => {

    }
  }

}())


asciiD.create_canvas = (div_id, width, height) => {

  asciiD.dom_interface.inject_canvas(div_id)

  var generate_grid = asciiD.make_grid_generator(width, height)  

  var background_layer = {
    display: generate_grid('x'),
    color: generate_grid('white')
  }

  var all_layers = {
    0: background_layer
  }

  return {

  }
}





