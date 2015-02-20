src = lib/theta-viewer.js
dest = theta-viewer.js
dest_min = theta-viewer.min.js
header = HEADER.txt

build:
	./node_modules/.bin/grunt build
	cat $(header) $(src) > $(dest)
	cat $(header) > $(dest_min)
	./node_modules/.bin/uglifyjs $(src) >> $(dest_min)
