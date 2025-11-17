import { jsx as o, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { Popover as r, Button as u } from "@mantine/core";
import { forwardRef as w, useState as h, useRef as p, useImperativeHandle as b } from "react";
import { M as x } from "../../../chunks/index5.js";
import '../../../assets/DropdownButton.css';const B = w(function(e, i) {
  const [n, t] = h(!1), s = i || p(null), l = e.className || "py-dropdown-button";
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
  ), f = () => {
    t(!n);
  };
  return /* @__PURE__ */ o(d, { children: /* @__PURE__ */ m(
    r,
    {
      withArrow: !0,
      shadow: "md",
      position: "bottom-end",
      width: e.width,
      opened: n,
      onChange: f,
      children: [
        /* @__PURE__ */ o(r.Target, { children: /* @__PURE__ */ o(
          u,
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
        /* @__PURE__ */ o(r.Dropdown, { children: e.children })
      ]
    }
  ) });
});
export {
  B as DropdownButton
};
