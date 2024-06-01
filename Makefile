install:
	npm ci

publish:
	npm publish --dry-run

gendiff: 
	node .\bin\gendiff.js

make lint:
	npx eslint .

test:
	npm test

make test-coverage:
	npm run coverage