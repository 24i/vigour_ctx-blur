# ctx-blur

Applies a blur filter to a canvas

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/ctx-blur.svg?branch=master)](https://travis-ci.org/vigour-io/ctx-blur)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/ctx-blur.svg)](https://badge.fury.io/js/ctx-blur)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/ctx-blur/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/ctx-blur?branch=master)

<!-- VDOC END -->

## Usage
<!-- VDOC.jsdoc cBlur -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var transform = cBlur(options)
- **options** (*object*) - Options for blurring:

- - **radius** {*number*} - guassian blur radius
- **returns** (*function*) transform - A function that accepts a canvas and returns it blurred

<!-- VDOC END -->

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