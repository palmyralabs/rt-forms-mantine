import { jsx as S, Fragment as I } from "react/jsx-runtime";
import * as g from "react";
import { useLayoutEffect as M, useRef as C, useCallback as B, forwardRef as j, useImperativeHandle as k } from "react";
import { useFieldManager as V, getFieldHandler as $, FieldDecorator as D } from "@palmyralabs/rt-forms";
import { getFieldLabel as Y } from "./util.js";
import { f as G, u as U } from "../../../chunks/factory.js";
import { I as _ } from "../../../chunks/InputBase.js";
function X() {
  return typeof process < "u" && process.env && process.env.NODE_ENV ? process.env.NODE_ENV : "development";
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r) ({}).hasOwnProperty.call(r, t) && (n[t] = r[t]);
    }
    return n;
  }, R.apply(null, arguments);
}
function Z(n, e) {
  if (n == null) return {};
  var r = {};
  for (var t in n) if ({}.hasOwnProperty.call(n, t)) {
    if (e.includes(t)) continue;
    r[t] = n[t];
  }
  return r;
}
var q = M, J = function(e) {
  var r = g.useRef(e);
  return q(function() {
    r.current = e;
  }), r;
}, E = function(e, r) {
  if (typeof e == "function") {
    e(r);
    return;
  }
  e.current = r;
}, K = function(e, r) {
  var t = C();
  return B(function(a) {
    e.current = a, t.current && E(t.current, null), t.current = r, r && E(r, a);
  }, [r]);
}, H = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Q = function(e) {
  Object.keys(H).forEach(function(r) {
    e.style.setProperty(r, H[r], "important");
  });
}, F = Q, i = null, T = function(e, r) {
  var t = e.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? t + r.borderSize : t - r.paddingSize;
};
function ee(n, e, r, t) {
  r === void 0 && (r = 1), t === void 0 && (t = 1 / 0), i || (i = document.createElement("textarea"), i.setAttribute("tabindex", "-1"), i.setAttribute("aria-hidden", "true"), F(i)), i.parentNode === null && document.body.appendChild(i);
  var a = n.paddingSize, s = n.borderSize, o = n.sizingStyle, d = o.boxSizing;
  Object.keys(o).forEach(function(v) {
    var h = v;
    i.style[h] = o[h];
  }), F(i), i.value = e;
  var u = T(i, n);
  i.value = e, u = T(i, n), i.value = "x";
  var l = i.scrollHeight - a, c = l * r;
  d === "border-box" && (c = c + a + s), u = Math.max(c, u);
  var f = l * t;
  return d === "border-box" && (f = f + a + s), u = Math.min(f, u), [u, l];
}
var W = function() {
}, te = function(e, r) {
  return e.reduce(function(t, a) {
    return t[a] = r[a], t;
  }, {});
}, re = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], ne = !!document.documentElement.currentStyle, ae = function(e) {
  var r = window.getComputedStyle(e);
  if (r === null)
    return null;
  var t = te(re, r), a = t.boxSizing;
  if (a === "")
    return null;
  ne && a === "border-box" && (t.width = parseFloat(t.width) + parseFloat(t.borderRightWidth) + parseFloat(t.borderLeftWidth) + parseFloat(t.paddingRight) + parseFloat(t.paddingLeft) + "px");
  var s = parseFloat(t.paddingBottom) + parseFloat(t.paddingTop), o = parseFloat(t.borderBottomWidth) + parseFloat(t.borderTopWidth);
  return {
    sizingStyle: t,
    paddingSize: s,
    borderSize: o
  };
}, ie = ae;
function N(n, e, r) {
  var t = J(r);
  g.useLayoutEffect(function() {
    var a = function(o) {
      return t.current(o);
    };
    if (n)
      return n.addEventListener(e, a), function() {
        return n.removeEventListener(e, a);
      };
  }, []);
}
var oe = function(e) {
  N(window, "resize", e);
}, ue = function(e) {
  N(document.fonts, "loadingdone", e);
}, se = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], de = function(e, r) {
  var t = e.cacheMeasurements, a = e.maxRows, s = e.minRows, o = e.onChange, d = o === void 0 ? W : o, u = e.onHeightChange, l = u === void 0 ? W : u, c = Z(e, se), f = c.value !== void 0, v = g.useRef(null), h = K(v, r), m = g.useRef(0), z = g.useRef(), b = function() {
    var p = v.current, y = t && z.current ? z.current : ie(p);
    if (y) {
      z.current = y;
      var w = ee(y, p.value || p.placeholder || "x", s, a), x = w[0], A = w[1];
      m.current !== x && (m.current = x, p.style.setProperty("height", x + "px", "important"), l(x, {
        rowHeight: A
      }));
    }
  }, O = function(p) {
    f || b(), d(p);
  };
  return g.useLayoutEffect(b), oe(b), ue(b), /* @__PURE__ */ g.createElement("textarea", R({}, c, {
    onChange: O,
    ref: h
  }));
}, le = /* @__PURE__ */ g.forwardRef(de);
const ce = {}, L = G((n, e) => {
  const { autosize: r, maxRows: t, minRows: a, __staticSelector: s, resize: o, ...d } = U(
    "Textarea",
    ce,
    n
  ), u = r && X() !== "test";
  return /* @__PURE__ */ S(
    _,
    {
      component: u ? le : "textarea",
      ref: e,
      ...d,
      __staticSelector: s || "Textarea",
      multiline: !0,
      "data-no-overflow": r && t === void 0 || void 0,
      __vars: { "--input-resize": o },
      ...u ? { maxRows: t, minRows: a } : {}
    }
  );
});
L.classes = _.classes;
L.displayName = "@mantine/core/Textarea";
const be = j(function(e, r) {
  const t = V(e.attribute, e), { getError: a, getValue: s, setValue: o, mutateOptions: d, refreshError: u } = t, l = r || C(null), c = a(), f = C(null), v = e.variant || "default";
  k(l, () => ({
    ...$(t),
    focus() {
      f.current.focus();
    }
  }), [t]);
  var h = t.getFieldProps();
  return h.onChange = (m) => {
    e.readOnly || (o(m.target.value), e.onChange && e.onChange(m));
  }, h.onBlur = u, /* @__PURE__ */ S(I, { children: !d.visible && /* @__PURE__ */ S(
    D,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ S(
        L,
        {
          variant: v,
          label: e.label,
          ref: f,
          defaultValue: e.defaultValue,
          ...h,
          value: s() || null,
          error: c.message
        }
      )
    }
  ) });
});
export {
  be as MantineTextArea
};
