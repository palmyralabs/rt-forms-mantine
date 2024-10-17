import { jsx as t, Fragment as i, jsxs as m } from "react/jsx-runtime";
import { G as u } from "../../../chunks/iconBase.js";
import { forwardRef as h, useState as p, useRef as w, useImperativeHandle as g } from "react";
import { Popover as e, Button as x } from "@mantine/core";
import '../../../assets/DropdownButton.css';function b(r) {
  return u({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(r);
}
const S = h(function(o, a) {
  const [d, n] = p(!1), l = a || w(), c = o.className || "py-dropdown-button";
  g(l, () => ({
    open() {
      n(!0);
    },
    close() {
      n(!1);
    }
  }), []);
  const s = o.PrefixAdornment || /* @__PURE__ */ t(i, {}), f = /* @__PURE__ */ t(
    b,
    {
      className: `py-dropdown-button-arrow ${d ? "open" : ""} `
    }
  );
  return /* @__PURE__ */ t(i, { children: /* @__PURE__ */ m(e, { withArrow: !0, shadow: "md", position: "bottom-end", children: [
    /* @__PURE__ */ t(e.Target, { children: /* @__PURE__ */ t(
      x,
      {
        className: c,
        disabled: o.disabled,
        fullWidth: !1,
        rightSection: f,
        leftSection: s,
        onClick: () => n(!d),
        children: /* @__PURE__ */ t("span", { children: o.title })
      }
    ) }),
    /* @__PURE__ */ t(e.Dropdown, { children: o.children })
  ] }) });
});
export {
  S as DropdownButton
};
