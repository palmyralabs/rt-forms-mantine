import { jsx as o, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { M as u } from "../../../chunks/index4.js";
import { forwardRef as w, useState as h, useRef as p, useImperativeHandle as b } from "react";
import { Popover as r, Button as x } from "@mantine/core";
import '../../../assets/DropdownButton.css';const B = w(function(e, i) {
  const [n, t] = h(!1), s = i || p(), a = e.className || "py-dropdown-button";
  b(s, () => ({
    open() {
      t(!0);
    },
    close() {
      t(!1);
    }
  }), []);
  const c = e.PrefixAdornment || /* @__PURE__ */ o(d, {}), l = /* @__PURE__ */ o(
    u,
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
          x,
          {
            className: a,
            disabled: e.disabled,
            fullWidth: !1,
            rightSection: l,
            leftSection: c,
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
