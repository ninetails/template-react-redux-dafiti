# Template for React Projects

> with Redux and using some defaults for Dafiti

## Template usage

To use this template you can run:

```sh
$ npx degit ninetails/template-react-redux-dafiti myproject
$ cd myproject
$ cp .env.example .env
```

Then here a checklist with minimal changes you need to make:

- on this **README** file:
  - [ ] remove _this section_
  - [ ] remove/change [License](#license) section if needed
- [ ] update [CONTRIBUTING.md](./CONTRIBUTING.md)
- [ ] remove/change **LICENSE** file, if needed
- [ ] **package.json** - change package name & version (if your project follows [Semantic Versioning](https://semver.org/))
- and `create-react-app` related changes (replacing static files on **public/**, editing site title and manifest...)

---

## Installation

After cloning this project, run the following commands:

```sh
$ npm install
```

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run reset`

Removes generated files for a cleaner local repository.

#### `npm run reset`

Run **clean** and then install.

### Learn More

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## FAQ

### Some files are not appearing on my VS Code

You can manage what files can be shown on your editor by editing `.vscode/settings.json` and use [this extension](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) to toggle visible files.

![Toggle Excluded Files](https://raw.githubusercontent.com/eamodio/vscode-toggle-excluded-files/master/images/preview.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

For more information, please read [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](./LICENSE) file for details.

And unofficial licensed under [Beerware](https://spdx.org/licenses/Beerware.html):

> As long as you retain this notice you can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.
