import { jsx as c, Fragment as s } from "react/jsx-runtime";
import { useState as C } from "react";
import { G as l } from "../../../chunks/iconBase.js";
import { C as k } from "../../../chunks/Checkbox.js";
function f(e) {
  return l({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor" }, child: [] }] })(e);
}
function g(e) {
  return l({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "44", d: "M416 128 192 384l-96-96" }, child: [] }] })(e);
}
const b = (e) => {
  const a = e.value ? e.value : 0, [t, r] = C(a), o = e.checked || g, i = e.unChecked || f;
  console.log("t", a, "v", t, "p", e.value);
  const d = () => {
    r((n) => {
      switch (n) {
        case 0:
          return 1;
        case 1:
          return -1;
        case -1:
        default:
          return 0;
      }
    });
  }, h = (n) => {
    switch (t) {
      case 1:
        return /* @__PURE__ */ c(o, { color: "green", ...n });
      case -1:
        return /* @__PURE__ */ c(i, { color: "red", ...n });
      case 0:
      default:
        return null;
    }
  }, u = t === 1 ? "Pass" : t === -1 ? "Fail" : "";
  return /* @__PURE__ */ c(s, { children: /* @__PURE__ */ c(
    k,
    {
      ...e,
      icon: h,
      color: e.color || "none",
      indeterminate: t === 0,
      checked: t !== 0,
      value: t,
      onChange: e.onChange || d,
      disabled: e.disabled,
      readOnly: e.readOnly,
      label: e.checkLabel || u
    }
  ) });
};
export {
  b as TriStateCheckBox
};
