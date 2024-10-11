// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeStyle.relativecolor
// Description:Relative color works as color input
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Relative color works as color input");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.strokeStyle = "rgb(from red g r b)";
  _assertSame(ctx.strokeStyle, 'color(srgb 0 1 0)', "ctx.strokeStyle", "'color(srgb 0 1 0)'");
  ctx.strokeStyle = "color(from color(srgb 0.25 0.5 0.75 / 0.5) srgb r g b / alpha)";
  _assertSame(ctx.strokeStyle, 'color(srgb 0.25 0.5 0.75 / 0.5)', "ctx.strokeStyle", "'color(srgb 0.25 0.5 0.75 / 0.5)'");
  t.done();
});
done();