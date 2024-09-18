import { jsx as C, jsxs as de } from "react/jsx-runtime";
import L from "dayjs";
import { createContext as xt, useContext as At, useCallback as me, useRef as De } from "react";
import { u as Je } from "./use-uncontrolled.js";
import { f as J, u as Q, d as re, g as _e, h as Ge, B as te, k as He, l as Yt } from "./factory.js";
import { U as ve } from "./UnstyledButton.js";
import { A as je } from "./AccordionChevron.js";
import { u as Qe } from "./use-resolved-styles-api.js";
import { c as Ft } from "./clamp.js";
function Tt({ direction: t, levelIndex: e, rowIndex: s, cellIndex: a, size: n }) {
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
function Xe({
  controlsRef: t,
  direction: e,
  levelIndex: s,
  rowIndex: a,
  cellIndex: n,
  size: d
}) {
  var c, p, f;
  const r = Tt({ direction: e, size: d, rowIndex: a, cellIndex: n, levelIndex: s });
  if (!r)
    return;
  const l = (f = (p = (c = t.current) == null ? void 0 : c[r.levelIndex]) == null ? void 0 : p[r.rowIndex]) == null ? void 0 : f[r.cellIndex];
  l && (l.disabled || l.getAttribute("data-hidden") || l.getAttribute("data-outside") ? Xe({
    controlsRef: t,
    direction: e,
    levelIndex: r.levelIndex,
    cellIndex: r.cellIndex,
    rowIndex: r.rowIndex,
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
function Rt(t) {
  var e;
  return (e = t.current) == null ? void 0 : e.map((s) => s.map((a) => a.length));
}
function Ue({
  controlsRef: t,
  levelIndex: e,
  rowIndex: s,
  cellIndex: a,
  event: n
}) {
  const d = zt(n.key);
  if (d) {
    n.preventDefault();
    const r = Rt(t);
    Xe({
      controlsRef: t,
      direction: d,
      levelIndex: e,
      rowIndex: s,
      cellIndex: a,
      size: r
    });
  }
}
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ie(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var et = { exports: {} };
(function(t, e) {
  (function(s, a) {
    t.exports = a();
  })(Pe, function() {
    var s = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, a = {};
    return function(n, d, r) {
      var l, c = function(v, D, i) {
        i === void 0 && (i = {});
        var o = new Date(v), m = function(g, b) {
          b === void 0 && (b = {});
          var y = b.timeZoneName || "short", k = g + "|" + y, M = a[k];
          return M || (M = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: g, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: y }), a[k] = M), M;
        }(D, i);
        return m.formatToParts(o);
      }, p = function(v, D) {
        for (var i = c(v, D), o = [], m = 0; m < i.length; m += 1) {
          var g = i[m], b = g.type, y = g.value, k = s[b];
          k >= 0 && (o[k] = parseInt(y, 10));
        }
        var M = o[3], $ = M === 24 ? 0 : M, N = o[0] + "-" + o[1] + "-" + o[2] + " " + $ + ":" + o[4] + ":" + o[5] + ":000", O = +v;
        return (r.utc(N).valueOf() - (O -= O % 1e3)) / 6e4;
      }, f = d.prototype;
      f.tz = function(v, D) {
        v === void 0 && (v = l);
        var i, o = this.utcOffset(), m = this.toDate(), g = m.toLocaleString("en-US", { timeZone: v }), b = Math.round((m - new Date(g)) / 1e3 / 60), y = 15 * -Math.round(m.getTimezoneOffset() / 15) - b;
        if (!Number(y)) i = this.utcOffset(0, D);
        else if (i = r(g, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(y, !0), D) {
          var k = i.utcOffset();
          i = i.add(o - k, "minute");
        }
        return i.$x.$timezone = v, i;
      }, f.offsetName = function(v) {
        var D = this.$x.$timezone || r.tz.guess(), i = c(this.valueOf(), D, { timeZoneName: v }).find(function(o) {
          return o.type.toLowerCase() === "timezonename";
        });
        return i && i.value;
      };
      var _ = f.startOf;
      f.startOf = function(v, D) {
        if (!this.$x || !this.$x.$timezone) return _.call(this, v, D);
        var i = r(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return _.call(i, v, D).tz(this.$x.$timezone, !0);
      }, r.tz = function(v, D, i) {
        var o = i && D, m = i || D || l, g = p(+r(), m);
        if (typeof v != "string") return r(v).tz(m);
        var b = function($, N, O) {
          var S = $ - 60 * N * 1e3, A = p(S, O);
          if (N === A) return [S, N];
          var x = p(S -= 60 * (A - N) * 1e3, O);
          return A === x ? [S, A] : [$ - 60 * Math.min(A, x) * 1e3, Math.max(A, x)];
        }(r.utc(v, o).valueOf(), g, m), y = b[0], k = b[1], M = r(y).utcOffset(k);
        return M.$x.$timezone = m, M;
      }, r.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, r.tz.setDefault = function(v) {
        l = v;
      };
    };
  });
})(et);
var Wt = et.exports;
const Et = /* @__PURE__ */ Ie(Wt);
var tt = { exports: {} };
(function(t, e) {
  (function(s, a) {
    t.exports = a();
  })(Pe, function() {
    var s = "minute", a = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
    return function(d, r, l) {
      var c = r.prototype;
      l.utc = function(o) {
        var m = { date: o, utc: !0, args: arguments };
        return new r(m);
      }, c.utc = function(o) {
        var m = l(this.toDate(), { locale: this.$L, utc: !0 });
        return o ? m.add(this.utcOffset(), s) : m;
      }, c.local = function() {
        return l(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var p = c.parse;
      c.parse = function(o) {
        o.utc && (this.$u = !0), this.$utils().u(o.$offset) || (this.$offset = o.$offset), p.call(this, o);
      };
      var f = c.init;
      c.init = function() {
        if (this.$u) {
          var o = this.$d;
          this.$y = o.getUTCFullYear(), this.$M = o.getUTCMonth(), this.$D = o.getUTCDate(), this.$W = o.getUTCDay(), this.$H = o.getUTCHours(), this.$m = o.getUTCMinutes(), this.$s = o.getUTCSeconds(), this.$ms = o.getUTCMilliseconds();
        } else f.call(this);
      };
      var _ = c.utcOffset;
      c.utcOffset = function(o, m) {
        var g = this.$utils().u;
        if (g(o)) return this.$u ? 0 : g(this.$offset) ? _.call(this) : this.$offset;
        if (typeof o == "string" && (o = function(M) {
          M === void 0 && (M = "");
          var $ = M.match(a);
          if (!$) return null;
          var N = ("" + $[0]).match(n) || ["-", 0, 0], O = N[0], S = 60 * +N[1] + +N[2];
          return S === 0 ? 0 : O === "+" ? S : -S;
        }(o), o === null)) return this;
        var b = Math.abs(o) <= 16 ? 60 * o : o, y = this;
        if (m) return y.$offset = b, y.$u = o === 0, y;
        if (o !== 0) {
          var k = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (y = this.local().add(b + k, s)).$offset = b, y.$x.$localOffset = k;
        } else y = this.utc();
        return y;
      };
      var v = c.format;
      c.format = function(o) {
        var m = o || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return v.call(this, m);
      }, c.valueOf = function() {
        var o = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * o;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var D = c.toDate;
      c.toDate = function(o) {
        return o === "s" && this.$offset ? l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : D.call(this);
      };
      var i = c.diff;
      c.diff = function(o, m, g) {
        if (o && this.$u === o.$u) return i.call(this, o, m, g);
        var b = this.local(), y = l(o).local();
        return i.call(b, y, m, g);
      };
    };
  });
})(tt);
var Gt = tt.exports;
const Ht = /* @__PURE__ */ Ie(Gt);
L.extend(Ht);
L.extend(Et);
function Ut(t, e) {
  return e ? L(t).tz(e).utcOffset() + t.getTimezoneOffset() : 0;
}
const Ze = (t, e, s) => {
  if (!t)
    return null;
  if (!e)
    return t;
  let a = Ut(t, e);
  return s === "remove" && (a *= -1), L(t).add(a, "minutes").toDate();
};
function ye(t, e, s, a) {
  return a || !e ? e : Array.isArray(e) ? e.map((n) => Ze(n, s, t)) : Ze(e, s, t);
}
const Vt = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "–",
  consistentWeeks: !1
}, Bt = xt(Vt);
function se() {
  const t = At(Bt), e = me((r) => r || t.locale, [t.locale]), s = me(
    (r) => r || t.timezone || void 0,
    [t.timezone]
  ), a = me(
    (r) => typeof r == "number" ? r : t.firstDayOfWeek,
    [t.firstDayOfWeek]
  ), n = me(
    (r) => Array.isArray(r) ? r : t.weekendDays,
    [t.weekendDays]
  ), d = me(
    (r) => typeof r == "string" ? r : t.labelSeparator,
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
var st = { day: "m_396ce5cb" };
const Kt = {}, jt = _e((t, { size: e }) => ({
  day: {
    "--day-size": Ge(e, "day-size")
  }
})), Ve = J((t, e) => {
  const s = Q("Day", Kt, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    date: p,
    disabled: f,
    __staticSelector: _,
    weekend: v,
    outside: D,
    selected: i,
    renderDay: o,
    inRange: m,
    firstInRange: g,
    lastInRange: b,
    hidden: y,
    static: k,
    highlightToday: M,
    ...$
  } = s, N = re({
    name: _ || "Day",
    classes: st,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    varsResolver: jt,
    rootSelector: "day"
  }), O = se();
  return /* @__PURE__ */ C(
    ve,
    {
      ...N("day", { style: y ? { display: "none" } : void 0 }),
      component: k ? "div" : "button",
      ref: e,
      disabled: f,
      "data-today": L(p).isSame(ye("add", /* @__PURE__ */ new Date(), O.getTimezone()), "day") || void 0,
      "data-hidden": y || void 0,
      "data-highlight-today": M || void 0,
      "data-disabled": f || void 0,
      "data-weekend": !f && !D && v || void 0,
      "data-outside": !f && D || void 0,
      "data-selected": !f && i || void 0,
      "data-in-range": m && !f || void 0,
      "data-first-in-range": g && !f || void 0,
      "data-last-in-range": b && !f || void 0,
      "data-static": k || void 0,
      unstyled: l,
      ...$,
      children: (o == null ? void 0 : o(p)) || p.getDate()
    }
  );
});
Ve.classes = st;
Ve.displayName = "@mantine/dates/Day";
function Zt({
  locale: t,
  format: e = "dd",
  firstDayOfWeek: s = 1
}) {
  const a = L().day(s), n = [];
  for (let d = 0; d < 7; d += 1)
    typeof e == "string" ? n.push(L(a).add(d, "days").locale(t).format(e)) : n.push(e(L(a).add(d, "days").toDate()));
  return n;
}
var at = { weekday: "m_18a3eca" };
const qt = {}, Jt = _e((t, { size: e }) => ({
  weekdaysRow: {
    "--wr-fz": He(e),
    "--wr-spacing": Yt(e)
  }
})), Be = J((t, e) => {
  const s = Q("WeekdaysRow", qt, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    locale: p,
    firstDayOfWeek: f,
    weekdayFormat: _,
    cellComponent: v = "th",
    __staticSelector: D,
    ...i
  } = s, o = re({
    name: D || "WeekdaysRow",
    classes: at,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    varsResolver: Jt,
    rootSelector: "weekdaysRow"
  }), m = se(), g = Zt({
    locale: m.getLocale(p),
    format: _,
    firstDayOfWeek: m.getFirstDayOfWeek(f)
  }).map((b, y) => /* @__PURE__ */ C(v, { ...o("weekday"), children: b }, y));
  return /* @__PURE__ */ C(te, { component: "tr", ref: e, ...o("weekdaysRow"), ...i, children: g });
});
Be.classes = at;
Be.displayName = "@mantine/dates/WeekdaysRow";
function Qt(t, e = 1) {
  const s = new Date(t), a = e === 0 ? 6 : e - 1;
  for (; s.getDay() !== a; )
    s.setDate(s.getDate() + 1);
  return s;
}
function Xt(t, e = 1) {
  const s = new Date(t);
  for (; s.getDay() !== e; )
    s.setDate(s.getDate() - 1);
  return s;
}
function Pt({
  month: t,
  firstDayOfWeek: e = 1,
  consistentWeeks: s
}) {
  const a = t.getMonth(), n = new Date(t.getFullYear(), a, 1), d = new Date(t.getFullYear(), t.getMonth() + 1, 0), r = Qt(d, e), l = Xt(n, e), c = [];
  for (; l <= r; ) {
    const p = [];
    for (let f = 0; f < 7; f += 1)
      p.push(new Date(l)), l.setDate(l.getDate() + 1);
    c.push(p);
  }
  if (s && c.length < 6) {
    const p = c[c.length - 1], f = p[p.length - 1], _ = new Date(f);
    for (_.setDate(_.getDate() + 1); c.length < 6; ) {
      const v = [];
      for (let D = 0; D < 7; D += 1)
        v.push(new Date(_)), _.setDate(_.getDate() + 1);
      c.push(v);
    }
  }
  return c;
}
function nt(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function ot(t, e) {
  return e instanceof Date ? L(t).isAfter(L(e).subtract(1, "day"), "day") : !0;
}
function rt(t, e) {
  return e instanceof Date ? L(t).isBefore(L(e).add(1, "day"), "day") : !0;
}
function It(t, e, s, a, n, d, r) {
  const l = t.flat().filter(
    (f) => {
      var _;
      return rt(f, s) && ot(f, e) && !(n != null && n(f)) && !((_ = a == null ? void 0 : a(f)) != null && _.disabled) && (!d || nt(f, r));
    }
  ), c = l.find((f) => {
    var _;
    return (_ = a == null ? void 0 : a(f)) == null ? void 0 : _.selected;
  });
  if (c)
    return c;
  const p = l.find((f) => L().isSame(f, "date"));
  return p || l[0];
}
var it = { month: "m_cc9820d3", monthCell: "m_8f457cd5" };
const es = {
  withCellSpacing: !0
}, ge = J((t, e) => {
  const s = Q("Month", es, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    __staticSelector: p,
    locale: f,
    firstDayOfWeek: _,
    weekdayFormat: v,
    month: D,
    weekendDays: i,
    getDayProps: o,
    excludeDate: m,
    minDate: g,
    maxDate: b,
    renderDay: y,
    hideOutsideDates: k,
    hideWeekdays: M,
    getDayAriaLabel: $,
    static: N,
    __getDayRef: O,
    __onDayKeyDown: S,
    __onDayClick: A,
    __onDayMouseEnter: x,
    __preventFocus: W,
    __stopPropagation: E,
    withCellSpacing: B,
    size: F,
    highlightToday: R,
    ...z
  } = s, T = re({
    name: p || "Month",
    classes: it,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    rootSelector: "month"
  }), u = se(), H = Pt({
    month: D,
    firstDayOfWeek: u.getFirstDayOfWeek(_),
    consistentWeeks: u.consistentWeeks
  }), h = It(
    H,
    g,
    b,
    o,
    m,
    k,
    D
  ), { resolvedClassNames: w, resolvedStyles: U } = Qe({
    classNames: a,
    styles: r,
    props: s
  }), Z = H.map((I, X) => {
    const P = I.map((V, ce) => {
      const G = !nt(V, D), ee = ($ == null ? void 0 : $(V)) || L(V).locale(f || u.locale).format("D MMMM YYYY"), Y = o == null ? void 0 : o(V), ne = L(V).isSame(h, "date");
      return /* @__PURE__ */ C(
        "td",
        {
          ...T("monthCell"),
          "data-with-spacing": B || void 0,
          children: /* @__PURE__ */ C(
            Ve,
            {
              __staticSelector: p || "Month",
              classNames: w,
              styles: U,
              unstyled: l,
              "data-mantine-stop-propagation": E || void 0,
              highlightToday: R,
              renderDay: y,
              date: V,
              size: F,
              weekend: u.getWeekendDays(i).includes(V.getDay()),
              outside: G,
              hidden: k ? G : !1,
              "aria-label": ee,
              static: N,
              disabled: (m == null ? void 0 : m(V)) || !rt(V, b) || !ot(V, g),
              ref: (j) => O == null ? void 0 : O(X, ce, j),
              ...Y,
              onKeyDown: (j) => {
                var q;
                (q = Y == null ? void 0 : Y.onKeyDown) == null || q.call(Y, j), S == null || S(j, { rowIndex: X, cellIndex: ce, date: V });
              },
              onMouseEnter: (j) => {
                var q;
                (q = Y == null ? void 0 : Y.onMouseEnter) == null || q.call(Y, j), x == null || x(j, V);
              },
              onClick: (j) => {
                var q;
                (q = Y == null ? void 0 : Y.onClick) == null || q.call(Y, j), A == null || A(j, V);
              },
              onMouseDown: (j) => {
                var q;
                (q = Y == null ? void 0 : Y.onMouseDown) == null || q.call(Y, j), W && j.preventDefault();
              },
              tabIndex: W || !ne ? -1 : 0
            }
          )
        },
        V.toString()
      );
    });
    return /* @__PURE__ */ C("tr", { ...T("monthRow"), children: P }, X);
  });
  return /* @__PURE__ */ de(te, { component: "table", ...T("month"), size: F, ref: e, ...z, children: [
    !M && /* @__PURE__ */ C("thead", { ...T("monthThead"), children: /* @__PURE__ */ C(
      Be,
      {
        __staticSelector: p || "Month",
        locale: f,
        firstDayOfWeek: _,
        weekdayFormat: v,
        size: F,
        classNames: w,
        styles: U,
        unstyled: l
      }
    ) }),
    /* @__PURE__ */ C("tbody", { ...T("monthTbody"), children: Z })
  ] });
});
ge.classes = it;
ge.displayName = "@mantine/dates/Month";
var lt = { pickerControl: "m_dc6a3c71" };
const ts = {}, ss = _e((t, { size: e }) => ({
  pickerControl: {
    "--dpc-fz": He(e),
    "--dpc-size": Ge(e, "dpc-size")
  }
})), be = J((t, e) => {
  const s = Q("PickerControl", ts, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    firstInRange: p,
    lastInRange: f,
    inRange: _,
    __staticSelector: v,
    selected: D,
    disabled: i,
    ...o
  } = s, m = re({
    name: v || "PickerControl",
    classes: lt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    varsResolver: ss,
    rootSelector: "pickerControl"
  });
  return /* @__PURE__ */ C(
    ve,
    {
      ...m("pickerControl"),
      ref: e,
      unstyled: l,
      "data-picker-control": !0,
      "data-selected": D && !i || void 0,
      "data-disabled": i || void 0,
      "data-in-range": _ && !i && !D || void 0,
      "data-first-in-range": p && !i || void 0,
      "data-last-in-range": f && !i || void 0,
      disabled: i,
      ...o
    }
  );
});
be.classes = lt;
be.displayName = "@mantine/dates/PickerControl";
function ct(t, e, s) {
  return !e && !s ? !1 : !!(e && L(t).isBefore(e, "year") || s && L(t).isAfter(s, "year"));
}
function as(t, e, s, a) {
  const n = t.flat().filter(
    (l) => {
      var c;
      return !ct(l, e, s) && !((c = a == null ? void 0 : a(l)) != null && c.disabled);
    }
  ), d = n.find((l) => {
    var c;
    return (c = a == null ? void 0 : a(l)) == null ? void 0 : c.selected;
  });
  if (d)
    return d;
  const r = n.find((l) => L().isSame(l, "year"));
  return r || n[0];
}
function ut(t) {
  const e = t.getFullYear(), s = e - e % 10;
  let a = 0;
  const n = [[], [], [], []];
  for (let d = 0; d < 4; d += 1) {
    const r = d === 3 ? 1 : 3;
    for (let l = 0; l < r; l += 1)
      n[d].push(new Date(s + a, 0)), a += 1;
  }
  return n;
}
var dt = { yearsList: "m_9206547b", yearsListCell: "m_c5a19c7d" };
const ns = {
  yearsListFormat: "YYYY",
  withCellSpacing: !0
}, Le = J((t, e) => {
  const s = Q("YearsList", ns, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    decade: p,
    yearsListFormat: f,
    locale: _,
    minDate: v,
    maxDate: D,
    getYearControlProps: i,
    __staticSelector: o,
    __getControlRef: m,
    __onControlKeyDown: g,
    __onControlClick: b,
    __onControlMouseEnter: y,
    __preventFocus: k,
    __stopPropagation: M,
    withCellSpacing: $,
    size: N,
    ...O
  } = s, S = re({
    name: o || "YearsList",
    classes: dt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    rootSelector: "yearsList"
  }), A = se(), x = ut(p), W = as(x, v, D, i), E = x.map((B, F) => {
    const R = B.map((z, T) => {
      const u = i == null ? void 0 : i(z), H = L(z).isSame(W, "year");
      return /* @__PURE__ */ C(
        "td",
        {
          ...S("yearsListCell"),
          "data-with-spacing": $ || void 0,
          children: /* @__PURE__ */ C(
            be,
            {
              ...S("yearsListControl"),
              size: N,
              unstyled: l,
              "data-mantine-stop-propagation": M || void 0,
              disabled: ct(z, v, D),
              ref: (h) => m == null ? void 0 : m(F, T, h),
              ...u,
              onKeyDown: (h) => {
                var w;
                (w = u == null ? void 0 : u.onKeyDown) == null || w.call(u, h), g == null || g(h, { rowIndex: F, cellIndex: T, date: z });
              },
              onClick: (h) => {
                var w;
                (w = u == null ? void 0 : u.onClick) == null || w.call(u, h), b == null || b(h, z);
              },
              onMouseEnter: (h) => {
                var w;
                (w = u == null ? void 0 : u.onMouseEnter) == null || w.call(u, h), y == null || y(h, z);
              },
              onMouseDown: (h) => {
                var w;
                (w = u == null ? void 0 : u.onMouseDown) == null || w.call(u, h), k && h.preventDefault();
              },
              tabIndex: k || !H ? -1 : 0,
              children: L(z).locale(A.getLocale(_)).format(f)
            }
          )
        },
        T
      );
    });
    return /* @__PURE__ */ C("tr", { ...S("yearsListRow"), children: R }, F);
  });
  return /* @__PURE__ */ C(te, { component: "table", ref: e, size: N, ...S("yearsList"), ...O, children: /* @__PURE__ */ C("tbody", { children: E }) });
});
Le.classes = dt;
Le.displayName = "@mantine/dates/YearsList";
function ft(t, e, s) {
  return !e && !s ? !1 : !!(e && L(t).isBefore(e, "month") || s && L(t).isAfter(s, "month"));
}
function os(t, e, s, a) {
  const n = t.flat().filter(
    (l) => {
      var c;
      return !ft(l, e, s) && !((c = a == null ? void 0 : a(l)) != null && c.disabled);
    }
  ), d = n.find((l) => {
    var c;
    return (c = a == null ? void 0 : a(l)) == null ? void 0 : c.selected;
  });
  if (d)
    return d;
  const r = n.find((l) => L().isSame(l, "month"));
  return r || n[0];
}
function rs(t) {
  const e = L(t).startOf("year").toDate(), s = [[], [], [], []];
  let a = 0;
  for (let n = 0; n < 4; n += 1)
    for (let d = 0; d < 3; d += 1)
      s[n].push(L(e).add(a, "months").toDate()), a += 1;
  return s;
}
var mt = { monthsList: "m_2a6c32d", monthsListCell: "m_fe27622f" };
const is = {
  monthsListFormat: "MMM",
  withCellSpacing: !0
}, we = J((t, e) => {
  const s = Q("MonthsList", is, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    __staticSelector: p,
    year: f,
    monthsListFormat: _,
    locale: v,
    minDate: D,
    maxDate: i,
    getMonthControlProps: o,
    __getControlRef: m,
    __onControlKeyDown: g,
    __onControlClick: b,
    __onControlMouseEnter: y,
    __preventFocus: k,
    __stopPropagation: M,
    withCellSpacing: $,
    size: N,
    ...O
  } = s, S = re({
    name: p || "MonthsList",
    classes: mt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    rootSelector: "monthsList"
  }), A = se(), x = rs(f), W = os(x, D, i, o), E = x.map((B, F) => {
    const R = B.map((z, T) => {
      const u = o == null ? void 0 : o(z), H = L(z).isSame(W, "month");
      return /* @__PURE__ */ C(
        "td",
        {
          ...S("monthsListCell"),
          "data-with-spacing": $ || void 0,
          children: /* @__PURE__ */ C(
            be,
            {
              ...S("monthsListControl"),
              size: N,
              unstyled: l,
              __staticSelector: p || "MonthsList",
              "data-mantine-stop-propagation": M || void 0,
              disabled: ft(z, D, i),
              ref: (h) => m == null ? void 0 : m(F, T, h),
              ...u,
              onKeyDown: (h) => {
                var w;
                (w = u == null ? void 0 : u.onKeyDown) == null || w.call(u, h), g == null || g(h, { rowIndex: F, cellIndex: T, date: z });
              },
              onClick: (h) => {
                var w;
                (w = u == null ? void 0 : u.onClick) == null || w.call(u, h), b == null || b(h, z);
              },
              onMouseEnter: (h) => {
                var w;
                (w = u == null ? void 0 : u.onMouseEnter) == null || w.call(u, h), y == null || y(h, z);
              },
              onMouseDown: (h) => {
                var w;
                (w = u == null ? void 0 : u.onMouseDown) == null || w.call(u, h), k && h.preventDefault();
              },
              tabIndex: k || !H ? -1 : 0,
              children: L(z).locale(A.getLocale(v)).format(_)
            }
          )
        },
        T
      );
    });
    return /* @__PURE__ */ C("tr", { ...S("monthsListRow"), children: R }, F);
  });
  return /* @__PURE__ */ C(te, { component: "table", ref: e, size: N, ...S("monthsList"), ...O, children: /* @__PURE__ */ C("tbody", { children: E }) });
});
we.classes = mt;
we.displayName = "@mantine/dates/MonthsList";
var ht = { calendarHeader: "m_730a79ed", calendarHeaderLevel: "m_f6645d97", calendarHeaderControl: "m_2351eeb0", calendarHeaderControlIcon: "m_367dc749" };
const ls = {
  nextDisabled: !1,
  previousDisabled: !1,
  hasNextLevel: !0,
  withNext: !0,
  withPrevious: !0
}, cs = _e((t, { size: e }) => ({
  calendarHeader: {
    "--dch-control-size": Ge(e, "dch-control-size"),
    "--dch-fz": He(e)
  }
})), ie = J((t, e) => {
  const s = Q("CalendarHeader", ls, t), {
    classNames: a,
    className: n,
    style: d,
    styles: r,
    unstyled: l,
    vars: c,
    nextIcon: p,
    previousIcon: f,
    nextLabel: _,
    previousLabel: v,
    onNext: D,
    onPrevious: i,
    onLevelClick: o,
    label: m,
    nextDisabled: g,
    previousDisabled: b,
    hasNextLevel: y,
    levelControlAriaLabel: k,
    withNext: M,
    withPrevious: $,
    __staticSelector: N,
    __preventFocus: O,
    __stopPropagation: S,
    ...A
  } = s, x = re({
    name: N || "CalendarHeader",
    classes: ht,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    varsResolver: cs,
    rootSelector: "calendarHeader"
  }), W = O ? (E) => E.preventDefault() : void 0;
  return /* @__PURE__ */ de(te, { ...x("calendarHeader"), ref: e, ...A, children: [
    $ && /* @__PURE__ */ C(
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
        tabIndex: O || b ? -1 : 0,
        "data-mantine-stop-propagation": S || void 0,
        children: f || /* @__PURE__ */ C(
          je,
          {
            ...x("calendarHeaderControlIcon"),
            "data-direction": "previous",
            size: "45%"
          }
        )
      }
    ),
    /* @__PURE__ */ C(
      ve,
      {
        component: y ? "button" : "div",
        ...x("calendarHeaderLevel"),
        onClick: y ? o : void 0,
        unstyled: l,
        onMouseDown: y ? W : void 0,
        disabled: !y,
        "data-static": !y || void 0,
        "aria-label": k,
        tabIndex: O || !y ? -1 : 0,
        "data-mantine-stop-propagation": S || void 0,
        children: m
      }
    ),
    M && /* @__PURE__ */ C(
      ve,
      {
        ...x("calendarHeaderControl"),
        "data-direction": "next",
        "aria-label": _,
        onClick: D,
        unstyled: l,
        onMouseDown: W,
        disabled: g,
        "data-disabled": g || void 0,
        tabIndex: O || g ? -1 : 0,
        "data-mantine-stop-propagation": S || void 0,
        children: p || /* @__PURE__ */ C(
          je,
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
ie.classes = ht;
ie.displayName = "@mantine/dates/CalendarHeader";
function us(t) {
  const e = ut(t);
  return [e[0][0], e[3][0]];
}
const ds = {
  decadeLabelFormat: "YYYY"
}, Se = J((t, e) => {
  const s = Q("DecadeLevel", ds, t), {
    // YearsList settings
    decade: a,
    locale: n,
    minDate: d,
    maxDate: r,
    yearsListFormat: l,
    getYearControlProps: c,
    __getControlRef: p,
    __onControlKeyDown: f,
    __onControlClick: _,
    __onControlMouseEnter: v,
    withCellSpacing: D,
    // CalendarHeader settings
    __preventFocus: i,
    nextIcon: o,
    previousIcon: m,
    nextLabel: g,
    previousLabel: b,
    onNext: y,
    onPrevious: k,
    nextDisabled: M,
    previousDisabled: $,
    levelControlAriaLabel: N,
    withNext: O,
    withPrevious: S,
    // Other props
    decadeLabelFormat: A,
    classNames: x,
    styles: W,
    unstyled: E,
    __staticSelector: B,
    __stopPropagation: F,
    size: R,
    ...z
  } = s, T = se(), [u, H] = us(a), h = {
    __staticSelector: B || "DecadeLevel",
    classNames: x,
    styles: W,
    unstyled: E,
    size: R
  }, w = typeof M == "boolean" ? M : r ? !L(H).endOf("year").isBefore(r) : !1, U = typeof $ == "boolean" ? $ : d ? !L(u).startOf("year").isAfter(d) : !1, Z = (I, X) => L(I).locale(n || T.locale).format(X);
  return /* @__PURE__ */ de(te, { "data-decade-level": !0, size: R, ref: e, ...z, children: [
    /* @__PURE__ */ C(
      ie,
      {
        label: typeof A == "function" ? A(u, H) : `${Z(u, A)} – ${Z(
          H,
          A
        )}`,
        __preventFocus: i,
        __stopPropagation: F,
        nextIcon: o,
        previousIcon: m,
        nextLabel: g,
        previousLabel: b,
        onNext: y,
        onPrevious: k,
        nextDisabled: w,
        previousDisabled: U,
        hasNextLevel: !1,
        levelControlAriaLabel: N,
        withNext: O,
        withPrevious: S,
        ...h
      }
    ),
    /* @__PURE__ */ C(
      Le,
      {
        decade: a,
        locale: n,
        minDate: d,
        maxDate: r,
        yearsListFormat: l,
        getYearControlProps: c,
        __getControlRef: p,
        __onControlKeyDown: f,
        __onControlClick: _,
        __onControlMouseEnter: v,
        __preventFocus: i,
        __stopPropagation: F,
        withCellSpacing: D,
        ...h
      }
    )
  ] });
});
Se.classes = { ...Le.classes, ...ie.classes };
Se.displayName = "@mantine/dates/DecadeLevel";
const fs = {
  yearLabelFormat: "YYYY"
}, Ce = J((t, e) => {
  const s = Q("YearLevel", fs, t), {
    // MonthsList settings
    year: a,
    locale: n,
    minDate: d,
    maxDate: r,
    monthsListFormat: l,
    getMonthControlProps: c,
    __getControlRef: p,
    __onControlKeyDown: f,
    __onControlClick: _,
    __onControlMouseEnter: v,
    withCellSpacing: D,
    // CalendarHeader settings
    __preventFocus: i,
    nextIcon: o,
    previousIcon: m,
    nextLabel: g,
    previousLabel: b,
    onNext: y,
    onPrevious: k,
    onLevelClick: M,
    nextDisabled: $,
    previousDisabled: N,
    hasNextLevel: O,
    levelControlAriaLabel: S,
    withNext: A,
    withPrevious: x,
    // Other props
    yearLabelFormat: W,
    __staticSelector: E,
    __stopPropagation: B,
    size: F,
    classNames: R,
    styles: z,
    unstyled: T,
    ...u
  } = s, H = se(), h = {
    __staticSelector: E || "YearLevel",
    classNames: R,
    styles: z,
    unstyled: T,
    size: F
  }, w = typeof $ == "boolean" ? $ : r ? !L(a).endOf("year").isBefore(r) : !1, U = typeof N == "boolean" ? N : d ? !L(a).startOf("year").isAfter(d) : !1;
  return /* @__PURE__ */ de(te, { "data-year-level": !0, size: F, ref: e, ...u, children: [
    /* @__PURE__ */ C(
      ie,
      {
        label: typeof W == "function" ? W(a) : L(a).locale(n || H.locale).format(W),
        __preventFocus: i,
        __stopPropagation: B,
        nextIcon: o,
        previousIcon: m,
        nextLabel: g,
        previousLabel: b,
        onNext: y,
        onPrevious: k,
        onLevelClick: M,
        nextDisabled: w,
        previousDisabled: U,
        hasNextLevel: O,
        levelControlAriaLabel: S,
        withNext: A,
        withPrevious: x,
        ...h
      }
    ),
    /* @__PURE__ */ C(
      we,
      {
        year: a,
        locale: n,
        minDate: d,
        maxDate: r,
        monthsListFormat: l,
        getMonthControlProps: c,
        __getControlRef: p,
        __onControlKeyDown: f,
        __onControlClick: _,
        __onControlMouseEnter: v,
        __preventFocus: i,
        __stopPropagation: B,
        withCellSpacing: D,
        ...h
      }
    )
  ] });
});
Ce.classes = { ...ie.classes, ...we.classes };
Ce.displayName = "@mantine/dates/YearLevel";
const ms = {
  monthLabelFormat: "MMMM YYYY"
}, ke = J((t, e) => {
  const s = Q("MonthLevel", ms, t), {
    // Month settings
    month: a,
    locale: n,
    firstDayOfWeek: d,
    weekdayFormat: r,
    weekendDays: l,
    getDayProps: c,
    excludeDate: p,
    minDate: f,
    maxDate: _,
    renderDay: v,
    hideOutsideDates: D,
    hideWeekdays: i,
    getDayAriaLabel: o,
    __getDayRef: m,
    __onDayKeyDown: g,
    __onDayClick: b,
    __onDayMouseEnter: y,
    withCellSpacing: k,
    highlightToday: M,
    // CalendarHeader settings
    __preventFocus: $,
    __stopPropagation: N,
    nextIcon: O,
    previousIcon: S,
    nextLabel: A,
    previousLabel: x,
    onNext: W,
    onPrevious: E,
    onLevelClick: B,
    nextDisabled: F,
    previousDisabled: R,
    hasNextLevel: z,
    levelControlAriaLabel: T,
    withNext: u,
    withPrevious: H,
    // Other props
    monthLabelFormat: h,
    classNames: w,
    styles: U,
    unstyled: Z,
    __staticSelector: I,
    size: X,
    static: P,
    ...V
  } = s, ce = se(), G = {
    __staticSelector: I || "MonthLevel",
    classNames: w,
    styles: U,
    unstyled: Z,
    size: X
  }, ee = typeof F == "boolean" ? F : _ ? !L(a).endOf("month").isBefore(_) : !1, Y = typeof R == "boolean" ? R : f ? !L(a).startOf("month").isAfter(f) : !1;
  return /* @__PURE__ */ de(te, { "data-month-level": !0, size: X, ref: e, ...V, children: [
    /* @__PURE__ */ C(
      ie,
      {
        label: typeof h == "function" ? h(a) : L(a).locale(n || ce.locale).format(h),
        __preventFocus: $,
        __stopPropagation: N,
        nextIcon: O,
        previousIcon: S,
        nextLabel: A,
        previousLabel: x,
        onNext: W,
        onPrevious: E,
        onLevelClick: B,
        nextDisabled: ee,
        previousDisabled: Y,
        hasNextLevel: z,
        levelControlAriaLabel: T,
        withNext: u,
        withPrevious: H,
        ...G
      }
    ),
    /* @__PURE__ */ C(
      ge,
      {
        month: a,
        locale: n,
        firstDayOfWeek: d,
        weekdayFormat: r,
        weekendDays: l,
        getDayProps: c,
        excludeDate: p,
        minDate: f,
        maxDate: _,
        renderDay: v,
        hideOutsideDates: D,
        hideWeekdays: i,
        getDayAriaLabel: o,
        __getDayRef: m,
        __onDayKeyDown: g,
        __onDayClick: b,
        __onDayMouseEnter: y,
        __preventFocus: $,
        __stopPropagation: N,
        static: P,
        withCellSpacing: k,
        highlightToday: M,
        ...G
      }
    )
  ] });
});
ke.classes = { ...ge.classes, ...ie.classes };
ke.displayName = "@mantine/dates/MonthLevel";
var vt = { levelsGroup: "m_30b26e33" };
const hs = {}, le = J((t, e) => {
  const s = Q("LevelsGroup", hs, t), { classNames: a, className: n, style: d, styles: r, unstyled: l, vars: c, __staticSelector: p, ...f } = s, _ = re({
    name: p || "LevelsGroup",
    classes: vt,
    props: s,
    className: n,
    style: d,
    classNames: a,
    styles: r,
    unstyled: l,
    vars: c,
    rootSelector: "levelsGroup"
  });
  return /* @__PURE__ */ C(te, { ref: e, ..._("levelsGroup"), ...f });
});
le.classes = vt;
le.displayName = "@mantine/dates/LevelsGroup";
const vs = {
  numberOfColumns: 1
}, Me = J((t, e) => {
  const s = Q("DecadeLevelGroup", vs, t), {
    // DecadeLevel settings
    decade: a,
    locale: n,
    minDate: d,
    maxDate: r,
    yearsListFormat: l,
    getYearControlProps: c,
    __onControlClick: p,
    __onControlMouseEnter: f,
    withCellSpacing: _,
    // CalendarHeader settings
    __preventFocus: v,
    nextIcon: D,
    previousIcon: i,
    nextLabel: o,
    previousLabel: m,
    onNext: g,
    onPrevious: b,
    nextDisabled: y,
    previousDisabled: k,
    // Other settings
    classNames: M,
    styles: $,
    unstyled: N,
    __staticSelector: O,
    __stopPropagation: S,
    numberOfColumns: A,
    levelControlAriaLabel: x,
    decadeLabelFormat: W,
    size: E,
    vars: B,
    ...F
  } = s, R = De([]), z = Array(A).fill(0).map((T, u) => {
    const H = L(a).add(u * 10, "years").toDate();
    return /* @__PURE__ */ C(
      Se,
      {
        size: E,
        yearsListFormat: l,
        decade: H,
        withNext: u === A - 1,
        withPrevious: u === 0,
        decadeLabelFormat: W,
        __onControlClick: p,
        __onControlMouseEnter: f,
        __onControlKeyDown: (h, w) => Ue({
          levelIndex: u,
          rowIndex: w.rowIndex,
          cellIndex: w.cellIndex,
          event: h,
          controlsRef: R
        }),
        __getControlRef: (h, w, U) => {
          Array.isArray(R.current[u]) || (R.current[u] = []), Array.isArray(R.current[u][h]) || (R.current[u][h] = []), R.current[u][h][w] = U;
        },
        levelControlAriaLabel: typeof x == "function" ? x(H) : x,
        locale: n,
        minDate: d,
        maxDate: r,
        __preventFocus: v,
        __stopPropagation: S,
        nextIcon: D,
        previousIcon: i,
        nextLabel: o,
        previousLabel: m,
        onNext: g,
        onPrevious: b,
        nextDisabled: y,
        previousDisabled: k,
        getYearControlProps: c,
        __staticSelector: O || "DecadeLevelGroup",
        classNames: M,
        styles: $,
        unstyled: N,
        withCellSpacing: _
      },
      u
    );
  });
  return /* @__PURE__ */ C(
    le,
    {
      classNames: M,
      styles: $,
      __staticSelector: O || "DecadeLevelGroup",
      ref: e,
      size: E,
      unstyled: N,
      ...F,
      children: z
    }
  );
});
Me.classes = { ...le.classes, ...Se.classes };
Me.displayName = "@mantine/dates/DecadeLevelGroup";
const ys = {
  numberOfColumns: 1
}, Ne = J((t, e) => {
  const s = Q("YearLevelGroup", ys, t), {
    // YearLevel settings
    year: a,
    locale: n,
    minDate: d,
    maxDate: r,
    monthsListFormat: l,
    getMonthControlProps: c,
    __onControlClick: p,
    __onControlMouseEnter: f,
    withCellSpacing: _,
    // CalendarHeader settings
    __preventFocus: v,
    nextIcon: D,
    previousIcon: i,
    nextLabel: o,
    previousLabel: m,
    onNext: g,
    onPrevious: b,
    onLevelClick: y,
    nextDisabled: k,
    previousDisabled: M,
    hasNextLevel: $,
    // Other settings
    classNames: N,
    styles: O,
    unstyled: S,
    __staticSelector: A,
    __stopPropagation: x,
    numberOfColumns: W,
    levelControlAriaLabel: E,
    yearLabelFormat: B,
    size: F,
    vars: R,
    ...z
  } = s, T = De([]), u = Array(W).fill(0).map((H, h) => {
    const w = L(a).add(h, "years").toDate();
    return /* @__PURE__ */ C(
      Ce,
      {
        size: F,
        monthsListFormat: l,
        year: w,
        withNext: h === W - 1,
        withPrevious: h === 0,
        yearLabelFormat: B,
        __stopPropagation: x,
        __onControlClick: p,
        __onControlMouseEnter: f,
        __onControlKeyDown: (U, Z) => Ue({
          levelIndex: h,
          rowIndex: Z.rowIndex,
          cellIndex: Z.cellIndex,
          event: U,
          controlsRef: T
        }),
        __getControlRef: (U, Z, I) => {
          Array.isArray(T.current[h]) || (T.current[h] = []), Array.isArray(T.current[h][U]) || (T.current[h][U] = []), T.current[h][U][Z] = I;
        },
        levelControlAriaLabel: typeof E == "function" ? E(w) : E,
        locale: n,
        minDate: d,
        maxDate: r,
        __preventFocus: v,
        nextIcon: D,
        previousIcon: i,
        nextLabel: o,
        previousLabel: m,
        onNext: g,
        onPrevious: b,
        onLevelClick: y,
        nextDisabled: k,
        previousDisabled: M,
        hasNextLevel: $,
        getMonthControlProps: c,
        classNames: N,
        styles: O,
        unstyled: S,
        __staticSelector: A || "YearLevelGroup",
        withCellSpacing: _
      },
      h
    );
  });
  return /* @__PURE__ */ C(
    le,
    {
      classNames: N,
      styles: O,
      __staticSelector: A || "YearLevelGroup",
      ref: e,
      size: F,
      unstyled: S,
      ...z,
      children: u
    }
  );
});
Ne.classes = { ...Ce.classes, ...le.classes };
Ne.displayName = "@mantine/dates/YearLevelGroup";
const ps = {
  numberOfColumns: 1
}, Oe = J((t, e) => {
  const s = Q("MonthLevelGroup", ps, t), {
    // Month settings
    month: a,
    locale: n,
    firstDayOfWeek: d,
    weekdayFormat: r,
    weekendDays: l,
    getDayProps: c,
    excludeDate: p,
    minDate: f,
    maxDate: _,
    renderDay: v,
    hideOutsideDates: D,
    hideWeekdays: i,
    getDayAriaLabel: o,
    __onDayClick: m,
    __onDayMouseEnter: g,
    withCellSpacing: b,
    highlightToday: y,
    // CalendarHeader settings
    __preventFocus: k,
    nextIcon: M,
    previousIcon: $,
    nextLabel: N,
    previousLabel: O,
    onNext: S,
    onPrevious: A,
    onLevelClick: x,
    nextDisabled: W,
    previousDisabled: E,
    hasNextLevel: B,
    // Other settings
    classNames: F,
    styles: R,
    unstyled: z,
    numberOfColumns: T,
    levelControlAriaLabel: u,
    monthLabelFormat: H,
    __staticSelector: h,
    __stopPropagation: w,
    size: U,
    static: Z,
    vars: I,
    ...X
  } = s, P = De([]), V = Array(T).fill(0).map((ce, G) => {
    const ee = L(a).add(G, "months").toDate();
    return /* @__PURE__ */ C(
      ke,
      {
        month: ee,
        withNext: G === T - 1,
        withPrevious: G === 0,
        monthLabelFormat: H,
        __stopPropagation: w,
        __onDayClick: m,
        __onDayMouseEnter: g,
        __onDayKeyDown: (Y, ne) => Ue({
          levelIndex: G,
          rowIndex: ne.rowIndex,
          cellIndex: ne.cellIndex,
          event: Y,
          controlsRef: P
        }),
        __getDayRef: (Y, ne, j) => {
          Array.isArray(P.current[G]) || (P.current[G] = []), Array.isArray(P.current[G][Y]) || (P.current[G][Y] = []), P.current[G][Y][ne] = j;
        },
        levelControlAriaLabel: typeof u == "function" ? u(ee) : u,
        locale: n,
        firstDayOfWeek: d,
        weekdayFormat: r,
        weekendDays: l,
        getDayProps: c,
        excludeDate: p,
        minDate: f,
        maxDate: _,
        renderDay: v,
        hideOutsideDates: D,
        hideWeekdays: i,
        getDayAriaLabel: o,
        __preventFocus: k,
        nextIcon: M,
        previousIcon: $,
        nextLabel: N,
        previousLabel: O,
        onNext: S,
        onPrevious: A,
        onLevelClick: x,
        nextDisabled: W,
        previousDisabled: E,
        hasNextLevel: B,
        classNames: F,
        styles: R,
        unstyled: z,
        __staticSelector: h || "MonthLevelGroup",
        size: U,
        static: Z,
        withCellSpacing: b,
        highlightToday: y
      },
      G
    );
  });
  return /* @__PURE__ */ C(
    le,
    {
      classNames: F,
      styles: R,
      __staticSelector: h || "MonthLevelGroup",
      ref: e,
      size: U,
      ...X,
      children: V
    }
  );
});
Oe.classes = { ...le.classes, ...ke.classes };
Oe.displayName = "@mantine/dates/MonthLevelGroup";
const qe = (t) => t === "range" ? [null, null] : t === "multiple" ? [] : null;
function Ds({
  type: t,
  value: e,
  defaultValue: s,
  onChange: a,
  applyTimezone: n = !0
}) {
  const d = De(t), r = se(), [l, c, p] = Je({
    value: ye("add", e, r.getTimezone(), !n),
    defaultValue: ye("add", s, r.getTimezone(), !n),
    finalValue: qe(t),
    onChange: (_) => {
      a == null || a(ye("remove", _, r.getTimezone(), !n));
    }
  });
  let f = l;
  if (d.current !== t) {
    if (d.current = t, e === void 0)
      f = s !== void 0 ? s : qe(t), c(f);
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
function Ee(t, e) {
  return t ? t === "month" ? 0 : t === "year" ? 1 : 2 : e || 0;
}
function _s(t) {
  return t === 0 ? "month" : t === 1 ? "year" : "decade";
}
function he(t, e, s) {
  return _s(
    Ft(
      Ee(t, 0),
      Ee(e, 0),
      Ee(s, 2)
    )
  );
}
const gs = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: !0,
  __updateDateOnMonthSelect: !0
}, yt = J((t, e) => {
  const s = Q("Calendar", gs, t), {
    vars: a,
    // CalendarLevel props
    maxLevel: n,
    minLevel: d,
    defaultLevel: r,
    level: l,
    onLevelChange: c,
    date: p,
    defaultDate: f,
    onDateChange: _,
    numberOfColumns: v,
    columnsToScroll: D,
    ariaLabels: i,
    onYearSelect: o,
    onMonthSelect: m,
    onYearMouseEnter: g,
    onMonthMouseEnter: b,
    __updateDateOnYearSelect: y,
    __updateDateOnMonthSelect: k,
    // MonthLevelGroup props
    firstDayOfWeek: M,
    weekdayFormat: $,
    weekendDays: N,
    getDayProps: O,
    excludeDate: S,
    renderDay: A,
    hideOutsideDates: x,
    hideWeekdays: W,
    getDayAriaLabel: E,
    monthLabelFormat: B,
    nextIcon: F,
    previousIcon: R,
    __onDayClick: z,
    __onDayMouseEnter: T,
    withCellSpacing: u,
    highlightToday: H,
    // YearLevelGroup props
    monthsListFormat: h,
    getMonthControlProps: w,
    yearLabelFormat: U,
    // DecadeLevelGroup props
    yearsListFormat: Z,
    getYearControlProps: I,
    decadeLabelFormat: X,
    // Other props
    classNames: P,
    styles: V,
    unstyled: ce,
    minDate: G,
    maxDate: ee,
    locale: Y,
    __staticSelector: ne,
    size: j,
    __preventFocus: q,
    __stopPropagation: $e,
    onNextDecade: xe,
    onPreviousDecade: Ae,
    onNextYear: Ye,
    onPreviousYear: Fe,
    onNextMonth: Te,
    onPreviousMonth: ze,
    static: pt,
    __timezoneApplied: Dt,
    ..._t
  } = s, { resolvedClassNames: gt, resolvedStyles: bt } = Qe({
    classNames: P,
    styles: V,
    props: s
  }), [Re, pe] = Je({
    value: l ? he(l, d, n) : void 0,
    defaultValue: r ? he(r, d, n) : void 0,
    finalValue: he(void 0, d, n),
    onChange: c
  }), [Lt, oe] = Ds({
    type: "default",
    value: p,
    defaultValue: f,
    onChange: _,
    applyTimezone: !Dt
  }), We = {
    __staticSelector: ne || "Calendar",
    styles: bt,
    classNames: gt,
    unstyled: ce,
    size: j
  }, wt = se(), ue = D || v || 1, Ke = /* @__PURE__ */ new Date(), St = G && G > Ke ? G : Ke, ae = Lt || ye("add", St, wt.getTimezone()), Ct = () => {
    const K = L(ae).add(ue, "month").toDate();
    Te == null || Te(K), oe(K);
  }, kt = () => {
    const K = L(ae).subtract(ue, "month").toDate();
    ze == null || ze(K), oe(K);
  }, Mt = () => {
    const K = L(ae).add(ue, "year").toDate();
    Ye == null || Ye(K), oe(K);
  }, Nt = () => {
    const K = L(ae).subtract(ue, "year").toDate();
    Fe == null || Fe(K), oe(K);
  }, Ot = () => {
    const K = L(ae).add(10 * ue, "year").toDate();
    xe == null || xe(K), oe(K);
  }, $t = () => {
    const K = L(ae).subtract(10 * ue, "year").toDate();
    Ae == null || Ae(K), oe(K);
  };
  return /* @__PURE__ */ de(te, { ref: e, size: j, "data-calendar": !0, ..._t, children: [
    Re === "month" && /* @__PURE__ */ C(
      Oe,
      {
        month: ae,
        minDate: G,
        maxDate: ee,
        firstDayOfWeek: M,
        weekdayFormat: $,
        weekendDays: N,
        getDayProps: O,
        excludeDate: S,
        renderDay: A,
        hideOutsideDates: x,
        hideWeekdays: W,
        getDayAriaLabel: E,
        onNext: Ct,
        onPrevious: kt,
        hasNextLevel: n !== "month",
        onLevelClick: () => pe("year"),
        numberOfColumns: v,
        locale: Y,
        levelControlAriaLabel: i == null ? void 0 : i.monthLevelControl,
        nextLabel: i == null ? void 0 : i.nextMonth,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousMonth,
        previousIcon: R,
        monthLabelFormat: B,
        __onDayClick: z,
        __onDayMouseEnter: T,
        __preventFocus: q,
        __stopPropagation: $e,
        static: pt,
        withCellSpacing: u,
        highlightToday: H,
        ...We
      }
    ),
    Re === "year" && /* @__PURE__ */ C(
      Ne,
      {
        year: ae,
        numberOfColumns: v,
        minDate: G,
        maxDate: ee,
        monthsListFormat: h,
        getMonthControlProps: w,
        locale: Y,
        onNext: Mt,
        onPrevious: Nt,
        hasNextLevel: n !== "month" && n !== "year",
        onLevelClick: () => pe("decade"),
        levelControlAriaLabel: i == null ? void 0 : i.yearLevelControl,
        nextLabel: i == null ? void 0 : i.nextYear,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousYear,
        previousIcon: R,
        yearLabelFormat: U,
        __onControlMouseEnter: b,
        __onControlClick: (K, fe) => {
          k && oe(fe), pe(he("month", d, n)), m == null || m(fe);
        },
        __preventFocus: q,
        __stopPropagation: $e,
        withCellSpacing: u,
        ...We
      }
    ),
    Re === "decade" && /* @__PURE__ */ C(
      Me,
      {
        decade: ae,
        minDate: G,
        maxDate: ee,
        yearsListFormat: Z,
        getYearControlProps: I,
        locale: Y,
        onNext: Ot,
        onPrevious: $t,
        numberOfColumns: v,
        nextLabel: i == null ? void 0 : i.nextDecade,
        nextIcon: F,
        previousLabel: i == null ? void 0 : i.previousDecade,
        previousIcon: R,
        decadeLabelFormat: X,
        __onControlMouseEnter: g,
        __onControlClick: (K, fe) => {
          y && oe(fe), pe(he("year", d, n)), o == null || o(fe);
        },
        __preventFocus: q,
        __stopPropagation: $e,
        withCellSpacing: u,
        ...We
      }
    )
  ] });
});
yt.classes = {
  ...Me.classes,
  ...Ne.classes,
  ...Oe.classes
};
yt.displayName = "@mantine/dates/Calendar";
export {
  yt as C,
  Ds as a,
  ye as s,
  se as u
};
