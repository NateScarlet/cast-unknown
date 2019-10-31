
.PHONY: build test

build: dist

test:
	npm run test

dist: src/* webpack.common.config.js webpack.config.js
	rm -rf dist
	npm run build
