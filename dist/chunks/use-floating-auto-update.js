import * as p from "react";
import { Fragment as It, useLayoutEffect as gt, useEffect as Ne, useRef as pt, forwardRef as ht, useState as vt } from "react";
import * as kt from "react-dom";
import { createPortal as Ft } from "react-dom";
import { jsx as ve, Fragment as yt } from "react/jsx-runtime";
import { u as $t } from "./DirectionProvider.js";
import { u as _t } from "./factory.js";
import { u as Bt } from "./use-isomorphic-effect.js";
import { a as Nt } from "./use-merged-ref.js";
import { u as Ze } from "./use-reduced-motion.js";
function vo(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== It : !1;
}
const Wt = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function yo(e) {
  return Wt[e];
}
function be() {
  return typeof window < "u";
}
function le(e) {
  return wt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function V(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function z(e) {
  var t;
  return (t = (wt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function wt(e) {
  return be() ? e instanceof Node || e instanceof V(e).Node : !1;
}
function F(e) {
  return be() ? e instanceof Element || e instanceof V(e).Element : !1;
}
function H(e) {
  return be() ? e instanceof HTMLElement || e instanceof V(e).HTMLElement : !1;
}
function Le(e) {
  return !be() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function de(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = K(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Vt(e) {
  return ["table", "td", "th"].includes(le(e));
}
function Re(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function We(e) {
  const t = Ve(), n = F(e) ? K(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ht(e) {
  let t = q(e);
  for (; H(t) && !te(t); ) {
    if (We(t))
      return t;
    if (Re(t))
      return null;
    t = q(t);
  }
  return null;
}
function Ve() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function te(e) {
  return ["html", "body", "#document"].includes(le(e));
}
function K(e) {
  return V(e).getComputedStyle(e);
}
function Ee(e) {
  return F(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function q(e) {
  if (le(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Le(e) && e.host || // Fallback.
    z(e)
  );
  return Le(t) ? t.host : t;
}
function xt(e) {
  const t = q(e);
  return te(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : H(t) && de(t) ? t : xt(t);
}
function ee(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = xt(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = V(r);
  if (s) {
    const c = Se(i);
    return t.concat(i, i.visualViewport || [], de(r) ? r : [], c && n ? ee(c) : []);
  }
  return t.concat(r, ee(r, [], n));
}
function Se(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Qe(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function fe(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Le(n)) {
    let o = t;
    for (; o; ) {
      if (e === o)
        return !0;
      o = o.parentNode || o.host;
    }
  }
  return !1;
}
function bt() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Rt() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: o
    } = t;
    return n + "/" + o;
  }).join(" ") : navigator.userAgent;
}
function jt(e) {
  return Ut() ? !1 : !et() && e.width === 0 && e.height === 0 || et() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Kt() {
  return /apple/i.test(navigator.vendor);
}
function et() {
  const e = /android/i;
  return e.test(bt()) || e.test(Rt());
}
function Yt() {
  return bt().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Ut() {
  return Rt().includes("jsdom/");
}
function Ie(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function Xt(e) {
  return "nativeEvent" in e;
}
function zt(e) {
  return e.matches("html,body");
}
function oe(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Ae(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ie(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const qt = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Gt(e) {
  return H(e) && e.matches(qt);
}
const Y = Math.min, W = Math.max, ye = Math.round, ge = Math.floor, ne = (e) => ({
  x: e,
  y: e
}), Jt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zt = {
  start: "end",
  end: "start"
};
function ke(e, t, n) {
  return W(e, Y(t, n));
}
function G(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function U(e) {
  return e.split("-")[0];
}
function ue(e) {
  return e.split("-")[1];
}
function He(e) {
  return e === "x" ? "y" : "x";
}
function je(e) {
  return e === "y" ? "height" : "width";
}
function J(e) {
  return ["top", "bottom"].includes(U(e)) ? "y" : "x";
}
function Ke(e) {
  return He(J(e));
}
function Qt(e, t, n) {
  n === void 0 && (n = !1);
  const o = ue(e), r = Ke(e), s = je(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = we(i)), [i, we(i)];
}
function en(e) {
  const t = we(e);
  return [Fe(e), t, Fe(t)];
}
function Fe(e) {
  return e.replace(/start|end/g, (t) => Zt[t]);
}
function tn(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function nn(e, t, n, o) {
  const r = ue(e);
  let s = tn(U(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Fe)))), s;
}
function we(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Jt[t]);
}
function on(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ye(e) {
  return typeof e != "number" ? on(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ce(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function tt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = J(t), i = Ke(t), c = je(i), a = U(t), u = s === "y", d = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, h = o[c] / 2 - r[c] / 2;
  let l;
  switch (a) {
    case "top":
      l = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      l = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      l = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      l = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      l = {
        x: o.x,
        y: o.y
      };
  }
  switch (ue(t)) {
    case "start":
      l[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      l[i] += h * (n && u ? -1 : 1);
      break;
  }
  return l;
}
const rn = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: f
  } = tt(u, o, a), h = o, l = {}, g = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: y,
      fn: w
    } = c[m], {
      x: R,
      y: v,
      data: A,
      reset: T
    } = await w({
      x: d,
      y: f,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: l,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = R ?? d, f = v ?? f, l = {
      ...l,
      [y]: {
        ...l[y],
        ...A
      }
    }, T && g <= 50 && (g++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : T.rects), {
      x: d,
      y: f
    } = tt(u, h, a)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: r,
    middlewareData: l
  };
};
async function Ue(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: c,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: l = 0
  } = G(t, e), g = Ye(l), y = c[h ? f === "floating" ? "reference" : "floating" : f], w = ce(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: a
  })), R = f === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), A = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ce(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: R,
    offsetParent: v,
    strategy: a
  }) : R);
  return {
    top: (w.top - T.top + g.top) / A.y,
    bottom: (T.bottom - w.bottom + g.bottom) / A.y,
    left: (w.left - T.left + g.left) / A.x,
    right: (T.right - w.right + g.right) / A.x
  };
}
const sn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: c,
      middlewareData: a
    } = t, {
      element: u,
      padding: d = 0
    } = G(e, t) || {};
    if (u == null)
      return {};
    const f = Ye(d), h = {
      x: n,
      y: o
    }, l = Ke(r), g = je(l), m = await i.getDimensions(u), y = l === "y", w = y ? "top" : "left", R = y ? "bottom" : "right", v = y ? "clientHeight" : "clientWidth", A = s.reference[g] + s.reference[l] - h[l] - s.floating[g], T = h[l] - s.reference[l], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let L = O ? O[v] : 0;
    (!L || !await (i.isElement == null ? void 0 : i.isElement(O))) && (L = c.floating[v] || s.floating[g]);
    const S = A / 2 - T / 2, B = L / 2 - m[g] / 2 - 1, M = Y(f[w], B), I = Y(f[R], B), k = M, $ = L - m[g] - I, C = L / 2 - m[g] / 2 + S, E = ke(k, C, $), x = !a.arrow && ue(r) != null && C !== E && s.reference[g] / 2 - (C < k ? M : I) - m[g] / 2 < 0, P = x ? C < k ? C - k : C - $ : 0;
    return {
      [l]: h[l] + P,
      data: {
        [l]: E,
        centerOffset: C - E - P,
        ...x && {
          alignmentOffset: P
        }
      },
      reset: x
    };
  }
}), cn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: c,
        platform: a,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: l = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...y
      } = G(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = U(r), R = J(c), v = U(c) === c, A = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), T = h || (v || !m ? [we(c)] : en(c)), O = g !== "none";
      !h && O && T.push(...nn(c, m, g, A));
      const L = [c, ...T], S = await Ue(t, y), B = [];
      let M = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && B.push(S[w]), f) {
        const C = Qt(r, i, A);
        B.push(S[C[0]], S[C[1]]);
      }
      if (M = [...M, {
        placement: r,
        overflows: B
      }], !B.every((C) => C <= 0)) {
        var I, k;
        const C = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, E = L[C];
        if (E)
          return {
            data: {
              index: C,
              overflows: M
            },
            reset: {
              placement: E
            }
          };
        let x = (k = M.filter((P) => P.overflows[0] <= 0).sort((P, b) => P.overflows[1] - b.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!x)
          switch (l) {
            case "bestFit": {
              var $;
              const P = ($ = M.filter((b) => {
                if (O) {
                  const _ = J(b.placement);
                  return _ === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((b) => [b.placement, b.overflows.filter((_) => _ > 0).reduce((_, D) => _ + D, 0)]).sort((b, _) => b[1] - _[1])[0]) == null ? void 0 : $[0];
              P && (x = P);
              break;
            }
            case "initialPlacement":
              x = c;
              break;
          }
        if (r !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
function Et(e) {
  const t = Y(...e.map((s) => s.left)), n = Y(...e.map((s) => s.top)), o = W(...e.map((s) => s.right)), r = W(...e.map((s) => s.bottom));
  return {
    x: t,
    y: n,
    width: o - t,
    height: r - n
  };
}
function ln(e) {
  const t = e.slice().sort((r, s) => r.y - s.y), n = [];
  let o = null;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    !o || s.y - o.y > o.height / 2 ? n.push([s]) : n[n.length - 1].push(s), o = s;
  }
  return n.map((r) => ce(Et(r)));
}
const un = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: o,
        rects: r,
        platform: s,
        strategy: i
      } = t, {
        padding: c = 2,
        x: a,
        y: u
      } = G(e, t), d = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(o.reference)) || []), f = ln(d), h = ce(Et(d)), l = Ye(c);
      function g() {
        if (f.length === 2 && f[0].left > f[1].right && a != null && u != null)
          return f.find((y) => a > y.left - l.left && a < y.right + l.right && u > y.top - l.top && u < y.bottom + l.bottom) || h;
        if (f.length >= 2) {
          if (J(n) === "y") {
            const M = f[0], I = f[f.length - 1], k = U(n) === "top", $ = M.top, C = I.bottom, E = k ? M.left : I.left, x = k ? M.right : I.right, P = x - E, b = C - $;
            return {
              top: $,
              bottom: C,
              left: E,
              right: x,
              width: P,
              height: b,
              x: E,
              y: $
            };
          }
          const y = U(n) === "left", w = W(...f.map((M) => M.right)), R = Y(...f.map((M) => M.left)), v = f.filter((M) => y ? M.left === R : M.right === w), A = v[0].top, T = v[v.length - 1].bottom, O = R, L = w, S = L - O, B = T - A;
          return {
            top: A,
            bottom: T,
            left: O,
            right: L,
            width: S,
            height: B,
            x: O,
            y: A
          };
        }
        return h;
      }
      const m = await s.getElementRects({
        reference: {
          getBoundingClientRect: g
        },
        floating: o.floating,
        strategy: i
      });
      return r.reference.x !== m.reference.x || r.reference.y !== m.reference.y || r.reference.width !== m.reference.width || r.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
};
async function an(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = U(n), c = ue(n), a = J(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && a ? -1 : 1, f = G(t, e);
  let {
    mainAxis: h,
    crossAxis: l,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof g == "number" && (l = c === "end" ? g * -1 : g), a ? {
    x: l * d,
    y: h * u
  } : {
    x: h * u,
    y: l * d
  };
}
const fn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: c
      } = t, a = await an(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: i
        }
      };
    }
  };
}, dn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: R
            } = y;
            return {
              x: w,
              y: R
            };
          }
        },
        ...a
      } = G(e, t), u = {
        x: n,
        y: o
      }, d = await Ue(t, a), f = J(U(r)), h = He(f);
      let l = u[h], g = u[f];
      if (s) {
        const y = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", R = l + d[y], v = l - d[w];
        l = ke(R, l, v);
      }
      if (i) {
        const y = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", R = g + d[y], v = g - d[w];
        g = ke(R, g, v);
      }
      const m = c.fn({
        ...t,
        [h]: l,
        [f]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o,
          enabled: {
            [h]: s,
            [f]: i
          }
        }
      };
    }
  };
}, mn = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: a = !0,
        crossAxis: u = !0
      } = G(e, t), d = {
        x: n,
        y: o
      }, f = J(r), h = He(f);
      let l = d[h], g = d[f];
      const m = G(c, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (a) {
        const v = h === "y" ? "height" : "width", A = s.reference[h] - s.floating[v] + y.mainAxis, T = s.reference[h] + s.reference[v] - y.mainAxis;
        l < A ? l = A : l > T && (l = T);
      }
      if (u) {
        var w, R;
        const v = h === "y" ? "width" : "height", A = ["top", "left"].includes(U(r)), T = s.reference[f] - s.floating[v] + (A && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (A ? 0 : y.crossAxis), O = s.reference[f] + s.reference[v] + (A ? 0 : ((R = i.offset) == null ? void 0 : R[f]) || 0) - (A ? y.crossAxis : 0);
        g < T ? g = T : g > O && (g = O);
      }
      return {
        [h]: l,
        [f]: g
      };
    }
  };
}, gn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: i,
        elements: c
      } = t, {
        apply: a = () => {
        },
        ...u
      } = G(e, t), d = await Ue(t, u), f = U(r), h = ue(r), l = J(r) === "y", {
        width: g,
        height: m
      } = s.floating;
      let y, w;
      f === "top" || f === "bottom" ? (y = f, w = h === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = f, y = h === "end" ? "top" : "bottom");
      const R = m - d.top - d.bottom, v = g - d.left - d.right, A = Y(m - d[y], R), T = Y(g - d[w], v), O = !t.middlewareData.shift;
      let L = A, S = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = v), (o = t.middlewareData.shift) != null && o.enabled.y && (L = R), O && !h) {
        const M = W(d.left, 0), I = W(d.right, 0), k = W(d.top, 0), $ = W(d.bottom, 0);
        l ? S = g - 2 * (M !== 0 || I !== 0 ? M + I : W(d.left, d.right)) : L = m - 2 * (k !== 0 || $ !== 0 ? k + $ : W(d.top, d.bottom));
      }
      await a({
        ...t,
        availableWidth: S,
        availableHeight: L
      });
      const B = await i.getDimensions(c.floating);
      return g !== B.width || m !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ct(e) {
  const t = K(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = H(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = ye(n) !== s || ye(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function Xe(e) {
  return F(e) ? e : e.contextElement;
}
function se(e) {
  const t = Xe(e);
  if (!H(t))
    return ne(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Ct(t);
  let i = (s ? ye(n.width) : n.width) / o, c = (s ? ye(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const pn = /* @__PURE__ */ ne(0);
function At(e) {
  const t = V(e);
  return !Ve() || !t.visualViewport ? pn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== V(e) ? !1 : t;
}
function re(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Xe(e);
  let i = ne(1);
  t && (o ? F(o) && (i = se(o)) : i = se(e));
  const c = hn(s, n, o) ? At(s) : ne(0);
  let a = (r.left + c.x) / i.x, u = (r.top + c.y) / i.y, d = r.width / i.x, f = r.height / i.y;
  if (s) {
    const h = V(s), l = o && F(o) ? V(o) : o;
    let g = h, m = Se(g);
    for (; m && o && l !== g; ) {
      const y = se(m), w = m.getBoundingClientRect(), R = K(m), v = w.left + (m.clientLeft + parseFloat(R.paddingLeft)) * y.x, A = w.top + (m.clientTop + parseFloat(R.paddingTop)) * y.y;
      a *= y.x, u *= y.y, d *= y.x, f *= y.y, a += v, u += A, g = V(m), m = Se(g);
    }
  }
  return ce({
    width: d,
    height: f,
    x: a,
    y: u
  });
}
function vn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = z(o), c = t ? Re(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ne(1);
  const d = ne(0), f = H(o);
  if ((f || !f && !s) && ((le(o) !== "body" || de(i)) && (a = Ee(o)), H(o))) {
    const h = re(o);
    u = se(o), d.x = h.x + o.clientLeft, d.y = h.y + o.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y
  };
}
function yn(e) {
  return Array.from(e.getClientRects());
}
function $e(e, t) {
  const n = Ee(e).scrollLeft;
  return t ? t.left + n : re(z(e)).left + n;
}
function wn(e) {
  const t = z(e), n = Ee(e), o = e.ownerDocument.body, r = W(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = W(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + $e(e);
  const c = -n.scrollTop;
  return K(o).direction === "rtl" && (i += W(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: c
  };
}
function xn(e, t) {
  const n = V(e), o = z(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, c = 0, a = 0;
  if (r) {
    s = r.width, i = r.height;
    const u = Ve();
    (!u || u && t === "fixed") && (c = r.offsetLeft, a = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: a
  };
}
function bn(e, t) {
  const n = re(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = H(e) ? se(e) : ne(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, a = r * s.x, u = o * s.y;
  return {
    width: i,
    height: c,
    x: a,
    y: u
  };
}
function nt(e, t, n) {
  let o;
  if (t === "viewport")
    o = xn(e, n);
  else if (t === "document")
    o = wn(z(e));
  else if (F(t))
    o = bn(t, n);
  else {
    const r = At(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ce(o);
}
function Pt(e, t) {
  const n = q(e);
  return n === t || !F(n) || te(n) ? !1 : K(n).position === "fixed" || Pt(n, t);
}
function Rn(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ee(e, [], !1).filter((c) => F(c) && le(c) !== "body"), r = null;
  const s = K(e).position === "fixed";
  let i = s ? q(e) : e;
  for (; F(i) && !te(i); ) {
    const c = K(i), a = We(i);
    !a && c.position === "fixed" && (r = null), (s ? !a && !r : !a && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || de(i) && !a && Pt(e, i)) ? o = o.filter((d) => d !== i) : r = c, i = q(i);
  }
  return t.set(e, o), o;
}
function En(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Re(t) ? [] : Rn(t, this._c) : [].concat(n), o], c = i[0], a = i.reduce((u, d) => {
    const f = nt(t, d, r);
    return u.top = W(f.top, u.top), u.right = Y(f.right, u.right), u.bottom = Y(f.bottom, u.bottom), u.left = W(f.left, u.left), u;
  }, nt(t, c, r));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Cn(e) {
  const {
    width: t,
    height: n
  } = Ct(e);
  return {
    width: t,
    height: n
  };
}
function An(e, t, n) {
  const o = H(t), r = z(t), s = n === "fixed", i = re(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = ne(0);
  if (o || !o && !s)
    if ((le(t) !== "body" || de(r)) && (c = Ee(t)), o) {
      const l = re(t, !0, s, t);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else r && (a.x = $e(r));
  let u = 0, d = 0;
  if (r && !o && !s) {
    const l = r.getBoundingClientRect();
    d = l.top + c.scrollTop, u = l.left + c.scrollLeft - // RTL <body> scrollbar.
    $e(r, l);
  }
  const f = i.left + c.scrollLeft - a.x - u, h = i.top + c.scrollTop - a.y - d;
  return {
    x: f,
    y: h,
    width: i.width,
    height: i.height
  };
}
function Pe(e) {
  return K(e).position === "static";
}
function ot(e, t) {
  if (!H(e) || K(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return z(e) === n && (n = n.ownerDocument.body), n;
}
function Tt(e, t) {
  const n = V(e);
  if (Re(e))
    return n;
  if (!H(e)) {
    let r = q(e);
    for (; r && !te(r); ) {
      if (F(r) && !Pe(r))
        return r;
      r = q(r);
    }
    return n;
  }
  let o = ot(e, t);
  for (; o && Vt(o) && Pe(o); )
    o = ot(o, t);
  return o && te(o) && Pe(o) && !We(o) ? n : o || Ht(e) || n;
}
const Pn = async function(e) {
  const t = this.getOffsetParent || Tt, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: An(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Tn(e) {
  return K(e).direction === "rtl";
}
const Dn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vn,
  getDocumentElement: z,
  getClippingRect: En,
  getOffsetParent: Tt,
  getElementRects: Pn,
  getClientRects: yn,
  getDimensions: Cn,
  getScale: se,
  isElement: F,
  isRTL: Tn
};
function Mn(e, t) {
  let n = null, o;
  const r = z(e);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), s();
    const {
      left: u,
      top: d,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !f || !h)
      return;
    const l = ge(d), g = ge(r.clientWidth - (u + f)), m = ge(r.clientHeight - (d + h)), y = ge(u), R = {
      rootMargin: -l + "px " + -g + "px " + -m + "px " + -y + "px",
      threshold: W(0, Y(1, a)) || 1
    };
    let v = !0;
    function A(T) {
      const O = T[0].intersectionRatio;
      if (O !== a) {
        if (!v)
          return i();
        O ? i(!1, O) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...R,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, R);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function On(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, u = Xe(e), d = r || s ? [...u ? ee(u) : [], ...ee(t)] : [];
  d.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const f = u && c ? Mn(u, n) : null;
  let h = -1, l = null;
  i && (l = new ResizeObserver((w) => {
    let [R] = w;
    R && R.target === u && l && (l.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var v;
      (v = l) == null || v.observe(t);
    })), n();
  }), u && !a && l.observe(u), l.observe(t));
  let g, m = a ? re(e) : null;
  a && y();
  function y() {
    const w = re(e);
    m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && n(), m = w, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((R) => {
      r && R.removeEventListener("scroll", n), s && R.removeEventListener("resize", n);
    }), f == null || f(), (w = l) == null || w.disconnect(), l = null, a && cancelAnimationFrame(g);
  };
}
const Ln = fn, Sn = dn, In = cn, kn = gn, rt = sn, Fn = un, $n = mn, _n = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Dn,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return rn(e, t, {
    ...r,
    platform: s
  });
};
var pe = typeof document < "u" ? gt : Ne;
function xe(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!xe(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !xe(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function it(e, t) {
  const n = Dt(e);
  return Math.round(t * n) / n;
}
function Te(e) {
  const t = p.useRef(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function Bn(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: a,
    open: u
  } = e, [d, f] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, l] = p.useState(o);
  xe(h, o) || l(o);
  const [g, m] = p.useState(null), [y, w] = p.useState(null), R = p.useCallback((b) => {
    b !== O.current && (O.current = b, m(b));
  }, []), v = p.useCallback((b) => {
    b !== L.current && (L.current = b, w(b));
  }, []), A = s || g, T = i || y, O = p.useRef(null), L = p.useRef(null), S = p.useRef(d), B = a != null, M = Te(a), I = Te(r), k = Te(u), $ = p.useCallback(() => {
    if (!O.current || !L.current)
      return;
    const b = {
      placement: t,
      strategy: n,
      middleware: h
    };
    I.current && (b.platform = I.current), _n(O.current, L.current, b).then((_) => {
      const D = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      C.current && !xe(S.current, D) && (S.current = D, kt.flushSync(() => {
        f(D);
      }));
    });
  }, [h, t, n, I, k]);
  pe(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, f((b) => ({
      ...b,
      isPositioned: !1
    })));
  }, [u]);
  const C = p.useRef(!1);
  pe(() => (C.current = !0, () => {
    C.current = !1;
  }), []), pe(() => {
    if (A && (O.current = A), T && (L.current = T), A && T) {
      if (M.current)
        return M.current(A, T, $);
      $();
    }
  }, [A, T, $, M, B]);
  const E = p.useMemo(() => ({
    reference: O,
    floating: L,
    setReference: R,
    setFloating: v
  }), [R, v]), x = p.useMemo(() => ({
    reference: A,
    floating: T
  }), [A, T]), P = p.useMemo(() => {
    const b = {
      position: n,
      left: 0,
      top: 0
    };
    if (!x.floating)
      return b;
    const _ = it(x.floating, d.x), D = it(x.floating, d.y);
    return c ? {
      ...b,
      transform: "translate(" + _ + "px, " + D + "px)",
      ...Dt(x.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: D
    };
  }, [n, c, x.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: $,
    refs: E,
    elements: x,
    floatingStyles: P
  }), [d, $, E, x, P]);
}
const Nn = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? rt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? rt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, wo = (e, t) => ({
  ...Ln(e),
  options: [e, t]
}), xo = (e, t) => ({
  ...Sn(e),
  options: [e, t]
}), bo = (e, t) => ({
  ...$n(e),
  options: [e, t]
}), Ro = (e, t) => ({
  ...In(e),
  options: [e, t]
}), Eo = (e, t) => ({
  ...kn(e),
  options: [e, t]
}), Co = (e, t) => ({
  ...Fn(e),
  options: [e, t]
}), Ao = (e, t) => ({
  ...Nn(e),
  options: [e, t]
}), Mt = {
  ...p
}, Wn = Mt.useInsertionEffect, Vn = Wn || ((e) => e());
function Q(e) {
  const t = p.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Vn(() => {
    t.current = e;
  }), p.useCallback(function() {
    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
var X = typeof document < "u" ? gt : Ne;
let st = !1, Hn = 0;
const ct = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Hn++
);
function jn() {
  const [e, t] = p.useState(() => st ? ct() : void 0);
  return X(() => {
    e == null && t(ct());
  }, []), p.useEffect(() => {
    st = !0;
  }, []), e;
}
const Kn = Mt.useId, Ot = Kn || jn;
let _e;
process.env.NODE_ENV !== "production" && (_e = /* @__PURE__ */ new Set());
function Yn() {
  for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  const r = "Floating UI: " + n.join(" ");
  if (!((e = _e) != null && e.has(r))) {
    var s;
    (s = _e) == null || s.add(r), console.error(r);
  }
}
function Un() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var o;
      (o = e.get(t)) == null || o.forEach((r) => r(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var o;
      e.set(t, ((o = e.get(t)) == null ? void 0 : o.filter((r) => r !== n)) || []);
    }
  };
}
const Xn = /* @__PURE__ */ p.createContext(null), zn = /* @__PURE__ */ p.createContext(null), ze = () => {
  var e;
  return ((e = p.useContext(Xn)) == null ? void 0 : e.id) || null;
}, qe = () => p.useContext(zn);
function Ge(e) {
  return "data-floating-ui-" + e;
}
function De(e) {
  const t = pt(e);
  return X(() => {
    t.current = e;
  }), t;
}
const lt = /* @__PURE__ */ Ge("safe-polygon");
function he(e, t, n) {
  return n && !Ie(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Po(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    dataRef: r,
    events: s,
    elements: i
  } = e, {
    enabled: c = !0,
    delay: a = 0,
    handleClose: u = null,
    mouseOnly: d = !1,
    restMs: f = 0,
    move: h = !0
  } = t, l = qe(), g = ze(), m = De(u), y = De(a), w = De(n), R = p.useRef(), v = p.useRef(-1), A = p.useRef(), T = p.useRef(-1), O = p.useRef(!0), L = p.useRef(!1), S = p.useRef(() => {
  }), B = p.useCallback(() => {
    var E;
    const x = (E = r.current.openEvent) == null ? void 0 : E.type;
    return (x == null ? void 0 : x.includes("mouse")) && x !== "mousedown";
  }, [r]);
  p.useEffect(() => {
    if (!c) return;
    function E(x) {
      let {
        open: P
      } = x;
      P || (clearTimeout(v.current), clearTimeout(T.current), O.current = !0);
    }
    return s.on("openchange", E), () => {
      s.off("openchange", E);
    };
  }, [c, s]), p.useEffect(() => {
    if (!c || !m.current || !n) return;
    function E(P) {
      B() && o(!1, P, "hover");
    }
    const x = oe(i.floating).documentElement;
    return x.addEventListener("mouseleave", E), () => {
      x.removeEventListener("mouseleave", E);
    };
  }, [i.floating, n, o, c, m, B]);
  const M = p.useCallback(function(E, x, P) {
    x === void 0 && (x = !0), P === void 0 && (P = "hover");
    const b = he(y.current, "close", R.current);
    b && !A.current ? (clearTimeout(v.current), v.current = window.setTimeout(() => o(!1, E, P), b)) : x && (clearTimeout(v.current), o(!1, E, P));
  }, [y, o]), I = Q(() => {
    S.current(), A.current = void 0;
  }), k = Q(() => {
    if (L.current) {
      const E = oe(i.floating).body;
      E.style.pointerEvents = "", E.removeAttribute(lt), L.current = !1;
    }
  });
  p.useEffect(() => {
    if (!c) return;
    function E() {
      return r.current.openEvent ? ["click", "mousedown"].includes(r.current.openEvent.type) : !1;
    }
    function x(D) {
      if (clearTimeout(v.current), O.current = !1, d && !Ie(R.current) || f > 0 && !he(y.current, "open"))
        return;
      const N = he(y.current, "open", R.current);
      N ? v.current = window.setTimeout(() => {
        w.current || o(!0, D, "hover");
      }, N) : o(!0, D, "hover");
    }
    function P(D) {
      if (E()) return;
      S.current();
      const N = oe(i.floating);
      if (clearTimeout(T.current), m.current && r.current.floatingContext) {
        n || clearTimeout(v.current), A.current = m.current({
          ...r.current.floatingContext,
          tree: l,
          x: D.clientX,
          y: D.clientY,
          onClose() {
            k(), I(), M(D, !0, "safe-polygon");
          }
        });
        const me = A.current;
        N.addEventListener("mousemove", me), S.current = () => {
          N.removeEventListener("mousemove", me);
        };
        return;
      }
      (R.current === "touch" ? !fe(i.floating, D.relatedTarget) : !0) && M(D);
    }
    function b(D) {
      E() || r.current.floatingContext && (m.current == null || m.current({
        ...r.current.floatingContext,
        tree: l,
        x: D.clientX,
        y: D.clientY,
        onClose() {
          k(), I(), M(D);
        }
      })(D));
    }
    if (F(i.domReference)) {
      var _;
      const D = i.domReference;
      return n && D.addEventListener("mouseleave", b), (_ = i.floating) == null || _.addEventListener("mouseleave", b), h && D.addEventListener("mousemove", x, {
        once: !0
      }), D.addEventListener("mouseenter", x), D.addEventListener("mouseleave", P), () => {
        var N;
        n && D.removeEventListener("mouseleave", b), (N = i.floating) == null || N.removeEventListener("mouseleave", b), h && D.removeEventListener("mousemove", x), D.removeEventListener("mouseenter", x), D.removeEventListener("mouseleave", P);
      };
    }
  }, [i, c, e, d, f, h, M, I, k, o, n, w, l, y, m, r]), X(() => {
    var E;
    if (c && n && (E = m.current) != null && E.__options.blockPointerEvents && B()) {
      L.current = !0;
      const P = i.floating;
      if (F(i.domReference) && P) {
        var x;
        const b = oe(i.floating).body;
        b.setAttribute(lt, "");
        const _ = i.domReference, D = l == null || (x = l.nodesRef.current.find((N) => N.id === g)) == null || (x = x.context) == null ? void 0 : x.elements.floating;
        return D && (D.style.pointerEvents = ""), b.style.pointerEvents = "none", _.style.pointerEvents = "auto", P.style.pointerEvents = "auto", () => {
          b.style.pointerEvents = "", _.style.pointerEvents = "", P.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, g, i, l, m, B]), X(() => {
    n || (R.current = void 0, I(), k());
  }, [n, I, k]), p.useEffect(() => () => {
    I(), clearTimeout(v.current), clearTimeout(T.current), k();
  }, [c, i.domReference, I, k]);
  const $ = p.useMemo(() => {
    function E(x) {
      R.current = x.pointerType;
    }
    return {
      onPointerDown: E,
      onPointerEnter: E,
      onMouseMove(x) {
        const {
          nativeEvent: P
        } = x;
        function b() {
          !O.current && !w.current && o(!0, P, "hover");
        }
        d && !Ie(R.current) || n || f === 0 || (clearTimeout(T.current), R.current === "touch" ? b() : T.current = window.setTimeout(b, f));
      }
    };
  }, [d, o, n, w, f]), C = p.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(v.current);
    },
    onMouseLeave(E) {
      M(E.nativeEvent, !1);
    }
  }), [M]);
  return p.useMemo(() => c ? {
    reference: $,
    floating: C
  } : {}, [c, $, C]);
}
const Be = () => {
}, Lt = /* @__PURE__ */ p.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: Be,
  setState: Be,
  isInstantPhase: !1
}), qn = () => p.useContext(Lt);
function To(e) {
  const {
    children: t,
    delay: n,
    timeoutMs: o = 0
  } = e, [r, s] = p.useReducer((a, u) => ({
    ...a,
    ...u
  }), {
    delay: n,
    timeoutMs: o,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), i = p.useRef(null), c = p.useCallback((a) => {
    s({
      currentId: a
    });
  }, []);
  return X(() => {
    r.currentId ? i.current === null ? i.current = r.currentId : r.isInstantPhase || s({
      isInstantPhase: !0
    }) : (r.isInstantPhase && s({
      isInstantPhase: !1
    }), i.current = null);
  }, [r.currentId, r.isInstantPhase]), /* @__PURE__ */ p.createElement(Lt.Provider, {
    value: p.useMemo(() => ({
      ...r,
      setState: s,
      setCurrentId: c
    }), [r, c])
  }, t);
}
function Do(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    floatingId: r
  } = e, {
    id: s
  } = t, i = s ?? r, c = qn(), {
    currentId: a,
    setCurrentId: u,
    initialDelay: d,
    setState: f,
    timeoutMs: h
  } = c;
  return X(() => {
    a && (f({
      delay: {
        open: 1,
        close: he(d, "close")
      }
    }), a !== i && o(!1));
  }, [i, o, f, a, d]), X(() => {
    function l() {
      o(!1), f({
        delay: d,
        currentId: null
      });
    }
    if (a && !n && a === i) {
      if (h) {
        const g = window.setTimeout(l, h);
        return () => {
          clearTimeout(g);
        };
      }
      l();
    }
  }, [n, f, a, i, o, d, h]), X(() => {
    u === Be || !n || u(i);
  }, [n, u, i]), c;
}
function Me(e, t) {
  let n = e.filter((r) => {
    var s;
    return r.parentId === t && ((s = r.context) == null ? void 0 : s.open);
  }), o = n;
  for (; o.length; )
    o = e.filter((r) => {
      var s;
      return (s = o) == null ? void 0 : s.some((i) => {
        var c;
        return r.parentId === i.id && ((c = r.context) == null ? void 0 : c.open);
      });
    }), n = n.concat(o);
  return n;
}
const Gn = "data-floating-ui-focusable", Jn = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Zn = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ut = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Mo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    elements: r,
    dataRef: s
  } = e, {
    enabled: i = !0,
    escapeKey: c = !0,
    outsidePress: a = !0,
    outsidePressEvent: u = "pointerdown",
    referencePress: d = !1,
    referencePressEvent: f = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: l,
    capture: g
  } = t, m = qe(), y = Q(typeof a == "function" ? a : () => !1), w = typeof a == "function" ? y : a, R = p.useRef(!1), v = p.useRef(!1), {
    escapeKey: A,
    outsidePress: T
  } = ut(l), {
    escapeKey: O,
    outsidePress: L
  } = ut(g), S = Q((C) => {
    var E;
    if (!n || !i || !c || C.key !== "Escape")
      return;
    const x = (E = s.current.floatingContext) == null ? void 0 : E.nodeId, P = m ? Me(m.nodesRef.current, x) : [];
    if (!A && (C.stopPropagation(), P.length > 0)) {
      let b = !0;
      if (P.forEach((_) => {
        var D;
        if ((D = _.context) != null && D.open && !_.context.dataRef.current.__escapeKeyBubbles) {
          b = !1;
          return;
        }
      }), !b)
        return;
    }
    o(!1, Xt(C) ? C.nativeEvent : C, "escape-key");
  }), B = Q((C) => {
    var E;
    const x = () => {
      var P;
      S(C), (P = ie(C)) == null || P.removeEventListener("keydown", x);
    };
    (E = ie(C)) == null || E.addEventListener("keydown", x);
  }), M = Q((C) => {
    var E;
    const x = R.current;
    R.current = !1;
    const P = v.current;
    if (v.current = !1, u === "click" && P || x || typeof w == "function" && !w(C))
      return;
    const b = ie(C), _ = "[" + Ge("inert") + "]", D = oe(r.floating).querySelectorAll(_);
    let N = F(b) ? b : null;
    for (; N && !te(N); ) {
      const j = q(N);
      if (te(j) || !F(j))
        break;
      N = j;
    }
    if (D.length && F(b) && !zt(b) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !fe(b, r.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(D).every((j) => !fe(N, j)))
      return;
    if (H(b) && $) {
      const j = b.clientWidth > 0 && b.scrollWidth > b.clientWidth, Z = b.clientHeight > 0 && b.scrollHeight > b.clientHeight;
      let ae = Z && C.offsetX > b.clientWidth;
      if (Z && K(b).direction === "rtl" && (ae = C.offsetX <= b.offsetWidth - b.clientWidth), ae || j && C.offsetY > b.clientHeight)
        return;
    }
    const Ce = (E = s.current.floatingContext) == null ? void 0 : E.nodeId, me = m && Me(m.nodesRef.current, Ce).some((j) => {
      var Z;
      return Ae(C, (Z = j.context) == null ? void 0 : Z.elements.floating);
    });
    if (Ae(C, r.floating) || Ae(C, r.domReference) || me)
      return;
    const Je = m ? Me(m.nodesRef.current, Ce) : [];
    if (Je.length > 0) {
      let j = !0;
      if (Je.forEach((Z) => {
        var ae;
        if ((ae = Z.context) != null && ae.open && !Z.context.dataRef.current.__outsidePressBubbles) {
          j = !1;
          return;
        }
      }), !j)
        return;
    }
    o(!1, C, "outside-press");
  }), I = Q((C) => {
    var E;
    const x = () => {
      var P;
      M(C), (P = ie(C)) == null || P.removeEventListener(u, x);
    };
    (E = ie(C)) == null || E.addEventListener(u, x);
  });
  p.useEffect(() => {
    if (!n || !i)
      return;
    s.current.__escapeKeyBubbles = A, s.current.__outsidePressBubbles = T;
    function C(P) {
      o(!1, P, "ancestor-scroll");
    }
    const E = oe(r.floating);
    c && E.addEventListener("keydown", O ? B : S, O), w && E.addEventListener(u, L ? I : M, L);
    let x = [];
    return h && (F(r.domReference) && (x = ee(r.domReference)), F(r.floating) && (x = x.concat(ee(r.floating))), !F(r.reference) && r.reference && r.reference.contextElement && (x = x.concat(ee(r.reference.contextElement)))), x = x.filter((P) => {
      var b;
      return P !== ((b = E.defaultView) == null ? void 0 : b.visualViewport);
    }), x.forEach((P) => {
      P.addEventListener("scroll", C, {
        passive: !0
      });
    }), () => {
      c && E.removeEventListener("keydown", O ? B : S, O), w && E.removeEventListener(u, L ? I : M, L), x.forEach((P) => {
        P.removeEventListener("scroll", C);
      });
    };
  }, [s, r, c, w, u, n, o, h, i, A, T, S, O, B, M, L, I]), p.useEffect(() => {
    R.current = !1;
  }, [w, u]);
  const k = p.useMemo(() => ({
    onKeyDown: S,
    [Jn[f]]: (C) => {
      d && o(!1, C.nativeEvent, "reference-press");
    }
  }), [S, o, d, f]), $ = p.useMemo(() => ({
    onKeyDown: S,
    onMouseDown() {
      v.current = !0;
    },
    onMouseUp() {
      v.current = !0;
    },
    [Zn[u]]: () => {
      R.current = !0;
    }
  }), [S, u]);
  return p.useMemo(() => i ? {
    reference: k,
    floating: $
  } : {}, [i, k, $]);
}
function Qn(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: o
  } = e, r = Ot(), s = p.useRef({}), [i] = p.useState(() => Un()), c = ze() != null;
  if (process.env.NODE_ENV !== "production") {
    const l = o.reference;
    l && !F(l) && Yn("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, u] = p.useState(o.reference), d = Q((l, g, m) => {
    s.current.openEvent = l ? g : void 0, i.emit("openchange", {
      open: l,
      event: g,
      reason: m,
      nested: c
    }), n == null || n(l, g, m);
  }), f = p.useMemo(() => ({
    setPositionReference: u
  }), []), h = p.useMemo(() => ({
    reference: a || o.reference || null,
    floating: o.floating || null,
    domReference: o.reference
  }), [a, o.reference, o.floating]);
  return p.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: d,
    elements: h,
    events: i,
    floatingId: r,
    refs: f
  }), [t, d, h, i, r, f]);
}
function Oo(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Qn({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), o = e.rootContext || n, r = o.elements, [s, i] = p.useState(null), [c, a] = p.useState(null), d = (r == null ? void 0 : r.reference) || s, f = p.useRef(null), h = qe();
  X(() => {
    d && (f.current = d);
  }, [d]);
  const l = Bn({
    ...e,
    elements: {
      ...r,
      ...c && {
        reference: c
      }
    }
  }), g = p.useCallback((v) => {
    const A = F(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    a(A), l.refs.setReference(A);
  }, [l.refs]), m = p.useCallback((v) => {
    (F(v) || v === null) && (f.current = v, i(v)), (F(l.refs.reference.current) || l.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !F(v)) && l.refs.setReference(v);
  }, [l.refs]), y = p.useMemo(() => ({
    ...l.refs,
    setReference: m,
    setPositionReference: g,
    domReference: f
  }), [l.refs, m, g]), w = p.useMemo(() => ({
    ...l.elements,
    domReference: d
  }), [l.elements, d]), R = p.useMemo(() => ({
    ...l,
    ...o,
    refs: y,
    elements: w,
    nodeId: t
  }), [l, y, w, t, o]);
  return X(() => {
    o.dataRef.current.floatingContext = R;
    const v = h == null ? void 0 : h.nodesRef.current.find((A) => A.id === t);
    v && (v.context = R);
  }), p.useMemo(() => ({
    ...l,
    context: R,
    refs: y,
    elements: w
  }), [l, y, w, R]);
}
function Lo(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    events: r,
    dataRef: s,
    elements: i
  } = e, {
    enabled: c = !0,
    visibleOnly: a = !0
  } = t, u = p.useRef(!1), d = p.useRef(), f = p.useRef(!0);
  p.useEffect(() => {
    if (!c) return;
    const l = V(i.domReference);
    function g() {
      !n && H(i.domReference) && i.domReference === Qe(oe(i.domReference)) && (u.current = !0);
    }
    function m() {
      f.current = !0;
    }
    return l.addEventListener("blur", g), l.addEventListener("keydown", m, !0), () => {
      l.removeEventListener("blur", g), l.removeEventListener("keydown", m, !0);
    };
  }, [i.domReference, n, c]), p.useEffect(() => {
    if (!c) return;
    function l(g) {
      let {
        reason: m
      } = g;
      (m === "reference-press" || m === "escape-key") && (u.current = !0);
    }
    return r.on("openchange", l), () => {
      r.off("openchange", l);
    };
  }, [r, c]), p.useEffect(() => () => {
    clearTimeout(d.current);
  }, []);
  const h = p.useMemo(() => ({
    onPointerDown(l) {
      jt(l.nativeEvent) || (f.current = !1);
    },
    onMouseLeave() {
      u.current = !1;
    },
    onFocus(l) {
      if (u.current) return;
      const g = ie(l.nativeEvent);
      if (a && F(g))
        try {
          if (Kt() && Yt()) throw Error();
          if (!g.matches(":focus-visible")) return;
        } catch {
          if (!f.current && !Gt(g))
            return;
        }
      o(!0, l.nativeEvent, "focus");
    },
    onBlur(l) {
      u.current = !1;
      const g = l.relatedTarget, m = l.nativeEvent, y = F(g) && g.hasAttribute(Ge("focus-guard")) && g.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var w;
        const R = Qe(i.domReference ? i.domReference.ownerDocument : document);
        !g && R === i.domReference || fe((w = s.current.floatingContext) == null ? void 0 : w.refs.floating.current, R) || fe(i.domReference, R) || y || o(!1, m, "focus");
      });
    }
  }), [s, i.domReference, o, a]);
  return p.useMemo(() => c ? {
    reference: h
  } : {}, [c, h]);
}
const at = "active", ft = "selected";
function Oe(e, t, n) {
  const o = /* @__PURE__ */ new Map(), r = n === "item";
  let s = e;
  if (r && e) {
    const {
      [at]: i,
      [ft]: c,
      ...a
    } = e;
    s = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Gn]: ""
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((a) => {
      let [u, d] = a;
      if (!(r && [at, ft].includes(u)))
        if (u.indexOf("on") === 0) {
          if (o.has(u) || o.set(u, []), typeof d == "function") {
            var f;
            (f = o.get(u)) == null || f.push(d), i[u] = function() {
              for (var h, l = arguments.length, g = new Array(l), m = 0; m < l; m++)
                g[m] = arguments[m];
              return (h = o.get(u)) == null ? void 0 : h.map((y) => y(...g)).find((y) => y !== void 0);
            };
          }
        } else
          i[u] = d;
    }), i), {})
  };
}
function So(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), o = e.map((c) => c == null ? void 0 : c.item), r = p.useCallback(
    (c) => Oe(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = p.useCallback(
    (c) => Oe(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = p.useCallback(
    (c) => Oe(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    o
  );
  return p.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: s,
    getItemProps: i
  }), [r, s, i]);
}
const eo = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Io(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: o,
    floatingId: r
  } = e, {
    enabled: s = !0,
    role: i = "dialog"
  } = t, c = (n = eo.get(i)) != null ? n : i, a = Ot(), d = ze() != null, f = p.useMemo(() => c === "tooltip" || i === "label" ? {
    ["aria-" + (i === "label" ? "labelledby" : "describedby")]: o ? r : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": c === "alertdialog" ? "dialog" : c,
    "aria-controls": o ? r : void 0,
    ...c === "listbox" && {
      role: "combobox"
    },
    ...c === "menu" && {
      id: a
    },
    ...c === "menu" && d && {
      role: "menuitem"
    },
    ...i === "select" && {
      "aria-autocomplete": "none"
    },
    ...i === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [c, r, d, o, a, i]), h = p.useMemo(() => {
    const g = {
      id: r,
      ...c && {
        role: c
      }
    };
    return c === "tooltip" || i === "label" ? g : {
      ...g,
      ...c === "menu" && {
        "aria-labelledby": a
      }
    };
  }, [c, r, a, i]), l = p.useCallback((g) => {
    let {
      active: m,
      selected: y
    } = g;
    const w = {
      role: "option",
      ...m && {
        id: r + "-option"
      }
    };
    switch (i) {
      case "select":
        return {
          ...w,
          "aria-selected": m && y
        };
      case "combobox":
        return {
          ...w,
          ...m && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [r, i]);
  return p.useMemo(() => s ? {
    reference: f,
    floating: h,
    item: l
  } : {}, [s, f, h, l]);
}
function ko(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, o] = t.split("-"), r = n === "right" ? "left" : "right";
    return o === void 0 ? r : `${r}-${o}`;
  }
  return t;
}
function dt(e, t, n, o) {
  return e === "center" || o === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function mt(e, t, n, o, r) {
  return e === "center" || o === "center" ? { left: t } : e === "end" ? { [r === "ltr" ? "right" : "left"]: n } : e === "start" ? { [r === "ltr" ? "left" : "right"]: n } : {};
}
const to = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function no({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: o,
  arrowPosition: r,
  arrowX: s,
  arrowY: i,
  dir: c
}) {
  const [a, u = "center"] = e.split("-"), d = {
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [to[a]]: o
  }, f = -t / 2;
  return a === "left" ? {
    ...d,
    ...dt(u, i, n, r),
    right: f,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : a === "right" ? {
    ...d,
    ...dt(u, i, n, r),
    left: f,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : a === "top" ? {
    ...d,
    ...mt(u, s, n, r, c),
    bottom: f,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : a === "bottom" ? {
    ...d,
    ...mt(u, s, n, r, c),
    top: f,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const oo = ht(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: o,
    arrowPosition: r,
    visible: s,
    arrowX: i,
    arrowY: c,
    style: a,
    ...u
  }, d) => {
    const { dir: f } = $t();
    return s ? /* @__PURE__ */ ve(
      "div",
      {
        ...u,
        ref: d,
        style: {
          ...a,
          ...no({
            position: e,
            arrowSize: t,
            arrowOffset: n,
            arrowRadius: o,
            arrowPosition: r,
            dir: f,
            arrowX: i,
            arrowY: c
          })
        }
      }
    ) : null;
  }
);
oo.displayName = "@mantine/core/FloatingArrow";
function ro(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const io = {}, St = ht((e, t) => {
  const { children: n, target: o, ...r } = _t("Portal", io, e), [s, i] = vt(!1), c = pt(null);
  return Bt(() => (i(!0), c.current = o ? typeof o == "string" ? document.querySelector(o) : o : ro(r), Nt(t, c.current), !o && c.current && document.body.appendChild(c.current), () => {
    !o && c.current && document.body.removeChild(c.current);
  }), [o]), !s || !c.current ? null : Ft(/* @__PURE__ */ ve(yt, { children: n }), c.current);
});
St.displayName = "@mantine/core/Portal";
function so({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ ve(St, { ...n, children: t }) : /* @__PURE__ */ ve(yt, { children: t });
}
so.displayName = "@mantine/core/OptionalPortal";
function Fo({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: o
}) {
  const [r, s] = vt(0);
  Ne(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return On(
        t.refs.reference.current,
        t.refs.floating.current,
        t.update
      );
  }, [
    t.refs.reference.current,
    t.refs.floating.current,
    e,
    r,
    n
  ]), Ze(() => {
    t.update();
  }, o), Ze(() => {
    s((i) => i + 1);
  }, [e]);
}
export {
  To as F,
  so as O,
  yo as a,
  qn as b,
  Ao as c,
  Co as d,
  So as e,
  Ro as f,
  ee as g,
  Po as h,
  vo as i,
  Lo as j,
  Io as k,
  Mo as l,
  Do as m,
  Fo as n,
  wo as o,
  ko as p,
  oo as q,
  bo as r,
  xo as s,
  Eo as t,
  Oo as u
};
