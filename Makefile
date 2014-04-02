src = lib/theta-viewer.js
dest = theta-viewer.js
dest_min = theta-viewer.min.js
header = HEADER.txt

build:
	cat $(header) $(src) > $(dest)
	cat $(header) > $(dest_min)
	uglifyjs $(src) >> $(dest_min)
