import { jsx as Y, jsxs as Ze, Fragment as We } from "react/jsx-runtime";
import ce, { useRef as Z, useState as Me, useEffect as Ve, useMemo as Ge, useLayoutEffect as ze, forwardRef as He, useImperativeHandle as qe } from "react";
import { useFieldManager as Xe, getFieldHandler as Je, FieldDecorator as Qe } from "@palmyralabs/rt-forms";
import { getFieldLabel as Ye } from "./util.js";
import { f as et, b as tt, d as rt, l as at, g as nt, h as it } from "../../chunks/factory.js";
import { u as ot } from "../../chunks/use-resolved-styles-api.js";
import { I as Oe } from "../../chunks/InputBase.js";
import { U as Re } from "../../chunks/UnstyledButton.js";
import { u as ut } from "../../chunks/use-uncontrolled.js";
import { a as lt, u as st } from "../../chunks/use-merged-ref.js";
import { c as be } from "../../chunks/clamp.js";
function Pe(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
var pe;
(function(e) {
  e.event = "event", e.props = "prop";
})(pe || (pe = {}));
function ae() {
}
function ft(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return t && n.length === t.length && n.every(function(o, s) {
      return o === t[s];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function Se(e) {
  return !!(e || "").match(/\d/);
}
function de(e) {
  return e == null;
}
function ct(e) {
  return typeof e == "number" && isNaN(e);
}
function Le(e) {
  return de(e) || ct(e) || typeof e == "number" && !isFinite(e);
}
function je(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function dt(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function vt(e, t, r) {
  var n = dt(r), a = e.search(/[1-9]/);
  return a = a === -1 ? e.length : a, e.substring(0, a) + e.substring(a, e.length).replace(n, "$1" + t);
}
function mt(e) {
  var t = Z(e);
  t.current = e;
  var r = Z(function() {
    for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Ce(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var a = e.split("."), o = a[0], s = a[1] || "";
  return {
    beforeDecimal: o,
    afterDecimal: s,
    hasNegation: r,
    addNegation: n
  };
}
function gt(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", a = r[1] || "";
  return (t ? "-" : "") + n + (a ? "." + a : "");
}
function ke(e, t, r) {
  for (var n = "", a = r ? "0" : "", o = 0; o <= t - 1; o++)
    n += e[o] || a;
  return n;
}
function Ee(e, t) {
  return Array(t + 1).join(e);
}
function Ke(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), a = n[0], o = n[1];
  if (o = Number(o), !o)
    return r + a;
  a = a.replace(".", "");
  var s = 1 + o, N = a.length;
  return s < 0 ? a = "0." + Ee("0", Math.abs(s)) + a : s >= N ? a = a + Ee("0", s - N) : a = (a.substring(0, s) || "0") + "." + a.substring(s), r + a;
}
function Ae(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, a = Ce(e), o = a.beforeDecimal, s = a.afterDecimal, N = a.hasNegation, x = parseFloat("0." + (s || "0")), p = s.length <= t ? "0." + s : x.toFixed(t), w = p.split("."), b = o;
  o && Number(w[0]) && (b = o.split("").reverse().reduce(function(R, E, h) {
    return R.length > h ? (Number(R[0]) + Number(E)).toString() + R.substring(1, R.length) : E + R;
  }, w[0]));
  var c = ke(w[1] || "", t, r), g = N ? "-" : "", f = n ? "." : "";
  return "" + g + b + f + c;
}
function ue(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Ue = ft(function(e, t) {
  for (var r = 0, n = 0, a = e.length, o = t.length; e[r] === t[r] && r < a; )
    r++;
  for (; e[a - 1 - n] === t[o - 1 - n] && o - n > r && a - n > r; )
    n++;
  return {
    from: { start: r, end: a - n },
    to: { start: r, end: o - n }
  };
}), ht = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function pt(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function ye(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function St() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function bt(e) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: e.length
    },
    lastValue: ""
  };
}
function Nt(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, a = e.formattedValueIndex;
  return t[n] === r[a];
}
function wt(e, t, r, n, a, o, s) {
  s === void 0 && (s = Nt);
  var N = a.findIndex(function(z) {
    return z;
  }), x = e.slice(0, N);
  !t && !r.startsWith(x) && (t = x, r = x + r, n = n + x.length);
  for (var p = r.length, w = e.length, b = {}, c = new Array(p), g = 0; g < p; g++) {
    c[g] = -1;
    for (var f = 0, R = w; f < R; f++) {
      var E = s({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: g,
        formattedValueIndex: f
      });
      if (E && b[f] !== !0) {
        c[g] = f, b[f] = !0;
        break;
      }
    }
  }
  for (var h = n; h < p && (c[h] === -1 || !o(r[h])); )
    h++;
  var P = h === p || c[h] === -1 ? w : c[h];
  for (h = n - 1; h > 0 && c[h] === -1; )
    h--;
  var B = h === -1 || c[h] === -1 ? 0 : c[h] + 1;
  return B > P ? P : n - B < P - n ? B : P;
}
function Fe(e, t, r, n) {
  var a = e.length;
  if (t = pt(t, 0, a), n === "left") {
    for (; t >= 0 && !r[t]; )
      t--;
    t === -1 && (t = r.indexOf(!0));
  } else {
    for (; t <= a && !r[t]; )
      t++;
    t > a && (t = r.lastIndexOf(!0));
  }
  return t === -1 && (t = a), t;
}
function xt(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Se(e[r]) || Se(e[r - 1]));
  return t;
}
function $e(e, t, r, n, a, o) {
  o === void 0 && (o = ae);
  var s = mt(function(f, R) {
    var E, h;
    return Le(f) ? (h = "", E = "") : typeof f == "number" || R ? (h = typeof f == "number" ? Ke(f) : f, E = n(h)) : (h = a(f, void 0), E = n(h)), { formattedValue: E, numAsString: h };
  }), N = Me(function() {
    return s(de(e) ? t : e, r);
  }), x = N[0], p = N[1], w = function(f, R) {
    f.formattedValue !== x.formattedValue && p({
      formattedValue: f.formattedValue,
      numAsString: f.value
    }), o(f, R);
  }, b = e, c = r;
  de(e) && (b = x.numAsString, c = !0);
  var g = s(b, c);
  return Ge(function() {
    p(g);
  }, [g.formattedValue]), [x, w];
}
function Vt(e) {
  return e.replace(/[^0-9]/g, "");
}
function yt(e) {
  return e;
}
function Dt(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, a = e.renderText, o = e.getInputRef, s = e.format;
  s === void 0 && (s = yt);
  var N = e.removeFormatting;
  N === void 0 && (N = Vt);
  var x = e.defaultValue, p = e.valueIsNumericString, w = e.onValueChange, b = e.isAllowed, c = e.onChange;
  c === void 0 && (c = ae);
  var g = e.onKeyDown;
  g === void 0 && (g = ae);
  var f = e.onMouseUp;
  f === void 0 && (f = ae);
  var R = e.onFocus;
  R === void 0 && (R = ae);
  var E = e.onBlur;
  E === void 0 && (E = ae);
  var h = e.value, P = e.getCaretBoundary;
  P === void 0 && (P = xt);
  var B = e.isValidInputCharacter;
  B === void 0 && (B = Se);
  var z = e.isCharacterSame, j = Pe(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), H = $e(h, x, !!p, s, N, w), k = H[0], V = k.formattedValue, L = k.numAsString, K = H[1], W = Z(), q = Z({ formattedValue: V, numAsString: L }), G = function(u, l) {
    q.current = { formattedValue: u.formattedValue, numAsString: u.value }, K(u, l);
  }, ee = Me(!1), ne = ee[0], d = ee[1], v = Z(null), y = Z({
    setCaretTimeout: null,
    focusTimeout: null
  });
  Ve(function() {
    return d(!0), function() {
      clearTimeout(y.current.setCaretTimeout), clearTimeout(y.current.focusTimeout);
    };
  }, []);
  var F = s, _ = function(u, l) {
    var m = parseFloat(l);
    return {
      formattedValue: u,
      value: l,
      floatValue: isNaN(m) ? void 0 : m
    };
  }, A = function(u, l, m) {
    u.selectionStart === 0 && u.selectionEnd === u.value.length || (ue(u, l), y.current.setCaretTimeout = setTimeout(function() {
      u.value === m && u.selectionStart !== l && ue(u, l);
    }, 0));
  }, T = function(u, l, m) {
    return Fe(u, l, P(u), m);
  }, te = function(u, l, m) {
    var D = P(l), M = wt(l, V, u, m, D, B, z);
    return M = Fe(l, M, D), M;
  }, ve = function(u) {
    var l = u.formattedValue;
    l === void 0 && (l = "");
    var m = u.input, D = u.source, M = u.event, C = u.numAsString, i;
    if (m) {
      var S = u.inputValue || m.value, O = ye(m);
      m.value = l, i = te(S, l, O), i !== void 0 && A(m, i, l);
    }
    l !== V && G(_(l, C), { event: M, source: D });
  };
  Ve(function() {
    var u = q.current, l = u.formattedValue, m = u.numAsString;
    (V !== l || L !== m) && G(_(V, L), {
      event: void 0,
      source: pe.props
    });
  }, [V, L]);
  var I = v.current ? ye(v.current) : void 0, J = typeof window < "u" ? ze : Ve;
  J(function() {
    var u = v.current;
    if (V !== q.current.formattedValue && u) {
      var l = te(q.current.formattedValue, V, I);
      u.value = V, A(u, l, V);
    }
  }, [V]);
  var le = function(u, l, m) {
    var D = l.target, M = W.current ? ht(W.current, D.selectionEnd) : Ue(V, u), C = Object.assign(Object.assign({}, M), { lastValue: V }), i = N(u, C), S = F(i);
    if (i = N(S, void 0), b && !b(_(S, i))) {
      var O = l.target, U = ye(O), $ = te(u, V, U);
      return O.value = V, A(O, $, V), !1;
    }
    return ve({
      formattedValue: S,
      numAsString: i,
      inputValue: u,
      event: l,
      source: m,
      input: l.target
    }), !0;
  }, X = function(u, l) {
    l === void 0 && (l = 0);
    var m = u.selectionStart, D = u.selectionEnd;
    W.current = { selectionStart: m, selectionEnd: D + l };
  }, ie = function(u) {
    var l = u.target, m = l.value, D = le(m, u, pe.event);
    D && c(u), W.current = void 0;
  }, me = function(u) {
    var l = u.target, m = u.key, D = l.selectionStart, M = l.selectionEnd, C = l.value;
    C === void 0 && (C = "");
    var i;
    m === "ArrowLeft" || m === "Backspace" ? i = Math.max(D - 1, 0) : m === "ArrowRight" ? i = Math.min(D + 1, C.length) : m === "Delete" && (i = D);
    var S = 0;
    m === "Delete" && D === M && (S = 1);
    var O = m === "ArrowLeft" || m === "ArrowRight";
    if (i === void 0 || D !== M && !O) {
      g(u), X(l, S);
      return;
    }
    var U = i;
    if (O) {
      var $ = m === "ArrowLeft" ? "left" : "right";
      U = T(C, i, $), U !== i && u.preventDefault();
    } else m === "Delete" && !B(C[i]) ? U = T(C, i, "right") : m === "Backspace" && !B(C[i]) && (U = T(C, i, "left"));
    U !== i && A(l, U, C), g(u), X(l, S);
  }, we = function(u) {
    var l = u.target, m = function() {
      var D = l.selectionStart, M = l.selectionEnd, C = l.value;
      if (C === void 0 && (C = ""), D === M) {
        var i = T(C, D);
        i !== D && A(l, i, C);
      }
    };
    m(), requestAnimationFrame(function() {
      m();
    }), f(u), X(l);
  }, se = function(u) {
    u.persist && u.persist();
    var l = u.target, m = u.currentTarget;
    v.current = l, y.current.focusTimeout = setTimeout(function() {
      var D = l.selectionStart, M = l.selectionEnd, C = l.value;
      C === void 0 && (C = "");
      var i = T(C, D);
      i !== D && !(D === 0 && M === C.length) && A(l, i, C), R(Object.assign(Object.assign({}, u), { currentTarget: m }));
    }, 0);
  }, ge = function(u) {
    v.current = null, clearTimeout(y.current.focusTimeout), clearTimeout(y.current.setCaretTimeout), E(u);
  }, fe = ne && St() ? "numeric" : void 0, oe = Object.assign({ inputMode: fe }, j, {
    type: t,
    value: V,
    onChange: ie,
    onKeyDown: me,
    onMouseUp: we,
    onFocus: se,
    onBlur: ge
  });
  if (r === "text")
    return a ? ce.createElement(ce.Fragment, null, a(V, j) || null) : ce.createElement("span", Object.assign({}, j, { ref: o }), V);
  if (n) {
    var xe = n;
    return ce.createElement(xe, Object.assign({}, oe, { ref: o }));
  }
  return ce.createElement("input", Object.assign({}, oe, { ref: o }));
}
function Te(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, a = t.prefix;
  a === void 0 && (a = "");
  var o = t.suffix;
  o === void 0 && (o = "");
  var s = t.allowNegative, N = t.thousandsGroupStyle;
  if (N === void 0 && (N = "thousand"), e === "" || e === "-")
    return e;
  var x = Ne(t), p = x.thousandSeparator, w = x.decimalSeparator, b = r !== 0 && e.indexOf(".") !== -1 || r && n, c = Ce(e, s), g = c.beforeDecimal, f = c.afterDecimal, R = c.addNegation;
  return r !== void 0 && (f = ke(f, r, !!n)), p && (g = vt(g, p, N)), a && (g = a + g), o && (f = f + o), R && (g = "-" + g), e = g + (b && w || "") + f, e;
}
function Ne(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Ct(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), a = r.test(e), o = n.test(e);
  return e = e.replace(/-/g, ""), a && !o && t && (e = "-" + e), e;
}
function It(e, t) {
  return new RegExp("(^-)|[0-9]|" + je(e), "g");
}
function Rt(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Et(e, t, r) {
  var n;
  t === void 0 && (t = bt(e));
  var a = r.allowNegative, o = r.prefix;
  o === void 0 && (o = "");
  var s = r.suffix;
  s === void 0 && (s = "");
  var N = r.decimalScale, x = t.from, p = t.to, w = p.start, b = p.end, c = Ne(r), g = c.allowedDecimalSeparators, f = c.decimalSeparator, R = e[b] === f;
  if (Se(e) && (e === o || e === s) && t.lastValue === "")
    return e;
  if (b - w === 1 && g.indexOf(e[w]) !== -1) {
    var E = N === 0 ? "" : f;
    e = e.substring(0, w) + E + e.substring(w + 1, e.length);
  }
  var h = function(v, y, F) {
    var _ = !1, A = !1;
    o.startsWith("-") ? _ = !1 : v.startsWith("--") ? (_ = !1, A = !0) : s.startsWith("-") && v.length === s.length ? _ = !1 : v[0] === "-" && (_ = !0);
    var T = _ ? 1 : 0;
    return A && (T = 2), T && (v = v.substring(T), y -= T, F -= T), { value: v, start: y, end: F, hasNegation: _ };
  }, P = h(e, w, b), B = P.hasNegation;
  n = P, e = n.value, w = n.start, b = n.end;
  var z = h(t.lastValue, x.start, x.end), j = z.start, H = z.end, k = z.value, V = e.substring(w, b);
  e.length && k.length && (j > k.length - s.length || H < o.length) && !(V && s.startsWith(V)) && (e = k);
  var L = 0;
  e.startsWith(o) ? L += o.length : w < o.length && (L = w), e = e.substring(L), b -= L;
  var K = e.length, W = e.length - s.length;
  e.endsWith(s) ? K = W : (b > W || b > e.length - s.length) && (K = b), e = e.substring(0, K), e = Ct(B ? "-" + e : e, a), e = (e.match(It(f)) || []).join("");
  var q = e.indexOf(f);
  e = e.replace(new RegExp(je(f), "g"), function(v, y) {
    return y === q ? "." : "";
  });
  var G = Ce(e, a), ee = G.beforeDecimal, ne = G.afterDecimal, d = G.addNegation;
  return p.end - p.start < x.end - x.start && ee === "" && R && !parseFloat(ne) && (e = d ? "-" : ""), e;
}
function At(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var a = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), o = e[0] === "-";
  a.fill(!1, 0, r.length + (o ? 1 : 0));
  var s = e.length;
  return a.fill(!1, s - n.length + 1, s + 1), a;
}
function Ft(e) {
  var t = Ne(e), r = t.thousandSeparator, n = t.decimalSeparator, a = e.prefix;
  a === void 0 && (a = "");
  var o = e.allowNegative;
  if (o === void 0 && (o = !0), r === n)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + n + ` (default value for decimalSeparator is .)
     `);
  return a.startsWith("-") && o && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + a + `
      allowNegative: ` + o + `
    `), o = !1), Object.assign(Object.assign({}, e), { allowNegative: o });
}
function Tt(e) {
  e = Ft(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, a = e.onKeyDown;
  a === void 0 && (a = ae);
  var o = e.onBlur;
  o === void 0 && (o = ae);
  var s = e.thousandSeparator, N = e.decimalScale, x = e.fixedDecimalScale, p = e.prefix;
  p === void 0 && (p = "");
  var w = e.defaultValue, b = e.value, c = e.valueIsNumericString, g = e.onValueChange, f = Pe(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), R = Ne(e), E = R.decimalSeparator, h = R.allowedDecimalSeparators, P = function(d) {
    return Te(d, e);
  }, B = function(d, v) {
    return Et(d, v, e);
  }, z = de(b) ? w : b, j = c ?? Rt(z, p, t);
  de(b) ? de(w) || (j = j || typeof w == "number") : j = j || typeof b == "number";
  var H = function(d) {
    return Le(d) ? d : (typeof d == "number" && (d = Ke(d)), j && typeof N == "number" ? Ae(d, N, !!x) : d);
  }, k = $e(H(b), H(w), !!j, P, B, g), V = k[0], L = V.numAsString, K = V.formattedValue, W = k[1], q = function(d) {
    var v = d.target, y = d.key, F = v.selectionStart, _ = v.selectionEnd, A = v.value;
    if (A === void 0 && (A = ""), (y === "Backspace" || y === "Delete") && _ < p.length) {
      d.preventDefault();
      return;
    }
    if (F !== _) {
      a(d);
      return;
    }
    y === "Backspace" && A[0] === "-" && F === p.length + 1 && r && ue(v, 1), N && x && (y === "Backspace" && A[F - 1] === E ? (ue(v, F - 1), d.preventDefault()) : y === "Delete" && A[F] === E && d.preventDefault()), h != null && h.includes(y) && A[F] === E && ue(v, F + 1);
    var T = s === !0 ? "," : s;
    y === "Backspace" && A[F - 1] === T && ue(v, F - 1), y === "Delete" && A[F] === T && ue(v, F + 1), a(d);
  }, G = function(d) {
    var v = L;
    if (v.match(/\d/g) || (v = ""), n || (v = gt(v)), x && N && (v = Ae(v, N, x)), v !== L) {
      var y = Te(v, e);
      W({
        formattedValue: y,
        value: v,
        floatValue: parseFloat(v)
      }, {
        event: d,
        source: pe.event
      });
    }
    o(d);
  }, ee = function(d) {
    return d === E ? !0 : Se(d);
  }, ne = function(d) {
    var v = d.currentValue, y = d.lastValue, F = d.formattedValue, _ = d.currentValueIndex, A = d.formattedValueIndex, T = v[_], te = F[A], ve = Ue(y, v), I = ve.to, J = function(le) {
      return B(le).indexOf(".") + p.length;
    };
    return b === 0 && x && N && J(v) < _ && J(F) > A ? !1 : _ >= I.start && _ < I.end && h && h.includes(T) && te === E ? !0 : T === te;
  };
  return Object.assign(Object.assign({}, f), {
    value: K,
    valueIsNumericString: !1,
    isValidInputCharacter: ee,
    isCharacterSame: ne,
    onValueChange: W,
    format: P,
    removeFormatting: B,
    getCaretBoundary: function(d) {
      return At(d, e);
    },
    onKeyDown: q,
    onBlur: G
  });
}
function _t(e) {
  var t = Tt(e);
  return ce.createElement(Dt, Object.assign({}, t));
}
function _e({ direction: e, style: t, ...r }) {
  return /* @__PURE__ */ Y(
    "svg",
    {
      style: {
        width: "var(--ni-chevron-size)",
        height: "var(--ni-chevron-size)",
        transform: e === "up" ? "rotate(180deg)" : void 0,
        ...t
      },
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...r,
      children: /* @__PURE__ */ Y(
        "path",
        {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
var De = { root: "m_e2f5cd4e", controls: "m_95e17d22", control: "m_80b4b171" };
const Bt = /^(0\.0*|-0(\.0*)?)$/, Mt = /^-?0\d+(\.\d+)?\.?$/;
function Ot(e) {
  return (typeof e == "number" ? e < Number.MAX_SAFE_INTEGER : !Number.isNaN(Number(e))) && !Number.isNaN(e);
}
function Be(e, t, r) {
  if (e === void 0)
    return !0;
  const n = t === void 0 || e >= t, a = r === void 0 || e <= r;
  return n && a;
}
const Pt = {
  step: 1,
  clampBehavior: "blur",
  allowDecimal: !0,
  allowNegative: !0,
  withKeyboardEvents: !0,
  allowLeadingZeros: !0,
  trimLeadingZeroesOnBlur: !0,
  startValue: 0
}, Lt = nt((e, { size: t }) => ({
  controls: {
    "--ni-chevron-size": it(t, "ni-chevron-size")
  }
})), Ie = et((e, t) => {
  const r = tt("NumberInput", Pt, e), {
    className: n,
    classNames: a,
    styles: o,
    unstyled: s,
    vars: N,
    onChange: x,
    onValueChange: p,
    value: w,
    defaultValue: b,
    max: c,
    min: g,
    step: f,
    hideControls: R,
    rightSection: E,
    isAllowed: h,
    clampBehavior: P,
    onBlur: B,
    allowDecimal: z,
    decimalScale: j,
    onKeyDown: H,
    onKeyDownCapture: k,
    handlersRef: V,
    startValue: L,
    disabled: K,
    rightSectionPointerEvents: W,
    allowNegative: q,
    readOnly: G,
    size: ee,
    rightSectionWidth: ne,
    stepHoldInterval: d,
    stepHoldDelay: v,
    allowLeadingZeros: y,
    withKeyboardEvents: F,
    trimLeadingZeroesOnBlur: _,
    ...A
  } = r, T = rt({
    name: "NumberInput",
    classes: De,
    props: r,
    classNames: a,
    styles: o,
    unstyled: s,
    vars: N,
    varsResolver: Lt
  }), { resolvedClassNames: te, resolvedStyles: ve } = ot({
    classNames: a,
    styles: o,
    props: r
  }), [I, J] = ut({
    value: w,
    defaultValue: b,
    onChange: x
  }), le = v !== void 0 && d !== void 0, X = Z(null), ie = Z(null), me = Z(0), we = (i, S) => {
    S.source === "event" && J(
      Ot(i.floatValue) && !Bt.test(i.value) && !(y && Mt.test(i.value)) ? i.floatValue : i.value
    ), p == null || p(i, S);
  }, se = (i) => {
    const S = String(i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return S ? Math.max(0, (S[1] ? S[1].length : 0) - (S[2] ? +S[2] : 0)) : 0;
  }, ge = (i) => {
    X.current && typeof i < "u" && X.current.setSelectionRange(i, i);
  }, fe = Z();
  fe.current = () => {
    let i;
    const S = se(I), O = se(f), U = Math.max(S, O), $ = 10 ** U;
    if (typeof I != "number" || Number.isNaN(I))
      i = be(L, g, c);
    else if (c !== void 0) {
      const Q = (Math.round(I * $) + Math.round(f * $)) / $;
      i = Q <= c ? Q : c;
    } else
      i = (Math.round(I * $) + Math.round(f * $)) / $;
    const re = i.toFixed(U);
    J(parseFloat(re)), p == null || p(
      { floatValue: parseFloat(re), formattedValue: re, value: re },
      { source: "increment" }
    ), setTimeout(() => {
      var Q;
      return ge((Q = X.current) == null ? void 0 : Q.value.length);
    }, 0);
  };
  const oe = Z();
  oe.current = () => {
    let i;
    const S = g !== void 0 ? g : q ? Number.MIN_SAFE_INTEGER : 0, O = se(I), U = se(f), $ = Math.max(O, U), re = 10 ** $;
    if (typeof I != "number" || Number.isNaN(I))
      i = be(L, S, c);
    else {
      const he = (Math.round(I * re) - Math.round(f * re)) / re;
      i = S !== void 0 && he < S ? S : he;
    }
    const Q = i.toFixed($);
    J(parseFloat(Q)), p == null || p(
      { floatValue: parseFloat(Q), formattedValue: Q, value: Q },
      { source: "decrement" }
    ), setTimeout(() => {
      var he;
      return ge((he = X.current) == null ? void 0 : he.value.length);
    }, 0);
  };
  const xe = (i) => {
    H == null || H(i), !(G || !F) && (i.key === "ArrowUp" && (i.preventDefault(), fe.current()), i.key === "ArrowDown" && (i.preventDefault(), oe.current()));
  }, u = (i) => {
    if (k == null || k(i), i.key === "Backspace") {
      const S = X.current;
      S.selectionStart === 0 && S.selectionStart === S.selectionEnd && (i.preventDefault(), window.setTimeout(() => ge(0), 0));
    }
  };
  lt(V, { increment: fe.current, decrement: oe.current });
  const l = (i) => {
    i ? fe.current() : oe.current(), me.current += 1;
  }, m = (i) => {
    if (l(i), le) {
      const S = typeof d == "number" ? d : d(me.current);
      ie.current = window.setTimeout(() => m(i), S);
    }
  }, D = (i, S) => {
    var O;
    i.preventDefault(), (O = X.current) == null || O.focus(), l(S), le && (ie.current = window.setTimeout(() => m(S), v));
  }, M = () => {
    ie.current && window.clearTimeout(ie.current), ie.current = null, me.current = 0;
  }, C = /* @__PURE__ */ Ze("div", { ...T("controls"), children: [
    /* @__PURE__ */ Y(
      Re,
      {
        ...T("control"),
        tabIndex: -1,
        "aria-hidden": !0,
        disabled: K || typeof I == "number" && c !== void 0 && I >= c,
        mod: { direction: "up" },
        onMouseDown: (i) => i.preventDefault(),
        onPointerDown: (i) => {
          D(i, !0);
        },
        onPointerUp: M,
        onPointerLeave: M,
        children: /* @__PURE__ */ Y(_e, { direction: "up" })
      }
    ),
    /* @__PURE__ */ Y(
      Re,
      {
        ...T("control"),
        tabIndex: -1,
        "aria-hidden": !0,
        disabled: K || typeof I == "number" && g !== void 0 && I <= g,
        mod: { direction: "down" },
        onMouseDown: (i) => i.preventDefault(),
        onPointerDown: (i) => {
          D(i, !1);
        },
        onPointerUp: M,
        onPointerLeave: M,
        children: /* @__PURE__ */ Y(_e, { direction: "down" })
      }
    )
  ] });
  return /* @__PURE__ */ Y(
    Oe,
    {
      component: _t,
      allowNegative: q,
      className: at(De.root, n),
      size: ee,
      ...A,
      readOnly: G,
      disabled: K,
      value: I,
      getInputRef: st(t, X),
      onValueChange: we,
      rightSection: R || G ? E : E || C,
      classNames: te,
      styles: ve,
      unstyled: s,
      __staticSelector: "NumberInput",
      decimalScale: z ? j : 0,
      onKeyDown: xe,
      onKeyDownCapture: u,
      rightSectionPointerEvents: W ?? (K ? "none" : void 0),
      rightSectionWidth: ne ?? `var(--ni-right-section-width-${ee || "sm"})`,
      allowLeadingZeros: y,
      onBlur: (i) => {
        if (B == null || B(i), P === "blur" && typeof I == "number" && be(I, g, c) !== I && J(be(I, g, c)), _ && typeof I == "string") {
          const S = I.replace(/^0+/, ""), O = parseFloat(S);
          J(
            Number.isNaN(O) || O > Number.MAX_SAFE_INTEGER ? S : O
          );
        }
      },
      isAllowed: (i) => P === "strict" ? h ? h(i) && Be(i.floatValue, g, c) : Be(i.floatValue, g, c) : h ? h(i) : !0
    }
  );
});
Ie.classes = { ...Oe.classes, ...De };
Ie.displayName = "@mantine/core/NumberInput";
const Xt = He(function(t, r) {
  const n = Xe(t.attribute, t), { getError: a, getValue: o, setValue: s, mutateOptions: N } = n, x = r || Z(null), p = a(), w = Z(null), b = t.variant || "default";
  var c = o() != "" ? o() : null;
  qe(x, () => ({
    ...Je(n),
    focus() {
      w.current.focus();
    }
  }), [n]);
  var g = n.getFieldProps();
  return g.onChange = (f) => {
    t.readOnly || (s(f), t.onChange && t.onChange(f));
  }, /* @__PURE__ */ Y(We, { children: !N.visible && /* @__PURE__ */ Y(
    Qe,
    {
      label: Ye(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ Y(
        Ie,
        {
          defaultValue: t.defaultValue,
          label: t.label,
          variant: b,
          ref: w,
          ...g,
          placeholder: t.placeholder,
          value: c,
          error: p.message
        }
      )
    }
  ) });
});
export {
  Xt as MantineNumberField
};
