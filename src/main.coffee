$ ->
  canvas = $("canvas")[0]
  window.viewer = new ThetaViewer(canvas)
  viewer.load "./R0010022.JPG", ->
    console.log "load"

  $("canvas").on "mousemove", (e) ->
    pix = viewer.getPixel(e.offsetX, e.offsetY)
    img = viewer.context.getImageData(0, 0, viewer.width, viewer.height)
    console.log pix.data
    for y in [0...100]
      for x in [0...100]
        for i in [0...4]
          img.data[(x+y*canvas.width)*4+i] = pix.data[i]
    viewer.context.putImageData img, 0, 0
  
  
