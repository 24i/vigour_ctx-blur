# ctx-blur

Applies a blur filter to a canvas

<!-- VDOC.badges travis; standard; npm; coveralls -->

## Usage
<!-- VDOC.jsdoc cBlur -->

## Examples

#### javascript (browser)
```javascript
const cBlur = require('ctx-blur')

var canvas = document.getElementById('aCanvas')

cBlur({ sigma: 2, radius: 2 })(canvas, function (err, newCanvas) {
  ...
})
```

#### Node.js
```javascript
const cBlur = require('ctx-blur')

var Canvas = require('canvas')
var canvas = new Canvas()

cIdentity({ sigma: 2, radius: 2 })(canvas, function (err, newCanvas) {
  ...
})
```