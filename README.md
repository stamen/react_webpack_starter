# React + Webpack starter
A very simple boilerplate to kickstart a [React](https://facebook.github.io/react/) project. It uses [Webpack](http://webpack.github.io/) to bundle the app to static assets as well as provide a simple development server with hot module replacement.

## Setup
```bash
npm install
```
**Note:** If your not interested in publishing to a Github Page then remove `git-directory-deploy` from the `package.json` file.

## Develop
```bash
npm run dev
```
If all goes well you should see [this](https://stamen.github.io/react_webpack_starter).

## Build
```bash
npm run build
```

## Deploy to Github Page
Be sure you have installed `git-directory-deploy`.

1. Create a Github Page branch, `git branch gh-pages`.
2. Push the branch, `git push origin gh-pages`.
3. Deploy code to Github Page, `npm run ghpage`.
4. Go check it out at:
    * User/Organization pages: `http://{username}.github.io`
    * Project pages: `http://{username}.github.io/{repo}`
