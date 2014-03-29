(function() {
  $(function() {
    window.viewer = new ThetaViewer("#viewer");
    return viewer.load("./R0010022.JPG", function() {
      return console.log("load!!");
    });
  });

}).call(this);
