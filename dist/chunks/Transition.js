import { jsx as D, Fragment as L } from "react/jsx-runtime";
import { c as s, u as A } from "./factory.js";
import { useState as F, useRef as p, useEffect as T } from "react";
import M from "react-dom";
function V(t, r) {
  try {
    return t.addEventListener("change", r), () => t.removeEventListener("change", r);
  } catch {
    return t.addListener(r), () => t.removeListener(r);
  }
}
function k(t, r) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(t).matches : !1;
}
function _(t, r, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [i, e] = F(
    n ? r : k(t)
  ), a = p();
  return T(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(t), e(a.current.matches), V(a.current, (c) => e(c.matches));
  }, [t]), i;
}
function j(t, r) {
  const n = p(!1);
  T(
    () => () => {
      n.current = !1;
    },
    []
  ), T(() => {
    if (n.current)
      return t();
    n.current = !0;
  }, r);
}
function C(t, r) {
  return _("(prefers-reduced-motion: reduce)", t, r);
}
const f = (t) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${s(t === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), P = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${s(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${s(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${s(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${s(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${s(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${s(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${s(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${s(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...f("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...f("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...f("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...f("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...f("top"),
    common: { transformOrigin: "top right" }
  }
}, E = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function H({
  transition: t,
  state: r,
  duration: n,
  timingFunction: i
}) {
  const e = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: i
  };
  return typeof t == "string" ? t in P ? {
    transitionProperty: P[t].transitionProperty,
    ...e,
    ...P[t].common,
    ...P[t][E[r]]
  } : {} : {
    transitionProperty: t.transitionProperty,
    ...e,
    ...t.common,
    ...t[E[r]]
  };
}
function N({
  duration: t,
  exitDuration: r,
  timingFunction: n,
  mounted: i,
  onEnter: e,
  onExit: a,
  onEntered: c,
  onExited: Y,
  enterDelay: u,
  exitDelay: y
}) {
  const O = A(), x = C(), d = O.respectReducedMotion ? x : !1, [l, g] = F(d ? 0 : t), [X, w] = F(i ? "entered" : "exited"), $ = p(-1), S = p(-1), b = p(-1), v = (o) => {
    const m = o ? e : a, h = o ? c : Y;
    window.clearTimeout($.current);
    const R = d ? 0 : o ? t : r;
    g(R), R === 0 ? (typeof m == "function" && m(), typeof h == "function" && h(), w(o ? "entered" : "exited")) : b.current = requestAnimationFrame(() => {
      M.flushSync(() => {
        w(o ? "pre-entering" : "pre-exiting");
      }), b.current = requestAnimationFrame(() => {
        typeof m == "function" && m(), w(o ? "entering" : "exiting"), $.current = window.setTimeout(() => {
          typeof h == "function" && h(), w(o ? "entered" : "exited");
        }, R);
      });
    });
  }, I = (o) => {
    if (window.clearTimeout(S.current), typeof (o ? u : y) != "number") {
      v(o);
      return;
    }
    S.current = window.setTimeout(
      () => {
        v(o);
      },
      o ? u : y
    );
  };
  return j(() => {
    I(i);
  }, [i]), T(
    () => () => {
      window.clearTimeout($.current), cancelAnimationFrame(b.current);
    },
    []
  ), {
    transitionDuration: l,
    transitionStatus: X,
    transitionTimingFunction: n || "ease"
  };
}
function Q({
  keepMounted: t,
  transition: r = "fade",
  duration: n = 250,
  exitDuration: i = n,
  mounted: e,
  children: a,
  timingFunction: c = "ease",
  onExit: Y,
  onEntered: u,
  onEnter: y,
  onExited: O,
  enterDelay: x,
  exitDelay: d
}) {
  const { transitionDuration: l, transitionStatus: g, transitionTimingFunction: X } = N({
    mounted: e,
    exitDuration: i,
    duration: n,
    timingFunction: c,
    onExit: Y,
    onEntered: u,
    onEnter: y,
    onExited: O,
    enterDelay: x,
    exitDelay: d
  });
  return l === 0 ? e ? /* @__PURE__ */ D(L, { children: a({}) }) : t ? a({ display: "none" }) : null : g === "exited" ? t ? a({ display: "none" }) : null : /* @__PURE__ */ D(L, { children: a(
    H({
      transition: r,
      duration: l,
      state: g,
      timingFunction: X
    })
  ) });
}
Q.displayName = "@mantine/core/Transition";
export {
  Q as T,
  C as a,
  j as u
};
