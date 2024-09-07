import { jsx as s, Fragment as y } from "react/jsx-runtime";
import c, { useState as C } from "react";
import { C as w } from "../../../chunks/Checkbox.js";
var v = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, h = c.createContext && /* @__PURE__ */ c.createContext(v), j = ["attr", "size", "title"];
function p(e, r) {
  if (e == null) return {};
  var t = P(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function P(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0) continue;
      t[n] = e[n];
    }
  return t;
}
function f() {
  return f = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, f.apply(this, arguments);
}
function g(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? g(Object(t), !0).forEach(function(n) {
      x(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function x(e, r, t) {
  return r = L(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function L(e) {
  var r = k(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function k(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function b(e) {
  return e && e.map((r, t) => /* @__PURE__ */ c.createElement(r.tag, d({
    key: t
  }, r.attr), b(r.child)));
}
function O(e) {
  return (r) => /* @__PURE__ */ c.createElement(S, f({
    attr: d({}, e.attr)
  }, r), b(e.child));
}
function S(e) {
  var r = (t) => {
    var {
      attr: n,
      size: a,
      title: i
    } = e, m = p(e, j), o = a || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ c.createElement("svg", f({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, m, {
      className: l,
      style: d(d({
        color: e.color || t.color
      }, t.style), e.style),
      height: o,
      width: o,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ c.createElement("title", null, i), e.children);
  };
  return h !== void 0 ? /* @__PURE__ */ c.createElement(h.Consumer, null, (t) => r(t)) : r(v);
}
function E(e) {
  return O({ tag: "svg", attr: { viewBox: "0 0 15 15", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor" }, child: [] }] })(e);
}
function _(e) {
  return O({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "square", strokeMiterlimit: "10", strokeWidth: "44", d: "M416 128 192 384l-96-96" }, child: [] }] })(e);
}
const D = (e) => {
  const r = e.value ? e.value : 0, [t, n] = C(r), a = e.checked || _, i = e.unChecked || E;
  console.log("t", r, "v", t, "p", e.value);
  const m = () => {
    n((u) => {
      switch (u) {
        case 0:
          return 1;
        case 1:
          return -1;
        case -1:
        default:
          return 0;
      }
    });
  }, o = (u) => {
    switch (t) {
      case 1:
        return /* @__PURE__ */ s(a, { color: "green", ...u });
      case -1:
        return /* @__PURE__ */ s(i, { color: "red", ...u });
      case 0:
      default:
        return null;
    }
  }, l = t === 1 ? "Pass" : t === -1 ? "Fail" : "";
  return /* @__PURE__ */ s(y, { children: /* @__PURE__ */ s(
    w,
    {
      ...e,
      icon: o,
      color: e.color || "none",
      indeterminate: t === 0,
      checked: t !== 0,
      value: t,
      onChange: e.onChange || m,
      disabled: e.disabled,
      readOnly: e.readOnly,
      label: e.checkLabel || l
    }
  ) });
};
export {
  D as TriStateCheckBox
};
