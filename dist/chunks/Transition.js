import { jsx as S, Fragment as D } from "react/jsx-runtime";
import { r as o, a as _ } from "./factory.js";
import { useState as k, useRef as h, useEffect as j } from "react";
import C from "react-dom";
import { a as E, u as H } from "./use-reduced-motion.js";
const c = (t) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${o(t === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), P = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${o(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${o(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${o(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${o(-30)}` },
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
    out: { opacity: 0, transform: `translateY(${o(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${o(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${o(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${o(20)}) rotate(5deg)` },
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
    ...c("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...c("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...c("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...c("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...c("top"),
    common: { transformOrigin: "top right" }
  }
}, A = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function I({
  transition: t,
  state: i,
  duration: e,
  timingFunction: n
}) {
  const a = {
    transitionDuration: `${e}ms`,
    transitionTimingFunction: n
  };
  return typeof t == "string" ? t in P ? {
    transitionProperty: P[t].transitionProperty,
    ...a,
    ...P[t].common,
    ...P[t][A[i]]
  } : {} : {
    transitionProperty: t.transitionProperty,
    ...a,
    ...t.common,
    ...t[A[i]]
  };
}
function N({
  duration: t,
  exitDuration: i,
  timingFunction: e,
  mounted: n,
  onEnter: a,
  onExit: s,
  onEntered: w,
  onExited: T,
  enterDelay: p,
  exitDelay: f
}) {
  const Y = _(), O = E(), y = Y.respectReducedMotion ? O : !1, [u, l] = k(y ? 0 : t), [b, g] = k(n ? "entered" : "exited"), x = h(-1), F = h(-1), X = h(-1), R = (r) => {
    const m = r ? a : s, d = r ? w : T;
    window.clearTimeout(x.current);
    const $ = y ? 0 : r ? t : i;
    l($), $ === 0 ? (typeof m == "function" && m(), typeof d == "function" && d(), g(r ? "entered" : "exited")) : X.current = requestAnimationFrame(() => {
      C.flushSync(() => {
        g(r ? "pre-entering" : "pre-exiting");
      }), X.current = requestAnimationFrame(() => {
        typeof m == "function" && m(), g(r ? "entering" : "exiting"), x.current = window.setTimeout(() => {
          typeof d == "function" && d(), g(r ? "entered" : "exited");
        }, $);
      });
    });
  }, q = (r) => {
    if (window.clearTimeout(F.current), typeof (r ? p : f) != "number") {
      R(r);
      return;
    }
    F.current = window.setTimeout(
      () => {
        R(r);
      },
      r ? p : f
    );
  };
  return H(() => {
    q(n);
  }, [n]), j(
    () => () => {
      window.clearTimeout(x.current), cancelAnimationFrame(X.current);
    },
    []
  ), {
    transitionDuration: u,
    transitionStatus: b,
    transitionTimingFunction: e || "ease"
  };
}
function U({
  keepMounted: t,
  transition: i = "fade",
  duration: e = 250,
  exitDuration: n = e,
  mounted: a,
  children: s,
  timingFunction: w = "ease",
  onExit: T,
  onEntered: p,
  onEnter: f,
  onExited: Y,
  enterDelay: O,
  exitDelay: y
}) {
  const { transitionDuration: u, transitionStatus: l, transitionTimingFunction: b } = N({
    mounted: a,
    exitDuration: n,
    duration: e,
    timingFunction: w,
    onExit: T,
    onEntered: p,
    onEnter: f,
    onExited: Y,
    enterDelay: O,
    exitDelay: y
  });
  return u === 0 ? a ? /* @__PURE__ */ S(D, { children: s({}) }) : t ? s({ display: "none" }) : null : l === "exited" ? t ? s({ display: "none" }) : null : /* @__PURE__ */ S(D, { children: s(
    I({
      transition: i,
      duration: u,
      state: l,
      timingFunction: b
    })
  ) });
}
U.displayName = "@mantine/core/Transition";
export {
  U as T
};
