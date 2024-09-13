import { jsx as t, Fragment as d, jsxs as a } from "react/jsx-runtime";
import { G as m } from "../../../chunks/iconBase.js";
import { forwardRef as u, useState as p, useRef as h, useImperativeHandle as w } from "react";
import { B as x } from "../../../chunks/Button.js";
import '../../../assets/DropdownButton.css';function b(r) {
  return m({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(r);
}
const D = u(function(n, i) {
  const [o, e] = p(!1), l = i || h(), s = n.className || "py-dropdown-button";
  w(l, () => ({
    open() {
      e(!0);
    },
    close() {
      e(!1);
    }
  }), []);
  const c = n.PrefixAdornment || /* @__PURE__ */ t(d, {}), f = /* @__PURE__ */ t(
    b,
    {
      className: `py-dropdown-button-arrow ${o ? "open" : ""} `
    }
  );
  return /* @__PURE__ */ t(d, { children: /* @__PURE__ */ a("div", { className: "py-dropdown-button-container", children: [
    /* @__PURE__ */ a(
      x,
      {
        className: s,
        disabled: n.disabled,
        fullWidth: !1,
        onClick: () => e(!o),
        children: [
          c,
          /* @__PURE__ */ t("span", { children: n.title }),
          f
        ]
      }
    ),
    o && /* @__PURE__ */ t("div", { className: "py-dropdown-content", children: n.children })
  ] }) });
});
export {
  D as DropdownButton
};
