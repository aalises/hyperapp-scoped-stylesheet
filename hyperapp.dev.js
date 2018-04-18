import { h } from "hyperapp";
import decamelize from "decamelize";
import scope from "scope-css";

const getTag = target => {
  if(target.__stylesheetTagName) return target.__stylesheetTagName;
  const uid = Math.random().toString(32).split(".").pop();
  return target.__stylesheetTagName = `element-${decamelize(target.name, "-")}-${uid}`;
}

const getStylesheet = (target, stylesheet) => {
  if(target.__stylesheetVNode) return target.__stylesheetVNode;
  stylesheet = stylesheet.replace(/(\r\n|\n|\r)/gm, "");

  // prefix all selectors to make stylesheet 'scoped' using scope-css package
  stylesheet = scope(stylesheet, target.__stylesheetTagName);

  // save a reference of the stylesheet within the class instance
  return target.__stylesheetVNode = h("style", { scoped: true }, stylesheet);
}

const functionalStylesheet = styleContent => func => {
  const tag = getTag(func);
  const stylesheetNode = getStylesheet(func, styleContent);

  // wrap rendered vnode with a hoc
  return props => h(tag, null, [ func(props), stylesheetNode ]);
};

export const stylesheet = (styles, functional) => functionalStylesheet(styles)(functional);
