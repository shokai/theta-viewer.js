class ThetaViewer
  constructor: (@canvas) ->
    @context = @canvas.getContext('2d')

    @__defineGetter__ 'width', ->
      return @canvas.width
    @__defineGetter__ 'height', ->
      return @canvas.height
    
  load: (@imgPath, callback) ->
    @img = new Image
    @img.onload = =>
      @context.drawImage @img, 0, 0, 640, 480
      callback(@)
      
    @img.src = @imgPath

  getPixel: (x,y) ->
    return @context.getImageData(x,y,1,1)
    

if module?.exports?
  module.exports = ThetaViewer
else
  window.ThetaViewer = ThetaViewer
