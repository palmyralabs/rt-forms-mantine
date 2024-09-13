import * as p from "react";
import { Fragment as St, useLayoutEffect as dt, useEffect as $e, useRef as mt, forwardRef as gt, useState as pt } from "react";
import * as It from "react-dom";
import { createPortal as kt } from "react-dom";
import { jsx as ve, Fragment as ht } from "react/jsx-runtime";
import { u as Ft } from "./DirectionProvider.js";
import { u as $t } from "./factory.js";
import { u as _t } from "./use-isomorphic-effect.js";
import { a as Bt } from "./use-merged-ref.js";
import { u as qe } from "./Transition.js";
function ho(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== St : !1;
}
const Nt = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function vo(e) {
  return Nt[e];
}
function le(e) {
  return vt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function V(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function J(e) {
  var t;
  return (t = (vt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vt(e) {
  return e instanceof Node || e instanceof V(e).Node;
}
function $(e) {
  return e instanceof Element || e instanceof V(e).Element;
}
function j(e) {
  return e instanceof HTMLElement || e instanceof V(e).HTMLElement;
}
function Oe(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function de(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Y(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Wt(e) {
  return ["table", "td", "th"].includes(le(e));
}
function be(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _e(e) {
  const t = Be(), n = $(e) ? Y(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Vt(e) {
  let t = z(e);
  for (; j(t) && !te(t); ) {
    if (_e(t))
      return t;
    if (be(t))
      return null;
    t = z(t);
  }
  return null;
}
function Be() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function te(e) {
  return ["html", "body", "#document"].includes(le(e));
}
function Y(e) {
  return V(e).getComputedStyle(e);
}
function Re(e) {
  return $(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function z(e) {
  if (le(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Oe(e) && e.host || // Fallback.
    J(e)
  );
  return Oe(t) ? t.host : t;
}
function yt(e) {
  const t = z(e);
  return te(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : j(t) && de(t) ? t : yt(t);
}
function ee(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = yt(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = V(r);
  if (s) {
    const c = De(i);
    return t.concat(i, i.visualViewport || [], de(r) ? r : [], c && n ? ee(c) : []);
  }
  return t.concat(r, ee(r, [], n));
}
function De(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ge(e) {
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
  if (n && Oe(n)) {
    let o = t;
    for (; o; ) {
      if (e === o)
        return !0;
      o = o.parentNode || o.host;
    }
  }
  return !1;
}
function xt() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function wt() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: o
    } = t;
    return n + "/" + o;
  }).join(" ") : navigator.userAgent;
}
function Ht(e) {
  return Yt() ? !1 : !Je() && e.width === 0 && e.height === 0 || Je() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function jt() {
  return /apple/i.test(navigator.vendor);
}
function Je() {
  const e = /android/i;
  return e.test(xt()) || e.test(wt());
}
function Kt() {
  return xt().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Yt() {
  return wt().includes("jsdom/");
}
function Le(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function Ut(e) {
  return "nativeEvent" in e;
}
function Xt(e) {
  return e.matches("html,body");
}
function oe(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Ce(e, t) {
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
const zt = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function qt(e) {
  return j(e) && e.matches(zt);
}
const H = Math.min, W = Math.max, ye = Math.round, ge = Math.floor, ne = (e) => ({
  x: e,
  y: e
}), Gt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jt = {
  start: "end",
  end: "start"
};
function Se(e, t, n) {
  return W(e, H(t, n));
}
function q(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function U(e) {
  return e.split("-")[0];
}
function ue(e) {
  return e.split("-")[1];
}
function Ne(e) {
  return e === "x" ? "y" : "x";
}
function We(e) {
  return e === "y" ? "height" : "width";
}
function G(e) {
  return ["top", "bottom"].includes(U(e)) ? "y" : "x";
}
function Ve(e) {
  return Ne(G(e));
}
function Zt(e, t, n) {
  n === void 0 && (n = !1);
  const o = ue(e), r = Ve(e), s = We(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = xe(i)), [i, xe(i)];
}
function Qt(e) {
  const t = xe(e);
  return [Ie(e), t, Ie(t)];
}
function Ie(e) {
  return e.replace(/start|end/g, (t) => Jt[t]);
}
function en(e, t, n) {
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
function tn(e, t, n, o) {
  const r = ue(e);
  let s = en(U(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Ie)))), s;
}
function xe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gt[t]);
}
function nn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function He(e) {
  return typeof e != "number" ? nn(e) : {
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
function Ze(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = G(t), i = Ve(t), c = We(i), l = U(t), a = s === "y", d = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, h = o[c] / 2 - r[c] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      u = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      u = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (ue(t)) {
    case "start":
      u[i] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      u[i] += h * (n && a ? -1 : 1);
      break;
  }
  return u;
}
const on = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, c = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let a = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: f
  } = Ze(a, o, l), h = o, u = {}, g = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: y,
      fn: x
    } = c[m], {
      x: b,
      y: v,
      data: C,
      reset: T
    } = await x({
      x: d,
      y: f,
      initialPlacement: o,
      placement: h,
      strategy: r,
      middlewareData: u,
      rects: a,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = v ?? f, u = {
      ...u,
      [y]: {
        ...u[y],
        ...C
      }
    }, T && g <= 50 && (g++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (a = T.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : T.rects), {
      x: d,
      y: f
    } = Ze(a, h, l)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: r,
    middlewareData: u
  };
};
async function je(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: c,
    strategy: l
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: u = 0
  } = q(t, e), g = He(u), y = c[h ? f === "floating" ? "reference" : "floating" : f], x = ce(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: d,
    strategy: l
  })), b = f === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), C = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ce(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: b,
    offsetParent: v,
    strategy: l
  }) : b);
  return {
    top: (x.top - T.top + g.top) / C.y,
    bottom: (T.bottom - x.bottom + g.bottom) / C.y,
    left: (x.left - T.left + g.left) / C.x,
    right: (T.right - x.right + g.right) / C.x
  };
}
const rn = (e) => ({
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
      middlewareData: l
    } = t, {
      element: a,
      padding: d = 0
    } = q(e, t) || {};
    if (a == null)
      return {};
    const f = He(d), h = {
      x: n,
      y: o
    }, u = Ve(r), g = We(u), m = await i.getDimensions(a), y = u === "y", x = y ? "top" : "left", b = y ? "bottom" : "right", v = y ? "clientHeight" : "clientWidth", C = s.reference[g] + s.reference[u] - h[u] - s.floating[g], T = h[u] - s.reference[u], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a));
    let L = M ? M[v] : 0;
    (!L || !await (i.isElement == null ? void 0 : i.isElement(M))) && (L = c.floating[v] || s.floating[g]);
    const S = C / 2 - T / 2, _ = L / 2 - m[g] / 2 - 1, O = H(f[x], _), I = H(f[b], _), k = O, B = L - m[g] - I, A = L / 2 - m[g] / 2 + S, R = Se(k, A, B), E = !l.arrow && ue(r) != null && A !== R && s.reference[g] / 2 - (A < k ? O : I) - m[g] / 2 < 0, w = E ? A < k ? A - k : A - B : 0;
    return {
      [u]: h[u] + w,
      data: {
        [u]: R,
        centerOffset: A - R - w,
        ...E && {
          alignmentOffset: w
        }
      },
      reset: E
    };
  }
}), sn = function(e) {
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
        platform: l,
        elements: a
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...y
      } = q(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = U(r), b = G(c), v = U(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), T = h || (v || !m ? [xe(c)] : Qt(c)), M = g !== "none";
      !h && M && T.push(...tn(c, m, g, C));
      const L = [c, ...T], S = await je(t, y), _ = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && _.push(S[x]), f) {
        const A = Zt(r, i, C);
        _.push(S[A[0]], S[A[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: _
      }], !_.every((A) => A <= 0)) {
        var I, k;
        const A = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, R = L[A];
        if (R)
          return {
            data: {
              index: A,
              overflows: O
            },
            reset: {
              placement: R
            }
          };
        let E = (k = O.filter((w) => w.overflows[0] <= 0).sort((w, P) => w.overflows[1] - P.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (u) {
            case "bestFit": {
              var B;
              const w = (B = O.filter((P) => {
                if (M) {
                  const F = G(P.placement);
                  return F === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, D) => F + D, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : B[0];
              w && (E = w);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (r !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function bt(e) {
  const t = H(...e.map((s) => s.left)), n = H(...e.map((s) => s.top)), o = W(...e.map((s) => s.right)), r = W(...e.map((s) => s.bottom));
  return {
    x: t,
    y: n,
    width: o - t,
    height: r - n
  };
}
function cn(e) {
  const t = e.slice().sort((r, s) => r.y - s.y), n = [];
  let o = null;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    !o || s.y - o.y > o.height / 2 ? n.push([s]) : n[n.length - 1].push(s), o = s;
  }
  return n.map((r) => ce(bt(r)));
}
const ln = function(e) {
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
        x: l,
        y: a
      } = q(e, t), d = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(o.reference)) || []), f = cn(d), h = ce(bt(d)), u = He(c);
      function g() {
        if (f.length === 2 && f[0].left > f[1].right && l != null && a != null)
          return f.find((y) => l > y.left - u.left && l < y.right + u.right && a > y.top - u.top && a < y.bottom + u.bottom) || h;
        if (f.length >= 2) {
          if (G(n) === "y") {
            const O = f[0], I = f[f.length - 1], k = U(n) === "top", B = O.top, A = I.bottom, R = k ? O.left : I.left, E = k ? O.right : I.right, w = E - R, P = A - B;
            return {
              top: B,
              bottom: A,
              left: R,
              right: E,
              width: w,
              height: P,
              x: R,
              y: B
            };
          }
          const y = U(n) === "left", x = W(...f.map((O) => O.right)), b = H(...f.map((O) => O.left)), v = f.filter((O) => y ? O.left === b : O.right === x), C = v[0].top, T = v[v.length - 1].bottom, M = b, L = x, S = L - M, _ = T - C;
          return {
            top: C,
            bottom: T,
            left: M,
            right: L,
            width: S,
            height: _,
            x: M,
            y: C
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
async function un(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = U(n), c = ue(n), l = G(n) === "y", a = ["left", "top"].includes(i) ? -1 : 1, d = s && l ? -1 : 1, f = q(t, e);
  let {
    mainAxis: h,
    crossAxis: u,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return c && typeof g == "number" && (u = c === "end" ? g * -1 : g), l ? {
    x: u * d,
    y: h * a
  } : {
    x: h * a,
    y: u * d
  };
}
const an = function(e) {
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
      } = t, l = await un(t, e);
      return i === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, fn = function(e) {
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
              x,
              y: b
            } = y;
            return {
              x,
              y: b
            };
          }
        },
        ...l
      } = q(e, t), a = {
        x: n,
        y: o
      }, d = await je(t, l), f = G(U(r)), h = Ne(f);
      let u = a[h], g = a[f];
      if (s) {
        const y = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", b = u + d[y], v = u - d[x];
        u = Se(b, u, v);
      }
      if (i) {
        const y = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", b = g + d[y], v = g - d[x];
        g = Se(b, g, v);
      }
      const m = c.fn({
        ...t,
        [h]: u,
        [f]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - o
        }
      };
    }
  };
}, dn = function(e) {
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
        mainAxis: l = !0,
        crossAxis: a = !0
      } = q(e, t), d = {
        x: n,
        y: o
      }, f = G(r), h = Ne(f);
      let u = d[h], g = d[f];
      const m = q(c, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const v = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[v] + y.mainAxis, T = s.reference[h] + s.reference[v] - y.mainAxis;
        u < C ? u = C : u > T && (u = T);
      }
      if (a) {
        var x, b;
        const v = h === "y" ? "width" : "height", C = ["top", "left"].includes(U(r)), T = s.reference[f] - s.floating[v] + (C && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (C ? 0 : y.crossAxis), M = s.reference[f] + s.reference[v] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (C ? y.crossAxis : 0);
        g < T ? g = T : g > M && (g = M);
      }
      return {
        [h]: u,
        [f]: g
      };
    }
  };
}, mn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...c
      } = q(e, t), l = await je(t, c), a = U(n), d = ue(n), f = G(n) === "y", {
        width: h,
        height: u
      } = o.floating;
      let g, m;
      a === "top" || a === "bottom" ? (g = a, m = d === (await (r.isRTL == null ? void 0 : r.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = a, g = d === "end" ? "top" : "bottom");
      const y = u - l.top - l.bottom, x = h - l.left - l.right, b = H(u - l[g], y), v = H(h - l[m], x), C = !t.middlewareData.shift;
      let T = b, M = v;
      if (f ? M = d || C ? H(v, x) : x : T = d || C ? H(b, y) : y, C && !d) {
        const S = W(l.left, 0), _ = W(l.right, 0), O = W(l.top, 0), I = W(l.bottom, 0);
        f ? M = h - 2 * (S !== 0 || _ !== 0 ? S + _ : W(l.left, l.right)) : T = u - 2 * (O !== 0 || I !== 0 ? O + I : W(l.top, l.bottom));
      }
      await i({
        ...t,
        availableWidth: M,
        availableHeight: T
      });
      const L = await r.getDimensions(s.floating);
      return h !== L.width || u !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Rt(e) {
  const t = Y(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = j(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, c = ye(n) !== s || ye(o) !== i;
  return c && (n = s, o = i), {
    width: n,
    height: o,
    $: c
  };
}
function Ke(e) {
  return $(e) ? e : e.contextElement;
}
function se(e) {
  const t = Ke(e);
  if (!j(t))
    return ne(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Rt(t);
  let i = (s ? ye(n.width) : n.width) / o, c = (s ? ye(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const gn = /* @__PURE__ */ ne(0);
function Et(e) {
  const t = V(e);
  return !Be() || !t.visualViewport ? gn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== V(e) ? !1 : t;
}
function re(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Ke(e);
  let i = ne(1);
  t && (o ? $(o) && (i = se(o)) : i = se(e));
  const c = pn(s, n, o) ? Et(s) : ne(0);
  let l = (r.left + c.x) / i.x, a = (r.top + c.y) / i.y, d = r.width / i.x, f = r.height / i.y;
  if (s) {
    const h = V(s), u = o && $(o) ? V(o) : o;
    let g = h, m = De(g);
    for (; m && o && u !== g; ) {
      const y = se(m), x = m.getBoundingClientRect(), b = Y(m), v = x.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, C = x.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, a *= y.y, d *= y.x, f *= y.y, l += v, a += C, g = V(m), m = De(g);
    }
  }
  return ce({
    width: d,
    height: f,
    x: l,
    y: a
  });
}
function hn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = J(o), c = t ? be(t.floating) : !1;
  if (o === i || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ne(1);
  const d = ne(0), f = j(o);
  if ((f || !f && !s) && ((le(o) !== "body" || de(i)) && (l = Re(o)), j(o))) {
    const h = re(o);
    a = se(o), d.x = h.x + o.clientLeft, d.y = h.y + o.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + d.x,
    y: n.y * a.y - l.scrollTop * a.y + d.y
  };
}
function vn(e) {
  return Array.from(e.getClientRects());
}
function Ct(e) {
  return re(J(e)).left + Re(e).scrollLeft;
}
function yn(e) {
  const t = J(e), n = Re(e), o = e.ownerDocument.body, r = W(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = W(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + Ct(e);
  const c = -n.scrollTop;
  return Y(o).direction === "rtl" && (i += W(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: c
  };
}
function xn(e, t) {
  const n = V(e), o = J(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, c = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    const a = Be();
    (!a || a && t === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function wn(e, t) {
  const n = re(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = j(e) ? se(e) : ne(1), i = e.clientWidth * s.x, c = e.clientHeight * s.y, l = r * s.x, a = o * s.y;
  return {
    width: i,
    height: c,
    x: l,
    y: a
  };
}
function Qe(e, t, n) {
  let o;
  if (t === "viewport")
    o = xn(e, n);
  else if (t === "document")
    o = yn(J(e));
  else if ($(t))
    o = wn(t, n);
  else {
    const r = Et(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return ce(o);
}
function Pt(e, t) {
  const n = z(e);
  return n === t || !$(n) || te(n) ? !1 : Y(n).position === "fixed" || Pt(n, t);
}
function bn(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ee(e, [], !1).filter((c) => $(c) && le(c) !== "body"), r = null;
  const s = Y(e).position === "fixed";
  let i = s ? z(e) : e;
  for (; $(i) && !te(i); ) {
    const c = Y(i), l = _e(i);
    !l && c.position === "fixed" && (r = null), (s ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || de(i) && !l && Pt(e, i)) ? o = o.filter((d) => d !== i) : r = c, i = z(i);
  }
  return t.set(e, o), o;
}
function Rn(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? be(t) ? [] : bn(t, this._c) : [].concat(n), o], c = i[0], l = i.reduce((a, d) => {
    const f = Qe(t, d, r);
    return a.top = W(f.top, a.top), a.right = H(f.right, a.right), a.bottom = H(f.bottom, a.bottom), a.left = W(f.left, a.left), a;
  }, Qe(t, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function En(e) {
  const {
    width: t,
    height: n
  } = Rt(e);
  return {
    width: t,
    height: n
  };
}
function Cn(e, t, n) {
  const o = j(t), r = J(t), s = n === "fixed", i = re(e, !0, s, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ne(0);
  if (o || !o && !s)
    if ((le(t) !== "body" || de(r)) && (c = Re(t)), o) {
      const f = re(t, !0, s, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else r && (l.x = Ct(r));
  const a = i.left + c.scrollLeft - l.x, d = i.top + c.scrollTop - l.y;
  return {
    x: a,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Pe(e) {
  return Y(e).position === "static";
}
function et(e, t) {
  return !j(e) || Y(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function At(e, t) {
  const n = V(e);
  if (be(e))
    return n;
  if (!j(e)) {
    let r = z(e);
    for (; r && !te(r); ) {
      if ($(r) && !Pe(r))
        return r;
      r = z(r);
    }
    return n;
  }
  let o = et(e, t);
  for (; o && Wt(o) && Pe(o); )
    o = et(o, t);
  return o && te(o) && Pe(o) && !_e(o) ? n : o || Vt(e) || n;
}
const Pn = async function(e) {
  const t = this.getOffsetParent || At, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Cn(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function An(e) {
  return Y(e).direction === "rtl";
}
const Tn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hn,
  getDocumentElement: J,
  getClippingRect: Rn,
  getOffsetParent: At,
  getElementRects: Pn,
  getClientRects: vn,
  getDimensions: En,
  getScale: se,
  isElement: $,
  isRTL: An
};
function Mn(e, t) {
  let n = null, o;
  const r = J(e);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function i(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), s();
    const {
      left: a,
      top: d,
      width: f,
      height: h
    } = e.getBoundingClientRect();
    if (c || t(), !f || !h)
      return;
    const u = ge(d), g = ge(r.clientWidth - (a + f)), m = ge(r.clientHeight - (d + h)), y = ge(a), b = {
      rootMargin: -u + "px " + -g + "px " + -m + "px " + -y + "px",
      threshold: W(0, H(1, l)) || 1
    };
    let v = !0;
    function C(T) {
      const M = T[0].intersectionRatio;
      if (M !== l) {
        if (!v)
          return i();
        M ? i(!1, M) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, b);
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
    animationFrame: l = !1
  } = o, a = Ke(e), d = r || s ? [...a ? ee(a) : [], ...ee(t)] : [];
  d.forEach((x) => {
    r && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = a && c ? Mn(a, n) : null;
  let h = -1, u = null;
  i && (u = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === a && u && (u.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var v;
      (v = u) == null || v.observe(t);
    })), n();
  }), a && !l && u.observe(a), u.observe(t));
  let g, m = l ? re(e) : null;
  l && y();
  function y() {
    const x = re(e);
    m && (x.x !== m.x || x.y !== m.y || x.width !== m.width || x.height !== m.height) && n(), m = x, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var x;
    d.forEach((b) => {
      r && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), f == null || f(), (x = u) == null || x.disconnect(), u = null, l && cancelAnimationFrame(g);
  };
}
const Dn = an, Ln = fn, Sn = sn, In = mn, tt = rn, kn = ln, Fn = dn, $n = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Tn,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return on(e, t, {
    ...r,
    platform: s
  });
};
var pe = typeof document < "u" ? dt : $e;
function we(e, t) {
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
        if (!we(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !we(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Tt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nt(e, t) {
  const n = Tt(e);
  return Math.round(t * n) / n;
}
function ot(e) {
  const t = p.useRef(e);
  return pe(() => {
    t.current = e;
  }), t;
}
function _n(e) {
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
    whileElementsMounted: l,
    open: a
  } = e, [d, f] = p.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, u] = p.useState(o);
  we(h, o) || u(o);
  const [g, m] = p.useState(null), [y, x] = p.useState(null), b = p.useCallback((w) => {
    w !== M.current && (M.current = w, m(w));
  }, []), v = p.useCallback((w) => {
    w !== L.current && (L.current = w, x(w));
  }, []), C = s || g, T = i || y, M = p.useRef(null), L = p.useRef(null), S = p.useRef(d), _ = l != null, O = ot(l), I = ot(r), k = p.useCallback(() => {
    if (!M.current || !L.current)
      return;
    const w = {
      placement: t,
      strategy: n,
      middleware: h
    };
    I.current && (w.platform = I.current), $n(M.current, L.current, w).then((P) => {
      const F = {
        ...P,
        isPositioned: !0
      };
      B.current && !we(S.current, F) && (S.current = F, It.flushSync(() => {
        f(F);
      }));
    });
  }, [h, t, n, I]);
  pe(() => {
    a === !1 && S.current.isPositioned && (S.current.isPositioned = !1, f((w) => ({
      ...w,
      isPositioned: !1
    })));
  }, [a]);
  const B = p.useRef(!1);
  pe(() => (B.current = !0, () => {
    B.current = !1;
  }), []), pe(() => {
    if (C && (M.current = C), T && (L.current = T), C && T) {
      if (O.current)
        return O.current(C, T, k);
      k();
    }
  }, [C, T, k, O, _]);
  const A = p.useMemo(() => ({
    reference: M,
    floating: L,
    setReference: b,
    setFloating: v
  }), [b, v]), R = p.useMemo(() => ({
    reference: C,
    floating: T
  }), [C, T]), E = p.useMemo(() => {
    const w = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return w;
    const P = nt(R.floating, d.x), F = nt(R.floating, d.y);
    return c ? {
      ...w,
      transform: "translate(" + P + "px, " + F + "px)",
      ...Tt(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: P,
      top: F
    };
  }, [n, c, R.floating, d.x, d.y]);
  return p.useMemo(() => ({
    ...d,
    update: k,
    refs: A,
    elements: R,
    floatingStyles: E
  }), [d, k, A, R, E]);
}
const Bn = (e) => {
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
      return o && t(o) ? o.current != null ? tt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? tt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, yo = (e, t) => ({
  ...Dn(e),
  options: [e, t]
}), xo = (e, t) => ({
  ...Ln(e),
  options: [e, t]
}), wo = (e, t) => ({
  ...Fn(e),
  options: [e, t]
}), bo = (e, t) => ({
  ...Sn(e),
  options: [e, t]
}), Ro = (e, t) => ({
  ...In(e),
  options: [e, t]
}), Eo = (e, t) => ({
  ...kn(e),
  options: [e, t]
}), Co = (e, t) => ({
  ...Bn(e),
  options: [e, t]
}), Mt = {
  ...p
}, Nn = Mt.useInsertionEffect, Wn = Nn || ((e) => e());
function Q(e) {
  const t = p.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Wn(() => {
    t.current = e;
  }), p.useCallback(function() {
    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
var X = typeof document < "u" ? dt : $e;
let rt = !1, Vn = 0;
const it = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Vn++
);
function Hn() {
  const [e, t] = p.useState(() => rt ? it() : void 0);
  return X(() => {
    e == null && t(it());
  }, []), p.useEffect(() => {
    rt = !0;
  }, []), e;
}
const jn = Mt.useId, Ot = jn || Hn;
let ke;
process.env.NODE_ENV !== "production" && (ke = /* @__PURE__ */ new Set());
function Kn() {
  for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  const r = "Floating UI: " + n.join(" ");
  if (!((e = ke) != null && e.has(r))) {
    var s;
    (s = ke) == null || s.add(r), console.error(r);
  }
}
function Yn() {
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
const Un = /* @__PURE__ */ p.createContext(null), Xn = /* @__PURE__ */ p.createContext(null), Ye = () => {
  var e;
  return ((e = p.useContext(Un)) == null ? void 0 : e.id) || null;
}, Ue = () => p.useContext(Xn);
function Xe(e) {
  return "data-floating-ui-" + e;
}
function Ae(e) {
  const t = mt(e);
  return X(() => {
    t.current = e;
  }), t;
}
const st = /* @__PURE__ */ Xe("safe-polygon");
function he(e, t, n) {
  return n && !Le(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
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
    delay: l = 0,
    handleClose: a = null,
    mouseOnly: d = !1,
    restMs: f = 0,
    move: h = !0
  } = t, u = Ue(), g = Ye(), m = Ae(a), y = Ae(l), x = Ae(n), b = p.useRef(), v = p.useRef(-1), C = p.useRef(), T = p.useRef(-1), M = p.useRef(!0), L = p.useRef(!1), S = p.useRef(() => {
  }), _ = p.useCallback(() => {
    var R;
    const E = (R = r.current.openEvent) == null ? void 0 : R.type;
    return (E == null ? void 0 : E.includes("mouse")) && E !== "mousedown";
  }, [r]);
  p.useEffect(() => {
    if (!c) return;
    function R(E) {
      let {
        open: w
      } = E;
      w || (clearTimeout(v.current), clearTimeout(T.current), M.current = !0);
    }
    return s.on("openchange", R), () => {
      s.off("openchange", R);
    };
  }, [c, s]), p.useEffect(() => {
    if (!c || !m.current || !n) return;
    function R(w) {
      _() && o(!1, w, "hover");
    }
    const E = oe(i.floating).documentElement;
    return E.addEventListener("mouseleave", R), () => {
      E.removeEventListener("mouseleave", R);
    };
  }, [i.floating, n, o, c, m, _]);
  const O = p.useCallback(function(R, E, w) {
    E === void 0 && (E = !0), w === void 0 && (w = "hover");
    const P = he(y.current, "close", b.current);
    P && !C.current ? (clearTimeout(v.current), v.current = window.setTimeout(() => o(!1, R, w), P)) : E && (clearTimeout(v.current), o(!1, R, w));
  }, [y, o]), I = Q(() => {
    S.current(), C.current = void 0;
  }), k = Q(() => {
    if (L.current) {
      const R = oe(i.floating).body;
      R.style.pointerEvents = "", R.removeAttribute(st), L.current = !1;
    }
  });
  p.useEffect(() => {
    if (!c) return;
    function R() {
      return r.current.openEvent ? ["click", "mousedown"].includes(r.current.openEvent.type) : !1;
    }
    function E(D) {
      if (clearTimeout(v.current), M.current = !1, d && !Le(b.current) || f > 0 && !he(y.current, "open"))
        return;
      const N = he(y.current, "open", b.current);
      N ? v.current = window.setTimeout(() => {
        x.current || o(!0, D, "hover");
      }, N) : o(!0, D, "hover");
    }
    function w(D) {
      if (R()) return;
      S.current();
      const N = oe(i.floating);
      if (clearTimeout(T.current), m.current && r.current.floatingContext) {
        n || clearTimeout(v.current), C.current = m.current({
          ...r.current.floatingContext,
          tree: u,
          x: D.clientX,
          y: D.clientY,
          onClose() {
            k(), I(), O(D, !0, "safe-polygon");
          }
        });
        const me = C.current;
        N.addEventListener("mousemove", me), S.current = () => {
          N.removeEventListener("mousemove", me);
        };
        return;
      }
      (b.current === "touch" ? !fe(i.floating, D.relatedTarget) : !0) && O(D);
    }
    function P(D) {
      R() || r.current.floatingContext && (m.current == null || m.current({
        ...r.current.floatingContext,
        tree: u,
        x: D.clientX,
        y: D.clientY,
        onClose() {
          k(), I(), O(D);
        }
      })(D));
    }
    if ($(i.domReference)) {
      var F;
      const D = i.domReference;
      return n && D.addEventListener("mouseleave", P), (F = i.floating) == null || F.addEventListener("mouseleave", P), h && D.addEventListener("mousemove", E, {
        once: !0
      }), D.addEventListener("mouseenter", E), D.addEventListener("mouseleave", w), () => {
        var N;
        n && D.removeEventListener("mouseleave", P), (N = i.floating) == null || N.removeEventListener("mouseleave", P), h && D.removeEventListener("mousemove", E), D.removeEventListener("mouseenter", E), D.removeEventListener("mouseleave", w);
      };
    }
  }, [i, c, e, d, f, h, O, I, k, o, n, x, u, y, m, r]), X(() => {
    var R;
    if (c && n && (R = m.current) != null && R.__options.blockPointerEvents && _()) {
      L.current = !0;
      const w = i.floating;
      if ($(i.domReference) && w) {
        var E;
        const P = oe(i.floating).body;
        P.setAttribute(st, "");
        const F = i.domReference, D = u == null || (E = u.nodesRef.current.find((N) => N.id === g)) == null || (E = E.context) == null ? void 0 : E.elements.floating;
        return D && (D.style.pointerEvents = ""), P.style.pointerEvents = "none", F.style.pointerEvents = "auto", w.style.pointerEvents = "auto", () => {
          P.style.pointerEvents = "", F.style.pointerEvents = "", w.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, g, i, u, m, _]), X(() => {
    n || (b.current = void 0, I(), k());
  }, [n, I, k]), p.useEffect(() => () => {
    I(), clearTimeout(v.current), clearTimeout(T.current), k();
  }, [c, i.domReference, I, k]);
  const B = p.useMemo(() => {
    function R(E) {
      b.current = E.pointerType;
    }
    return {
      onPointerDown: R,
      onPointerEnter: R,
      onMouseMove(E) {
        const {
          nativeEvent: w
        } = E;
        function P() {
          !M.current && !x.current && o(!0, w, "hover");
        }
        d && !Le(b.current) || n || f === 0 || (clearTimeout(T.current), b.current === "touch" ? P() : T.current = window.setTimeout(P, f));
      }
    };
  }, [d, o, n, x, f]), A = p.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(v.current);
    },
    onMouseLeave(R) {
      O(R.nativeEvent, !1);
    }
  }), [O]);
  return p.useMemo(() => c ? {
    reference: B,
    floating: A
  } : {}, [c, B, A]);
}
const Fe = () => {
}, Dt = /* @__PURE__ */ p.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: Fe,
  setState: Fe,
  isInstantPhase: !1
}), zn = () => p.useContext(Dt);
function Ao(e) {
  const {
    children: t,
    delay: n,
    timeoutMs: o = 0
  } = e, [r, s] = p.useReducer((l, a) => ({
    ...l,
    ...a
  }), {
    delay: n,
    timeoutMs: o,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), i = p.useRef(null), c = p.useCallback((l) => {
    s({
      currentId: l
    });
  }, []);
  return X(() => {
    r.currentId ? i.current === null ? i.current = r.currentId : r.isInstantPhase || s({
      isInstantPhase: !0
    }) : (r.isInstantPhase && s({
      isInstantPhase: !1
    }), i.current = null);
  }, [r.currentId, r.isInstantPhase]), /* @__PURE__ */ p.createElement(Dt.Provider, {
    value: p.useMemo(() => ({
      ...r,
      setState: s,
      setCurrentId: c
    }), [r, c])
  }, t);
}
function To(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    floatingId: r
  } = e, {
    id: s
  } = t, i = s ?? r, c = zn(), {
    currentId: l,
    setCurrentId: a,
    initialDelay: d,
    setState: f,
    timeoutMs: h
  } = c;
  return X(() => {
    l && (f({
      delay: {
        open: 1,
        close: he(d, "close")
      }
    }), l !== i && o(!1));
  }, [i, o, f, l, d]), X(() => {
    function u() {
      o(!1), f({
        delay: d,
        currentId: null
      });
    }
    if (l && !n && l === i) {
      if (h) {
        const g = window.setTimeout(u, h);
        return () => {
          clearTimeout(g);
        };
      }
      u();
    }
  }, [n, f, l, i, o, d, h]), X(() => {
    a === Fe || !n || a(i);
  }, [n, a, i]), c;
}
function Te(e, t) {
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
const qn = "data-floating-ui-focusable", Gn = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Jn = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ct = (e) => {
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
    outsidePress: l = !0,
    outsidePressEvent: a = "pointerdown",
    referencePress: d = !1,
    referencePressEvent: f = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: u,
    capture: g
  } = t, m = Ue(), y = Q(typeof l == "function" ? l : () => !1), x = typeof l == "function" ? y : l, b = p.useRef(!1), v = p.useRef(!1), {
    escapeKey: C,
    outsidePress: T
  } = ct(u), {
    escapeKey: M,
    outsidePress: L
  } = ct(g), S = Q((A) => {
    var R;
    if (!n || !i || !c || A.key !== "Escape")
      return;
    const E = (R = s.current.floatingContext) == null ? void 0 : R.nodeId, w = m ? Te(m.nodesRef.current, E) : [];
    if (!C && (A.stopPropagation(), w.length > 0)) {
      let P = !0;
      if (w.forEach((F) => {
        var D;
        if ((D = F.context) != null && D.open && !F.context.dataRef.current.__escapeKeyBubbles) {
          P = !1;
          return;
        }
      }), !P)
        return;
    }
    o(!1, Ut(A) ? A.nativeEvent : A, "escape-key");
  }), _ = Q((A) => {
    var R;
    const E = () => {
      var w;
      S(A), (w = ie(A)) == null || w.removeEventListener("keydown", E);
    };
    (R = ie(A)) == null || R.addEventListener("keydown", E);
  }), O = Q((A) => {
    var R;
    const E = b.current;
    b.current = !1;
    const w = v.current;
    if (v.current = !1, a === "click" && w || E || typeof x == "function" && !x(A))
      return;
    const P = ie(A), F = "[" + Xe("inert") + "]", D = oe(r.floating).querySelectorAll(F);
    let N = $(P) ? P : null;
    for (; N && !te(N); ) {
      const K = z(N);
      if (te(K) || !$(K))
        break;
      N = K;
    }
    if (D.length && $(P) && !Xt(P) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !fe(P, r.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(D).every((K) => !fe(N, K)))
      return;
    if (j(P) && B) {
      const K = P.clientWidth > 0 && P.scrollWidth > P.clientWidth, Z = P.clientHeight > 0 && P.scrollHeight > P.clientHeight;
      let ae = Z && A.offsetX > P.clientWidth;
      if (Z && Y(P).direction === "rtl" && (ae = A.offsetX <= P.offsetWidth - P.clientWidth), ae || K && A.offsetY > P.clientHeight)
        return;
    }
    const Ee = (R = s.current.floatingContext) == null ? void 0 : R.nodeId, me = m && Te(m.nodesRef.current, Ee).some((K) => {
      var Z;
      return Ce(A, (Z = K.context) == null ? void 0 : Z.elements.floating);
    });
    if (Ce(A, r.floating) || Ce(A, r.domReference) || me)
      return;
    const ze = m ? Te(m.nodesRef.current, Ee) : [];
    if (ze.length > 0) {
      let K = !0;
      if (ze.forEach((Z) => {
        var ae;
        if ((ae = Z.context) != null && ae.open && !Z.context.dataRef.current.__outsidePressBubbles) {
          K = !1;
          return;
        }
      }), !K)
        return;
    }
    o(!1, A, "outside-press");
  }), I = Q((A) => {
    var R;
    const E = () => {
      var w;
      O(A), (w = ie(A)) == null || w.removeEventListener(a, E);
    };
    (R = ie(A)) == null || R.addEventListener(a, E);
  });
  p.useEffect(() => {
    if (!n || !i)
      return;
    s.current.__escapeKeyBubbles = C, s.current.__outsidePressBubbles = T;
    function A(w) {
      o(!1, w, "ancestor-scroll");
    }
    const R = oe(r.floating);
    c && R.addEventListener("keydown", M ? _ : S, M), x && R.addEventListener(a, L ? I : O, L);
    let E = [];
    return h && ($(r.domReference) && (E = ee(r.domReference)), $(r.floating) && (E = E.concat(ee(r.floating))), !$(r.reference) && r.reference && r.reference.contextElement && (E = E.concat(ee(r.reference.contextElement)))), E = E.filter((w) => {
      var P;
      return w !== ((P = R.defaultView) == null ? void 0 : P.visualViewport);
    }), E.forEach((w) => {
      w.addEventListener("scroll", A, {
        passive: !0
      });
    }), () => {
      c && R.removeEventListener("keydown", M ? _ : S, M), x && R.removeEventListener(a, L ? I : O, L), E.forEach((w) => {
        w.removeEventListener("scroll", A);
      });
    };
  }, [s, r, c, x, a, n, o, h, i, C, T, S, M, _, O, L, I]), p.useEffect(() => {
    b.current = !1;
  }, [x, a]);
  const k = p.useMemo(() => ({
    onKeyDown: S,
    [Gn[f]]: (A) => {
      d && o(!1, A.nativeEvent, "reference-press");
    }
  }), [S, o, d, f]), B = p.useMemo(() => ({
    onKeyDown: S,
    onMouseDown() {
      v.current = !0;
    },
    onMouseUp() {
      v.current = !0;
    },
    [Jn[a]]: () => {
      b.current = !0;
    }
  }), [S, a]);
  return p.useMemo(() => i ? {
    reference: k,
    floating: B
  } : {}, [i, k, B]);
}
function Zn(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: o
  } = e, r = Ot(), s = p.useRef({}), [i] = p.useState(() => Yn()), c = Ye() != null;
  if (process.env.NODE_ENV !== "production") {
    const u = o.reference;
    u && !$(u) && Kn("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, a] = p.useState(o.reference), d = Q((u, g, m) => {
    s.current.openEvent = u ? g : void 0, i.emit("openchange", {
      open: u,
      event: g,
      reason: m,
      nested: c
    }), n == null || n(u, g, m);
  }), f = p.useMemo(() => ({
    setPositionReference: a
  }), []), h = p.useMemo(() => ({
    reference: l || o.reference || null,
    floating: o.floating || null,
    domReference: o.reference
  }), [l, o.reference, o.floating]);
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
  } = e, n = Zn({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), o = e.rootContext || n, r = o.elements, [s, i] = p.useState(null), [c, l] = p.useState(null), d = (r == null ? void 0 : r.reference) || s, f = p.useRef(null), h = Ue();
  X(() => {
    d && (f.current = d);
  }, [d]);
  const u = _n({
    ...e,
    elements: {
      ...r,
      ...c && {
        reference: c
      }
    }
  }), g = p.useCallback((v) => {
    const C = $(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    l(C), u.refs.setReference(C);
  }, [u.refs]), m = p.useCallback((v) => {
    ($(v) || v === null) && (f.current = v, i(v)), ($(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !$(v)) && u.refs.setReference(v);
  }, [u.refs]), y = p.useMemo(() => ({
    ...u.refs,
    setReference: m,
    setPositionReference: g,
    domReference: f
  }), [u.refs, m, g]), x = p.useMemo(() => ({
    ...u.elements,
    domReference: d
  }), [u.elements, d]), b = p.useMemo(() => ({
    ...u,
    ...o,
    refs: y,
    elements: x,
    nodeId: t
  }), [u, y, x, t, o]);
  return X(() => {
    o.dataRef.current.floatingContext = b;
    const v = h == null ? void 0 : h.nodesRef.current.find((C) => C.id === t);
    v && (v.context = b);
  }), p.useMemo(() => ({
    ...u,
    context: b,
    refs: y,
    elements: x
  }), [u, y, x, b]);
}
function Do(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: o,
    events: r,
    dataRef: s,
    elements: i
  } = e, {
    enabled: c = !0,
    visibleOnly: l = !0
  } = t, a = p.useRef(!1), d = p.useRef(), f = p.useRef(!0);
  p.useEffect(() => {
    if (!c) return;
    const u = V(i.domReference);
    function g() {
      !n && j(i.domReference) && i.domReference === Ge(oe(i.domReference)) && (a.current = !0);
    }
    function m() {
      f.current = !0;
    }
    return u.addEventListener("blur", g), u.addEventListener("keydown", m, !0), () => {
      u.removeEventListener("blur", g), u.removeEventListener("keydown", m, !0);
    };
  }, [i.domReference, n, c]), p.useEffect(() => {
    if (!c) return;
    function u(g) {
      let {
        reason: m
      } = g;
      (m === "reference-press" || m === "escape-key") && (a.current = !0);
    }
    return r.on("openchange", u), () => {
      r.off("openchange", u);
    };
  }, [r, c]), p.useEffect(() => () => {
    clearTimeout(d.current);
  }, []);
  const h = p.useMemo(() => ({
    onPointerDown(u) {
      Ht(u.nativeEvent) || (f.current = !1);
    },
    onMouseLeave() {
      a.current = !1;
    },
    onFocus(u) {
      if (a.current) return;
      const g = ie(u.nativeEvent);
      if (l && $(g))
        try {
          if (jt() && Kt()) throw Error();
          if (!g.matches(":focus-visible")) return;
        } catch {
          if (!f.current && !qt(g))
            return;
        }
      o(!0, u.nativeEvent, "focus");
    },
    onBlur(u) {
      a.current = !1;
      const g = u.relatedTarget, m = u.nativeEvent, y = $(g) && g.hasAttribute(Xe("focus-guard")) && g.getAttribute("data-type") === "outside";
      d.current = window.setTimeout(() => {
        var x;
        const b = Ge(i.domReference ? i.domReference.ownerDocument : document);
        !g && b === i.domReference || fe((x = s.current.floatingContext) == null ? void 0 : x.refs.floating.current, b) || fe(i.domReference, b) || y || o(!1, m, "focus");
      });
    }
  }), [s, i.domReference, o, l]);
  return p.useMemo(() => c ? {
    reference: h
  } : {}, [c, h]);
}
const lt = "active", ut = "selected";
function Me(e, t, n) {
  const o = /* @__PURE__ */ new Map(), r = n === "item";
  let s = e;
  if (r && e) {
    const {
      [lt]: i,
      [ut]: c,
      ...l
    } = e;
    s = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [qn]: ""
    },
    ...s,
    ...t.map((i) => {
      const c = i ? i[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((i, c) => (c && Object.entries(c).forEach((l) => {
      let [a, d] = l;
      if (!(r && [lt, ut].includes(a)))
        if (a.indexOf("on") === 0) {
          if (o.has(a) || o.set(a, []), typeof d == "function") {
            var f;
            (f = o.get(a)) == null || f.push(d), i[a] = function() {
              for (var h, u = arguments.length, g = new Array(u), m = 0; m < u; m++)
                g[m] = arguments[m];
              return (h = o.get(a)) == null ? void 0 : h.map((y) => y(...g)).find((y) => y !== void 0);
            };
          }
        } else
          i[a] = d;
    }), i), {})
  };
}
function Lo(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), o = e.map((c) => c == null ? void 0 : c.item), r = p.useCallback(
    (c) => Me(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = p.useCallback(
    (c) => Me(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = p.useCallback(
    (c) => Me(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    o
  );
  return p.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: s,
    getItemProps: i
  }), [r, s, i]);
}
const Qn = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function So(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: o,
    floatingId: r
  } = e, {
    enabled: s = !0,
    role: i = "dialog"
  } = t, c = (n = Qn.get(i)) != null ? n : i, l = Ot(), d = Ye() != null, f = p.useMemo(() => c === "tooltip" || i === "label" ? {
    ["aria-" + (i === "label" ? "labelledby" : "describedby")]: o ? r : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": c === "alertdialog" ? "dialog" : c,
    "aria-controls": o ? r : void 0,
    ...c === "listbox" && {
      role: "combobox"
    },
    ...c === "menu" && {
      id: l
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
  }, [c, r, d, o, l, i]), h = p.useMemo(() => {
    const g = {
      id: r,
      ...c && {
        role: c
      }
    };
    return c === "tooltip" || i === "label" ? g : {
      ...g,
      ...c === "menu" && {
        "aria-labelledby": l
      }
    };
  }, [c, r, l, i]), u = p.useCallback((g) => {
    let {
      active: m,
      selected: y
    } = g;
    const x = {
      role: "option",
      ...m && {
        id: r + "-option"
      }
    };
    switch (i) {
      case "select":
        return {
          ...x,
          "aria-selected": m && y
        };
      case "combobox":
        return {
          ...x,
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
    item: u
  } : {}, [s, f, h, u]);
}
function Io(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, o] = t.split("-"), r = n === "right" ? "left" : "right";
    return o === void 0 ? r : `${r}-${o}`;
  }
  return t;
}
function at(e, t, n, o) {
  return e === "center" || o === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function ft(e, t, n, o, r) {
  return e === "center" || o === "center" ? { left: t } : e === "end" ? { [r === "ltr" ? "right" : "left"]: n } : e === "start" ? { [r === "ltr" ? "left" : "right"]: n } : {};
}
const eo = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function to({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: o,
  arrowPosition: r,
  arrowX: s,
  arrowY: i,
  dir: c
}) {
  const [l, a = "center"] = e.split("-"), d = {
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [eo[l]]: o
  }, f = -t / 2;
  return l === "left" ? {
    ...d,
    ...at(a, i, n, r),
    right: f,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...d,
    ...at(a, i, n, r),
    left: f,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...d,
    ...ft(a, s, n, r, c),
    bottom: f,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...d,
    ...ft(a, s, n, r, c),
    top: f,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const no = gt(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: o,
    arrowPosition: r,
    visible: s,
    arrowX: i,
    arrowY: c,
    style: l,
    ...a
  }, d) => {
    const { dir: f } = Ft();
    return s ? /* @__PURE__ */ ve(
      "div",
      {
        ...a,
        ref: d,
        style: {
          ...l,
          ...to({
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
no.displayName = "@mantine/core/FloatingArrow";
function oo(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const ro = {}, Lt = gt((e, t) => {
  const { children: n, target: o, ...r } = $t("Portal", ro, e), [s, i] = pt(!1), c = mt(null);
  return _t(() => (i(!0), c.current = o ? typeof o == "string" ? document.querySelector(o) : o : oo(r), Bt(t, c.current), !o && c.current && document.body.appendChild(c.current), () => {
    !o && c.current && document.body.removeChild(c.current);
  }), [o]), !s || !c.current ? null : kt(/* @__PURE__ */ ve(ht, { children: n }), c.current);
});
Lt.displayName = "@mantine/core/Portal";
function io({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ ve(Lt, { ...n, children: t }) : /* @__PURE__ */ ve(ht, { children: t });
}
io.displayName = "@mantine/core/OptionalPortal";
function ko({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: o
}) {
  const [r, s] = pt(0);
  $e(() => {
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
  ]), qe(() => {
    t.update();
  }, o), qe(() => {
    s((i) => i + 1);
  }, [e]);
}
export {
  Ao as F,
  io as O,
  vo as a,
  zn as b,
  Lo as c,
  Po as d,
  Do as e,
  So as f,
  ee as g,
  Mo as h,
  ho as i,
  To as j,
  ko as k,
  bo as l,
  Co as m,
  Eo as n,
  yo as o,
  Io as p,
  no as q,
  wo as r,
  xo as s,
  Ro as t,
  Oo as u
};
