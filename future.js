'use strict'

function makeArray (nElements, defaultValue) {
  // waiting for chrome to implement optional args from es6
  if (defaultValue === undefined) { defaultValue = '' }
  return Array(nElements).fill(defaultValue)
}

function GridFactory (width, height, defaultValue) {
  return (value) => {
    if (value === undefined) { value = defaultValue }
    var grid = makeArray(height).map(() => {
      return makeArray(width, value)
    })
    return grid
  }
}

function Layer (width, height, props) {
  var defaultProps = {
    display: '',
    color: 'black',
    collider: '1'
  }
  Object.assign(defaultProps, props)
  var Grid = GridFactory(width, height)
  return {
    grids: {
      display: Grid(defaultProps.display),
      color: Grid(defaultProps.color),
      collider: Grid(defaultProps.collider)
    }
  }
}

function Component (canvasId, width, height) {
  var layers = []
  return {
    createLayer: () => {
      layers.push(Layer(width, height))
    }
  }
}

var component = Component(10, 10)

console.log(container)
