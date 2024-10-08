import { jsx as r, jsxs as w } from "react/jsx-runtime";
import { u as B, d as R, g as x, h as z, j as N, r as S } from "./factory.js";
import { forwardRef as j } from "react";
import { p as _ } from "./polymorphic-factory.js";
import { U as I } from "./UnstyledButton.js";
const c = j(
  ({ size: e = "var(--cb-icon-size, 70%)", style: o, ...s }, t) => /* @__PURE__ */ r(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...o, width: e, height: e },
      ref: t,
      ...s,
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
c.displayName = "@mantine/core/CloseIcon";
var d = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const P = {
  variant: "subtle"
}, U = x((e, { size: o, radius: s, iconSize: t }) => ({
  root: {
    "--cb-size": z(o, "cb-size"),
    "--cb-radius": s === void 0 ? void 0 : N(s),
    "--cb-icon-size": S(t)
  }
})), m = _((e, o) => {
  const s = B("CloseButton", P, e), {
    iconSize: t,
    children: p,
    vars: u,
    radius: D,
    className: v,
    classNames: C,
    style: f,
    styles: b,
    unstyled: l,
    "data-disabled": i,
    disabled: a,
    variant: n,
    icon: h,
    mod: y,
    ...g
  } = s, L = R({
    name: "CloseButton",
    props: s,
    className: v,
    style: f,
    classes: d,
    classNames: C,
    styles: b,
    unstyled: l,
    vars: u,
    varsResolver: U
  });
  return /* @__PURE__ */ w(
    I,
    {
      ref: o,
      ...g,
      unstyled: l,
      variant: n,
      disabled: a,
      mod: [{ disabled: a || i }, y],
      ...L("root", { variant: n, active: !a && !i }),
      children: [
        h || /* @__PURE__ */ r(c, {}),
        p
      ]
    }
  );
});
m.classes = d;
m.displayName = "@mantine/core/CloseButton";
export {
  m as C
};
