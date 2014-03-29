(function() {
  var ThetaViewer;

  ThetaViewer = (function() {
    function ThetaViewer(jQueryPath) {
      this.dom = $(jQueryPath);
      this.__defineGetter__('width', function() {
        return this.dom.width();
      });
      this.__defineGetter__('height', function() {
        return this.dom.height();
      });
    }

    ThetaViewer.prototype.load = function(imgPath, callback) {
      var mapping, texture;
      this.imgPath = imgPath;
      mapping = new THREE.UVMapping;
      return texture = THREE.ImageUtils.loadTexture(this.imgPath, mapping, (function(_this) {
        return function() {
          var camera, controls, mbm, mesh, renderer, scene, sg;
          camera = new THREE.PerspectiveCamera(100, _this.width / _this.height);
          camera.position.set(0, 0, 180);
          scene = new THREE.Scene;
          sg = new THREE.SphereGeometry(300, 100, 100);
          mbm = new THREE.MeshBasicMaterial({
            map: texture
          });
          mesh = new THREE.Mesh(sg, mbm);
          mesh.scale.x = -1;
          scene.add(mesh);
          renderer = new THREE.WebGLRenderer;
          renderer.setSize(_this.width, _this.height);
          _this.dom[0].appendChild(renderer.domElement);
          renderer.render(scene, camera);
          controls = new THREE.OrbitControls(camera);
          controls.addEventListener('change', function() {
            return renderer.render(scene, camera);
          });
          return callback(_this);
        };
      })(this));
    };

    return ThetaViewer;

  })();

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = ThetaViewer;
  } else {
    window.ThetaViewer = ThetaViewer;
  }

}).call(this);
