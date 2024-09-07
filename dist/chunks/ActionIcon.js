import { jsxs as I, jsx as e } from "react/jsx-runtime";
import { forwardRef as R } from "react";
import { B as l, l as S, f as w, b as N, d as G, g as x, h as T, c as O, i as V } from "./factory.js";
import { p as W } from "./Input.js";
import { g as q } from "./get-theme-color.js";
import { T as E } from "./Transition.js";
import { U as H } from "./UnstyledButton.js";
var c = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const J = R(({ className: o, ...s }, a) => /* @__PURE__ */ I(l, { component: "span", className: S(c.barsLoader, o), ...s, ref: a, children: [
  /* @__PURE__ */ e("span", { className: c.bar }),
  /* @__PURE__ */ e("span", { className: c.bar }),
  /* @__PURE__ */ e("span", { className: c.bar })
] })), K = R(({ className: o, ...s }, a) => /* @__PURE__ */ I(l, { component: "span", className: S(c.dotsLoader, o), ...s, ref: a, children: [
  /* @__PURE__ */ e("span", { className: c.dot }),
  /* @__PURE__ */ e("span", { className: c.dot }),
  /* @__PURE__ */ e("span", { className: c.dot })
] })), M = R(({ className: o, ...s }, a) => /* @__PURE__ */ e(l, { component: "span", className: S(c.ovalLoader, o), ...s, ref: a })), j = {
  bars: J,
  oval: M,
  dots: K
}, Q = {
  loaders: j,
  type: "oval"
}, X = x((o, { size: s, color: a }) => ({
  root: {
    "--loader-size": T(s, "loader-size"),
    "--loader-color": a ? q(a, o) : void 0
  }
})), g = w((o, s) => {
  const a = N("Loader", Q, o), {
    size: r,
    color: i,
    type: t,
    vars: m,
    className: n,
    style: v,
    classNames: d,
    styles: b,
    unstyled: u,
    loaders: f,
    variant: y,
    children: p,
    ...L
  } = a, h = G({
    name: "Loader",
    props: a,
    classes: c,
    className: n,
    style: v,
    classNames: d,
    styles: b,
    unstyled: u,
    vars: m,
    varsResolver: X
  });
  return p ? /* @__PURE__ */ e(l, { ...h("root"), ref: s, ...L, children: p }) : /* @__PURE__ */ e(
    l,
    {
      ...h("root"),
      ref: s,
      component: f[t],
      variant: y,
      size: r,
      ...L
    }
  );
});
g.defaultLoaders = j;
g.classes = c;
g.displayName = "@mantine/core/Loader";
var _ = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const B = {
  orientation: "horizontal"
}, Y = x((o, { borderWidth: s }) => ({
  group: { "--ai-border-width": O(s) }
})), C = w((o, s) => {
  const a = N("ActionIconGroup", B, o), {
    className: r,
    style: i,
    classNames: t,
    styles: m,
    unstyled: n,
    orientation: v,
    vars: d,
    borderWidth: b,
    variant: u,
    mod: f,
    ...y
  } = N("ActionIconGroup", B, o), p = G({
    name: "ActionIconGroup",
    props: a,
    classes: _,
    className: r,
    style: i,
    classNames: t,
    styles: m,
    unstyled: n,
    vars: d,
    varsResolver: Y,
    rootSelector: "group"
  });
  return /* @__PURE__ */ e(
    l,
    {
      ...p("group"),
      ref: s,
      variant: u,
      mod: [{ "data-orientation": v }, f],
      role: "group",
      ...y
    }
  );
});
C.classes = _;
C.displayName = "@mantine/core/ActionIconGroup";
const Z = {}, oo = x(
  (o, { size: s, radius: a, variant: r, gradient: i, color: t, autoContrast: m }) => {
    const n = o.variantColorResolver({
      color: t || o.primaryColor,
      theme: o,
      gradient: i,
      variant: r || "filled",
      autoContrast: m
    });
    return {
      root: {
        "--ai-size": T(s, "ai-size"),
        "--ai-radius": a === void 0 ? void 0 : V(a),
        "--ai-bg": t || r ? n.background : void 0,
        "--ai-hover": t || r ? n.hover : void 0,
        "--ai-hover-color": t || r ? n.hoverColor : void 0,
        "--ai-color": n.color,
        "--ai-bd": t || r ? n.border : void 0
      }
    };
  }
), P = W((o, s) => {
  const a = N("ActionIcon", Z, o), {
    className: r,
    unstyled: i,
    variant: t,
    classNames: m,
    styles: n,
    style: v,
    loading: d,
    loaderProps: b,
    size: u,
    color: f,
    radius: y,
    __staticSelector: p,
    gradient: L,
    vars: h,
    children: D,
    disabled: z,
    "data-disabled": $,
    autoContrast: ao,
    mod: U,
    ...k
  } = a, A = G({
    name: ["ActionIcon", p],
    props: a,
    className: r,
    style: v,
    classes: _,
    classNames: m,
    styles: n,
    unstyled: i,
    vars: h,
    varsResolver: oo
  });
  return /* @__PURE__ */ I(
    H,
    {
      ...A("root", { active: !z && !d && !$ }),
      ...k,
      unstyled: i,
      variant: t,
      size: u,
      disabled: z || d,
      ref: s,
      mod: [{ loading: d, disabled: z || $ }, U],
      children: [
        /* @__PURE__ */ e(E, { mounted: !!d, transition: "slide-down", duration: 150, children: (F) => /* @__PURE__ */ e(l, { component: "span", ...A("loader", { style: F }), "aria-hidden": !0, children: /* @__PURE__ */ e(g, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...b }) }) }),
        /* @__PURE__ */ e(l, { component: "span", mod: { loading: d }, ...A("icon"), children: D })
      ]
    }
  );
});
P.classes = _;
P.displayName = "@mantine/core/ActionIcon";
P.Group = C;
export {
  P as A
};
