import { jsx as t, Fragment as i, jsxs as m } from "react/jsx-runtime";
import { G as u } from "../../../chunks/iconBase.js";
import { forwardRef as w, useState as p, useRef as g, useImperativeHandle as x } from "react";
import { Popover as r, Button as b } from "@mantine/core";
import '../../../assets/DropdownButton.css';function D(d) {
  return u({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }, child: [] }] })(d);
}
const y = w(function(n, a) {
  const [o, e] = p(!1), l = a || g(), c = n.className || "py-dropdown-button";
  x(l, () => ({
    open() {
      e(!0);
    },
    close() {
      e(!1);
    }
  }), []);
  const s = n.PrefixAdornment || /* @__PURE__ */ t(i, {}), f = /* @__PURE__ */ t(
    D,
    {
      className: `py-dropdown-button-arrow ${o ? "open" : ""} `
    }
  ), h = () => {
    e(!o);
  };
  return /* @__PURE__ */ t(i, { children: /* @__PURE__ */ m(
    r,
    {
      withArrow: !0,
      shadow: "md",
      position: "bottom-end",
      width: n.width,
      opened: o,
      onChange: h,
      children: [
        /* @__PURE__ */ t(r.Target, { children: /* @__PURE__ */ t(
          b,
          {
            className: c,
            disabled: n.disabled,
            fullWidth: !1,
            rightSection: f,
            leftSection: s,
            onClick: () => e(!o),
            children: /* @__PURE__ */ t("span", { children: n.title })
          }
        ) }),
        /* @__PURE__ */ t(r.Dropdown, { children: n.children })
      ]
    }
  ) });
});
export {
  y as DropdownButton
};
