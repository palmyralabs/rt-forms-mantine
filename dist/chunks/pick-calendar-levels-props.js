import { jsx as w, jsxs as de } from "react/jsx-runtime";
import S from "dayjs";
import { createContext as At, useContext as Yt, useCallback as me, useRef as De } from "react";
import { u as qe } from "./use-uncontrolled.js";
import { r as Ze, f as P, u as q, d as ie, g as ge, h as Ge, B as se, k as Ue, l as Ft } from "./factory.js";
import { U as ve } from "./UnstyledButton.js";
import { u as Je } from "./use-resolved-styles-api.js";
import { c as Tt } from "./clamp.js";
function Ee({ style: t, size: e = 16, ...s }) {
  return /* @__PURE__ */ w(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: Ze(e), height: Ze(e), display: "block" },
      ...s,
      children: /* @__PURE__ */ w(
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
Ee.displayName = "@mantine/core/AccordionChevron";
function Rt({ direction: t, levelIndex: e, rowIndex: s, cellIndex: a, size: n }) {
  switch (t) {
    case "up":
      return e === 0 && s === 0 ? null : s === 0 ? {
        levelIndex: e - 1,
        rowIndex: a <= n[e - 1][n[e - 1].length - 1] - 1 ? n[e - 1].length - 1 : n[e - 1].length - 2,
        cellIndex: a
      } : {
        levelIndex: e,
        rowIndex: s - 1,
        cellIndex: a
      };
    case "down":
      return s === n[e].length - 1 ? {
        levelIndex: e + 1,
        rowIndex: 0,
        cellIndex: a
      } : s === n[e].length - 2 && a >= n[e][n[e].length - 1] ? {
        levelIndex: e + 1,
        rowIndex: 0,
        cellIndex: a
      } : {
        levelIndex: e,
        rowIndex: s + 1,
        cellIndex: a
      };
    case "left":
      return e === 0 && s === 0 && a === 0 ? null : s === 0 && a === 0 ? {
        levelIndex: e - 1,
        rowIndex: n[e - 1].length - 1,
        cellIndex: n[e - 1][n[e - 1].length - 1] - 1
      } : a === 0 ? {
        levelIndex: e,
        rowIndex: s - 1,
        cellIndex: n[e][s - 1] - 1
      } : {
        levelIndex: e,
        rowIndex: s,
        cellIndex: a - 1
      };
    case "right":
      return s === n[e].length - 1 && a === n[e][s] - 1 ? {
        levelIndex: e + 1,
        rowIndex: 0,
        cellIndex: 0
      } : a === n[e][s] - 1 ? {
        levelIndex: e,
        rowIndex: s + 1,
        cellIndex: 0
      } : {
        levelIndex: e,
        rowIndex: s,
        cellIndex: a + 1
      };
    default:
      return { levelIndex: e, rowIndex: s, cellIndex: a };
  }
}
function Qe({
  controlsRef: t,
  direction: e,
  levelIndex: s,
  rowIndex: a,
  cellIndex: n,
  size: d
}) {
  var c, p, f;
  const o = Rt({ direction: e, size: d, rowIndex: a, cellIndex: n, levelIndex: s });
  if (!o)
    return;
  const l = (f = (p = (c = t.current) == null ? void 0 : c[o.levelIndex]) == null ? void 0 : p[o.rowIndex]) == null ? void 0 : f[o.cellIndex];
  l && (l.disabled || l.getAttribute("data-hidden") || l.getAttribute("data-outside") ? Qe({
    controlsRef: t,
    direction: e,
    levelIndex: o.levelIndex,
    cellIndex: o.cellIndex,
    rowIndex: o.rowIndex,
    size: d
  }) : l.focus());
}
function zt(t) {
  switch (t) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function Wt(t) {
  var e;
  return (e = t.current) == null ? void 0 : e.map((s) => s.map((a) => a.length));
}
function Ve({
  controlsRef: t,
  levelIndex: e,
  rowIndex: s,
  cellIndex: a,
  event: n
}) {
  const d = zt(n.key);
  if (d) {
    n.preventDefault();
    const o = Wt(t);
    Qe({
      controlsRef: t,
      direction: d,
      levelIndex: e,
      rowIndex: s,
      cellIndex: a,
      size: o
    });
  }
}
function As(t, e) {
  if (!t || !e)
    return e;
  const s = t.getHours(), a = t.getMinutes(), n = t.getSeconds(), d = t.getMilliseconds(), o = new Date(e);
  return o.setHours(s), o.setMinutes(a), o.setSeconds(n), o.setMilliseconds(d), o;
}
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function et(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var tt = { exports: {} };
(function(t, e) {
  (function(s, a) {
    t.exports = a();
  })(Xe, function() {
    var s = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, a = {};
    return function(n, d, o) {
      var l, c = function(v, D, i) {
        i === void 0 && (i = {});
        var r = new Date(v), m = function(_, b) {
          b === void 0 && (b = {});
          var y = b.timeZoneName || "short", M = _ + "|" + y, k = a[M];
          return k || (k = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: _, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: y }), a[M] = k), k;
        }(D, i);
        return m.formatToParts(r);
      }, p = function(v, D) {
        for (var i = c(v, D), r = [], m = 0; m < i.length; m += 1) {
          var _ = i[m], b = _.type, y = _.value, M = s[b];
          M >= 0 && (r[M] = parseInt(y, 10));
        }
        var k = r[3], $ = k === 24 ? 0 : k, O = r[0] + "-" + r[1] + "-" + r[2] + " " + $ + ":" + r[4] + ":" + r[5] + ":000", N = +v;
        return (o.utc(O).valueOf() - (N -= N % 1e3)) / 6e4;
      }, f = d.prototype;
      f.tz = function(v, D) {
        v === void 0 && (v = l);
        var i, r = this.utcOffset(), m = this.toDate(), _ = m.toLocaleString("en-US", { timeZone: v }), b = Math.round((m - new Date(_)) / 1e3 / 60), y = 15 * -Math.round(m.getTimezoneOffset() / 15) - b;
        if (!Number(y)) i = this.utcOffset(0, D);
        else if (i = o(_, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(y, !0), D) {
          var M = i.utcOffset();
          i = i.add(r - M, "minute");
        }
        return i.$x.$timezone = v, i;
      }, f.offsetName = function(v) {
        var D = this.$x.$timezone || o.tz.guess(), i = c(this.valueOf(), D, { timeZoneName: v }).find(function(r) {
          return r.type.toLowerCase() === "timezonename";
        });
        return i && i.value;
      };
      var g = f.startOf;
      f.startOf = function(v, D) {
        if (!this.$x || !this.$x.$timezone) return g.call(this, v, D);
        var i = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return g.call(i, v, D).tz(this.$x.$timezone, !0);
      }, o.tz = function(v, D, i) {
        var r = i && D, m = i || D || l, _ = p(+o(), m);
        if (typeof v != "string") return o(v).tz(m);
        var b = function($, O, N) {
          var C = $ - 60 * O * 1e3, A = p(C, N);
          if (O === A) return [C, O];
          var x = p(C -= 60 * (A - O) * 1e3, N);
          return A === x ? [C, A] : [$ - 60 * Math.min(A, x) * 1e3, Math.max(A, x)];
        }(o.utc(v, r).valueOf(), _, m), y = b[0], M = b[1], k = o(y).utcOffset(M);
        return k.$x.$timezone = m, k;
      }, o.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, o.tz.setDefault = function(v) {
        l = v;
      };
    };
  });
})(tt);
var Ht = tt.exports;
const Et = /* @__PURE__ */ et(Ht);
var st = { exports: {} };
(function(t, e) {
  (function(s, a) {
    t.exports = a();
  })(Xe, function() {
    var s = "minute", a = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
    return function(d, o, l) {
      var c = o.prototype;
      l.utc = function(r) {
        var m = { date: r, utc: !0, args: arguments };
        return new o(m);
      }, c.utc = function(r) {
        var m = l(this.toDate(), { locale: this.$L, utc: !0 });
        return r ? m.add(this.utcOffset(), s) : m;
      }, c.local = function() {
        return l(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var p = c.parse;
      c.parse = function(r) {
        r.utc && (this.$u = !0), this.$utils().u(r.$offset) || (this.$offset = r.$offset), p.call(this, r);
      };
      var f = c.init;
      c.init = function() {
        if (this.$u) {
          var r = this.$d;
          this.$y = r.getUTCFullYear(), this.$M = r.getUTCMonth(), this.$D = r.getUTCDate(), this.$W = r.getUTCDay(), this.$H = r.getUTCHours(), this.$m = r.getUTCMinutes(), this.$s = r.getUTCSeconds(), this.$ms = r.getUTCMilliseconds();
        } else f.call(this);
      };
      var g = c.utcOffset;
      c.utcOffset = function(r, m) {
        var _ = this.$utils().u;
        if (_(r)) return this.$u ? 0 : _(this.$offset) ? g.call(this) : this.$offset;
        if (typeof r == "string" && (r = function(k) {
          k === void 0 && (k = "");
          var $ = k.match(a);
          if (!$) return null;
          var O = ("" + $[0]).match(n) || ["-", 0, 0], N = O[0], C = 60 * +O[1] + +O[2];
          return C === 0 ? 0 : N === "+" ? C : -C;
        }(r), r === null)) return this;
        var b = Math.abs(r) <= 16 ? 60 * r : r, y = this;
        if (m) return y.$offset = b, y.$u = r === 0, y;
        if (r !== 0) {
          var M = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (y = this.local().add(b + M, s)).$offset = b, y.$x.$localOffset = M;
        } else y = this.utc();
        return y;
      };
      var v = c.format;
      c.format = function(r) {
        var m = r || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return v.call(this, m);
      }, c.valueOf = function() {
        var r = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * r;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var D = c.toDate;
      c.toDate = function(r) {
        return r === "s" && this.$offset ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : D.call(this);
      };
      var i = c.diff;
      c.diff = function(r, m, _) {
        if (r && this.$u === r.$u) return i.call(this, r, m, _);
        var b = this.local(), y = l(r).local();
        return i.call(b, y, m, _);
      };
    };
  });
})(st);
var Gt = st.exports;
const Ut = /* @__PURE__ */ et(Gt);
S.extend(Ut);
S.extend(Et);
function Vt(t, e) {
  return e ? S(t).tz(e).utcOffset() + t.getTimezoneOffset() : 0;
}
const Ie = (t, e, s) => {
  if (!t)
    return null;
  if (!e)
    return t;
  let a = Vt(t, e);
  return s === "remove" && (a *= -1), S(t).add(a, "minutes").toDate();
};
function ye(t, e, s, a) {
  return a || !e ? e : Array.isArray(e) ? e.map((n) => Ie(n, s, t)) : Ie(e, s, t);
}
const Bt = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "–",
  consistentWeeks: !1
}, Kt = At(Bt);
function ae() {
  const t = Yt(Kt), e = me((o) => o || t.locale, [t.locale]), s = me(
    (o) => o || t.timezone || void 0,
    [t.timezone]
  ), a = me(
    (o) => typeof o == "number" ? o : t.firstDayOfWeek,
    [t.firstDayOfWeek]
  ), n = me(
    (o) => Array.isArray(o) ? o : t.weekendDays,
    [t.weekendDays]
  ), d = me(
    (o) => typeof o == "string" ? o : t.labelSeparator,
    [t.labelSeparator]
  );
  return {
    ...t,
    getLocale: e,
    getTimezone: s,
    getFirstDayOfWeek: a,
    getWeekendDays: n,
    getLabelSeparator: d
  };
}
function jt(t, e) {
  if (e === "range" && Array.isArray(t)) {
    const [s, a] = t;
    return s ? a ? `${s.toISOString()} – ${a.toISOString()}` : `${s.toISOString()} –` : "";
  }
  return e === "multiple" && Array.isArray(t) ? t.map((s) => s == null ? void 0 : s.toISOString()).filter(Boolean).join(", ") : !Array.isArray(t) && t ? t.toISOString() : "";
}
function Zt({ value: t, type: e, name: s, form: a }) {
  return /* @__PURE__ */ w("input", { type: "hidden", value: jt(t, e), name: s, form: a });
}
Zt.displayName = "@mantine/dates/HiddenDatesInput";
var at = { day: "m_396ce5cb" };
const It = {}, Pt = ge((t, { size: e }) => ({
  day: {
    "--day-size": Ge(e, "day-size")
  }
})), Be = P((t, e) => {
  const s = q("Day", It, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    date: p,
    disabled: f,
    __staticSelector: g,
    weekend: v,
    outside: D,
    selected: i,
    renderDay: r,
    inRange: m,
    firstInRange: _,
    lastInRange: b,
    hidden: y,
    static: M,
    highlightToday: k,
    ...$
  } = s, O = ie({
    name: g || "Day",
    classes: at,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    varsResolver: Pt,
    rootSelector: "day"
  }), N = ae();
  return /* @__PURE__ */ w(
    ve,
    {
      ...O("day", { style: y ? { display: "none" } : void 0 }),
      component: M ? "div" : "button",
      ref: e,
      disabled: f,
      "data-today": S(p).isSame(ye("add", /* @__PURE__ */ new Date(), N.getTimezone()), "day") || void 0,
      "data-hidden": y || void 0,
      "data-highlight-today": k || void 0,
      "data-disabled": f || void 0,
      "data-weekend": !f && !D && v || void 0,
      "data-outside": !f && D || void 0,
      "data-selected": !f && i || void 0,
      "data-in-range": m && !f || void 0,
      "data-first-in-range": _ && !f || void 0,
      "data-last-in-range": b && !f || void 0,
      "data-static": M || void 0,
      unstyled: l,
      ...$,
      children: (r == null ? void 0 : r(p)) || p.getDate()
    }
  );
});
Be.classes = at;
Be.displayName = "@mantine/dates/Day";
function qt({
  locale: t,
  format: e = "dd",
  firstDayOfWeek: s = 1
}) {
  const a = S().day(s), n = [];
  for (let d = 0; d < 7; d += 1)
    typeof e == "string" ? n.push(S(a).add(d, "days").locale(t).format(e)) : n.push(e(S(a).add(d, "days").toDate()));
  return n;
}
var nt = { weekday: "m_18a3eca" };
const Jt = {}, Qt = ge((t, { size: e }) => ({
  weekdaysRow: {
    "--wr-fz": Ue(e),
    "--wr-spacing": Ft(e)
  }
})), Ke = P((t, e) => {
  const s = q("WeekdaysRow", Jt, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    locale: p,
    firstDayOfWeek: f,
    weekdayFormat: g,
    cellComponent: v = "th",
    __staticSelector: D,
    ...i
  } = s, r = ie({
    name: D || "WeekdaysRow",
    classes: nt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    varsResolver: Qt,
    rootSelector: "weekdaysRow"
  }), m = ae(), _ = qt({
    locale: m.getLocale(p),
    format: g,
    firstDayOfWeek: m.getFirstDayOfWeek(f)
  }).map((b, y) => /* @__PURE__ */ w(v, { ...r("weekday"), children: b }, y));
  return /* @__PURE__ */ w(se, { component: "tr", ref: e, ...r("weekdaysRow"), ...i, children: _ });
});
Ke.classes = nt;
Ke.displayName = "@mantine/dates/WeekdaysRow";
function Xt(t, e = 1) {
  const s = new Date(t), a = e === 0 ? 6 : e - 1;
  for (; s.getDay() !== a; )
    s.setDate(s.getDate() + 1);
  return s;
}
function es(t, e = 1) {
  const s = new Date(t);
  for (; s.getDay() !== e; )
    s.setDate(s.getDate() - 1);
  return s;
}
function ts({
  month: t,
  firstDayOfWeek: e = 1,
  consistentWeeks: s
}) {
  const a = t.getMonth(), n = new Date(t.getFullYear(), a, 1), d = new Date(t.getFullYear(), t.getMonth() + 1, 0), o = Xt(d, e), l = es(n, e), c = [];
  for (; l <= o; ) {
    const p = [];
    for (let f = 0; f < 7; f += 1)
      p.push(new Date(l)), l.setDate(l.getDate() + 1);
    c.push(p);
  }
  if (s && c.length < 6) {
    const p = c[c.length - 1], f = p[p.length - 1], g = new Date(f);
    for (g.setDate(g.getDate() + 1); c.length < 6; ) {
      const v = [];
      for (let D = 0; D < 7; D += 1)
        v.push(new Date(g)), g.setDate(g.getDate() + 1);
      c.push(v);
    }
  }
  return c;
}
function ot(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function rt(t, e) {
  return e instanceof Date ? S(t).isAfter(S(e).subtract(1, "day"), "day") : !0;
}
function it(t, e) {
  return e instanceof Date ? S(t).isBefore(S(e).add(1, "day"), "day") : !0;
}
function ss(t, e, s, a, n, d, o) {
  const l = t.flat().filter(
    (f) => {
      var g;
      return it(f, s) && rt(f, e) && !(n != null && n(f)) && !((g = a == null ? void 0 : a(f)) != null && g.disabled) && (!d || ot(f, o));
    }
  ), c = l.find((f) => {
    var g;
    return (g = a == null ? void 0 : a(f)) == null ? void 0 : g.selected;
  });
  if (c)
    return c;
  const p = l.find((f) => S().isSame(f, "date"));
  return p || l[0];
}
var lt = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const as = {
  withCellSpacing: !0
}, _e = P((t, e) => {
  const s = q("Month", as, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    __staticSelector: p,
    locale: f,
    firstDayOfWeek: g,
    weekdayFormat: v,
    month: D,
    weekendDays: i,
    getDayProps: r,
    excludeDate: m,
    minDate: _,
    maxDate: b,
    renderDay: y,
    hideOutsideDates: M,
    hideWeekdays: k,
    getDayAriaLabel: $,
    static: O,
    __getDayRef: N,
    __onDayKeyDown: C,
    __onDayClick: A,
    __onDayMouseEnter: x,
    __preventFocus: W,
    __stopPropagation: H,
    withCellSpacing: B,
    size: F,
    highlightToday: z,
    ...R
  } = s, T = ie({
    name: p || "Month",
    classes: lt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    rootSelector: "month"
  }), u = ae(), G = ts({
    month: D,
    firstDayOfWeek: u.getFirstDayOfWeek(g),
    consistentWeeks: u.consistentWeeks
  }), h = ss(
    G,
    _,
    b,
    r,
    m,
    M,
    D
  ), { resolvedClassNames: L, resolvedStyles: U } = Je({
    classNames: a,
    styles: o,
    props: s
  }), Z = G.map((X, J) => {
    const Q = X.map((V, ne) => {
      const E = !ot(V, D), ee = ($ == null ? void 0 : $(V)) || S(V).locale(f || u.locale).format("D MMMM YYYY"), Y = r == null ? void 0 : r(V), te = S(V).isSame(h, "date");
      return /* @__PURE__ */ w(
        "td",
        {
          ...T("monthCell"),
          "data-with-spacing": B || void 0,
          children: /* @__PURE__ */ w(
            Be,
            {
              __staticSelector: p || "Month",
              classNames: L,
              styles: U,
              unstyled: l,
              "data-mantine-stop-propagation": H || void 0,
              highlightToday: z,
              renderDay: y,
              date: V,
              size: F,
              weekend: u.getWeekendDays(i).includes(V.getDay()),
              outside: E,
              hidden: M ? E : !1,
              "aria-label": ee,
              static: O,
              disabled: (m == null ? void 0 : m(V)) || !it(V, b) || !rt(V, _),
              ref: (j) => N == null ? void 0 : N(J, ne, j),
              ...Y,
              onKeyDown: (j) => {
                var I;
                (I = Y == null ? void 0 : Y.onKeyDown) == null || I.call(Y, j), C == null || C(j, { rowIndex: J, cellIndex: ne, date: V });
              },
              onMouseEnter: (j) => {
                var I;
                (I = Y == null ? void 0 : Y.onMouseEnter) == null || I.call(Y, j), x == null || x(j, V);
              },
              onClick: (j) => {
                var I;
                (I = Y == null ? void 0 : Y.onClick) == null || I.call(Y, j), A == null || A(j, V);
              },
              onMouseDown: (j) => {
                var I;
                (I = Y == null ? void 0 : Y.onMouseDown) == null || I.call(Y, j), W && j.preventDefault();
              },
              tabIndex: W || !te ? -1 : 0
            }
          )
        },
        V.toString()
      );
    });
    return /* @__PURE__ */ w("tr", { ...T("monthRow"), children: Q }, J);
  });
  return /* @__PURE__ */ de(se, { component: "table", ...T("month"), size: F, ref: e, ...R, children: [
    !k && /* @__PURE__ */ w("thead", { ...T("monthThead"), children: /* @__PURE__ */ w(
      Ke,
      {
        __staticSelector: p || "Month",
        locale: f,
        firstDayOfWeek: g,
        weekdayFormat: v,
        size: F,
        classNames: L,
        styles: U,
        unstyled: l
      }
    ) }),
    /* @__PURE__ */ w("tbody", { ...T("monthTbody"), children: Z })
  ] });
});
_e.classes = lt;
_e.displayName = "@mantine/dates/Month";
var ct = { pickerControl: "m_dc6a3c71" };
const ns = {}, os = ge((t, { size: e }) => ({
  pickerControl: {
    "--dpc-fz": Ue(e),
    "--dpc-size": Ge(e, "dpc-size")
  }
})), be = P((t, e) => {
  const s = q("PickerControl", ns, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    firstInRange: p,
    lastInRange: f,
    inRange: g,
    __staticSelector: v,
    selected: D,
    disabled: i,
    ...r
  } = s, m = ie({
    name: v || "PickerControl",
    classes: ct,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    varsResolver: os,
    rootSelector: "pickerControl"
  });
  return /* @__PURE__ */ w(
    ve,
    {
      ...m("pickerControl"),
      ref: e,
      unstyled: l,
      "data-picker-control": !0,
      "data-selected": D && !i || void 0,
      "data-disabled": i || void 0,
      "data-in-range": g && !i && !D || void 0,
      "data-first-in-range": p && !i || void 0,
      "data-last-in-range": f && !i || void 0,
      disabled: i,
      ...r
    }
  );
});
be.classes = ct;
be.displayName = "@mantine/dates/PickerControl";
function ut(t, e, s) {
  return !e && !s ? !1 : !!(e && S(t).isBefore(e, "year") || s && S(t).isAfter(s, "year"));
}
function rs(t, e, s, a) {
  const n = t.flat().filter(
    (l) => {
      var c;
      return !ut(l, e, s) && !((c = a == null ? void 0 : a(l)) != null && c.disabled);
    }
  ), d = n.find((l) => {
    var c;
    return (c = a == null ? void 0 : a(l)) == null ? void 0 : c.selected;
  });
  if (d)
    return d;
  const o = n.find((l) => S().isSame(l, "year"));
  return o || n[0];
}
function dt(t) {
  const e = t.getFullYear(), s = e - e % 10;
  let a = 0;
  const n = [[], [], [], []];
  for (let d = 0; d < 4; d += 1) {
    const o = d === 3 ? 1 : 3;
    for (let l = 0; l < o; l += 1)
      n[d].push(new Date(s + a, 0)), a += 1;
  }
  return n;
}
var ft = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const is = {
  yearsListFormat: "YYYY",
  withCellSpacing: !0
}, Le = P((t, e) => {
  const s = q("YearsList", is, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    decade: p,
    yearsListFormat: f,
    locale: g,
    minDate: v,
    maxDate: D,
    getYearControlProps: i,
    __staticSelector: r,
    __getControlRef: m,
    __onControlKeyDown: _,
    __onControlClick: b,
    __onControlMouseEnter: y,
    __preventFocus: M,
    __stopPropagation: k,
    withCellSpacing: $,
    size: O,
    ...N
  } = s, C = ie({
    name: r || "YearsList",
    classes: ft,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    rootSelector: "yearsList"
  }), A = ae(), x = dt(p), W = rs(x, v, D, i), H = x.map((B, F) => {
    const z = B.map((R, T) => {
      const u = i == null ? void 0 : i(R), G = S(R).isSame(W, "year");
      return /* @__PURE__ */ w(
        "td",
        {
          ...C("yearsListCell"),
          "data-with-spacing": $ || void 0,
          children: /* @__PURE__ */ w(
            be,
            {
              ...C("yearsListControl"),
              size: O,
              unstyled: l,
              "data-mantine-stop-propagation": k || void 0,
              disabled: ut(R, v, D),
              ref: (h) => m == null ? void 0 : m(F, T, h),
              ...u,
              onKeyDown: (h) => {
                var L;
                (L = u == null ? void 0 : u.onKeyDown) == null || L.call(u, h), _ == null || _(h, { rowIndex: F, cellIndex: T, date: R });
              },
              onClick: (h) => {
                var L;
                (L = u == null ? void 0 : u.onClick) == null || L.call(u, h), b == null || b(h, R);
              },
              onMouseEnter: (h) => {
                var L;
                (L = u == null ? void 0 : u.onMouseEnter) == null || L.call(u, h), y == null || y(h, R);
              },
              onMouseDown: (h) => {
                var L;
                (L = u == null ? void 0 : u.onMouseDown) == null || L.call(u, h), M && h.preventDefault();
              },
              tabIndex: M || !G ? -1 : 0,
              children: S(R).locale(A.getLocale(g)).format(f)
            }
          )
        },
        T
      );
    });
    return /* @__PURE__ */ w("tr", { ...C("yearsListRow"), children: z }, F);
  });
  return /* @__PURE__ */ w(se, { component: "table", ref: e, size: O, ...C("yearsList"), ...N, children: /* @__PURE__ */ w("tbody", { children: H }) });
});
Le.classes = ft;
Le.displayName = "@mantine/dates/YearsList";
function mt(t, e, s) {
  return !e && !s ? !1 : !!(e && S(t).isBefore(e, "month") || s && S(t).isAfter(s, "month"));
}
function ls(t, e, s, a) {
  const n = t.flat().filter(
    (l) => {
      var c;
      return !mt(l, e, s) && !((c = a == null ? void 0 : a(l)) != null && c.disabled);
    }
  ), d = n.find((l) => {
    var c;
    return (c = a == null ? void 0 : a(l)) == null ? void 0 : c.selected;
  });
  if (d)
    return d;
  const o = n.find((l) => S().isSame(l, "month"));
  return o || n[0];
}
function cs(t) {
  const e = S(t).startOf("year").toDate(), s = [[], [], [], []];
  let a = 0;
  for (let n = 0; n < 4; n += 1)
    for (let d = 0; d < 3; d += 1)
      s[n].push(S(e).add(a, "months").toDate()), a += 1;
  return s;
}
var ht = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const us = {
  monthsListFormat: "MMM",
  withCellSpacing: !0
}, Se = P((t, e) => {
  const s = q("MonthsList", us, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    __staticSelector: p,
    year: f,
    monthsListFormat: g,
    locale: v,
    minDate: D,
    maxDate: i,
    getMonthControlProps: r,
    __getControlRef: m,
    __onControlKeyDown: _,
    __onControlClick: b,
    __onControlMouseEnter: y,
    __preventFocus: M,
    __stopPropagation: k,
    withCellSpacing: $,
    size: O,
    ...N
  } = s, C = ie({
    name: p || "MonthsList",
    classes: ht,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    rootSelector: "monthsList"
  }), A = ae(), x = cs(f), W = ls(x, D, i, r), H = x.map((B, F) => {
    const z = B.map((R, T) => {
      const u = r == null ? void 0 : r(R), G = S(R).isSame(W, "month");
      return /* @__PURE__ */ w(
        "td",
        {
          ...C("monthsListCell"),
          "data-with-spacing": $ || void 0,
          children: /* @__PURE__ */ w(
            be,
            {
              ...C("monthsListControl"),
              size: O,
              unstyled: l,
              __staticSelector: p || "MonthsList",
              "data-mantine-stop-propagation": k || void 0,
              disabled: mt(R, D, i),
              ref: (h) => m == null ? void 0 : m(F, T, h),
              ...u,
              onKeyDown: (h) => {
                var L;
                (L = u == null ? void 0 : u.onKeyDown) == null || L.call(u, h), _ == null || _(h, { rowIndex: F, cellIndex: T, date: R });
              },
              onClick: (h) => {
                var L;
                (L = u == null ? void 0 : u.onClick) == null || L.call(u, h), b == null || b(h, R);
              },
              onMouseEnter: (h) => {
                var L;
                (L = u == null ? void 0 : u.onMouseEnter) == null || L.call(u, h), y == null || y(h, R);
              },
              onMouseDown: (h) => {
                var L;
                (L = u == null ? void 0 : u.onMouseDown) == null || L.call(u, h), M && h.preventDefault();
              },
              tabIndex: M || !G ? -1 : 0,
              children: S(R).locale(A.getLocale(v)).format(g)
            }
          )
        },
        T
      );
    });
    return /* @__PURE__ */ w("tr", { ...C("monthsListRow"), children: z }, F);
  });
  return /* @__PURE__ */ w(se, { component: "table", ref: e, size: O, ...C("monthsList"), ...N, children: /* @__PURE__ */ w("tbody", { children: H }) });
});
Se.classes = ht;
Se.displayName = "@mantine/dates/MonthsList";
var vt = { calendarHeader: "m_730a79ed", calendarHeaderLevel: "m_f6645d97", calendarHeaderControl: "m_2351eeb0", calendarHeaderControlIcon: "m_367dc749" };
const ds = {
  nextDisabled: !1,
  previousDisabled: !1,
  hasNextLevel: !0,
  withNext: !0,
  withPrevious: !0
}, fs = ge((t, { size: e }) => ({
  calendarHeader: {
    "--dch-control-size": Ge(e, "dch-control-size"),
    "--dch-fz": Ue(e)
  }
})), le = P((t, e) => {
  const s = q("CalendarHeader", ds, t), {
    classNames: a,
    className: n,
    style: d,
    styles: o,
    unstyled: l,
    vars: c,
    nextIcon: p,
    previousIcon: f,
    nextLabel: g,
    previousLabel: v,
    onNext: D,
    onPrevious: i,
    onLevelClick: r,
    label: m,
    nextDisabled: _,
    previousDisabled: b,
    hasNextLevel: y,
    levelControlAriaLabel: M,
    withNext: k,
    withPrevious: $,
    __staticSelector: O,
    __preventFocus: N,
    __stopPropagation: C,
    ...A
  } = s, x = ie({
    name: O || "CalendarHeader",
    classes: vt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    varsResolver: fs,
    rootSelector: "calendarHeader"
  }), W = N ? (H) => H.preventDefault() : void 0;
  return /* @__PURE__ */ de(se, { ...x("calendarHeader"), ref: e, ...A, children: [
    $ && /* @__PURE__ */ w(
      ve,
      {
        ...x("calendarHeaderControl"),
        "data-direction": "previous",
        "aria-label": v,
        onClick: i,
        unstyled: l,
        onMouseDown: W,
        disabled: b,
        "data-disabled": b || void 0,
        tabIndex: N || b ? -1 : 0,
        "data-mantine-stop-propagation": C || void 0,
        children: f || /* @__PURE__ */ w(
          Ee,
          {
            ...x("calendarHeaderControlIcon"),
            "data-direction": "previous",
            size: "45%"
          }
        )
      }
    ),
    /* @__PURE__ */ w(
      ve,
      {
        component: y ? "button" : "div",
        ...x("calendarHeaderLevel"),
        onClick: y ? r : void 0,
        unstyled: l,
        onMouseDown: y ? W : void 0,
        disabled: !y,
        "data-static": !y || void 0,
        "aria-label": M,
        tabIndex: N || !y ? -1 : 0,
        "data-mantine-stop-propagation": C || void 0,
        children: m
      }
    ),
    k && /* @__PURE__ */ w(
      ve,
      {
        ...x("calendarHeaderControl"),
        "data-direction": "next",
        "aria-label": g,
        onClick: D,
        unstyled: l,
        onMouseDown: W,
        disabled: _,
        "data-disabled": _ || void 0,
        tabIndex: N || _ ? -1 : 0,
        "data-mantine-stop-propagation": C || void 0,
        children: p || /* @__PURE__ */ w(
          Ee,
          {
            ...x("calendarHeaderControlIcon"),
            "data-direction": "next",
            size: "45%"
          }
        )
      }
    )
  ] });
});
le.classes = vt;
le.displayName = "@mantine/dates/CalendarHeader";
function ms(t) {
  const e = dt(t);
  return [e[0][0], e[3][0]];
}
const hs = {
  decadeLabelFormat: "YYYY"
}, we = P((t, e) => {
  const s = q("DecadeLevel", hs, t), {
    // YearsList settings
    decade: a,
    locale: n,
    minDate: d,
    maxDate: o,
    yearsListFormat: l,
    getYearControlProps: c,
    __getControlRef: p,
    __onControlKeyDown: f,
    __onControlClick: g,
    __onControlMouseEnter: v,
    withCellSpacing: D,
    // CalendarHeader settings
    __preventFocus: i,
    nextIcon: r,
    previousIcon: m,
    nextLabel: _,
    previousLabel: b,
    onNext: y,
    onPrevious: M,
    nextDisabled: k,
    previousDisabled: $,
    levelControlAriaLabel: O,
    withNext: N,
    withPrevious: C,
    // Other props
    decadeLabelFormat: A,
    classNames: x,
    styles: W,
    unstyled: H,
    __staticSelector: B,
    __stopPropagation: F,
    size: z,
    ...R
  } = s, T = ae(), [u, G] = ms(a), h = {
    __staticSelector: B || "DecadeLevel",
    classNames: x,
    styles: W,
    unstyled: H,
    size: z
  }, L = typeof k == "boolean" ? k : o ? !S(G).endOf("year").isBefore(o) : !1, U = typeof $ == "boolean" ? $ : d ? !S(u).startOf("year").isAfter(d) : !1, Z = (X, J) => S(X).locale(n || T.locale).format(J);
  return /* @__PURE__ */ de(se, { "data-decade-level": !0, size: z, ref: e, ...R, children: [
    /* @__PURE__ */ w(
      le,
      {
        label: typeof A == "function" ? A(u, G) : `${Z(u, A)} – ${Z(
          G,
          A
        )}`,
        __preventFocus: i,
        __stopPropagation: F,
        nextIcon: r,
        previousIcon: m,
        nextLabel: _,
        previousLabel: b,
        onNext: y,
        onPrevious: M,
        nextDisabled: L,
        previousDisabled: U,
        hasNextLevel: !1,
        levelControlAriaLabel: O,
        withNext: N,
        withPrevious: C,
        ...h
      }
    ),
    /* @__PURE__ */ w(
      Le,
      {
        decade: a,
        locale: n,
        minDate: d,
        maxDate: o,
        yearsListFormat: l,
        getYearControlProps: c,
        __getControlRef: p,
        __onControlKeyDown: f,
        __onControlClick: g,
        __onControlMouseEnter: v,
        __preventFocus: i,
        __stopPropagation: F,
        withCellSpacing: D,
        ...h
      }
    )
  ] });
});
we.classes = { ...Le.classes, ...le.classes };
we.displayName = "@mantine/dates/DecadeLevel";
const vs = {
  yearLabelFormat: "YYYY"
}, Ce = P((t, e) => {
  const s = q("YearLevel", vs, t), {
    // MonthsList settings
    year: a,
    locale: n,
    minDate: d,
    maxDate: o,
    monthsListFormat: l,
    getMonthControlProps: c,
    __getControlRef: p,
    __onControlKeyDown: f,
    __onControlClick: g,
    __onControlMouseEnter: v,
    withCellSpacing: D,
    // CalendarHeader settings
    __preventFocus: i,
    nextIcon: r,
    previousIcon: m,
    nextLabel: _,
    previousLabel: b,
    onNext: y,
    onPrevious: M,
    onLevelClick: k,
    nextDisabled: $,
    previousDisabled: O,
    hasNextLevel: N,
    levelControlAriaLabel: C,
    withNext: A,
    withPrevious: x,
    // Other props
    yearLabelFormat: W,
    __staticSelector: H,
    __stopPropagation: B,
    size: F,
    classNames: z,
    styles: R,
    unstyled: T,
    ...u
  } = s, G = ae(), h = {
    __staticSelector: H || "YearLevel",
    classNames: z,
    styles: R,
    unstyled: T,
    size: F
  }, L = typeof $ == "boolean" ? $ : o ? !S(a).endOf("year").isBefore(o) : !1, U = typeof O == "boolean" ? O : d ? !S(a).startOf("year").isAfter(d) : !1;
  return /* @__PURE__ */ de(se, { "data-year-level": !0, size: F, ref: e, ...u, children: [
    /* @__PURE__ */ w(
      le,
      {
        label: typeof W == "function" ? W(a) : S(a).locale(n || G.locale).format(W),
        __preventFocus: i,
        __stopPropagation: B,
        nextIcon: r,
        previousIcon: m,
        nextLabel: _,
        previousLabel: b,
        onNext: y,
        onPrevious: M,
        onLevelClick: k,
        nextDisabled: L,
        previousDisabled: U,
        hasNextLevel: N,
        levelControlAriaLabel: C,
        withNext: A,
        withPrevious: x,
        ...h
      }
    ),
    /* @__PURE__ */ w(
      Se,
      {
        year: a,
        locale: n,
        minDate: d,
        maxDate: o,
        monthsListFormat: l,
        getMonthControlProps: c,
        __getControlRef: p,
        __onControlKeyDown: f,
        __onControlClick: g,
        __onControlMouseEnter: v,
        __preventFocus: i,
        __stopPropagation: B,
        withCellSpacing: D,
        ...h
      }
    )
  ] });
});
Ce.classes = { ...le.classes, ...Se.classes };
Ce.displayName = "@mantine/dates/YearLevel";
const ys = {
  monthLabelFormat: "MMMM YYYY"
}, Me = P((t, e) => {
  const s = q("MonthLevel", ys, t), {
    // Month settings
    month: a,
    locale: n,
    firstDayOfWeek: d,
    weekdayFormat: o,
    weekendDays: l,
    getDayProps: c,
    excludeDate: p,
    minDate: f,
    maxDate: g,
    renderDay: v,
    hideOutsideDates: D,
    hideWeekdays: i,
    getDayAriaLabel: r,
    __getDayRef: m,
    __onDayKeyDown: _,
    __onDayClick: b,
    __onDayMouseEnter: y,
    withCellSpacing: M,
    highlightToday: k,
    // CalendarHeader settings
    __preventFocus: $,
    __stopPropagation: O,
    nextIcon: N,
    previousIcon: C,
    nextLabel: A,
    previousLabel: x,
    onNext: W,
    onPrevious: H,
    onLevelClick: B,
    nextDisabled: F,
    previousDisabled: z,
    hasNextLevel: R,
    levelControlAriaLabel: T,
    withNext: u,
    withPrevious: G,
    // Other props
    monthLabelFormat: h,
    classNames: L,
    styles: U,
    unstyled: Z,
    __staticSelector: X,
    size: J,
    static: Q,
    ...V
  } = s, ne = ae(), E = {
    __staticSelector: X || "MonthLevel",
    classNames: L,
    styles: U,
    unstyled: Z,
    size: J
  }, ee = typeof F == "boolean" ? F : g ? !S(a).endOf("month").isBefore(g) : !1, Y = typeof z == "boolean" ? z : f ? !S(a).startOf("month").isAfter(f) : !1;
  return /* @__PURE__ */ de(se, { "data-month-level": !0, size: J, ref: e, ...V, children: [
    /* @__PURE__ */ w(
      le,
      {
        label: typeof h == "function" ? h(a) : S(a).locale(n || ne.locale).format(h),
        __preventFocus: $,
        __stopPropagation: O,
        nextIcon: N,
        previousIcon: C,
        nextLabel: A,
        previousLabel: x,
        onNext: W,
        onPrevious: H,
        onLevelClick: B,
        nextDisabled: ee,
        previousDisabled: Y,
        hasNextLevel: R,
        levelControlAriaLabel: T,
        withNext: u,
        withPrevious: G,
        ...E
      }
    ),
    /* @__PURE__ */ w(
      _e,
      {
        month: a,
        locale: n,
        firstDayOfWeek: d,
        weekdayFormat: o,
        weekendDays: l,
        getDayProps: c,
        excludeDate: p,
        minDate: f,
        maxDate: g,
        renderDay: v,
        hideOutsideDates: D,
        hideWeekdays: i,
        getDayAriaLabel: r,
        __getDayRef: m,
        __onDayKeyDown: _,
        __onDayClick: b,
        __onDayMouseEnter: y,
        __preventFocus: $,
        __stopPropagation: O,
        static: Q,
        withCellSpacing: M,
        highlightToday: k,
        ...E
      }
    )
  ] });
});
Me.classes = { ..._e.classes, ...le.classes };
Me.displayName = "@mantine/dates/MonthLevel";
var yt = { levelsGroup: "m_30b26e33" };
const ps = {}, ce = P((t, e) => {
  const s = q("LevelsGroup", ps, t), { classNames: a, className: n, style: d, styles: o, unstyled: l, vars: c, __staticSelector: p, ...f } = s, g = ie({
    name: p || "LevelsGroup",
    classes: yt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: o,
    unstyled: l,
    vars: c,
    rootSelector: "levelsGroup"
  });
  return /* @__PURE__ */ w(se, { ref: e, ...g("levelsGroup"), ...f });
});
ce.classes = yt;
ce.displayName = "@mantine/dates/LevelsGroup";
const Ds = {
  numberOfColumns: 1
}, ke = P((t, e) => {
  const s = q("DecadeLevelGroup", Ds, t), {
    // DecadeLevel settings
    decade: a,
    locale: n,
    minDate: d,
    maxDate: o,
    yearsListFormat: l,
    getYearControlProps: c,
    __onControlClick: p,
    __onControlMouseEnter: f,
    withCellSpacing: g,
    // CalendarHeader settings
    __preventFocus: v,
    nextIcon: D,
    previousIcon: i,
    nextLabel: r,
    previousLabel: m,
    onNext: _,
    onPrevious: b,
    nextDisabled: y,
    previousDisabled: M,
    // Other settings
    classNames: k,
    styles: $,
    unstyled: O,
    __staticSelector: N,
    __stopPropagation: C,
    numberOfColumns: A,
    levelControlAriaLabel: x,
    decadeLabelFormat: W,
    size: H,
    vars: B,
    ...F
  } = s, z = De([]), R = Array(A).fill(0).map((T, u) => {
    const G = S(a).add(u * 10, "years").toDate();
    return /* @__PURE__ */ w(
      we,
      {
        size: H,
        yearsListFormat: l,
        decade: G,
        withNext: u === A - 1,
        withPrevious: u === 0,
        decadeLabelFormat: W,
        __onControlClick: p,
        __onControlMouseEnter: f,
        __onControlKeyDown: (h, L) => Ve({
          levelIndex: u,
          rowIndex: L.rowIndex,
          cellIndex: L.cellIndex,
          event: h,
          controlsRef: z
        }),
        __getControlRef: (h, L, U) => {
          Array.isArray(z.current[u]) || (z.current[u] = []), Array.isArray(z.current[u][h]) || (z.current[u][h] = []), z.current[u][h][L] = U;
        },
        levelControlAriaLabel: typeof x == "function" ? x(G) : x,
        locale: n,
        minDate: d,
        maxDate: o,
        __preventFocus: v,
        __stopPropagation: C,
        nextIcon: D,
        previousIcon: i,
        nextLabel: r,
        previousLabel: m,
        onNext: _,
        onPrevious: b,
        nextDisabled: y,
        previousDisabled: M,
        getYearControlProps: c,
        __staticSelector: N || "DecadeLevelGroup",
        classNames: k,
        styles: $,
        unstyled: O,
        withCellSpacing: g
      },
      u
    );
  });
  return /* @__PURE__ */ w(
    ce,
    {
      classNames: k,
      styles: $,
      __staticSelector: N || "DecadeLevelGroup",
      ref: e,
      size: H,
      unstyled: O,
      ...F,
      children: R
    }
  );
});
ke.classes = { ...ce.classes, ...we.classes };
ke.displayName = "@mantine/dates/DecadeLevelGroup";
const gs = {
  numberOfColumns: 1
}, Oe = P((t, e) => {
  const s = q("YearLevelGroup", gs, t), {
    // YearLevel settings
    year: a,
    locale: n,
    minDate: d,
    maxDate: o,
    monthsListFormat: l,
    getMonthControlProps: c,
    __onControlClick: p,
    __onControlMouseEnter: f,
    withCellSpacing: g,
    // CalendarHeader settings
    __preventFocus: v,
    nextIcon: D,
    previousIcon: i,
    nextLabel: r,
    previousLabel: m,
    onNext: _,
    onPrevious: b,
    onLevelClick: y,
    nextDisabled: M,
    previousDisabled: k,
    hasNextLevel: $,
    // Other settings
    classNames: O,
    styles: N,
    unstyled: C,
    __staticSelector: A,
    __stopPropagation: x,
    numberOfColumns: W,
    levelControlAriaLabel: H,
    yearLabelFormat: B,
    size: F,
    vars: z,
    ...R
  } = s, T = De([]), u = Array(W).fill(0).map((G, h) => {
    const L = S(a).add(h, "years").toDate();
    return /* @__PURE__ */ w(
      Ce,
      {
        size: F,
        monthsListFormat: l,
        year: L,
        withNext: h === W - 1,
        withPrevious: h === 0,
        yearLabelFormat: B,
        __stopPropagation: x,
        __onControlClick: p,
        __onControlMouseEnter: f,
        __onControlKeyDown: (U, Z) => Ve({
          levelIndex: h,
          rowIndex: Z.rowIndex,
          cellIndex: Z.cellIndex,
          event: U,
          controlsRef: T
        }),
        __getControlRef: (U, Z, X) => {
          Array.isArray(T.current[h]) || (T.current[h] = []), Array.isArray(T.current[h][U]) || (T.current[h][U] = []), T.current[h][U][Z] = X;
        },
        levelControlAriaLabel: typeof H == "function" ? H(L) : H,
        locale: n,
        minDate: d,
        maxDate: o,
        __preventFocus: v,
        nextIcon: D,
        previousIcon: i,
        nextLabel: r,
        previousLabel: m,
        onNext: _,
        onPrevious: b,
        onLevelClick: y,
        nextDisabled: M,
        previousDisabled: k,
        hasNextLevel: $,
        getMonthControlProps: c,
        classNames: O,
        styles: N,
        unstyled: C,
        __staticSelector: A || "YearLevelGroup",
        withCellSpacing: g
      },
      h
    );
  });
  return /* @__PURE__ */ w(
    ce,
    {
      classNames: O,
      styles: N,
      __staticSelector: A || "YearLevelGroup",
      ref: e,
      size: F,
      unstyled: C,
      ...R,
      children: u
    }
  );
});
Oe.classes = { ...Ce.classes, ...ce.classes };
Oe.displayName = "@mantine/dates/YearLevelGroup";
const _s = {
  numberOfColumns: 1
}, Ne = P((t, e) => {
  const s = q("MonthLevelGroup", _s, t), {
    // Month settings
    month: a,
    locale: n,
    firstDayOfWeek: d,
    weekdayFormat: o,
    weekendDays: l,
    getDayProps: c,
    excludeDate: p,
    minDate: f,
    maxDate: g,
    renderDay: v,
    hideOutsideDates: D,
    hideWeekdays: i,
    getDayAriaLabel: r,
    __onDayClick: m,
    __onDayMouseEnter: _,
    withCellSpacing: b,
    highlightToday: y,
    // CalendarHeader settings
    __preventFocus: M,
    nextIcon: k,
    previousIcon: $,
    nextLabel: O,
    previousLabel: N,
    onNext: C,
    onPrevious: A,
    onLevelClick: x,
    nextDisabled: W,
    previousDisabled: H,
    hasNextLevel: B,
    // Other settings
    classNames: F,
    styles: z,
    unstyled: R,
    numberOfColumns: T,
    levelControlAriaLabel: u,
    monthLabelFormat: G,
    __staticSelector: h,
    __stopPropagation: L,
    size: U,
    static: Z,
    vars: X,
    ...J
  } = s, Q = De([]), V = Array(T).fill(0).map((ne, E) => {
    const ee = S(a).add(E, "months").toDate();
    return /* @__PURE__ */ w(
      Me,
      {
        month: ee,
        withNext: E === T - 1,
        withPrevious: E === 0,
        monthLabelFormat: G,
        __stopPropagation: L,
        __onDayClick: m,
        __onDayMouseEnter: _,
        __onDayKeyDown: (Y, te) => Ve({
          levelIndex: E,
          rowIndex: te.rowIndex,
          cellIndex: te.cellIndex,
          event: Y,
          controlsRef: Q
        }),
        __getDayRef: (Y, te, j) => {
          Array.isArray(Q.current[E]) || (Q.current[E] = []), Array.isArray(Q.current[E][Y]) || (Q.current[E][Y] = []), Q.current[E][Y][te] = j;
        },
        levelControlAriaLabel: typeof u == "function" ? u(ee) : u,
        locale: n,
        firstDayOfWeek: d,
        weekdayFormat: o,
        weekendDays: l,
        getDayProps: c,
        excludeDate: p,
        minDate: f,
        maxDate: g,
        renderDay: v,
        hideOutsideDates: D,
        hideWeekdays: i,
        getDayAriaLabel: r,
        __preventFocus: M,
        nextIcon: k,
        previousIcon: $,
        nextLabel: O,
        previousLabel: N,
        onNext: C,
        onPrevious: A,
        onLevelClick: x,
        nextDisabled: W,
        previousDisabled: H,
        hasNextLevel: B,
        classNames: F,
        styles: z,
        unstyled: R,
        __staticSelector: h || "MonthLevelGroup",
        size: U,
        static: Z,
        withCellSpacing: b,
        highlightToday: y
      },
      E
    );
  });
  return /* @__PURE__ */ w(
    ce,
    {
      classNames: F,
      styles: z,
      __staticSelector: h || "MonthLevelGroup",
      ref: e,
      size: U,
      ...J,
      children: V
    }
  );
});
Ne.classes = { ...ce.classes, ...Me.classes };
Ne.displayName = "@mantine/dates/MonthLevelGroup";
const Pe = (t) => t === "range" ? [null, null] : t === "multiple" ? [] : null;
function bs({
  type: t,
  value: e,
  defaultValue: s,
  onChange: a,
  applyTimezone: n = !0
}) {
  const d = De(t), o = ae(), [l, c, p] = qe({
    value: ye("add", e, o.getTimezone(), !n),
    defaultValue: ye("add", s, o.getTimezone(), !n),
    finalValue: Pe(t),
    onChange: (g) => {
      a == null || a(ye("remove", g, o.getTimezone(), !n));
    }
  });
  let f = l;
  if (d.current !== t) {
    if (d.current = t, e === void 0)
      f = s !== void 0 ? s : Pe(t), c(f);
    else if (process.env.NODE_ENV === "development")
      switch (t) {
        case "default":
          e !== null && typeof e != "string" && console.error(
            "[@mantine/dates/use-uncontrolled-dates] Value must be type of `null` or `string`"
          );
          break;
        case "multiple":
          e instanceof Array || console.error(
            "[@mantine/dates/use-uncontrolled-dates] Value must be type of `string[]`"
          );
          break;
        case "range":
          (!(e instanceof Array) || e.length !== 2) && console.error(
            "[@mantine/dates/use-uncontrolled-dates] Value must be type of `[string, string]`"
          );
          break;
      }
  }
  return [f, c, p];
}
function He(t, e) {
  return t ? t === "month" ? 0 : t === "year" ? 1 : 2 : e || 0;
}
function Ls(t) {
  return t === 0 ? "month" : t === 1 ? "year" : "decade";
}
function he(t, e, s) {
  return Ls(
    Tt(
      He(t, 0),
      He(e, 0),
      He(s, 2)
    )
  );
}
const Ss = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: !0,
  __updateDateOnMonthSelect: !0
}, pt = P((t, e) => {
  const s = q("Calendar", Ss, t), {
    vars: a,
    // CalendarLevel props
    maxLevel: n,
    minLevel: d,
    defaultLevel: o,
    level: l,
    onLevelChange: c,
    date: p,
    defaultDate: f,
    onDateChange: g,
    numberOfColumns: v,
    columnsToScroll: D,
    ariaLabels: i,
    onYearSelect: r,
    onMonthSelect: m,
    onYearMouseEnter: _,
    onMonthMouseEnter: b,
    __updateDateOnYearSelect: y,
    __updateDateOnMonthSelect: M,
    // MonthLevelGroup props
    firstDayOfWeek: k,
    weekdayFormat: $,
    weekendDays: O,
    getDayProps: N,
    excludeDate: C,
    renderDay: A,
    hideOutsideDates: x,
    hideWeekdays: W,
    getDayAriaLabel: H,
    monthLabelFormat: B,
    nextIcon: F,
    previousIcon: z,
    __onDayClick: R,
    __onDayMouseEnter: T,
    withCellSpacing: u,
    highlightToday: G,
    // YearLevelGroup props
    monthsListFormat: h,
    getMonthControlProps: L,
    yearLabelFormat: U,
    // DecadeLevelGroup props
    yearsListFormat: Z,
    getYearControlProps: X,
    decadeLabelFormat: J,
    // Other props
    classNames: Q,
    styles: V,
    unstyled: ne,
    minDate: E,
    maxDate: ee,
    locale: Y,
    __staticSelector: te,
    size: j,
    __preventFocus: I,
    __stopPropagation: $e,
    onNextDecade: xe,
    onPreviousDecade: Ae,
    onNextYear: Ye,
    onPreviousYear: Fe,
    onNextMonth: Te,
    onPreviousMonth: Re,
    static: Dt,
    __timezoneApplied: gt,
    ..._t
  } = s, { resolvedClassNames: bt, resolvedStyles: Lt } = Je({
    classNames: Q,
    styles: V,
    props: s
  }), [ze, pe] = qe({
    value: l ? he(l, d, n) : void 0,
    defaultValue: o ? he(o, d, n) : void 0,
    finalValue: he(void 0, d, n),
    onChange: c
  }), [St, re] = bs({
    type: "default",
    value: p,
    defaultValue: f,
    onChange: g,
    applyTimezone: !gt
  }), We = {
    __staticSelector: te || "Calendar",
    styles: Lt,
    classNames: bt,
    unstyled: ne,
    size: j
  }, wt = ae(), ue = D || v || 1, je = /* @__PURE__ */ new Date(), Ct = E && E > je ? E : je, oe = St || ye("add", Ct, wt.getTimezone()), Mt = () => {
    const K = S(oe).add(ue, "month").toDate();
    Te == null || Te(K), re(K);
  }, kt = () => {
    const K = S(oe).subtract(ue, "month").toDate();
    Re == null || Re(K), re(K);
  }, Ot = () => {
    const K = S(oe).add(ue, "year").toDate();
    Ye == null || Ye(K), re(K);
  }, Nt = () => {
    const K = S(oe).subtract(ue, "year").toDate();
    Fe == null || Fe(K), re(K);
  }, $t = () => {
    const K = S(oe).add(10 * ue, "year").toDate();
    xe == null || xe(K), re(K);
  }, xt = () => {
    const K = S(oe).subtract(10 * ue, "year").toDate();
    Ae == null || Ae(K), re(K);
  };
  return /* @__PURE__ */ de(se, { ref: e, size: j, "data-calendar": !0, ..._t, children: [
    ze === "month" && /* @__PURE__ */ w(
      Ne,
      {
        month: oe,
        minDate: E,
        maxDate: ee,
        firstDayOfWeek: k,
        weekdayFormat: $,
        weekendDays: O,
        getDayProps: N,
        excludeDate: C,
        renderDay: A,
        hideOutsideDates: x,
        hideWeekdays: W,
        getDayAriaLabel: H,
        onNext: Mt,
        onPrevious: kt,
        hasNextLevel: n !== "month",
        onLevelClick: () => pe("year"),
        numberOfColumns: v,
        locale: Y,
        levelControlAriaLabel: i == null ? void 0 : i.monthLevelControl,
        nextLabel: i == null ? void 0 : i.nextMonth,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousMonth,
        previousIcon: z,
        monthLabelFormat: B,
        __onDayClick: R,
        __onDayMouseEnter: T,
        __preventFocus: I,
        __stopPropagation: $e,
        static: Dt,
        withCellSpacing: u,
        highlightToday: G,
        ...We
      }
    ),
    ze === "year" && /* @__PURE__ */ w(
      Oe,
      {
        year: oe,
        numberOfColumns: v,
        minDate: E,
        maxDate: ee,
        monthsListFormat: h,
        getMonthControlProps: L,
        locale: Y,
        onNext: Ot,
        onPrevious: Nt,
        hasNextLevel: n !== "month" && n !== "year",
        onLevelClick: () => pe("decade"),
        levelControlAriaLabel: i == null ? void 0 : i.yearLevelControl,
        nextLabel: i == null ? void 0 : i.nextYear,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousYear,
        previousIcon: z,
        yearLabelFormat: U,
        __onControlMouseEnter: b,
        __onControlClick: (K, fe) => {
          M && re(fe), pe(he("month", d, n)), m == null || m(fe);
        },
        __preventFocus: I,
        __stopPropagation: $e,
        withCellSpacing: u,
        ...We
      }
    ),
    ze === "decade" && /* @__PURE__ */ w(
      ke,
      {
        decade: oe,
        minDate: E,
        maxDate: ee,
        yearsListFormat: Z,
        getYearControlProps: X,
        locale: Y,
        onNext: $t,
        onPrevious: xt,
        numberOfColumns: v,
        nextLabel: i == null ? void 0 : i.nextDecade,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousDecade,
        previousIcon: z,
        decadeLabelFormat: J,
        __onControlMouseEnter: _,
        __onControlClick: (K, fe) => {
          y && re(fe), pe(he("year", d, n)), r == null || r(fe);
        },
        __preventFocus: I,
        __stopPropagation: $e,
        withCellSpacing: u,
        ...We
      }
    )
  ] });
});
pt.classes = {
  ...ke.classes,
  ...Oe.classes,
  ...Ne.classes
};
pt.displayName = "@mantine/dates/Calendar";
function Ys(t) {
  const {
    maxLevel: e,
    minLevel: s,
    defaultLevel: a,
    level: n,
    onLevelChange: d,
    nextIcon: o,
    previousIcon: l,
    date: c,
    defaultDate: p,
    onDateChange: f,
    numberOfColumns: g,
    columnsToScroll: v,
    ariaLabels: D,
    onYearSelect: i,
    onMonthSelect: r,
    onYearMouseEnter: m,
    onMonthMouseEnter: _,
    onNextMonth: b,
    onPreviousMonth: y,
    onNextYear: M,
    onPreviousYear: k,
    onNextDecade: $,
    onPreviousDecade: O,
    withCellSpacing: N,
    highlightToday: C,
    __updateDateOnYearSelect: A,
    __updateDateOnMonthSelect: x,
    // MonthLevelGroup props
    firstDayOfWeek: W,
    weekdayFormat: H,
    weekendDays: B,
    getDayProps: F,
    excludeDate: z,
    renderDay: R,
    hideOutsideDates: T,
    hideWeekdays: u,
    getDayAriaLabel: G,
    monthLabelFormat: h,
    // YearLevelGroup props
    monthsListFormat: L,
    getMonthControlProps: U,
    yearLabelFormat: Z,
    // DecadeLevelGroup props
    yearsListFormat: X,
    getYearControlProps: J,
    decadeLabelFormat: Q,
    // External picker props
    allowSingleDateInRange: V,
    allowDeselect: ne,
    // Other props
    minDate: E,
    maxDate: ee,
    locale: Y,
    ...te
  } = t;
  return {
    calendarProps: {
      maxLevel: e,
      minLevel: s,
      defaultLevel: a,
      level: n,
      onLevelChange: d,
      nextIcon: o,
      previousIcon: l,
      date: c,
      defaultDate: p,
      onDateChange: f,
      numberOfColumns: g,
      columnsToScroll: v,
      ariaLabels: D,
      onYearSelect: i,
      onMonthSelect: r,
      onYearMouseEnter: m,
      onMonthMouseEnter: _,
      onNextMonth: b,
      onPreviousMonth: y,
      onNextYear: M,
      onPreviousYear: k,
      onNextDecade: $,
      onPreviousDecade: O,
      withCellSpacing: N,
      highlightToday: C,
      __updateDateOnYearSelect: A,
      __updateDateOnMonthSelect: x,
      // MonthLevelGroup props
      firstDayOfWeek: W,
      weekdayFormat: H,
      weekendDays: B,
      getDayProps: F,
      excludeDate: z,
      renderDay: R,
      hideOutsideDates: T,
      hideWeekdays: u,
      getDayAriaLabel: G,
      monthLabelFormat: h,
      // YearLevelGroup props
      monthsListFormat: L,
      getMonthControlProps: U,
      yearLabelFormat: Z,
      // DecadeLevelGroup props
      yearsListFormat: X,
      getYearControlProps: J,
      decadeLabelFormat: Q,
      // External picker props
      allowSingleDateInRange: V,
      allowDeselect: ne,
      // Other props
      minDate: E,
      maxDate: ee,
      locale: Y
    },
    others: te
  };
}
export {
  pt as C,
  Zt as H,
  bs as a,
  As as b,
  Ys as p,
  ye as s,
  ae as u
};
