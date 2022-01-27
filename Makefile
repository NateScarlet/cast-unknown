
.PHONY: build test

build: dist

test:
	npm run test
	TEST_WITHOUT_MOMENT=1 npm run test

dist: src/* rollup.config.js
	npm run clean
	npm run build
