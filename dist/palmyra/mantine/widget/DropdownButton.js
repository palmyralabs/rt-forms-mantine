import { jsx as e, Fragment as d, jsxs as c } from "react/jsx-runtime";
import { Popover as r, Button as m } from "@mantine/core";
import { useState as f, useImperativeHandle as w } from "react";
import { M as h } from "../../../chunks/index6.js";
import '../../../assets/DropdownButton.css';function A(o) {
  const [n, t] = f(!1), i = o.className || "py-dropdown-button";
  w(o.ref, () => ({
    open() {
      t(!0);
    },
    close() {
      t(!1);
    }
  }), []);
  const a = o.PrefixAdornment || /* @__PURE__ */ e(d, {}), l = /* @__PURE__ */ e(
    h,
    {
      className: `py-dropdown-button-arrow ${n ? "open" : ""} `
    }
  ), s = () => {
    t(!n);
  };
  return /* @__PURE__ */ e(d, { children: /* @__PURE__ */ c(
    r,
    {
      withArrow: !0,
      shadow: "md",
      position: "bottom-end",
      width: o.width,
      opened: n,
      onChange: s,
      children: [
        /* @__PURE__ */ e(r.Target, { children: /* @__PURE__ */ e(
          m,
          {
            className: i,
            disabled: o.disabled,
            fullWidth: !1,
            rightSection: l,
            leftSection: a,
            onClick: () => t(!n),
            children: /* @__PURE__ */ e("span", { children: o.title })
          }
        ) }),
        /* @__PURE__ */ e(r.Dropdown, { className: "py-popover-dropdown", children: o.children })
      ]
    }
  ) });
}
export {
  A as DropdownButton
};
