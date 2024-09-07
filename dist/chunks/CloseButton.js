import { jsx as V, Fragment as mt, jsxs as pt } from "react/jsx-runtime";
import * as R from "react";
import { Fragment as sn, useRef as Q, useEffect as le, useCallback as be, useLayoutEffect as gt, forwardRef as Oe, cloneElement as ht, useState as de } from "react";
import { f as Se, b as ne, d as Ne, B as wt, c as yt, l as cn, g as xt, i as vt, n as ln, h as an } from "./factory.js";
import { u as bt } from "./DirectionProvider.js";
import { c as fn } from "./create-safe-context.js";
import { r as un, a as dn, u as mn } from "./use-id.js";
import { u as De, a as pn } from "./use-merged-ref.js";
import * as gn from "react-dom";
import { createPortal as hn } from "react-dom";
import { u as se, T as wn } from "./Transition.js";
import { u as yn } from "./use-uncontrolled.js";
import { p as xn } from "./Input.js";
import { U as vn } from "./UnstyledButton.js";
function Rt(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== sn : !1;
}
const bn = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Rn(e) {
  return bn[e];
}
const Cn = () => {
};
function An(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || Cn : (n) => {
    var o;
    n.key === "Escape" && (e(n), (o = t.onTrigger) == null || o.call(t));
  };
}
const Je = ["mousedown", "touchstart"];
function En(e, t, n) {
  const o = Q();
  return le(() => {
    const r = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const c = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((f) => !!f && !i.composedPath().includes(f)) && !c && e();
      } else o.current && !o.current.contains(s) && e();
    };
    return (t || Je).forEach((i) => document.addEventListener(i, r)), () => {
      (t || Je).forEach((i) => document.removeEventListener(i, r));
    };
  }, [o, e, n]), o;
}
function Pn({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = Q(), o = () => {
    var r;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((r = n.current) == null || r.focus({ preventScroll: !0 }));
  };
  return se(() => {
    let r = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(r);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (r = window.setTimeout(o, 10)), () => {
      window.clearTimeout(r), document.removeEventListener("keydown", i);
    };
  }, [e, t]), o;
}
function Tn(e, t = "body > :not(script)") {
  const n = un(), o = Array.from(
    document.querySelectorAll(t)
  ).map((r) => {
    var l;
    if ((l = r == null ? void 0 : r.shadowRoot) != null && l.contains(e) || r.contains(e))
      return;
    const i = r.getAttribute("aria-hidden"), s = r.getAttribute("data-hidden"), c = r.getAttribute("data-focus-id");
    return r.setAttribute("data-focus-id", n), i === null || i === "false" ? r.setAttribute("aria-hidden", "true") : !s && !c && r.setAttribute("data-hidden", i), {
      node: r,
      ariaHidden: s || null
    };
  });
  return () => {
    o.forEach((r) => {
      !r || n !== r.node.getAttribute("data-focus-id") || (r.ariaHidden === null ? r.node.removeAttribute("aria-hidden") : r.node.setAttribute("aria-hidden", r.ariaHidden), r.node.removeAttribute("data-focus-id"), r.node.removeAttribute("data-hidden"));
    });
  };
}
const On = /input|select|textarea|button|object/, Ct = "a, input, select, textarea, button, object, [tabindex]";
function Sn(e) {
  return process.env.NODE_ENV === "test" ? !1 : e.style.display === "none";
}
function Nn(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (Sn(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function At(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Re(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(At(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (On.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Nn(e);
}
function Et(e) {
  const t = At(e);
  return (Number.isNaN(t) || t >= 0) && Re(e);
}
function Dn(e) {
  return Array.from(e.querySelectorAll(Ct)).filter(Et);
}
function Fn(e, t) {
  const n = Dn(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const o = n[t.shiftKey ? 0 : n.length - 1], r = e.getRootNode();
  let i = o === r.activeElement || e === r.activeElement;
  const s = r.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (i = n.filter(
    (m) => m.getAttribute("type") === "radio" && m.getAttribute("name") === s.getAttribute("name")
  ).includes(o)), !i)
    return;
  t.preventDefault();
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
function Ln(e = !0) {
  const t = Q(), n = Q(null), o = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const c = Array.from(i.querySelectorAll(Ct));
      s = c.find(Et) || c.find(Re) || null, !s && Re(i) && (s = i);
    }
    s ? s.focus({ preventScroll: !0 }) : process.env.NODE_ENV === "development" && console.warn(
      "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
      i
    );
  }, r = be(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = Tn(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() ? o(i) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", i);
        }), t.current = i) : t.current = null);
      }
    },
    [e]
  );
  return le(() => {
    if (!e)
      return;
    t.current && setTimeout(() => o(t.current));
    const i = (s) => {
      s.key === "Tab" && t.current && Fn(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), r;
}
var Pt = { root: "m_515a97f8" };
const Mn = {}, Fe = Se((e, t) => {
  const n = ne("VisuallyHidden", Mn, e), { classNames: o, className: r, style: i, styles: s, unstyled: c, vars: l, ...f } = n, m = Ne({
    name: "VisuallyHidden",
    classes: Pt,
    props: n,
    className: r,
    style: i,
    classNames: o,
    styles: s,
    unstyled: c
  });
  return /* @__PURE__ */ V(wt, { component: "span", ref: t, ...m("root"), ...f });
});
Fe.classes = Pt;
Fe.displayName = "@mantine/core/VisuallyHidden";
function oe(e) {
  return Tt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function q(e) {
  var t;
  return (t = (Tt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Tt(e) {
  return e instanceof Node || e instanceof _(e).Node;
}
function $(e) {
  return e instanceof Element || e instanceof _(e).Element;
}
function U(e) {
  return e instanceof HTMLElement || e instanceof _(e).HTMLElement;
}
function Qe(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _(e).ShadowRoot;
}
function ae(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = W(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function In(e) {
  return ["table", "td", "th"].includes(oe(e));
}
function he(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Le(e) {
  const t = Me(), n = $(e) ? W(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function kn(e) {
  let t = K(e);
  for (; U(t) && !ee(t); ) {
    if (Le(t))
      return t;
    if (he(t))
      return null;
    t = K(t);
  }
  return null;
}
function Me() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ee(e) {
  return ["html", "body", "#document"].includes(oe(e));
}
function W(e) {
  return _(e).getComputedStyle(e);
}
function we(e) {
  return $(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function K(e) {
  if (oe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qe(e) && e.host || // Fallback.
    q(e)
  );
  return Qe(t) ? t.host : t;
}
function Ot(e) {
  const t = K(e);
  return ee(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && ae(t) ? t : Ot(t);
}
function ce(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ot(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = _(r);
  if (i) {
    const c = Ce(s);
    return t.concat(s, s.visualViewport || [], ae(r) ? r : [], c && n ? ce(c) : []);
  }
  return t.concat(r, ce(r, [], n));
}
function Ce(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const H = Math.min, k = Math.max, me = Math.round, fe = Math.floor, G = (e) => ({
  x: e,
  y: e
}), $n = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bn = {
  start: "end",
  end: "start"
};
function Ae(e, t, n) {
  return k(e, H(t, n));
}
function Y(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function j(e) {
  return e.split("-")[0];
}
function re(e) {
  return e.split("-")[1];
}
function Ie(e) {
  return e === "x" ? "y" : "x";
}
function ke(e) {
  return e === "y" ? "height" : "width";
}
function X(e) {
  return ["top", "bottom"].includes(j(e)) ? "y" : "x";
}
function $e(e) {
  return Ie(X(e));
}
function zn(e, t, n) {
  n === void 0 && (n = !1);
  const o = re(e), r = $e(e), i = ke(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = pe(s)), [s, pe(s)];
}
function Vn(e) {
  const t = pe(e);
  return [Ee(e), t, Ee(t)];
}
function Ee(e) {
  return e.replace(/start|end/g, (t) => Bn[t]);
}
function Hn(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function _n(e, t, n, o) {
  const r = re(e);
  let i = Hn(j(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Ee)))), i;
}
function pe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $n[t]);
}
function Wn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Be(e) {
  return typeof e != "number" ? Wn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function te(e) {
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
function et(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = X(t), s = $e(t), c = ke(s), l = j(t), f = i === "y", m = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, a = o[c] / 2 - r[c] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: m,
        y: o.y - r.height
      };
      break;
    case "bottom":
      u = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      u = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (re(t)) {
    case "start":
      u[s] -= a * (n && f ? -1 : 1);
      break;
    case "end":
      u[s] += a * (n && f ? -1 : 1);
      break;
  }
  return u;
}
const jn = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: m,
    y: d
  } = et(f, o, l), a = o, u = {}, p = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: h,
      fn: y
    } = c[g], {
      x,
      y: w,
      data: v,
      reset: b
    } = await y({
      x: m,
      y: d,
      initialPlacement: o,
      placement: a,
      strategy: r,
      middlewareData: u,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = x ?? m, d = w ?? d, u = {
      ...u,
      [h]: {
        ...u[h],
        ...v
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (a = b.placement), b.rects && (f = b.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : b.rects), {
      x: m,
      y: d
    } = et(f, a, l)), g = -1);
  }
  return {
    x: m,
    y: d,
    placement: a,
    strategy: r,
    middlewareData: u
  };
};
async function ze(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: d = "floating",
    altBoundary: a = !1,
    padding: u = 0
  } = Y(t, e), p = Be(u), h = c[a ? d === "floating" ? "reference" : "floating" : d], y = te(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: m,
    strategy: l
  })), x = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), v = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = te(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (y.top - b.top + p.top) / v.y,
    bottom: (b.bottom - y.bottom + p.bottom) / v.y,
    left: (y.left - b.left + p.left) / v.x,
    right: (b.right - y.right + p.right) / v.x
  };
}
const Un = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: l
    } = t, {
      element: f,
      padding: m = 0
    } = Y(e, t) || {};
    if (f == null)
      return {};
    const d = Be(m), a = {
      x: n,
      y: o
    }, u = $e(r), p = ke(u), g = await s.getDimensions(f), h = u === "y", y = h ? "top" : "left", x = h ? "bottom" : "right", w = h ? "clientHeight" : "clientWidth", v = i.reference[p] + i.reference[u] - a[u] - i.floating[p], b = a[u] - i.reference[u], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let T = A ? A[w] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(A))) && (T = c.floating[w] || i.floating[p]);
    const D = v / 2 - b / 2, I = T / 2 - g[p] / 2 - 1, E = H(d[y], I), S = H(d[x], I), N = E, B = T - g[p] - S, P = T / 2 - g[p] / 2 + D, O = Ae(N, P, B), F = !l.arrow && re(r) != null && P !== O && i.reference[p] / 2 - (P < N ? E : S) - g[p] / 2 < 0, C = F ? P < N ? P - N : P - B : 0;
    return {
      [u]: a[u] + C,
      data: {
        [u]: O,
        centerOffset: P - O - C,
        ...F && {
          alignmentOffset: C
        }
      },
      reset: F
    };
  }
}), Yn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: f
      } = t, {
        mainAxis: m = !0,
        crossAxis: d = !0,
        fallbackPlacements: a,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...h
      } = Y(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = j(r), x = X(c), w = j(c) === c, v = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), b = a || (w || !g ? [pe(c)] : Vn(c)), A = p !== "none";
      !a && A && b.push(..._n(c, g, p, v));
      const T = [c, ...b], D = await ze(t, h), I = [];
      let E = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (m && I.push(D[y]), d) {
        const P = zn(r, s, v);
        I.push(D[P[0]], D[P[1]]);
      }
      if (E = [...E, {
        placement: r,
        overflows: I
      }], !I.every((P) => P <= 0)) {
        var S, N;
        const P = (((S = i.flip) == null ? void 0 : S.index) || 0) + 1, O = T[P];
        if (O)
          return {
            data: {
              index: P,
              overflows: E
            },
            reset: {
              placement: O
            }
          };
        let F = (N = E.filter((C) => C.overflows[0] <= 0).sort((C, L) => C.overflows[1] - L.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!F)
          switch (u) {
            case "bestFit": {
              var B;
              const C = (B = E.filter((L) => {
                if (A) {
                  const M = X(L.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((M) => M > 0).reduce((M, xe) => M + xe, 0)]).sort((L, M) => L[1] - M[1])[0]) == null ? void 0 : B[0];
              C && (F = C);
              break;
            }
            case "initialPlacement":
              F = c;
              break;
          }
        if (r !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function St(e) {
  const t = H(...e.map((i) => i.left)), n = H(...e.map((i) => i.top)), o = k(...e.map((i) => i.right)), r = k(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: o - t,
    height: r - n
  };
}
function Xn(e) {
  const t = e.slice().sort((r, i) => r.y - i.y), n = [];
  let o = null;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    !o || i.y - o.y > o.height / 2 ? n.push([i]) : n[n.length - 1].push(i), o = i;
  }
  return n.map((r) => te(St(r)));
}
const qn = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: o,
        rects: r,
        platform: i,
        strategy: s
      } = t, {
        padding: c = 2,
        x: l,
        y: f
      } = Y(e, t), m = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(o.reference)) || []), d = Xn(m), a = te(St(m)), u = Be(c);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && l != null && f != null)
          return d.find((h) => l > h.left - u.left && l < h.right + u.right && f > h.top - u.top && f < h.bottom + u.bottom) || a;
        if (d.length >= 2) {
          if (X(n) === "y") {
            const E = d[0], S = d[d.length - 1], N = j(n) === "top", B = E.top, P = S.bottom, O = N ? E.left : S.left, F = N ? E.right : S.right, C = F - O, L = P - B;
            return {
              top: B,
              bottom: P,
              left: O,
              right: F,
              width: C,
              height: L,
              x: O,
              y: B
            };
          }
          const h = j(n) === "left", y = k(...d.map((E) => E.right)), x = H(...d.map((E) => E.left)), w = d.filter((E) => h ? E.left === x : E.right === y), v = w[0].top, b = w[w.length - 1].bottom, A = x, T = y, D = T - A, I = b - v;
          return {
            top: v,
            bottom: b,
            left: A,
            right: T,
            width: D,
            height: I,
            x: A,
            y: v
          };
        }
        return a;
      }
      const g = await i.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: o.floating,
        strategy: s
      });
      return r.reference.x !== g.reference.x || r.reference.y !== g.reference.y || r.reference.width !== g.reference.width || r.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function Kn(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = j(n), c = re(n), l = X(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, m = i && l ? -1 : 1, d = Y(t, e);
  let {
    mainAxis: a,
    crossAxis: u,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof p == "number" && (u = c === "end" ? p * -1 : p), l ? {
    x: u * m,
    y: a * f
  } : {
    x: a * f,
    y: u * m
  };
}
const Gn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = t, l = await Kn(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Zn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (h) => {
            let {
              x: y,
              y: x
            } = h;
            return {
              x: y,
              y: x
            };
          }
        },
        ...l
      } = Y(e, t), f = {
        x: n,
        y: o
      }, m = await ze(t, l), d = X(j(r)), a = Ie(d);
      let u = f[a], p = f[d];
      if (i) {
        const h = a === "y" ? "top" : "left", y = a === "y" ? "bottom" : "right", x = u + m[h], w = u - m[y];
        u = Ae(x, u, w);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", x = p + m[h], w = p - m[y];
        p = Ae(x, p, w);
      }
      const g = c.fn({
        ...t,
        [a]: u,
        [d]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, Jn = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Y(e, t), m = {
        x: n,
        y: o
      }, d = X(r), a = Ie(d);
      let u = m[a], p = m[d];
      const g = Y(c, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const w = a === "y" ? "height" : "width", v = i.reference[a] - i.floating[w] + h.mainAxis, b = i.reference[a] + i.reference[w] - h.mainAxis;
        u < v ? u = v : u > b && (u = b);
      }
      if (f) {
        var y, x;
        const w = a === "y" ? "width" : "height", v = ["top", "left"].includes(j(r)), b = i.reference[d] - i.floating[w] + (v && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (v ? 0 : h.crossAxis), A = i.reference[d] + i.reference[w] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? h.crossAxis : 0);
        p < b ? p = b : p > A && (p = A);
      }
      return {
        [a]: u,
        [d]: p
      };
    }
  };
}, Qn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...c
      } = Y(e, t), l = await ze(t, c), f = j(n), m = re(n), d = X(n) === "y", {
        width: a,
        height: u
      } = o.floating;
      let p, g;
      f === "top" || f === "bottom" ? (p = f, g = m === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = f, p = m === "end" ? "top" : "bottom");
      const h = u - l.top - l.bottom, y = a - l.left - l.right, x = H(u - l[p], h), w = H(a - l[g], y), v = !t.middlewareData.shift;
      let b = x, A = w;
      if (d ? A = m || v ? H(w, y) : y : b = m || v ? H(x, h) : h, v && !m) {
        const D = k(l.left, 0), I = k(l.right, 0), E = k(l.top, 0), S = k(l.bottom, 0);
        d ? A = a - 2 * (D !== 0 || I !== 0 ? D + I : k(l.left, l.right)) : b = u - 2 * (E !== 0 || S !== 0 ? E + S : k(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: A,
        availableHeight: b
      });
      const T = await r.getDimensions(i.floating);
      return a !== T.width || u !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Nt(e) {
  const t = W(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = U(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, c = me(n) !== i || me(o) !== s;
  return c && (n = i, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Ve(e) {
  return $(e) ? e : e.contextElement;
}
function J(e) {
  const t = Ve(e);
  if (!U(t))
    return G(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Nt(t);
  let s = (i ? me(n.width) : n.width) / o, c = (i ? me(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const eo = /* @__PURE__ */ G(0);
function Dt(e) {
  const t = _(e);
  return !Me() || !t.visualViewport ? eo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function to(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _(e) ? !1 : t;
}
function Z(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Ve(e);
  let s = G(1);
  t && (o ? $(o) && (s = J(o)) : s = J(e));
  const c = to(i, n, o) ? Dt(i) : G(0);
  let l = (r.left + c.x) / s.x, f = (r.top + c.y) / s.y, m = r.width / s.x, d = r.height / s.y;
  if (i) {
    const a = _(i), u = o && $(o) ? _(o) : o;
    let p = a, g = Ce(p);
    for (; g && o && u !== p; ) {
      const h = J(g), y = g.getBoundingClientRect(), x = W(g), w = y.left + (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, v = y.top + (g.clientTop + parseFloat(x.paddingTop)) * h.y;
      l *= h.x, f *= h.y, m *= h.x, d *= h.y, l += w, f += v, p = _(g), g = Ce(p);
    }
  }
  return te({
    width: m,
    height: d,
    x: l,
    y: f
  });
}
function no(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = q(o), c = t ? he(t.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = G(1);
  const m = G(0), d = U(o);
  if ((d || !d && !i) && ((oe(o) !== "body" || ae(s)) && (l = we(o)), U(o))) {
    const a = Z(o);
    f = J(o), m.x = a.x + o.clientLeft, m.y = a.y + o.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - l.scrollLeft * f.x + m.x,
    y: n.y * f.y - l.scrollTop * f.y + m.y
  };
}
function oo(e) {
  return Array.from(e.getClientRects());
}
function Ft(e) {
  return Z(q(e)).left + we(e).scrollLeft;
}
function ro(e) {
  const t = q(e), n = we(e), o = e.ownerDocument.body, r = k(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = k(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Ft(e);
  const c = -n.scrollTop;
  return W(o).direction === "rtl" && (s += k(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
function io(e, t) {
  const n = _(e), o = q(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const f = Me();
    (!f || f && t === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function so(e, t) {
  const n = Z(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = U(e) ? J(e) : G(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, l = r * i.x, f = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: f
  };
}
function tt(e, t, n) {
  let o;
  if (t === "viewport")
    o = io(e, n);
  else if (t === "document")
    o = ro(q(e));
  else if ($(t))
    o = so(t, n);
  else {
    const r = Dt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return te(o);
}
function Lt(e, t) {
  const n = K(e);
  return n === t || !$(n) || ee(n) ? !1 : W(n).position === "fixed" || Lt(n, t);
}
function co(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ce(e, [], !1).filter((c) => $(c) && oe(c) !== "body"), r = null;
  const i = W(e).position === "fixed";
  let s = i ? K(e) : e;
  for (; $(s) && !ee(s); ) {
    const c = W(s), l = Le(s);
    !l && c.position === "fixed" && (r = null), (i ? !l && !r : !l && c.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ae(s) && !l && Lt(e, s)) ? o = o.filter((m) => m !== s) : r = c, s = K(s);
  }
  return t.set(e, o), o;
}
function lo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? he(t) ? [] : co(t, this._c) : [].concat(n), o], c = s[0], l = s.reduce((f, m) => {
    const d = tt(t, m, r);
    return f.top = k(d.top, f.top), f.right = H(d.right, f.right), f.bottom = H(d.bottom, f.bottom), f.left = k(d.left, f.left), f;
  }, tt(t, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ao(e) {
  const {
    width: t,
    height: n
  } = Nt(e);
  return {
    width: t,
    height: n
  };
}
function fo(e, t, n) {
  const o = U(t), r = q(t), i = n === "fixed", s = Z(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = G(0);
  if (o || !o && !i)
    if ((oe(t) !== "body" || ae(r)) && (c = we(t)), o) {
      const d = Z(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else r && (l.x = Ft(r));
  const f = s.left + c.scrollLeft - l.x, m = s.top + c.scrollTop - l.y;
  return {
    x: f,
    y: m,
    width: s.width,
    height: s.height
  };
}
function ve(e) {
  return W(e).position === "static";
}
function nt(e, t) {
  return !U(e) || W(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Mt(e, t) {
  const n = _(e);
  if (he(e))
    return n;
  if (!U(e)) {
    let r = K(e);
    for (; r && !ee(r); ) {
      if ($(r) && !ve(r))
        return r;
      r = K(r);
    }
    return n;
  }
  let o = nt(e, t);
  for (; o && In(o) && ve(o); )
    o = nt(o, t);
  return o && ee(o) && ve(o) && !Le(o) ? n : o || kn(e) || n;
}
const uo = async function(e) {
  const t = this.getOffsetParent || Mt, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: fo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function mo(e) {
  return W(e).direction === "rtl";
}
const po = {
  convertOffsetParentRelativeRectToViewportRelativeRect: no,
  getDocumentElement: q,
  getClippingRect: lo,
  getOffsetParent: Mt,
  getElementRects: uo,
  getClientRects: oo,
  getDimensions: ao,
  getScale: J,
  isElement: $,
  isRTL: mo
};
function go(e, t) {
  let n = null, o;
  const r = q(e);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const {
      left: f,
      top: m,
      width: d,
      height: a
    } = e.getBoundingClientRect();
    if (c || t(), !d || !a)
      return;
    const u = fe(m), p = fe(r.clientWidth - (f + d)), g = fe(r.clientHeight - (m + a)), h = fe(f), x = {
      rootMargin: -u + "px " + -p + "px " + -g + "px " + -h + "px",
      threshold: k(0, H(1, l)) || 1
    };
    let w = !0;
    function v(b) {
      const A = b[0].intersectionRatio;
      if (A !== l) {
        if (!w)
          return s();
        A ? s(!1, A) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...x,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function ho(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, f = Ve(e), m = r || i ? [...f ? ce(f) : [], ...ce(t)] : [];
  m.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const d = f && c ? go(f, n) : null;
  let a = -1, u = null;
  s && (u = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === f && u && (u.unobserve(t), cancelAnimationFrame(a), a = requestAnimationFrame(() => {
      var w;
      (w = u) == null || w.observe(t);
    })), n();
  }), f && !l && u.observe(f), u.observe(t));
  let p, g = l ? Z(e) : null;
  l && h();
  function h() {
    const y = Z(e);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, p = requestAnimationFrame(h);
  }
  return n(), () => {
    var y;
    m.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d == null || d(), (y = u) == null || y.disconnect(), u = null, l && cancelAnimationFrame(p);
  };
}
const wo = Gn, yo = Zn, xo = Yn, vo = Qn, ot = Un, bo = qn, Ro = Jn, Co = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: po,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return jn(e, t, {
    ...r,
    platform: i
  });
};
var ue = typeof document < "u" ? gt : le;
function ge(e, t) {
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
        if (!ge(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !ge(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function It(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rt(e, t) {
  const n = It(e);
  return Math.round(t * n) / n;
}
function it(e) {
  const t = R.useRef(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function Ao(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: f
  } = e, [m, d] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [a, u] = R.useState(o);
  ge(a, o) || u(o);
  const [p, g] = R.useState(null), [h, y] = R.useState(null), x = R.useCallback((C) => {
    C !== A.current && (A.current = C, g(C));
  }, []), w = R.useCallback((C) => {
    C !== T.current && (T.current = C, y(C));
  }, []), v = i || p, b = s || h, A = R.useRef(null), T = R.useRef(null), D = R.useRef(m), I = l != null, E = it(l), S = it(r), N = R.useCallback(() => {
    if (!A.current || !T.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: a
    };
    S.current && (C.platform = S.current), Co(A.current, T.current, C).then((L) => {
      const M = {
        ...L,
        isPositioned: !0
      };
      B.current && !ge(D.current, M) && (D.current = M, gn.flushSync(() => {
        d(M);
      }));
    });
  }, [a, t, n, S]);
  ue(() => {
    f === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [f]);
  const B = R.useRef(!1);
  ue(() => (B.current = !0, () => {
    B.current = !1;
  }), []), ue(() => {
    if (v && (A.current = v), b && (T.current = b), v && b) {
      if (E.current)
        return E.current(v, b, N);
      N();
    }
  }, [v, b, N, E, I]);
  const P = R.useMemo(() => ({
    reference: A,
    floating: T,
    setReference: x,
    setFloating: w
  }), [x, w]), O = R.useMemo(() => ({
    reference: v,
    floating: b
  }), [v, b]), F = R.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return C;
    const L = rt(O.floating, m.x), M = rt(O.floating, m.y);
    return c ? {
      ...C,
      transform: "translate(" + L + "px, " + M + "px)",
      ...It(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: M
    };
  }, [n, c, O.floating, m.x, m.y]);
  return R.useMemo(() => ({
    ...m,
    update: N,
    refs: P,
    elements: O,
    floatingStyles: F
  }), [m, N, P, O, F]);
}
const Eo = (e) => {
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
      return o && t(o) ? o.current != null ? ot({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? ot({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Po = (e, t) => ({
  ...wo(e),
  options: [e, t]
}), To = (e, t) => ({
  ...yo(e),
  options: [e, t]
}), st = (e, t) => ({
  ...Ro(e),
  options: [e, t]
}), ct = (e, t) => ({
  ...xo(e),
  options: [e, t]
}), Oo = (e, t) => ({
  ...vo(e),
  options: [e, t]
}), lt = (e, t) => ({
  ...bo(e),
  options: [e, t]
}), So = (e, t) => ({
  ...Eo(e),
  options: [e, t]
}), kt = {
  ...R
}, No = kt.useInsertionEffect, Do = No || ((e) => e());
function Fo(e) {
  const t = R.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Do(() => {
    t.current = e;
  }), R.useCallback(function() {
    for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
      o[r] = arguments[r];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
var Pe = typeof document < "u" ? gt : le;
let at = !1, Lo = 0;
const ft = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Lo++
);
function Mo() {
  const [e, t] = R.useState(() => at ? ft() : void 0);
  return Pe(() => {
    e == null && t(ft());
  }, []), R.useEffect(() => {
    at = !0;
  }, []), e;
}
const Io = kt.useId, ko = Io || Mo;
let Te;
process.env.NODE_ENV !== "production" && (Te = /* @__PURE__ */ new Set());
function $o() {
  for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  const r = "Floating UI: " + n.join(" ");
  if (!((e = Te) != null && e.has(r))) {
    var i;
    (i = Te) == null || i.add(r), console.error(r);
  }
}
function Bo() {
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
const zo = /* @__PURE__ */ R.createContext(null), Vo = /* @__PURE__ */ R.createContext(null), Ho = () => {
  var e;
  return ((e = R.useContext(zo)) == null ? void 0 : e.id) || null;
}, _o = () => R.useContext(Vo);
function Wo(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: o
  } = e, r = ko(), i = R.useRef({}), [s] = R.useState(() => Bo()), c = Ho() != null;
  if (process.env.NODE_ENV !== "production") {
    const u = o.reference;
    u && !$(u) && $o("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, f] = R.useState(o.reference), m = Fo((u, p, g) => {
    i.current.openEvent = u ? p : void 0, s.emit("openchange", {
      open: u,
      event: p,
      reason: g,
      nested: c
    }), n == null || n(u, p, g);
  }), d = R.useMemo(() => ({
    setPositionReference: f
  }), []), a = R.useMemo(() => ({
    reference: l || o.reference || null,
    floating: o.floating || null,
    domReference: o.reference
  }), [l, o.reference, o.floating]);
  return R.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: m,
    elements: a,
    events: s,
    floatingId: r,
    refs: d
  }), [t, m, a, s, r, d]);
}
function jo(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Wo({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), o = e.rootContext || n, r = o.elements, [i, s] = R.useState(null), [c, l] = R.useState(null), m = (r == null ? void 0 : r.reference) || i, d = R.useRef(null), a = _o();
  Pe(() => {
    m && (d.current = m);
  }, [m]);
  const u = Ao({
    ...e,
    elements: {
      ...r,
      ...c && {
        reference: c
      }
    }
  }), p = R.useCallback((w) => {
    const v = $(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    l(v), u.refs.setReference(v);
  }, [u.refs]), g = R.useCallback((w) => {
    ($(w) || w === null) && (d.current = w, s(w)), ($(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !$(w)) && u.refs.setReference(w);
  }, [u.refs]), h = R.useMemo(() => ({
    ...u.refs,
    setReference: g,
    setPositionReference: p,
    domReference: d
  }), [u.refs, g, p]), y = R.useMemo(() => ({
    ...u.elements,
    domReference: m
  }), [u.elements, m]), x = R.useMemo(() => ({
    ...u,
    ...o,
    refs: h,
    elements: y,
    nodeId: t
  }), [u, h, y, t, o]);
  return Pe(() => {
    o.dataRef.current.floatingContext = x;
    const w = a == null ? void 0 : a.nodesRef.current.find((v) => v.id === t);
    w && (w.context = x);
  }), R.useMemo(() => ({
    ...u,
    context: x,
    refs: h,
    elements: y
  }), [u, h, y, x]);
}
function Uo(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, o] = t.split("-"), r = n === "right" ? "left" : "right";
    return o === void 0 ? r : `${r}-${o}`;
  }
  return t;
}
function ut(e, t, n, o) {
  return e === "center" || o === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function dt(e, t, n, o, r) {
  return e === "center" || o === "center" ? { left: t } : e === "end" ? { [r === "ltr" ? "right" : "left"]: n } : e === "start" ? { [r === "ltr" ? "left" : "right"]: n } : {};
}
const Yo = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Xo({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: o,
  arrowPosition: r,
  arrowX: i,
  arrowY: s,
  dir: c
}) {
  const [l, f = "center"] = e.split("-"), m = {
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [Yo[l]]: o
  }, d = -t / 2;
  return l === "left" ? {
    ...m,
    ...ut(f, s, n, r),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...m,
    ...ut(f, s, n, r),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...m,
    ...dt(f, i, n, r, c),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...m,
    ...dt(f, i, n, r, c),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const $t = Oe(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: o,
    arrowPosition: r,
    visible: i,
    arrowX: s,
    arrowY: c,
    style: l,
    ...f
  }, m) => {
    const { dir: d } = bt();
    return i ? /* @__PURE__ */ V(
      "div",
      {
        ...f,
        ref: m,
        style: {
          ...l,
          ...Xo({
            position: e,
            arrowSize: t,
            arrowOffset: n,
            arrowRadius: o,
            arrowPosition: r,
            dir: d,
            arrowX: s,
            arrowY: c
          })
        }
      }
    ) : null;
  }
);
$t.displayName = "@mantine/core/FloatingArrow";
const [qo, Bt] = fn(
  "Popover component was not found in the tree"
);
function He({
  children: e,
  active: t = !0,
  refProp: n = "ref",
  innerRef: o
}) {
  const r = Ln(t), i = De(r, o);
  return Rt(e) ? ht(e, { [n]: i }) : e;
}
function zt(e) {
  return /* @__PURE__ */ V(Fe, { tabIndex: -1, "data-autofocus": !0, ...e });
}
He.displayName = "@mantine/core/FocusTrap";
zt.displayName = "@mantine/core/FocusTrapInitialFocus";
He.InitialFocus = zt;
function Ko(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const Go = {}, Vt = Oe((e, t) => {
  const { children: n, target: o, ...r } = ne("Portal", Go, e), [i, s] = de(!1), c = Q(null);
  return dn(() => (s(!0), c.current = o ? typeof o == "string" ? document.querySelector(o) : o : Ko(r), pn(t, c.current), !o && c.current && document.body.appendChild(c.current), () => {
    !o && c.current && document.body.removeChild(c.current);
  }), [o]), !i || !c.current ? null : hn(/* @__PURE__ */ V(mt, { children: n }), c.current);
});
Vt.displayName = "@mantine/core/Portal";
function Ht({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ V(Vt, { ...n, children: t }) : /* @__PURE__ */ V(mt, { children: t });
}
Ht.displayName = "@mantine/core/OptionalPortal";
var _t = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Zo = {}, _e = Se((e, t) => {
  var h, y, x, w;
  const n = ne("PopoverDropdown", Zo, e), {
    className: o,
    style: r,
    vars: i,
    children: s,
    onKeyDownCapture: c,
    variant: l,
    classNames: f,
    styles: m,
    ...d
  } = n, a = Bt(), u = Pn({
    opened: a.opened,
    shouldReturnFocus: a.returnFocus
  }), p = a.withRoles ? {
    "aria-labelledby": a.getTargetId(),
    id: a.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = De(t, a.floating);
  return a.disabled ? null : /* @__PURE__ */ V(Ht, { ...a.portalProps, withinPortal: a.withinPortal, children: /* @__PURE__ */ V(
    wn,
    {
      mounted: a.opened,
      ...a.transitionProps,
      transition: ((h = a.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((y = a.transitionProps) == null ? void 0 : y.duration) ?? 150,
      keepMounted: a.keepMounted,
      exitDuration: typeof ((x = a.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? a.transitionProps.exitDuration : (w = a.transitionProps) == null ? void 0 : w.duration,
      children: (v) => /* @__PURE__ */ V(He, { active: a.trapFocus && a.opened, innerRef: g, children: /* @__PURE__ */ pt(
        wt,
        {
          ...p,
          ...d,
          variant: l,
          onKeyDownCapture: An(a.onClose, {
            active: a.closeOnEscape,
            onTrigger: u,
            onKeyDown: c
          }),
          "data-position": a.placement,
          "data-fixed": a.floatingStrategy === "fixed" || void 0,
          ...a.getStyles("dropdown", {
            className: o,
            props: n,
            classNames: f,
            styles: m,
            style: [
              {
                ...v,
                zIndex: a.zIndex,
                top: a.y ?? 0,
                left: a.x ?? 0,
                width: a.width === "target" ? void 0 : yt(a.width)
              },
              r
            ]
          }),
          children: [
            s,
            /* @__PURE__ */ V(
              $t,
              {
                ref: a.arrowRef,
                arrowX: a.arrowX,
                arrowY: a.arrowY,
                visible: a.withArrow,
                position: a.placement,
                arrowSize: a.arrowSize,
                arrowRadius: a.arrowRadius,
                arrowOffset: a.arrowOffset,
                arrowPosition: a.arrowPosition,
                ...a.getStyles("arrow", {
                  props: n,
                  classNames: f,
                  styles: m
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
_e.classes = _t;
_e.displayName = "@mantine/core/PopoverDropdown";
const Jo = {
  refProp: "ref",
  popupType: "dialog"
}, Wt = Se((e, t) => {
  const { children: n, refProp: o, popupType: r, ...i } = ne(
    "PopoverTarget",
    Jo,
    e
  );
  if (!Rt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, c = Bt(), l = De(c.reference, n.ref, t), f = c.withRoles ? {
    "aria-haspopup": r,
    "aria-expanded": c.opened,
    "aria-controls": c.getDropdownId(),
    id: c.getTargetId()
  } : {};
  return ht(n, {
    ...s,
    ...f,
    ...c.targetProps,
    className: cn(c.targetProps.className, s.className, n.props.className),
    [o]: l,
    ...c.controlled ? null : { onClick: c.onToggle }
  });
});
Wt.displayName = "@mantine/core/PopoverTarget";
function Qo({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: o
}) {
  const [r, i] = de(0);
  le(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return ho(
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
  ]), se(() => {
    t.update();
  }, o), se(() => {
    i((s) => s + 1);
  }, [e]);
}
function er(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const t = { ...e };
  return e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t;
}
function tr(e, t) {
  const n = er(e.middlewares), o = [Po(e.offset)];
  return n.shift && o.push(
    To(
      typeof n.shift == "boolean" ? { limiter: st(), padding: 5 } : { limiter: st(), padding: 5, ...n.shift }
    )
  ), n.flip && o.push(
    typeof n.flip == "boolean" ? ct() : ct(n.flip)
  ), n.inline && o.push(
    typeof n.inline == "boolean" ? lt() : lt(n.inline)
  ), o.push(So({ element: e.arrowRef, padding: e.arrowOffset })), (n.size || e.width === "target") && o.push(
    Oo({
      ...typeof n.size == "boolean" ? {} : n.size,
      apply({ rects: r, availableWidth: i, availableHeight: s, ...c }) {
        var m;
        const f = ((m = t().refs.floating.current) == null ? void 0 : m.style) ?? {};
        n.size && (typeof n.size == "object" && n.size.apply ? n.size.apply({ rects: r, availableWidth: i, availableHeight: s, ...c }) : Object.assign(f, {
          maxWidth: `${i}px`,
          maxHeight: `${s}px`
        })), e.width === "target" && Object.assign(f, {
          width: `${r.reference.width}px`
        });
      }
    })
  ), o;
}
function nr(e) {
  const [t, n] = yn({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), o = () => {
    var s;
    t && ((s = e.onClose) == null || s.call(e), n(!1));
  }, r = () => {
    var s, c;
    t ? ((s = e.onClose) == null || s.call(e), n(!1)) : ((c = e.onOpen) == null || c.call(e), n(!0));
  }, i = jo({
    strategy: e.strategy,
    placement: e.position,
    middleware: tr(e, () => i)
  });
  return Qo({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), se(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), se(() => {
    var s, c;
    e.opened ? (c = e.onOpen) == null || c.call(e) : (s = e.onClose) == null || s.call(e);
  }, [e.opened]), {
    floating: i,
    controlled: typeof e.opened == "boolean",
    opened: t,
    onClose: o,
    onToggle: r
  };
}
const or = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: Rn("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, rr = xt((e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : vt(t),
    "--popover-shadow": ln(n)
  }
}));
function ye(e) {
  var Ye, Xe, qe, Ke, Ge, Ze;
  const t = ne("Popover", or, e), {
    children: n,
    position: o,
    offset: r,
    onPositionChange: i,
    positionDependencies: s,
    opened: c,
    transitionProps: l,
    width: f,
    middlewares: m,
    withArrow: d,
    arrowSize: a,
    arrowOffset: u,
    arrowRadius: p,
    arrowPosition: g,
    unstyled: h,
    classNames: y,
    styles: x,
    closeOnClickOutside: w,
    withinPortal: v,
    portalProps: b,
    closeOnEscape: A,
    clickOutsideEvents: T,
    trapFocus: D,
    onClose: I,
    onOpen: E,
    onChange: S,
    zIndex: N,
    radius: B,
    shadow: P,
    id: O,
    defaultOpened: F,
    __staticSelector: C,
    withRoles: L,
    disabled: M,
    returnFocus: xe,
    variant: Xt,
    keepMounted: qt,
    vars: Kt,
    floatingStrategy: We,
    ...Gt
  } = t, Zt = Ne({
    name: C,
    props: t,
    classes: _t,
    classNames: y,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: Kt,
    varsResolver: rr
  }), je = Q(null), [Jt, Qt] = de(null), [en, tn] = de(null), { dir: nn } = bt(), Ue = mn(O), z = nr({
    middlewares: m,
    width: f,
    position: Uo(nn, o),
    offset: typeof r == "number" ? r + (d ? a / 2 : 0) : r,
    arrowRef: je,
    arrowOffset: u,
    onPositionChange: i,
    positionDependencies: s,
    opened: c,
    defaultOpened: F,
    onChange: S,
    onOpen: E,
    onClose: I,
    strategy: We
  });
  En(() => w && z.onClose(), T, [
    Jt,
    en
  ]);
  const on = be(
    (ie) => {
      Qt(ie), z.floating.refs.setReference(ie);
    },
    [z.floating.refs.setReference]
  ), rn = be(
    (ie) => {
      tn(ie), z.floating.refs.setFloating(ie);
    },
    [z.floating.refs.setFloating]
  );
  return /* @__PURE__ */ V(
    qo,
    {
      value: {
        returnFocus: xe,
        disabled: M,
        controlled: z.controlled,
        reference: on,
        floating: rn,
        x: z.floating.x,
        y: z.floating.y,
        arrowX: (qe = (Xe = (Ye = z.floating) == null ? void 0 : Ye.middlewareData) == null ? void 0 : Xe.arrow) == null ? void 0 : qe.x,
        arrowY: (Ze = (Ge = (Ke = z.floating) == null ? void 0 : Ke.middlewareData) == null ? void 0 : Ge.arrow) == null ? void 0 : Ze.y,
        opened: z.opened,
        arrowRef: je,
        transitionProps: l,
        width: f,
        withArrow: d,
        arrowSize: a,
        arrowOffset: u,
        arrowRadius: p,
        arrowPosition: g,
        placement: z.floating.placement,
        trapFocus: D,
        withinPortal: v,
        portalProps: b,
        zIndex: N,
        radius: B,
        shadow: P,
        closeOnEscape: A,
        onClose: z.onClose,
        onToggle: z.onToggle,
        getTargetId: () => `${Ue}-target`,
        getDropdownId: () => `${Ue}-dropdown`,
        withRoles: L,
        targetProps: Gt,
        __staticSelector: C,
        classNames: y,
        styles: x,
        unstyled: h,
        variant: Xt,
        keepMounted: qt,
        getStyles: Zt,
        floatingStrategy: We
      },
      children: n
    }
  );
}
ye.Target = Wt;
ye.Dropdown = _e;
ye.displayName = "@mantine/core/Popover";
ye.extend = (e) => e;
const jt = Oe(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, o) => /* @__PURE__ */ V(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: o,
      ...n,
      children: /* @__PURE__ */ V(
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
jt.displayName = "@mantine/core/CloseIcon";
var Ut = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const ir = {
  variant: "subtle"
}, sr = xt((e, { size: t, radius: n, iconSize: o }) => ({
  root: {
    "--cb-size": an(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : vt(n),
    "--cb-icon-size": yt(o)
  }
})), Yt = xn((e, t) => {
  const n = ne("CloseButton", ir, e), {
    iconSize: o,
    children: r,
    vars: i,
    radius: s,
    className: c,
    classNames: l,
    style: f,
    styles: m,
    unstyled: d,
    "data-disabled": a,
    disabled: u,
    variant: p,
    icon: g,
    mod: h,
    ...y
  } = n, x = Ne({
    name: "CloseButton",
    props: n,
    className: c,
    style: f,
    classes: Ut,
    classNames: l,
    styles: m,
    unstyled: d,
    vars: i,
    varsResolver: sr
  });
  return /* @__PURE__ */ pt(
    vn,
    {
      ref: t,
      ...y,
      unstyled: d,
      variant: p,
      disabled: u,
      mod: [{ disabled: u || a }, h],
      ...x("root", { variant: p, active: !u && !a }),
      children: [
        g || /* @__PURE__ */ V(jt, {}),
        r
      ]
    }
  );
});
Yt.classes = Ut;
Yt.displayName = "@mantine/core/CloseButton";
export {
  Yt as C,
  He as F,
  Ht as O,
  ye as P,
  Rn as g,
  Rt as i,
  Pn as u
};
