import { jsx as o, Fragment as d, jsxs as f } from "react/jsx-runtime";
import { Popover as r, Button as p } from "@mantine/core";
import { forwardRef as u, useState as w, useRef as h, useImperativeHandle as b } from "react";
import { M as x } from "../../../chunks/index5.js";
import '../../../assets/DropdownButton.css';const S = u(function(e, i) {
  const [n, t] = w(!1), s = i || h(null), l = e.className || "py-dropdown-button";
  b(s, () => ({
    open() {
      t(!0);
    },
    close() {
      t(!1);
    }
  }), []);
  const a = e.PrefixAdornment || /* @__PURE__ */ o(d, {}), c = /* @__PURE__ */ o(
    x,
    {
      className: `py-dropdown-button-arrow ${n ? "open" : ""} `
    }
  ), m = () => {
    t(!n);
  };
  return /* @__PURE__ */ o(d, { children: /* @__PURE__ */ f(
    r,
    {
      withArrow: !0,
      shadow: "md",
      position: "bottom-end",
      width: e.width,
      opened: n,
      onChange: m,
      children: [
        /* @__PURE__ */ o(r.Target, { children: /* @__PURE__ */ o(
          p,
          {
            className: l,
            disabled: e.disabled,
            fullWidth: !1,
            rightSection: c,
            leftSection: a,
            onClick: () => t(!n),
            children: /* @__PURE__ */ o("span", { children: e.title })
          }
        ) }),
        /* @__PURE__ */ o(r.Dropdown, { className: "py-popover-dropdown", children: e.children })
      ]
    }
  ) });
});
export {
  S as DropdownButton
};
