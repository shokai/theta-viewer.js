$ ->
  window.viewer = new ThetaViewer("#viewer")
  viewer.load "./R0010022.JPG", ->
    console.log "load!!"
