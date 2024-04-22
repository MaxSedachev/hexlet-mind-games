install:
	npm ci

brain-progression:
	node bin/brain-progression.js

brain-gcd:
	node bin/brain-gcd.js

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint
