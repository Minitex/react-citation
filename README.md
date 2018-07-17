# react-citation

Takes a blob of JSON, produces a citation metadata viewer 

## Demo & Examples

Live demo: [umnlibraries.github.io/react-citation/](https://umnlibraries.github.io/react-citation/)

To build the examples locally, run:

```
npm install git:+git@github.com:UMNLibraries/react-citation.git --save
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

Include react-citation as part of your package.json dependency list:

```
...
  "dependencies": {
    "react": "^15.4.1",
    "react-citation": "git+https://github.com/UMNLibraries/react-citation.git#51682c87e55bd",
    "react-dom": "^15.4.1"
  },
...
```
See the [react-citation-demo](https://github.com/UMNLibraries/react-citation-demo) for an example of how to do this.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

University of Minnesota (MIT Pending)

