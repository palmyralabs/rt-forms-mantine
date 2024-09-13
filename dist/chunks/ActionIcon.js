import { jsx as d, jsxs as B } from "react/jsx-runtime";
import "react";
import { f as w, u as b, d as R, B as f, g as S, r as L, h as T, j as U } from "./factory.js";
import { p as $ } from "./polymorphic-factory.js";
import { L as k } from "./Loader.js";
import { T as D } from "./Transition.js";
import { U as F } from "./UnstyledButton.js";
var l = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const N = {
  orientation: "horizontal"
}, V = S((o, { borderWidth: e }) => ({
  group: { "--ai-border-width": L(e) }
})), g = w((o, e) => {
  const t = b("ActionIconGroup", N, o), {
    className: r,
    style: n,
    classNames: s,
    styles: c,
    unstyled: a,
    orientation: m,
    vars: i,
    borderWidth: A,
    variant: p,
    mod: I,
    ...z
  } = b("ActionIconGroup", N, o), u = R({
    name: "ActionIconGroup",
    props: t,
    classes: l,
    className: r,
    style: n,
    classNames: s,
    styles: c,
    unstyled: a,
    vars: i,
    varsResolver: V,
    rootSelector: "group"
  });
  return /* @__PURE__ */ d(
    f,
    {
      ...u("group"),
      ref: e,
      variant: p,
      mod: [{ "data-orientation": m }, I],
      role: "group",
      ...z
    }
  );
});
g.classes = l;
g.displayName = "@mantine/core/ActionIconGroup";
const W = {}, q = S(
  (o, { size: e, radius: t, variant: r, gradient: n, color: s, autoContrast: c }) => {
    const a = o.variantColorResolver({
      color: s || o.primaryColor,
      theme: o,
      gradient: n,
      variant: r || "filled",
      autoContrast: c
    });
    return {
      root: {
        "--ai-size": T(e, "ai-size"),
        "--ai-radius": t === void 0 ? void 0 : U(t),
        "--ai-bg": s || r ? a.background : void 0,
        "--ai-hover": s || r ? a.hover : void 0,
        "--ai-hover-color": s || r ? a.hoverColor : void 0,
        "--ai-color": a.color,
        "--ai-bd": s || r ? a.border : void 0
      }
    };
  }
), h = $((o, e) => {
  const t = b("ActionIcon", W, o), {
    className: r,
    unstyled: n,
    variant: s,
    classNames: c,
    styles: a,
    style: m,
    loading: i,
    loaderProps: A,
    size: p,
    color: I,
    radius: z,
    __staticSelector: u,
    gradient: E,
    vars: _,
    children: x,
    disabled: v,
    "data-disabled": G,
    autoContrast: H,
    mod: C,
    ...P
  } = t, y = R({
    name: ["ActionIcon", u],
    props: t,
    className: r,
    style: m,
    classes: l,
    classNames: c,
    styles: a,
    unstyled: n,
    vars: _,
    varsResolver: q
  });
  return /* @__PURE__ */ B(
    F,
    {
      ...y("root", { active: !v && !i && !G }),
      ...P,
      unstyled: n,
      variant: s,
      size: p,
      disabled: v || i,
      ref: e,
      mod: [{ loading: i, disabled: v || G }, C],
      children: [
        /* @__PURE__ */ d(D, { mounted: !!i, transition: "slide-down", duration: 150, children: (j) => /* @__PURE__ */ d(f, { component: "span", ...y("loader", { style: j }), "aria-hidden": !0, children: /* @__PURE__ */ d(k, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...A }) }) }),
        /* @__PURE__ */ d(f, { component: "span", mod: { loading: i }, ...y("icon"), children: x })
      ]
    }
  );
});
h.classes = l;
h.displayName = "@mantine/core/ActionIcon";
h.Group = g;
export {
  h as A
};
