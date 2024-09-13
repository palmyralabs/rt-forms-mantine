import { jsx as s } from "react/jsx-runtime";
import "react";
import { p as i } from "./polymorphic-factory.js";
import { I as r } from "./Input.js";
import { u as c } from "./use-input-props.js";
const m = {
  __staticSelector: "InputBase",
  withAria: !0
}, p = i((t, o) => {
  const { inputProps: e, wrapperProps: a, ...n } = c("InputBase", m, t);
  return /* @__PURE__ */ s(r.Wrapper, { ...a, children: /* @__PURE__ */ s(r, { ...e, ...n, ref: o }) });
});
p.classes = { ...r.classes, ...r.Wrapper.classes };
p.displayName = "@mantine/core/InputBase";
export {
  p as I
};
