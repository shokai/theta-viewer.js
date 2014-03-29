(function() {
  $(function() {
    var canvas;
    canvas = $("canvas")[0];
    window.viewer = new ThetaViewer(canvas);
    viewer.load("./R0010022.JPG", function() {
      return console.log("load");
    });
    return $("canvas").on("mousemove", function(e) {
      var i, img, pix, x, y, _i, _j, _k;
      pix = viewer.getPixel(e.offsetX, e.offsetY);
      img = viewer.context.getImageData(0, 0, viewer.width, viewer.height);
      console.log(pix.data);
      for (y = _i = 0; _i < 100; y = ++_i) {
        for (x = _j = 0; _j < 100; x = ++_j) {
          for (i = _k = 0; _k < 4; i = ++_k) {
            img.data[(x + y * canvas.width) * 4 + i] = pix.data[i];
          }
        }
      }
      return viewer.context.putImageData(img, 0, 0);
    });
  });

}).call(this);
