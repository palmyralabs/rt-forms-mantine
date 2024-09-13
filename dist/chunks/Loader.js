import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { B as t, m as l, f as z, u as B, d as R, g as S, h as j } from "./factory.js";
import { g as P } from "./get-theme-color.js";
var s = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const w = d(({ className: e, ...o }, a) => /* @__PURE__ */ i(t, { component: "span", className: l(s.barsLoader, e), ...o, ref: a, children: [
  /* @__PURE__ */ r("span", { className: s.bar }),
  /* @__PURE__ */ r("span", { className: s.bar }),
  /* @__PURE__ */ r("span", { className: s.bar })
] })), C = d(({ className: e, ...o }, a) => /* @__PURE__ */ i(t, { component: "span", className: l(s.dotsLoader, e), ...o, ref: a, children: [
  /* @__PURE__ */ r("span", { className: s.dot }),
  /* @__PURE__ */ r("span", { className: s.dot }),
  /* @__PURE__ */ r("span", { className: s.dot })
] })), D = d(({ className: e, ...o }, a) => /* @__PURE__ */ r(t, { component: "span", className: l(s.ovalLoader, e), ...o, ref: a })), b = {
  bars: w,
  oval: D,
  dots: C
}, O = {
  loaders: b,
  type: "oval"
}, T = S((e, { size: o, color: a }) => ({
  root: {
    "--loader-size": j(o, "loader-size"),
    "--loader-color": a ? P(a, e) : void 0
  }
})), n = z((e, o) => {
  const a = B("Loader", O, e), {
    size: f,
    color: V,
    type: v,
    vars: L,
    className: N,
    style: u,
    classNames: y,
    styles: _,
    unstyled: h,
    loaders: g,
    variant: x,
    children: c,
    ...m
  } = a, p = R({
    name: "Loader",
    props: a,
    classes: s,
    className: N,
    style: u,
    classNames: y,
    styles: _,
    unstyled: h,
    vars: L,
    varsResolver: T
  });
  return c ? /* @__PURE__ */ r(t, { ...p("root"), ref: o, ...m, children: c }) : /* @__PURE__ */ r(
    t,
    {
      ...p("root"),
      ref: o,
      component: g[v],
      variant: x,
      size: f,
      ...m
    }
  );
});
n.defaultLoaders = b;
n.classes = s;
n.displayName = "@mantine/core/Loader";
export {
  n as L
};
