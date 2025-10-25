import { jsx as n, Fragment as s } from "react/jsx-runtime";
import { useState as u } from "react";
import { R as k } from "../../../chunks/index4.js";
import { G as m } from "../../../chunks/iconBase.js";
import { Checkbox as C } from "@mantine/core";
function f(e) {
  return m({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "44", d: "M416 128 192 384l-96-96" }, child: [] }] })(e);
}
const S = (e) => {
  const a = e.value ? e.value : 0, [t, r] = u(a), o = e.checked || f, l = e.unChecked || k, i = () => {
    r((c) => {
      switch (c) {
        case 0:
          return 1;
        case 1:
          return -1;
        case -1:
        default:
          return 0;
      }
    });
  }, h = (c) => {
    switch (t) {
      case 1:
        return /* @__PURE__ */ n(o, { color: "green", ...c });
      case -1:
        return /* @__PURE__ */ n(l, { color: "red", ...c });
      case 0:
      default:
        return null;
    }
  }, d = t === 1 ? "Pass" : t === -1 ? "Fail" : "";
  return /* @__PURE__ */ n(s, { children: /* @__PURE__ */ n(
    C,
    {
      ...e,
      icon: h,
      color: e.color || "none",
      indeterminate: t === 0,
      checked: t !== 0,
      value: t,
      onChange: e.onChange || i,
      disabled: e.disabled,
      readOnly: e.readOnly,
      label: e.checkLabel || d
    }
  ) });
};
export {
  S as TriStateCheckBox
};
