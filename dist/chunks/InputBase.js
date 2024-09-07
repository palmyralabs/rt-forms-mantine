import { jsx as r } from "react/jsx-runtime";
import "react";
import { p as c, I as s } from "./Input.js";
import { u as i } from "./use-input-props.js";
const u = {
  __staticSelector: "InputBase",
  withAria: !0
}, p = c((t, e) => {
  const { inputProps: a, wrapperProps: o, ...n } = i("InputBase", u, t);
  return /* @__PURE__ */ r(s.Wrapper, { ...o, children: /* @__PURE__ */ r(s, { ...a, ...n, ref: e }) });
});
p.classes = { ...s.classes, ...s.Wrapper.classes };
p.displayName = "@mantine/core/InputBase";
export {
  p as I
};
