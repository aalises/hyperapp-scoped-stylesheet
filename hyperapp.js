import { h } from 'hyperapp';
import decamelize from 'decamelize';
import scope from 'scope-css';

var getTag = function getTag(target) {
  if (target.__stylesheetTagName) return target.__stylesheetTagName;
  var uid = Math.random().toString(32).split(".").pop();
  return target.__stylesheetTagName = "element-" + decamelize(target.name, "-") + "-" + uid;
};

var getStylesheet = function getStylesheet(target, stylesheet) {
  if (target.__stylesheetVNode) return target.__stylesheetVNode;
  stylesheet = stylesheet.replace(/(\r\n|\n|\r)/gm, "");

  // prefix all selectors to make stylesheet 'scoped' using scope-css package
  stylesheet = scope(stylesheet, target.__stylesheetTagName);

  // save a reference of the stylesheet within the class instance
  return target.__stylesheetVNode = h("style", { scoped: true }, stylesheet);
};

var functionalStylesheet = function functionalStylesheet(styleContent) {
  return function (func) {
    var tag = getTag(func);
    var stylesheetNode = getStylesheet(func, styleContent);

    // wrap rendered vnode with a hoc
    return function (props) {
      return h(tag, null, [func(props), stylesheetNode]);
    };
  };
};

var stylesheet = function stylesheet(styles, functional) {
  return functionalStylesheet(styles)(functional);
};

export { stylesheet };
