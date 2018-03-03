demo application for React Suspense and Redux

## Install

First, build Suspense working branch and yarn link.

```
git clone https://github.com/acdlite/react.git --depth 1 --branch suspenes
cd suspense
yarn build # This takes some minutes.
cd build/node_modules/react
yarn link
cd ../react-dom
yarn link
```

And clone this project.

```
git clone https://github.com/KentoMoriwaki/react-redux-suspense.git
cd react-redux-suspense
yarn link react
yarn link react-dom
yarn install
```

Finally, you can start this demo.

```
yarn start
```
