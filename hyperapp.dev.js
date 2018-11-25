import { h } from "hyperapp";
import scope from "scope-css";

const getRandomTag = () => "element-" + Math.random().toString(32).split(".").pop();

const getStylesheet = (tag, str) => {


  const clearStr = str.replace(/(\r\n|\n|\r)/gm, "");

  // prefix all selectors to make stylesheet 'scoped' using scope-css package
  const scopedStylesheet = scope(clearStr, tag);

  return h("style", { scoped: true }, scopedStylesheet);
}

const functionalStylesheet = style => func => (...args) => {
  if(typeof style === "function") style = style(...args);
  const tag = getRandomTag();
  const stylesheetNode = getStylesheet(tag, style);
  return h(tag, null, [ func(...args), stylesheetNode ]);
};

export const stylesheet = (styles, functional) => functionalStylesheet(styles)(functional);
