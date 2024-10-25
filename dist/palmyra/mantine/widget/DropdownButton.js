import { jsx as t, Fragment as i, jsxs as m } from "react/jsx-runtime";
import { G as w } from "../../../chunks/iconBase.js";
import { forwardRef as p, useState as g, useRef as x, useImperativeHandle as D } from "react";
import { Popover as r, Button as b } from "@mantine/core";
import '../../../assets/DropdownButton.css';function v(d) {
  return w({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(d);
}
const C = p(function(e, a) {
  const [o, n] = g(!1), l = a || x(), c = e.className || "py-dropdown-button";
  D(l, () => ({
    open() {
      n(!0);
    },
    close() {
      n(!1);
    }
  }), []);
  const s = e.PrefixAdornment || /* @__PURE__ */ t(i, {}), f = /* @__PURE__ */ t(
    v,
    {
      className: `py-dropdown-button-arrow ${o ? "open" : ""} `
    }
  ), h = (u) => {
    u.preventDefault(), n(!1);
  };
  return /* @__PURE__ */ t(i, { children: /* @__PURE__ */ m(
    r,
    {
      withArrow: !0,
      shadow: "md",
      position: "bottom-end",
      width: e.width,
      opened: o,
      onChange: h,
      children: [
        /* @__PURE__ */ t(r.Target, { children: /* @__PURE__ */ t(
          b,
          {
            className: c,
            disabled: e.disabled,
            fullWidth: !1,
            rightSection: f,
            leftSection: s,
            onClick: () => n(!o),
            children: /* @__PURE__ */ t("span", { children: e.title })
          }
        ) }),
        /* @__PURE__ */ t(r.Dropdown, { children: e.children })
      ]
    }
  ) });
});
export {
  C as DropdownButton
};
