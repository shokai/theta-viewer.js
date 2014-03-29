class ThetaViewer
  constructor: (jQueryPath) ->
    @dom = $(jQueryPath)
    @__defineGetter__ 'width', ->
      return @dom.width()
    @__defineGetter__ 'height', ->
      return @dom.height()
    
  load: (@imgPath, callback) ->
    mapping = new THREE.UVMapping
    texture = THREE.ImageUtils.loadTexture @imgPath, mapping, =>
      camera = new THREE.PerspectiveCamera 100, @width/@height, 1, 10000
      camera.position.set 0, 0, 180

      scene = new THREE.Scene

      sg = new THREE.SphereGeometry 500, 60, 40
      mbm = new THREE.MeshBasicMaterial(map: texture)
      mesh = new THREE.Mesh sg, mbm
      mesh.scale.x = -1
      scene.add mesh

      renderer = new THREE.WebGLRenderer
      renderer.setSize @width, @height
      @dom[0].appendChild renderer.domElement
      renderer.render scene, camera

      controls = new THREE.OrbitControls camera
      controls.addEventListener 'change', ->
        renderer.render scene, camera

      callback @

if module?.exports?
  module.exports = ThetaViewer
else
  window.ThetaViewer = ThetaViewer
