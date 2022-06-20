# Node exercises

[![TypeScript version][ts-badge]][typescript-4-7]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

Some different use cases solved using NodeJS with Typescript.

## Built With

- [TypeScript][typescript] [4.7][typescript-4-7]
- [Jest][jest]

## Getting Started

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running `npm i`.  
Build project with `npm run build`.  
Run tests with `npm test`.  

## Some available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[gha-badge]: https://github.com/raparicio6/node-exercises/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/raparicio6/node-exercises/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[jest]: https://facebook.github.io/jest/
[gh-actions]: https://github.com/features/actions
