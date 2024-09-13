import { jsx as c, jsxs as G } from "react/jsx-runtime";
import { f as O, u as f, d as j, B as p, g as C, r as k, h as N, k as _, j as V } from "./factory.js";
import "react";
import { p as q } from "./polymorphic-factory.js";
import { L as A } from "./Loader.js";
import { T as E } from "./Transition.js";
import { U as H } from "./UnstyledButton.js";
var h = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const P = {
  orientation: "horizontal"
}, I = C((r, { borderWidth: s }) => ({
  group: { "--button-border-width": k(s) }
})), y = O((r, s) => {
  const t = f("ButtonGroup", P, r), {
    className: d,
    style: n,
    classNames: o,
    styles: m,
    unstyled: a,
    orientation: e,
    vars: u,
    borderWidth: b,
    variant: g,
    mod: v,
    ...S
  } = f("ButtonGroup", P, r), i = j({
    name: "ButtonGroup",
    props: t,
    classes: h,
    className: d,
    style: n,
    classNames: o,
    styles: m,
    unstyled: a,
    vars: u,
    varsResolver: I,
    rootSelector: "group"
  });
  return /* @__PURE__ */ c(
    p,
    {
      ...i("group"),
      ref: s,
      variant: g,
      mod: [{ "data-orientation": e }, v],
      role: "group",
      ...S
    }
  );
});
y.classes = h;
y.displayName = "@mantine/core/ButtonGroup";
const J = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${k(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, K = {}, M = C(
  (r, { radius: s, color: t, gradient: d, variant: n, size: o, justify: m, autoContrast: a }) => {
    const e = r.variantColorResolver({
      color: t || r.primaryColor,
      theme: r,
      gradient: d,
      variant: n || "filled",
      autoContrast: a
    });
    return {
      root: {
        "--button-justify": m,
        "--button-height": N(o, "button-height"),
        "--button-padding-x": N(o, "button-padding-x"),
        "--button-fz": o != null && o.includes("compact") ? _(o.replace("compact-", "")) : _(o),
        "--button-radius": s === void 0 ? void 0 : V(s),
        "--button-bg": t || n ? e.background : void 0,
        "--button-hover": t || n ? e.hover : void 0,
        "--button-color": e.color,
        "--button-bd": t || n ? e.border : void 0,
        "--button-hover-color": t || n ? e.hoverColor : void 0
      }
    };
  }
), B = q((r, s) => {
  const t = f("Button", K, r), {
    style: d,
    vars: n,
    className: o,
    color: m,
    disabled: a,
    children: e,
    leftSection: u,
    rightSection: b,
    fullWidth: g,
    variant: v,
    radius: S,
    loading: i,
    loaderProps: w,
    gradient: Q,
    classNames: L,
    styles: T,
    unstyled: R,
    "data-disabled": x,
    autoContrast: X,
    mod: $,
    ...F
  } = t, l = j({
    name: "Button",
    props: t,
    classes: h,
    className: o,
    style: d,
    classNames: L,
    styles: T,
    unstyled: R,
    vars: n,
    varsResolver: M
  }), U = !!u, W = !!b;
  return /* @__PURE__ */ G(
    H,
    {
      ref: s,
      ...l("root", { active: !a && !i && !x }),
      unstyled: R,
      variant: v,
      disabled: a || i,
      mod: [
        {
          disabled: a || x,
          loading: i,
          block: g,
          "with-left-section": U,
          "with-right-section": W
        },
        $
      ],
      ...F,
      children: [
        /* @__PURE__ */ c(E, { mounted: !!i, transition: J, duration: 150, children: (D) => /* @__PURE__ */ c(p, { component: "span", ...l("loader", { style: D }), "aria-hidden": !0, children: /* @__PURE__ */ c(
          A,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...w
          }
        ) }) }),
        /* @__PURE__ */ G("span", { ...l("inner"), children: [
          u && /* @__PURE__ */ c(p, { component: "span", ...l("section"), mod: { position: "left" }, children: u }),
          /* @__PURE__ */ c(p, { component: "span", mod: { loading: i }, ...l("label"), children: e }),
          b && /* @__PURE__ */ c(p, { component: "span", ...l("section"), mod: { position: "right" }, children: b })
        ] })
      ]
    }
  );
});
B.classes = h;
B.displayName = "@mantine/core/Button";
B.Group = y;
export {
  B
};
