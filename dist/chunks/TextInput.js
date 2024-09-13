import { jsx as r } from "react/jsx-runtime";
import "react";
import { f as n, u as a } from "./factory.js";
import { I as t } from "./InputBase.js";
const c = {}, s = n((o, e) => {
  const p = a("TextInput", c, o);
  return /* @__PURE__ */ r(t, { component: "input", ref: e, ...p, __staticSelector: "TextInput" });
});
s.classes = t.classes;
s.displayName = "@mantine/core/TextInput";
export {
  s as T
};
