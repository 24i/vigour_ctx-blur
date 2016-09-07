'use strict'

const test = require('tape')
const cBlur = require('../')

test('ctx-blur', function (t) {
  var Canvas = require('canvas')
  var canvas = new Canvas(200, 200)

  cBlur({ radius: 2 })(canvas, function (err, newCanvas) {
    if (err) {
      t.fail(err)
    }
    t.ok(newCanvas, 'No errors')
    t.end()
  })
})
