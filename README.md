This HOF allows you to easily style Hyperapp views/components by adding styles / a scoped stylesheet that applies to that view only and its descendants.

Basically it allows to use scoped css styling like Angular or [Vue does by adding a scoped stylesheet](https://vue-loader.vuejs.org/en/features/scoped-css.html)


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
export default stylesheet(`

h1 {
  font-size: calc(20px + 2vmin);
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
}

.main-text{
  text-align: center;
  margin-top: 0;
}

`
, () =>
<div>
  <h1>Minimal Stylesheet Example</h1>
  <p class="main-text">I am a scoped-styled indeed</p>
  <hr />
</div>
)
```

The function supports all CSS features defined here: https://www.npmjs.com/package/scope-css
