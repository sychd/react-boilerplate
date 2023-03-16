# React boilerplate

React boilerplate based on `Webpack 5`
- Linting & formatting tools
- Commit hooks
- TypeScript
- Prod/Dev webpack split configuration


## Development

1. Install [NVM](https://github.com/nvm-sh/nvm), enter the project's folder.
2. `nvm use` (you may need to run `nvm install <VERSION>` before that)
3. `npm install`
4. Create [env files](#environment-files)

To run the project, use `npm start`.

### Enable Auto-linting for your workspace
Project uses Prettier, ESLint, Stylelint tools. Please, set up your workspace to use this tools.

#### Intellij WebStorm

- Go to `Settings > Languages & Frameworks > JavaScript > Prettier`, select Prettier from project's `node_modules`, enable checkbox "Format on save", change the pattern to `{**/*,*}.{js,ts,jsx,tsx,scss}` (add `scss`)
- Go to `Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`, enable checkbox "Automatic ESLint Configuration"
- Go to `Settings > Languages & Frameworks > Style Sheet > Stylelint`, change pattern to `{**/*,*}.{css,scss}`, enable on save

### Environment files

Take `.env.sample` file and create similar `.env.dev` and `.env.prod` with filled variables.
Variables from `.env.*` files are also available in React code.

### Commit message linting

Project uses [Commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint), so commit messages should follow the rule: `type(scope?): subject`

## Guidelines
To be done.

## Sources

Initialize React + Webpack + TypeScript:
- https://webpack.js.org/guides/typescript/
- https://jsramblings.com/creating-a-react-app-with-webpack/
- https://jsramblings.com/create-a-react-and-typescript-app-with-webpack/

Add ESLint and Prettier:
- https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1
- https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md#configuration
- https://www.robinwieruch.de/webpack-eslint/
- https://www.robinwieruch.de/prettier-eslint/
- https://stackoverflow.com/questions/54543063/how-can-i-suppress-the-no-files-matching-the-pattern-message-in-eslint

Add SCSS, PostCSS:
- https://habr.com/post/701724/
- https://webpack.js.org/plugins/stylelint-webpack-plugin/
- https://github.com/jakoblind/webpack-autoconf/issues/42
- https://www.npmjs.com/package/stylelint-scss
- https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html#ws_stylelint_custom_syntax

Webpack Bundle Analyzer:
- https://www.npmjs.com/package/webpack-bundle-analyzer

Add images and fonts:
- https://blog.logrocket.com/how-to-use-svgs-react/
- https://webpack.js.org/guides/typescript/#importing-other-assets
- https://www.carlrippon.com/using-images-react-typescript-with-webpack5/

Divide webpack into development and production:
- https://blog.devgenius.io/how-to-divide-webpack-into-development-and-production-8d1027b03666
- https://www.npmjs.com/package/dotenv-webpack