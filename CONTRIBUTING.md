# Contributing to Project Name

> **Please, read and update this file.**

> I only filled **Stack** & **Tooling**. Follow [this good guide](http://mozillascience.github.io/working-open-workshop/contributing/) when editing this file. Also it is highly recommended that you review this entire file.

<details>
<summary><strong>Table of Contents</strong></summary>
<!-- TOC depthFrom:2 -->

- [Code of Conduct](#code-of-conduct)
- [This Repository Technologies](#this-repository-technologies)
  - [Current Stack](#current-stack)
  - [Tooling, Conventions & devDependencies](#tooling-conventions--devdependencies)
  - [Some Design Changes](#some-design-changes)
    - [Lint rules](#lint-rules)
      - [Prettier's `arrowParens` & ESLint's `arrow-parens`](#prettiers-arrowparens--eslints-arrow-parens)
      - [Prettier's `jsxSingleQuote` & ESLint's `jsx-quotes`](#prettiers-jsxsinglequote--eslints-jsx-quotes)
      - [ESLint's `import/*`](#eslints-import)
      - [Why running both Prettier & ESLint for JS files?](#why-running-both-prettier--eslint-for-js-files)
- [How Can I Contribute?](#how-can-i-contribute)

<!-- /TOC -->
</details>

## Code of Conduct

> This project and everyone participating in it is governed by the [Contributor Covenant v2](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code.

## This Repository Technologies

> Update here when installing new things

### Current Stack

- [React](https://reactjs.org/)
  - [React Router](https://reacttraining.com/react-router/)
  - [Redux](https://redux.js.org/)
    - [React Redux](https://react-redux.js.org/)
    - [Redux Thunk](https://github.com/reduxjs/redux-thunk)
  - [Styled Components](https://styled-components.com/)
  - [React Query](https://github.com/tannerlinsley/react-query) (?)

### Tooling, Conventions & devDependencies

- [EditorConfig](https://editorconfig.org/)
- [Contributor Covenant](https://www.contributor-covenant.org/)
- ~~[Semantic Versioning](https://semver.org/)~~ (but you can use in your project)
- [Conventional Commits](https://www.conventionalcommits.org/)
  - [git-cz](http://commitizen.github.io/cz-cli/) (optional, not added as dependency)
- [Visual Studio Code](https://code.visualstudio.com/) (optional)
  - [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [git flow](https://danielkummer.github.io/git-flow-cheatsheet/) (optional, not used as is in this template)
  - [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh) (optional, not used as is in this template)
- [create-react-app](https://create-react-app.dev/)
- [Jest](https://jestjs.io/) (already in _CRA_)
  - [Testing Library](https://testing-library.com/) (already in _CRA_)
    - [@testing-library/react](https://testing-library.com/react)
    - [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom)
    - [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event)
  - [jest-extended](https://github.com/jest-community/jest-extended)
  - [jest-chain](https://github.com/mattphillips/jest-chain)
  - [html-validate/jest](https://html-validate.org/frameworks/jest.html)
- [JavaScript Standard Style](https://standardjs.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
  - [eslint-config-standard](https://github.com/standard/eslint-config-standard)
  - [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
  - [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
  - [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
- [Husky](https://github.com/typicode/husky)
  - [commitlint](https://commitlint.js.org/)
  - [lint-staged](https://github.com/okonet/lint-staged)

### Some Design Changes

I took some liberty and made some opinionated decisions. Feel free to undo them.

#### Lint rules

...that I've changed/added to ESLint & Prettier.

But before that, I needed to install ESLint to this project because we don't have direct access to linter (ESLint) inside _react-scripts_ package.

##### Prettier's `arrowParens` & ESLint's `arrow-parens`

As it is not really needed in Standard like semicolon, here it will be set to use only when needed.

##### Prettier's `jsxSingleQuote` & ESLint's `jsx-quotes`

Here is really a personal change that we were used to put **double quotes** in HTML attributes.

##### ESLint's `import/*`

I've added 3, also personal: _extensions_, _newline-after-import_ and _order_.

For the middle one, it's for readability. Also for the last.

Importing order can help sometimes if we group them in a mental grouping like:

> React should come first, then things related to styled-components.... then at end, files near that one I'm editing...

I'm ensuring to add extensions for local files because it was one of Ryan Dahl's regets about Node and we shouldn't rely on Webpack resolving paths because we can change the order of extension resolution.

##### Why running both Prettier & ESLint for JS files?

Prettier can manage to redesign vertical spacing but due to it development, it lacks of some rules and integrations that only ESLint have.

## How Can I Contribute?

> Please follow example to change here.
