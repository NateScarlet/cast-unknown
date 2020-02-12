
.PHONY: build test

build: dist

test:
	npm run test
	TEST_WITHOUT_MOMENT=1 npm run test

dist: src/* webpack.common.js webpack.prod.js
	rm -rf dist
	npm run build
