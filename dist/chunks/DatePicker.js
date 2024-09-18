import * as h from "react";
import { useState as $, useEffect as U, useCallback as de, useRef as et, forwardRef as H } from "react";
import { jsx as m, Fragment as ke, jsxs as Q } from "react/jsx-runtime";
import { t as tt, u as E, d as pe, B as X, g as Se, j as be, q as Te, r as te, l as nt, m as A, f as O, h as rt } from "./factory.js";
import { H as at } from "./pick-calendar-levels-props.js";
import { u as ot } from "./use-input-props.js";
import { C as xe } from "./CloseButton.js";
import { a as ne, O as st } from "./use-floating-auto-update.js";
import { c as Oe } from "./create-safe-context.js";
import { u as lt, F as ct, P as fe } from "./Popover.js";
import { p as De } from "./polymorphic-factory.js";
import { T as Ie } from "./Transition.js";
import { a as it } from "./use-reduced-motion.js";
import { u as ut } from "./use-id.js";
import { I as me } from "./Input.js";
import P from "dayjs";
import { a as dt, u as ft, C as _e, s as mt } from "./Calendar.js";
import { u as vt } from "./use-resolved-styles-api.js";
var x = function() {
  return x = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, x.apply(this, arguments);
};
function Le(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function ht(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var J = "right-scroll-bar-position", ee = "width-before-scroll-bar", yt = "with-scroll-bars-hidden", gt = "--removed-body-scroll-bar-size";
function ve(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pt(e, t) {
  var n = $(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var St = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Me = /* @__PURE__ */ new WeakMap();
function bt(e, t) {
  var n = pt(null, function(r) {
    return e.forEach(function(a) {
      return ve(a, r);
    });
  });
  return St(function() {
    var r = Me.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), c = n.current;
      a.forEach(function(s) {
        o.has(s) || ve(s, null);
      }), o.forEach(function(s) {
        a.has(s) || ve(s, c);
      });
    }
    Me.set(n, e);
  }, [e]), n;
}
function wt(e) {
  return e;
}
function Ct(e, t) {
  t === void 0 && (t = wt);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var c = t(o, r);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(o);
      }
      n = {
        push: function(s) {
          return o(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(o), c = n;
      }
      var u = function() {
        var d = c;
        c = [], d.forEach(o);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(d) {
          c.push(d), l();
        },
        filter: function(d) {
          return c = c.filter(d), n;
        }
      };
    }
  };
  return a;
}
function Mt(e) {
  e === void 0 && (e = {});
  var t = Ct(null);
  return t.options = x({ async: !0, ssr: !1 }, e), t;
}
var $e = function(e) {
  var t = e.sideCar, n = Le(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return h.createElement(r, x({}, n));
};
$e.isSideCarExport = !0;
function Bt(e, t) {
  return e.useMedium(t), $e;
}
var Ae = Mt(), he = function() {
}, re = h.forwardRef(function(e, t) {
  var n = h.useRef(null), r = h.useState({
    onScrollCapture: he,
    onWheelCapture: he,
    onTouchMoveCapture: he
  }), a = r[0], o = r[1], c = e.forwardProps, s = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, y = e.shards, w = e.sideCar, g = e.noIsolation, p = e.inert, i = e.allowPinchZoom, v = e.as, S = v === void 0 ? "div" : v, M = e.gapMode, B = Le(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = w, b = bt([n, t]), f = x(x({}, B), a);
  return h.createElement(
    h.Fragment,
    null,
    d && h.createElement(N, { sideCar: Ae, removeScrollBar: l, shards: y, noIsolation: g, inert: p, setCallbacks: o, allowPinchZoom: !!i, lockRef: n, gapMode: M }),
    c ? h.cloneElement(h.Children.only(s), x(x({}, f), { ref: b })) : h.createElement(S, x({}, f, { className: u, ref: b }), s)
  );
});
re.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
re.classNames = {
  fullWidth: ee,
  zeroRight: J
};
var Nt = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Rt() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Nt();
  return t && e.setAttribute("nonce", t), e;
}
function Pt(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Et(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var kt = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Rt()) && (Pt(t, n), Et(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Tt = function() {
  var e = kt();
  return function(t, n) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, He = function() {
  var e = Tt(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, xt = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ye = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ot = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ye(n), ye(r), ye(a)];
}, Dt = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return xt;
  var t = Ot(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, It = He(), V = "data-scroll-locked", _t = function(e, t, n, r) {
  var a = e.left, o = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(yt, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(V, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(J, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ee, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(J, " .").concat(J, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ee, " .").concat(ee, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(V, `] {
    `).concat(gt, ": ").concat(s, `px;
  }
`);
}, Be = function() {
  var e = parseInt(document.body.getAttribute(V) || "0", 10);
  return isFinite(e) ? e : 0;
}, Lt = function() {
  h.useEffect(function() {
    return document.body.setAttribute(V, (Be() + 1).toString()), function() {
      var e = Be() - 1;
      e <= 0 ? document.body.removeAttribute(V) : document.body.setAttribute(V, e.toString());
    };
  }, []);
}, $t = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  Lt();
  var o = h.useMemo(function() {
    return Dt(a);
  }, [a]);
  return h.createElement(It, { styles: _t(o, !t, a, n ? "" : "!important") });
}, ge = !1;
if (typeof window < "u")
  try {
    var G = Object.defineProperty({}, "passive", {
      get: function() {
        return ge = !0, !0;
      }
    });
    window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
  } catch {
    ge = !1;
  }
var z = ge ? { passive: !1 } : !1, At = function(e) {
  return e.tagName === "TEXTAREA";
}, Fe = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !At(e) && n[t] === "visible")
  );
}, Ht = function(e) {
  return Fe(e, "overflowY");
}, Ft = function(e) {
  return Fe(e, "overflowX");
}, Ne = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = ze(e, r);
    if (a) {
      var o = We(e, r), c = o[1], s = o[2];
      if (c > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, zt = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wt = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ze = function(e, t) {
  return e === "v" ? Ht(t) : Ft(t);
}, We = function(e, t) {
  return e === "v" ? zt(t) : Wt(t);
}, Vt = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, jt = function(e, t, n, r, a) {
  var o = Vt(e, window.getComputedStyle(t).direction), c = o * r, s = n.target, u = t.contains(s), l = !1, d = c > 0, y = 0, w = 0;
  do {
    var g = We(e, s), p = g[0], i = g[1], v = g[2], S = i - v - o * p;
    (p || S) && ze(e, s) && (y += S, w += p), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(y) < 1 || !a) || !d && (Math.abs(w) < 1 || !a)) && (l = !0), l;
}, q = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Re = function(e) {
  return [e.deltaX, e.deltaY];
}, Pe = function(e) {
  return e && "current" in e ? e.current : e;
}, Xt = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yt = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Zt = 0, W = [];
function Kt(e) {
  var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), a = h.useState(Zt++)[0], o = h.useState(He)[0], c = h.useRef(e);
  h.useEffect(function() {
    c.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var i = ht([e.lockRef.current], (e.shards || []).map(Pe), !0).filter(Boolean);
      return i.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), i.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = h.useCallback(function(i, v) {
    if ("touches" in i && i.touches.length === 2 || i.type === "wheel" && i.ctrlKey)
      return !c.current.allowPinchZoom;
    var S = q(i), M = n.current, B = "deltaX" in i ? i.deltaX : M[0] - S[0], N = "deltaY" in i ? i.deltaY : M[1] - S[1], b, f = i.target, C = Math.abs(B) > Math.abs(N) ? "h" : "v";
    if ("touches" in i && C === "h" && f.type === "range")
      return !1;
    var R = Ne(C, f);
    if (!R)
      return !0;
    if (R ? b = C : (b = C === "v" ? "h" : "v", R = Ne(C, f)), !R)
      return !1;
    if (!r.current && "changedTouches" in i && (B || N) && (r.current = b), !b)
      return !0;
    var k = r.current || b;
    return jt(k, v, i, k === "h" ? B : N, !0);
  }, []), u = h.useCallback(function(i) {
    var v = i;
    if (!(!W.length || W[W.length - 1] !== o)) {
      var S = "deltaY" in v ? Re(v) : q(v), M = t.current.filter(function(b) {
        return b.name === v.type && (b.target === v.target || v.target === b.shadowParent) && Xt(b.delta, S);
      })[0];
      if (M && M.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!M) {
        var B = (c.current.shards || []).map(Pe).filter(Boolean).filter(function(b) {
          return b.contains(v.target);
        }), N = B.length > 0 ? s(v, B[0]) : !c.current.noIsolation;
        N && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = h.useCallback(function(i, v, S, M) {
    var B = { name: i, delta: v, target: S, should: M, shadowParent: Qt(S) };
    t.current.push(B), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== B;
      });
    }, 1);
  }, []), d = h.useCallback(function(i) {
    n.current = q(i), r.current = void 0;
  }, []), y = h.useCallback(function(i) {
    l(i.type, Re(i), i.target, s(i, e.lockRef.current));
  }, []), w = h.useCallback(function(i) {
    l(i.type, q(i), i.target, s(i, e.lockRef.current));
  }, []);
  h.useEffect(function() {
    return W.push(o), e.setCallbacks({
      onScrollCapture: y,
      onWheelCapture: y,
      onTouchMoveCapture: w
    }), document.addEventListener("wheel", u, z), document.addEventListener("touchmove", u, z), document.addEventListener("touchstart", d, z), function() {
      W = W.filter(function(i) {
        return i !== o;
      }), document.removeEventListener("wheel", u, z), document.removeEventListener("touchmove", u, z), document.removeEventListener("touchstart", d, z);
    };
  }, []);
  var g = e.removeScrollBar, p = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    p ? h.createElement(o, { styles: Yt(a) }) : null,
    g ? h.createElement($t, { gapMode: e.gapMode }) : null
  );
}
function Qt(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ut = Bt(Ae, Kt);
var Ve = h.forwardRef(function(e, t) {
  return h.createElement(re, x({}, e, { ref: t, sideCar: Ut }));
});
Ve.classNames = re.classNames;
function Gt(e, t, n) {
  U(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t, n)), [e, t]);
}
function jn(e = !1, t) {
  const { onOpen: n, onClose: r } = {}, [a, o] = $(e), c = de(() => {
    o((l) => l || (n == null || n(), !0));
  }, [n]), s = de(() => {
    o((l) => l && (r == null || r(), !1));
  }, [r]), u = de(() => {
    a ? s() : c();
  }, [s, c, a]);
  return [a, { open: c, close: s, toggle: u }];
}
function qt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const o = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${o}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: a } = tt(e);
  return `rgba(${n}, ${r}, ${a}, ${t})`;
}
var je = { root: "m_1b7284a3" };
const Jt = {}, en = Se((e, { radius: t, shadow: n }) => ({
  root: {
    "--paper-radius": t === void 0 ? void 0 : be(t),
    "--paper-shadow": Te(n)
  }
})), we = De((e, t) => {
  const n = E("Paper", Jt, e), {
    classNames: r,
    className: a,
    style: o,
    styles: c,
    unstyled: s,
    withBorder: u,
    vars: l,
    radius: d,
    shadow: y,
    variant: w,
    mod: g,
    ...p
  } = n, i = pe({
    name: "Paper",
    props: n,
    classes: je,
    className: a,
    style: o,
    classNames: r,
    styles: c,
    unstyled: s,
    vars: l,
    varsResolver: en
  });
  return /* @__PURE__ */ m(
    X,
    {
      ref: t,
      mod: [{ "data-with-border": u }, g],
      ...i("root"),
      variant: w,
      ...p
    }
  );
});
we.classes = je;
we.displayName = "@mantine/core/Paper";
var Xe = { root: "m_9814e45f" };
const tn = {
  zIndex: ne("modal")
}, nn = Se(
  (e, { gradient: t, color: n, backgroundOpacity: r, blur: a, radius: o, zIndex: c }) => ({
    root: {
      "--overlay-bg": t || (n !== void 0 || r !== void 0) && qt(n || "#000", r ?? 0.6) || void 0,
      "--overlay-filter": a ? `blur(${te(a)})` : void 0,
      "--overlay-radius": o === void 0 ? void 0 : be(o),
      "--overlay-z-index": c == null ? void 0 : c.toString()
    }
  })
), Ce = De((e, t) => {
  const n = E("Overlay", tn, e), {
    classNames: r,
    className: a,
    style: o,
    styles: c,
    unstyled: s,
    vars: u,
    fixed: l,
    center: d,
    children: y,
    radius: w,
    zIndex: g,
    gradient: p,
    blur: i,
    color: v,
    backgroundOpacity: S,
    mod: M,
    ...B
  } = n, N = pe({
    name: "Overlay",
    props: n,
    classes: Xe,
    className: a,
    style: o,
    classNames: r,
    styles: c,
    unstyled: s,
    vars: u,
    varsResolver: nn
  });
  return /* @__PURE__ */ m(X, { ref: t, ...N("root"), mod: [{ center: d, fixed: l }, M], ...B, children: y });
});
Ce.classes = Xe;
Ce.displayName = "@mantine/core/Overlay";
const [rn, I] = Oe(
  "ModalBase component was not found in tree"
);
function an({ opened: e, transitionDuration: t }) {
  const [n, r] = $(e), a = et(), c = it() ? 0 : t;
  return U(() => (e ? (r(!0), window.clearTimeout(a.current)) : c === 0 ? r(!1) : a.current = window.setTimeout(() => r(!1), c), () => window.clearTimeout(a.current)), [e, c]), n;
}
function on({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: a,
  onClose: o,
  returnFocus: c
}) {
  const s = ut(e), [u, l] = $(!1), [d, y] = $(!1), w = typeof (t == null ? void 0 : t.duration) == "number" ? t == null ? void 0 : t.duration : 200, g = an({ opened: n, transitionDuration: w });
  return Gt(
    "keydown",
    (p) => {
      var i;
      p.key === "Escape" && a && n && ((i = p.target) == null ? void 0 : i.getAttribute("data-mantine-stop-propagation")) !== "true" && o();
    },
    { capture: !0 }
  ), lt({ opened: n, shouldReturnFocus: r && c }), {
    _id: s,
    titleMounted: u,
    bodyMounted: d,
    shouldLockScroll: g,
    setTitleMounted: l,
    setBodyMounted: y
  };
}
const sn = H(
  ({
    keepMounted: e,
    opened: t,
    onClose: n,
    id: r,
    transitionProps: a,
    trapFocus: o,
    closeOnEscape: c,
    returnFocus: s,
    closeOnClickOutside: u,
    withinPortal: l,
    portalProps: d,
    lockScroll: y,
    children: w,
    zIndex: g,
    shadow: p,
    padding: i,
    __vars: v,
    unstyled: S,
    removeScrollProps: M,
    ...B
  }, N) => {
    const { _id: b, titleMounted: f, bodyMounted: C, shouldLockScroll: R, setTitleMounted: k, setBodyMounted: F } = on({ id: r, transitionProps: a, opened: t, trapFocus: o, closeOnEscape: c, onClose: n, returnFocus: s }), { key: Z, ...T } = M || {};
    return /* @__PURE__ */ m(st, { ...d, withinPortal: l, children: /* @__PURE__ */ m(
      rn,
      {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: u,
          transitionProps: { ...a, keepMounted: e },
          getTitleId: () => `${b}-title`,
          getBodyId: () => `${b}-body`,
          titleMounted: f,
          bodyMounted: C,
          setTitleMounted: k,
          setBodyMounted: F,
          trapFocus: o,
          closeOnEscape: c,
          zIndex: g,
          unstyled: S
        },
        children: /* @__PURE__ */ m(
          Ve,
          {
            enabled: R && y,
            ...T,
            children: /* @__PURE__ */ m(
              X,
              {
                ref: N,
                ...B,
                __vars: {
                  ...v,
                  "--mb-z-index": (g || ne("modal")).toString(),
                  "--mb-shadow": Te(p),
                  "--mb-padding": nt(i)
                },
                children: w
              }
            )
          },
          Z
        )
      }
    ) });
  }
);
function ln() {
  const e = I();
  return U(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []), e.getBodyId();
}
var j = { title: "m_615af6c9", header: "m_b5489c3c", inner: "m_60c222c7", content: "m_fd1ab0aa", close: "m_606cb269", body: "m_5df29311" };
const Ye = H(
  ({ className: e, ...t }, n) => {
    const r = ln(), a = I();
    return /* @__PURE__ */ m(
      X,
      {
        ref: n,
        ...t,
        id: r,
        className: A({ [j.body]: !a.unstyled }, e)
      }
    );
  }
);
Ye.displayName = "@mantine/core/ModalBaseBody";
const Ze = H(
  ({ className: e, onClick: t, ...n }, r) => {
    const a = I();
    return /* @__PURE__ */ m(
      xe,
      {
        ref: r,
        ...n,
        onClick: (o) => {
          a.onClose(), t == null || t(o);
        },
        className: A({ [j.close]: !a.unstyled }, e),
        unstyled: a.unstyled
      }
    );
  }
);
Ze.displayName = "@mantine/core/ModalBaseCloseButton";
const cn = H(
  ({ transitionProps: e, className: t, innerProps: n, onKeyDown: r, style: a, ...o }, c) => {
    const s = I();
    return /* @__PURE__ */ m(
      Ie,
      {
        mounted: s.opened,
        transition: "pop",
        ...s.transitionProps,
        ...e,
        children: (u) => /* @__PURE__ */ m(
          "div",
          {
            ...n,
            className: A({ [j.inner]: !s.unstyled }, n.className),
            children: /* @__PURE__ */ m(ct, { active: s.opened && s.trapFocus, innerRef: c, children: /* @__PURE__ */ m(
              we,
              {
                ...o,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": s.bodyMounted ? s.getBodyId() : void 0,
                "aria-labelledby": s.titleMounted ? s.getTitleId() : void 0,
                style: [a, u],
                className: A({ [j.content]: !s.unstyled }, t),
                unstyled: s.unstyled,
                children: o.children
              }
            ) })
          }
        )
      }
    );
  }
), Ke = H(
  ({ className: e, ...t }, n) => {
    const r = I();
    return /* @__PURE__ */ m(
      X,
      {
        component: "header",
        ref: n,
        className: A({ [j.header]: !r.unstyled }, e),
        ...t
      }
    );
  }
);
Ke.displayName = "@mantine/core/ModalBaseHeader";
const un = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function dn(e) {
  const t = I();
  return { ...un, ...t.transitionProps, ...e };
}
const Qe = H(
  ({ onClick: e, transitionProps: t, style: n, ...r }, a) => {
    const o = I(), c = dn(t);
    return /* @__PURE__ */ m(Ie, { mounted: o.opened, ...c, transition: "fade", children: (s) => /* @__PURE__ */ m(
      Ce,
      {
        ref: a,
        fixed: !0,
        style: [n, s],
        zIndex: o.zIndex,
        unstyled: o.unstyled,
        onClick: (u) => {
          e == null || e(u), o.closeOnClickOutside && o.onClose();
        },
        ...r
      }
    ) });
  }
);
Qe.displayName = "@mantine/core/ModalBaseOverlay";
function fn() {
  const e = I();
  return U(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []), e.getTitleId();
}
const Ue = H(
  ({ className: e, ...t }, n) => {
    const r = fn(), a = I();
    return /* @__PURE__ */ m(
      X,
      {
        component: "h2",
        ref: n,
        className: A({ [j.title]: !a.unstyled }, e),
        ...t,
        id: r
      }
    );
  }
);
Ue.displayName = "@mantine/core/ModalBaseTitle";
function mn({ children: e }) {
  return /* @__PURE__ */ m(ke, { children: e });
}
const [vn, Y] = Oe(
  "Modal component was not found in tree"
);
var _ = { root: "m_9df02822", content: "m_54c44539", inner: "m_1f958f16", header: "m_d0e2b9cd" };
const hn = {}, ae = O((e, t) => {
  const n = E("ModalBody", hn, e), { classNames: r, className: a, style: o, styles: c, vars: s, ...u } = n, l = Y();
  return /* @__PURE__ */ m(
    Ye,
    {
      ref: t,
      ...l.getStyles("body", { classNames: r, style: o, styles: c, className: a }),
      ...u
    }
  );
});
ae.classes = _;
ae.displayName = "@mantine/core/ModalBody";
const yn = {}, oe = O((e, t) => {
  const n = E("ModalCloseButton", yn, e), { classNames: r, className: a, style: o, styles: c, vars: s, ...u } = n, l = Y();
  return /* @__PURE__ */ m(
    Ze,
    {
      ref: t,
      ...l.getStyles("close", { classNames: r, style: o, styles: c, className: a }),
      ...u
    }
  );
});
oe.classes = _;
oe.displayName = "@mantine/core/ModalCloseButton";
const gn = {}, se = O((e, t) => {
  const n = E("ModalContent", gn, e), { classNames: r, className: a, style: o, styles: c, vars: s, children: u, ...l } = n, d = Y(), y = d.scrollAreaComponent || mn;
  return /* @__PURE__ */ m(
    cn,
    {
      ...d.getStyles("content", { className: a, style: o, styles: c, classNames: r }),
      innerProps: d.getStyles("inner", { className: a, style: o, styles: c, classNames: r }),
      "data-full-screen": d.fullScreen || void 0,
      "data-modal-content": !0,
      ref: t,
      ...l,
      children: /* @__PURE__ */ m(
        y,
        {
          style: {
            maxHeight: d.fullScreen ? "100dvh" : `calc(100dvh - (${te(d.yOffset)} * 2))`
          },
          children: u
        }
      )
    }
  );
});
se.classes = _;
se.displayName = "@mantine/core/ModalContent";
const pn = {}, le = O((e, t) => {
  const n = E("ModalHeader", pn, e), { classNames: r, className: a, style: o, styles: c, vars: s, ...u } = n, l = Y();
  return /* @__PURE__ */ m(
    Ke,
    {
      ref: t,
      ...l.getStyles("header", { classNames: r, style: o, styles: c, className: a }),
      ...u
    }
  );
});
le.classes = _;
le.displayName = "@mantine/core/ModalHeader";
const Sn = {}, ce = O((e, t) => {
  const n = E("ModalOverlay", Sn, e), { classNames: r, className: a, style: o, styles: c, vars: s, ...u } = n, l = Y();
  return /* @__PURE__ */ m(
    Qe,
    {
      ref: t,
      ...l.getStyles("overlay", { classNames: r, style: o, styles: c, className: a }),
      ...u
    }
  );
});
ce.classes = _;
ce.displayName = "@mantine/core/ModalOverlay";
const bn = {
  __staticSelector: "Modal",
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: ne("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  yOffset: "5dvh"
}, wn = Se(
  (e, { radius: t, size: n, yOffset: r, xOffset: a }) => ({
    root: {
      "--modal-radius": t === void 0 ? void 0 : be(t),
      "--modal-size": rt(n, "modal-size"),
      "--modal-y-offset": te(r),
      "--modal-x-offset": te(a)
    }
  })
), ie = O((e, t) => {
  const n = E("ModalRoot", bn, e), {
    classNames: r,
    className: a,
    style: o,
    styles: c,
    unstyled: s,
    vars: u,
    yOffset: l,
    scrollAreaComponent: d,
    radius: y,
    fullScreen: w,
    centered: g,
    xOffset: p,
    __staticSelector: i,
    ...v
  } = n, S = pe({
    name: i,
    classes: _,
    props: n,
    className: a,
    style: o,
    classNames: r,
    styles: c,
    unstyled: s,
    vars: u,
    varsResolver: wn
  });
  return /* @__PURE__ */ m(vn, { value: { yOffset: l, scrollAreaComponent: d, getStyles: S, fullScreen: w }, children: /* @__PURE__ */ m(
    sn,
    {
      ref: t,
      ...S("root"),
      "data-full-screen": w || void 0,
      "data-centered": g || void 0,
      unstyled: s,
      ...v
    }
  ) });
});
ie.classes = _;
ie.displayName = "@mantine/core/ModalRoot";
const Cn = {}, ue = O((e, t) => {
  const n = E("ModalTitle", Cn, e), { classNames: r, className: a, style: o, styles: c, vars: s, ...u } = n, l = Y();
  return /* @__PURE__ */ m(
    Ue,
    {
      ref: t,
      ...l.getStyles("title", { classNames: r, style: o, styles: c, className: a }),
      ...u
    }
  );
});
ue.classes = _;
ue.displayName = "@mantine/core/ModalTitle";
const Mn = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: ne("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  withOverlay: !0,
  withCloseButton: !0
}, D = O((e, t) => {
  const {
    title: n,
    withOverlay: r,
    overlayProps: a,
    withCloseButton: o,
    closeButtonProps: c,
    children: s,
    radius: u,
    ...l
  } = E("Modal", Mn, e), d = !!n || o;
  return /* @__PURE__ */ Q(ie, { ref: t, radius: u, ...l, children: [
    r && /* @__PURE__ */ m(ce, { ...a }),
    /* @__PURE__ */ Q(se, { radius: u, children: [
      d && /* @__PURE__ */ Q(le, { children: [
        n && /* @__PURE__ */ m(ue, { children: n }),
        o && /* @__PURE__ */ m(oe, { ...c })
      ] }),
      /* @__PURE__ */ m(ae, { children: s })
    ] })
  ] });
});
D.classes = _;
D.displayName = "@mantine/core/Modal";
D.Root = ie;
D.Overlay = ce;
D.Content = se;
D.Body = ae;
D.Header = le;
D.Title = ue;
D.CloseButton = oe;
var Ge = { input: "m_6fa5e2aa" };
const Bn = {}, qe = O((e, t) => {
  const {
    inputProps: n,
    wrapperProps: r,
    placeholder: a,
    classNames: o,
    styles: c,
    unstyled: s,
    popoverProps: u,
    modalProps: l,
    dropdownType: d,
    children: y,
    formattedValue: w,
    dropdownHandlers: g,
    dropdownOpened: p,
    onClick: i,
    clearable: v,
    onClear: S,
    clearButtonProps: M,
    rightSection: B,
    shouldClear: N,
    readOnly: b,
    disabled: f,
    value: C,
    name: R,
    form: k,
    type: F,
    ...Z
  } = ot("PickerInputBase", Bn, e), T = B || (v && N && !b && !f ? /* @__PURE__ */ m(
    xe,
    {
      variant: "transparent",
      onClick: S,
      unstyled: s,
      size: n.size || "sm",
      ...M
    }
  ) : null), L = () => {
    F === "range" && Array.isArray(C) && C[0] && !C[1] && S(), g.close();
  };
  return /* @__PURE__ */ Q(ke, { children: [
    d === "modal" && !b && /* @__PURE__ */ m(
      D,
      {
        opened: p,
        onClose: L,
        withCloseButton: !1,
        size: "auto",
        "data-dates-modal": !0,
        unstyled: s,
        ...l,
        children: y
      }
    ),
    /* @__PURE__ */ m(me.Wrapper, { ...r, children: /* @__PURE__ */ Q(
      fe,
      {
        position: "bottom-start",
        opened: p,
        trapFocus: !0,
        returnFocus: !0,
        unstyled: s,
        ...u,
        disabled: (u == null ? void 0 : u.disabled) || d === "modal" || b,
        onClose: () => {
          var K;
          (K = u == null ? void 0 : u.onClose) == null || K.call(u), L();
        },
        children: [
          /* @__PURE__ */ m(fe.Target, { children: /* @__PURE__ */ m(
            me,
            {
              "data-dates-input": !0,
              "data-read-only": b || void 0,
              disabled: f,
              component: "button",
              type: "button",
              multiline: !0,
              onClick: (K) => {
                i == null || i(K), g.toggle();
              },
              rightSection: T,
              ...n,
              ref: t,
              classNames: { ...o, input: A(Ge.input, o == null ? void 0 : o.input) },
              ...Z,
              children: w || /* @__PURE__ */ m(
                me.Placeholder,
                {
                  error: n.error,
                  unstyled: s,
                  className: o == null ? void 0 : o.placeholder,
                  style: c == null ? void 0 : c.placeholder,
                  children: a
                }
              )
            }
          ) }),
          /* @__PURE__ */ m(fe.Dropdown, { "data-dates-dropdown": !0, children: y })
        ]
      }
    ) }),
    /* @__PURE__ */ m(at, { value: C, name: R, form: k, type: F })
  ] });
});
qe.classes = Ge;
qe.displayName = "@mantine/dates/PickerInputBase";
function Ee(e, t) {
  const n = [...t].sort((r, a) => r.getTime() - a.getTime());
  return P(n[0]).startOf("day").subtract(1, "ms").isBefore(e) && P(n[1]).endOf("day").add(1, "ms").isAfter(e);
}
function Nn({
  type: e,
  level: t,
  value: n,
  defaultValue: r,
  onChange: a,
  allowSingleDateInRange: o,
  allowDeselect: c,
  onMouseLeave: s,
  applyTimezone: u = !0
}) {
  const [l, d] = dt({
    type: e,
    value: n,
    defaultValue: r,
    onChange: a,
    applyTimezone: u
  }), [y, w] = $(
    e === "range" && l[0] && !l[1] ? l[0] : null
  ), [g, p] = $(null), i = (f) => {
    if (e === "range") {
      if (y instanceof Date && !l[1]) {
        if (P(f).isSame(y, t) && !o) {
          w(null), p(null), d([null, null]);
          return;
        }
        const C = [f, y];
        C.sort((R, k) => R.getTime() - k.getTime()), d(C), p(null), w(null);
        return;
      }
      if (l[0] && !l[1] && P(f).isSame(l[0], t) && !o) {
        w(null), p(null), d([null, null]);
        return;
      }
      d([f, null]), p(null), w(f);
      return;
    }
    if (e === "multiple") {
      l.some((C) => P(C).isSame(f, t)) ? d(l.filter((C) => !P(C).isSame(f, t))) : d([...l, f]);
      return;
    }
    l && c && P(f).isSame(l, t) ? d(null) : d(f);
  }, v = (f) => y instanceof Date && g instanceof Date ? Ee(f, [g, y]) : l[0] instanceof Date && l[1] instanceof Date ? Ee(f, l) : !1, S = e === "range" ? (f) => {
    s == null || s(f), p(null);
  } : s, M = (f) => l[0] instanceof Date && P(f).isSame(l[0], t) ? !(g && P(g).isBefore(l[0])) : !1, B = (f) => l[1] instanceof Date ? P(f).isSame(l[1], t) : !(l[0] instanceof Date) || !g ? !1 : P(g).isBefore(l[0]) && P(f).isSame(l[0], t), N = (f) => {
    if (e === "range")
      return {
        selected: l.some(
          (R) => R && P(R).isSame(f, t)
        ),
        inRange: v(f),
        firstInRange: M(f),
        lastInRange: B(f),
        "data-autofocus": !!l[0] && P(l[0]).isSame(f, t) || void 0
      };
    if (e === "multiple")
      return {
        selected: l.some(
          (R) => R && P(R).isSame(f, t)
        ),
        "data-autofocus": !!l[0] && P(l[0]).isSame(f, t) || void 0
      };
    const C = P(l).isSame(f, t);
    return { selected: C, "data-autofocus": C || void 0 };
  }, b = e === "range" && y ? p : () => {
  };
  return U(() => {
    if (e !== "range")
      return;
    const f = l[0] == null && l[1] == null, C = l[0] != null && l[1] != null;
    (f || C) && (w(null), p(null));
  }, [l]), {
    onDateChange: i,
    onRootMouseLeave: S,
    onHoveredDateChange: b,
    getControlProps: N,
    _value: l,
    setValue: d
  };
}
const Rn = {
  type: "default",
  defaultLevel: "month",
  numberOfColumns: 1
}, Je = O((e, t) => {
  const n = E("DatePicker", Rn, e), {
    classNames: r,
    styles: a,
    vars: o,
    type: c,
    defaultValue: s,
    value: u,
    onChange: l,
    __staticSelector: d,
    getDayProps: y,
    allowSingleDateInRange: w,
    allowDeselect: g,
    onMouseLeave: p,
    numberOfColumns: i,
    hideOutsideDates: v,
    __onDayMouseEnter: S,
    __onDayClick: M,
    __timezoneApplied: B,
    ...N
  } = n, { onDateChange: b, onRootMouseLeave: f, onHoveredDateChange: C, getControlProps: R } = Nn({
    type: c,
    level: "day",
    allowDeselect: g,
    allowSingleDateInRange: w,
    value: u,
    defaultValue: s,
    onChange: l,
    onMouseLeave: p,
    applyTimezone: !B
  }), { resolvedClassNames: k, resolvedStyles: F } = vt({
    classNames: r,
    styles: a,
    props: n
  }), Z = ft();
  return /* @__PURE__ */ m(
    _e,
    {
      ref: t,
      minLevel: "month",
      classNames: k,
      styles: F,
      __staticSelector: d || "DatePicker",
      onMouseLeave: f,
      numberOfColumns: i,
      hideOutsideDates: v ?? i !== 1,
      __onDayMouseEnter: (T, L) => {
        C(L), S == null || S(T, L);
      },
      __onDayClick: (T, L) => {
        b(L), M == null || M(T, L);
      },
      getDayProps: (T) => ({
        ...R(T),
        ...y == null ? void 0 : y(T)
      }),
      ...N,
      date: mt("add", N.date, Z.getTimezone(), B),
      __timezoneApplied: !0
    }
  );
});
Je.classes = _e.classes;
Je.displayName = "@mantine/dates/DatePicker";
export {
  Je as D,
  qe as P,
  jn as u
};
