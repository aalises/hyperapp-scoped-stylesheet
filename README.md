This HOF allows you to easily style Hyperapp views/components by adding styles / a scoped stylesheet that applies to that view only and its descendants.

Basically it allows to use scoped css styling like Angular or [Vue does by adding a scoped stylesheet](https://vue-loader.vuejs.org/en/features/scoped-css.html)

### Demo
[![Edit 7yk0kyy0jq](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/7yk0kyy0jq)

### Getting started

install `npm install hyperapp-scoped-stylesheet --save`

### Usage:

1. Import the library
```javascript
import { stylesheet } from "hyperapp-scoped-stylesheet"
```

2. Define a string with raw CSS content
```javascript
const style = `
  span { 
    font-size: 20px; 
    color: lightblue; 
  }
`
```

The library consists of a single function that wraps a Hyperapp view/component function, the first parameter is the **raw CSS string** and the second one is the JSX function defining the Vnodes. The signature is:

```javascript
stylesheet(style, props => <span>something</span> ...)
```

3. Wrap your Hyperapp view/component function as the second parameter (the first one is the raw content string), an example:


```javascript
const style = `
  .test-style {
    color: #8651bb;
    font-weight: bold;
  }

  p {
    text-align: center;
  }
`
//First argument is the style string, second is the component function
const ScopeStyled = stylesheet(style, () => (
  <div class="test-style"> This is scope-styled yay! </div>
  <p> And this as well </p>
));

const view = () => (
  <div>
    <ScopeStyled />
  </div>
);

```

The function supports all CSS features defined here: https://www.npmjs.com/package/scope-css 
This project has been inspired by: https://github.com/k1r0s/preact-stylesheet-decorator
