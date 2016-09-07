'use strict'

var glur = require('glur')

/**
 * @id cBlur
 * @function cBlur
 * @param options {object} - Options for blurring:
 * - - **radius** {*number*} - guassian blur radius
 * @returns transform {function} - A function that accepts a canvas and returns it blurred
 */
module.exports = exports = function cBlur (options) {
  if (!options) {
    options = {}
  }
  console.log('options', options)
  return function transform (canvas, cb) {
    const width = canvas.width
    const height = canvas.height
    var ctx = canvas.getContext('2d')
    var imageData = ctx.getImageData(0, 0, width, height)
    glur(imageData.data, width, height, parseInt(options.radius, 10) || 2)
    ctx.putImageData(imageData, 0, 0)
    cb(null, canvas)
  }
}
