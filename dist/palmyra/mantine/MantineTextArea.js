import { jsx as x, Fragment as I } from "react/jsx-runtime";
import * as h from "react";
import { useLayoutEffect as M, useRef as y, useCallback as j, forwardRef as k, useImperativeHandle as B } from "react";
import { useFieldManager as $, getFieldHandler as V, FieldDecorator as D } from "@palmyralabs/rt-forms";
import { getFieldLabel as Y } from "./util.js";
import { f as G, b as U } from "../../chunks/factory.js";
import { I as _ } from "../../chunks/InputBase.js";
function X() {
  return typeof process < "u" && process.env && process.env.NODE_ENV ? process.env.NODE_ENV : "development";
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r) ({}).hasOwnProperty.call(r, t) && (n[t] = r[t]);
    }
    return n;
  }, C.apply(null, arguments);
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
  var r = h.useRef(e);
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
  var t = y();
  return j(function(i) {
    e.current = i, t.current && E(t.current, null), t.current = r, r && E(r, i);
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
}, F = Q, a = null, T = function(e, r) {
  var t = e.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? t + r.borderSize : t - r.paddingSize;
};
function ee(n, e, r, t) {
  r === void 0 && (r = 1), t === void 0 && (t = 1 / 0), a || (a = document.createElement("textarea"), a.setAttribute("tabindex", "-1"), a.setAttribute("aria-hidden", "true"), F(a)), a.parentNode === null && document.body.appendChild(a);
  var i = n.paddingSize, u = n.borderSize, o = n.sizingStyle, l = o.boxSizing;
  Object.keys(o).forEach(function(v) {
    var f = v;
    a.style[f] = o[f];
  }), F(a), a.value = e;
  var s = T(a, n);
  a.value = e, s = T(a, n), a.value = "x";
  var c = a.scrollHeight - i, d = c * r;
  l === "border-box" && (d = d + i + u), s = Math.max(d, s);
  var g = c * t;
  return l === "border-box" && (g = g + i + u), s = Math.min(g, s), [s, c];
}
var W = function() {
}, te = function(e, r) {
  return e.reduce(function(t, i) {
    return t[i] = r[i], t;
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
], ne = !!document.documentElement.currentStyle, ie = function(e) {
  var r = window.getComputedStyle(e);
  if (r === null)
    return null;
  var t = te(re, r), i = t.boxSizing;
  if (i === "")
    return null;
  ne && i === "border-box" && (t.width = parseFloat(t.width) + parseFloat(t.borderRightWidth) + parseFloat(t.borderLeftWidth) + parseFloat(t.paddingRight) + parseFloat(t.paddingLeft) + "px");
  var u = parseFloat(t.paddingBottom) + parseFloat(t.paddingTop), o = parseFloat(t.borderBottomWidth) + parseFloat(t.borderTopWidth);
  return {
    sizingStyle: t,
    paddingSize: u,
    borderSize: o
  };
}, ae = ie;
function N(n, e, r) {
  var t = J(r);
  h.useLayoutEffect(function() {
    var i = function(o) {
      return t.current(o);
    };
    if (n)
      return n.addEventListener(e, i), function() {
        return n.removeEventListener(e, i);
      };
  }, []);
}
var oe = function(e) {
  N(window, "resize", e);
}, se = function(e) {
  N(document.fonts, "loadingdone", e);
}, ue = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], de = function(e, r) {
  var t = e.cacheMeasurements, i = e.maxRows, u = e.minRows, o = e.onChange, l = o === void 0 ? W : o, s = e.onHeightChange, c = s === void 0 ? W : s, d = Z(e, ue), g = d.value !== void 0, v = h.useRef(null), f = K(v, r), L = h.useRef(0), S = h.useRef(), p = function() {
    var m = v.current, z = t && S.current ? S.current : ae(m);
    if (z) {
      S.current = z;
      var w = ee(z, m.value || m.placeholder || "x", u, i), b = w[0], A = w[1];
      L.current !== b && (L.current = b, m.style.setProperty("height", b + "px", "important"), c(b, {
        rowHeight: A
      }));
    }
  }, O = function(m) {
    g || p(), l(m);
  };
  return h.useLayoutEffect(p), oe(p), se(p), /* @__PURE__ */ h.createElement("textarea", C({}, d, {
    onChange: O,
    ref: f
  }));
}, le = /* @__PURE__ */ h.forwardRef(de);
const ce = {}, R = G((n, e) => {
  const { autosize: r, maxRows: t, minRows: i, __staticSelector: u, resize: o, ...l } = U(
    "Textarea",
    ce,
    n
  ), s = r && X() !== "test";
  return /* @__PURE__ */ x(
    _,
    {
      component: s ? le : "textarea",
      ref: e,
      ...l,
      __staticSelector: u || "Textarea",
      multiline: !0,
      "data-no-overflow": r && t === void 0 || void 0,
      __vars: { "--input-resize": o },
      ...s ? { maxRows: t, minRows: i } : {}
    }
  );
});
R.classes = _.classes;
R.displayName = "@mantine/core/Textarea";
const be = k(function(e, r) {
  const t = $(e.attribute, e), { getError: i, getValue: u, setValue: o, mutateOptions: l } = t, s = r || y(null), c = i(), d = y(null), g = e.variant || "default";
  B(s, () => ({
    ...V(t),
    focus() {
      d.current.focus();
    }
  }), [t]);
  var v = t.getFieldProps();
  return v.onChange = (f) => {
    e.readOnly || (o(f.target.value), e.onChange && e.onChange(f));
  }, /* @__PURE__ */ x(I, { children: !l.visible && /* @__PURE__ */ x(
    D,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x(
        R,
        {
          variant: g,
          label: e.label,
          ref: d,
          ...v,
          value: u(),
          error: c.message
        }
      )
    }
  ) });
});
export {
  be as MantineTextArea
};
