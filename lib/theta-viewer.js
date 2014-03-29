(function() {
  var ThetaViewer;

  ThetaViewer = (function() {
    function ThetaViewer(canvas) {
      this.canvas = canvas;
      this.context = this.canvas.getContext('2d');
      this.__defineGetter__('width', function() {
        return this.canvas.width;
      });
      this.__defineGetter__('height', function() {
        return this.canvas.height;
      });
    }

    ThetaViewer.prototype.load = function(imgPath, callback) {
      this.imgPath = imgPath;
      this.img = new Image;
      this.img.onload = (function(_this) {
        return function() {
          _this.context.drawImage(_this.img, 0, 0, 640, 480);
          return callback(_this);
        };
      })(this);
      return this.img.src = this.imgPath;
    };

    ThetaViewer.prototype.getPixel = function(x, y) {
      return this.context.getImageData(x, y, 1, 1);
    };

    return ThetaViewer;

  })();

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = ThetaViewer;
  } else {
    window.ThetaViewer = ThetaViewer;
  }

}).call(this);
