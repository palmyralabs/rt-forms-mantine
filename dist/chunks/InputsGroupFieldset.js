import { jsx as r, jsxs as f, Fragment as j } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { d as k, B as s, k as w, h as D } from "./factory.js";
import { I as u, u as G } from "./Input.js";
var h = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const K = h, N = C(
  ({
    __staticSelector: t,
    __stylesApiProps: o,
    className: a,
    classNames: I,
    styles: _,
    unstyled: v,
    children: y,
    label: i,
    description: d,
    id: p,
    disabled: b,
    error: n,
    size: l,
    labelPosition: x = "left",
    bodyElement: c = "div",
    labelElement: m = "label",
    variant: S,
    style: F,
    vars: R,
    mod: g,
    ...B
  }, W) => {
    const e = k({
      name: t,
      props: o,
      className: a,
      style: F,
      classes: h,
      classNames: I,
      styles: _,
      unstyled: v
    });
    return /* @__PURE__ */ r(
      s,
      {
        ...e("root"),
        ref: W,
        __vars: {
          "--label-fz": w(l),
          "--label-lh": D(l, "label-lh")
        },
        mod: [{ "label-position": x }, g],
        variant: S,
        size: l,
        ...B,
        children: /* @__PURE__ */ f(
          s,
          {
            component: c,
            htmlFor: c === "label" ? p : void 0,
            ...e("body"),
            children: [
              y,
              /* @__PURE__ */ f("div", { ...e("labelWrapper"), "data-disabled": b || void 0, children: [
                i && /* @__PURE__ */ r(
                  s,
                  {
                    component: m,
                    htmlFor: m === "label" ? p : void 0,
                    ...e("label"),
                    "data-disabled": b || void 0,
                    children: i
                  }
                ),
                d && /* @__PURE__ */ r(u.Description, { size: l, __inheritStyles: !1, ...e("description"), children: d }),
                n && typeof n != "boolean" && /* @__PURE__ */ r(u.Error, { size: l, __inheritStyles: !1, ...e("error"), children: n })
              ] })
            ]
          }
        )
      }
    );
  }
);
N.displayName = "@mantine/core/InlineInput";
function L({ children: t, role: o }) {
  const a = G();
  return a ? /* @__PURE__ */ r("div", { role: o, "aria-labelledby": a.labelId, "aria-describedby": a.describedBy, children: t }) : /* @__PURE__ */ r(j, { children: t });
}
export {
  L as I,
  K as a,
  N as b
};
