# ThetaViewer.js
Animate multiple-Photos taken by [Ricoh THETA](https://theta360.com/en/)

## Demo

- [Demo](http://shokai.github.io/theta-viewer.js)
- [index.html](https://github.com/shokai/theta-viewer.js/blob/master/index.html)


## Download

- [theta-viewer.js](https://raw.github.com/shokai/theta-viewer.js/master/theta-viewer.js)
- [theta-viewer.min.js](https://raw.github.com/shokai/theta-viewer.js/master/theta-viewer.min.js)


## Dependencies

- WebGL supported browser (Chrome or Firefox)
  - WebGL does not work on Safari now
- [Three.js](https://github.com/mrdoob/three.js)
- [async.js](https://github.com/caolan/async)


## Usage

load javascripts
```html
<script src="./lib/async.js"></script>
<script src="./lib/three.js"></script>
<script src="./lib/OrbitControls.js"></script>
<script src="./lib/theta-viewer.js"></script>
```

```html
<body>
  <div id="viewer" style="width: 100%; height: 100%;"></div>
</body>
```

```javascript
var viewer = new ThetaViewer( document.getElementById("viewer") );
viewer.images = ["01.jpg", "02.jpg", "03.jpg"];
viewer.interval = 200; // msec
viewer.autoRotate = true;
viewer.load();
```

## Build JS

`src/theta-viewer.coffee` -> `lib/theta-viewer.js`

    % npm install
    % grunt
