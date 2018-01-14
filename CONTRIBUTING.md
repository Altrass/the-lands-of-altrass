# Contributing

Thank you for your interest in The Lands of Altrass and taking the time to contribute!

## Involvement in the project

We use Github as a main contact channel. We use it to report bugs, propose new features and much more.

We use fork & pull request workflow.

### Issues

We assign Github issues to the following categories:

* `bug` - bugs and problems with the code
* `enhancement` - improvements to currently existing systems and mechanics
* `feature` - proposal for a new system/mechanic

## Development

### Build setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production
yarn run build

# run unit tests
yarn run unit

#run e2e tests
yarn run e2e

# run all tests
yarn test
```

You can use npm instead, but there is no lock file for npm.

### Stack

This project uses following technologies/tools:

* React as a JS framework
* Semantic UI as a CSS framework
* Webpack as a module bundler
* Jest for unit tests
* Testcafe for e2e tests

### Folder structure

* `config/` - contains all config files.
* `src/` - folder in which the game resides.
* `e2e/` - a place for all e2e tests.
* `dist/` - folder for the bundled code (created during production task).
* `coverage/` - folder for the unit test coverage result files (created during unit testing).

### Project files

* `package.json` - basic info about project and development dependencies
* `.editorconfig` - indentation type, indentation size and other settings for consitency between editors
* `.travis.yml` - settings for Travis CI
* `tslint.json` - config for tslint
* `tsconfig.json` - config for typescript compilation
* `index.html` - html template for the game
* `src/index.tsx` - entry game file
