'use strict'

function makeArray (nElements, defaultValue) {
  // waiting for chrome to implement optional args from es6
  if (defaultValue === undefined) { defaultValue = '' }
  return Array(nElements).fill(defaultValue)
}

function GridFactory (width, height, defaultValue) {
  function makeGrid (value) {
    if (value === undefined) { value = defaultValue }
    var grid = makeArray(height).map(() => {
      return makeArray(width, value)
    })
    return grid
  }

  return makeGrid
}

function Layer (width, height, gridValues) {
  var _gridValues = {
    display: 'x',
    color: 'black',
    collider: '1'
  }
  Object.assign(_gridValues, gridValues)
  var makeGrid = GridFactory(width, height)
  var layer = {
    grids: {
      display: makeGrid(_gridValues.display),
      color: makeGrid(_gridValues.color),
      collider: makeGrid(_gridValues.collider)
    }
  }
  return layer
}

var domController = (function () {
  var allCanvas = document.getElementsByClassName('asciid')

  function render (layer, canvasId) {
    if (allCanvas[canvasId] === undefined) {
      console.log('canvas "' + canvasId + '" was not found')
    } else {
      var canvasElement = allCanvas[canvasId]
    // TODO : render to html
    }
  }

  return {
    draw: (layer, canvasId) => {
      render(layer, canvasId)
    }
  }
}())

function Component (name, canvasId) {
  if (canvasId === undefined) { canvasId = 0; }

  var allLayers = []

  function rasterize () {
    if (allLayers.toString === '') {
      console.log('no layers found in component ' + name)
    } else {
      // TODO : rasterize layers for display
    }
  }

  return {
    newLayer: (width, height, gridValues) => {
      allLayers.push(Layer(width, height, gridValues))
    },
    draw: () => {
      var rasterizedLayer = rasterize(allLayers)
      domController.draw(rasterizedLayer, canvasId)
    }
  }
}

var player = Component('player')

console.log(player)
