import { createContext as K, useContext as Q, useId as jt, forwardRef as L } from "react";
import { jsx as R, jsxs as zt, Fragment as It } from "react/jsx-runtime";
function W(t) {
  return Object.keys(t);
}
function _t(t) {
  return t.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
}
function j(t) {
  return t === "0rem" ? "0rem" : `calc(${t} * var(--mantine-scale))`;
}
function Lt(t, { shouldScale: r = !1 } = {}) {
  function e(n) {
    if (n === 0 || n === "0")
      return `0${t}`;
    if (typeof n == "number") {
      const i = `${n / 16}${t}`;
      return r ? j(i) : i;
    }
    if (typeof n == "string") {
      if (n === "" || n.startsWith("calc(") || n.startsWith("clamp(") || n.includes("rgba("))
        return n;
      if (n.includes(","))
        return n.split(",").map((s) => e(s)).join(",");
      if (n.includes(" "))
        return n.split(" ").map((s) => e(s)).join(" ");
      if (n.includes(t))
        return r ? j(n) : n;
      const i = n.replace("px", "");
      if (!Number.isNaN(Number(i))) {
        const s = `${Number(i) / 16}${t}`;
        return r ? j(s) : s;
      }
    }
    return n;
  }
  return e;
}
const g = Lt("rem", { shouldScale: !0 });
function F(t) {
  return Object.keys(t).reduce((r, e) => (t[e] !== void 0 && (r[e] = t[e]), r), {});
}
function Y(t) {
  return typeof t == "number" ? !0 : typeof t == "string" ? t.startsWith("calc(") || t.startsWith("var(") || t.includes(" ") && t.trim() !== "" ? !0 : /[0-9]/.test(t.trim().replace("-", "")[0]) : !1;
}
function M(t, r = "size", e = !0) {
  if (t !== void 0)
    return Y(t) ? e ? g(t) : t : `var(--${r}-${t})`;
}
function Or(t) {
  return M(t, "mantine-spacing");
}
function Vr(t) {
  return t === void 0 ? "var(--mantine-radius-default)" : M(t, "mantine-radius");
}
function Gr(t) {
  return M(t, "mantine-font-size");
}
function Xr(t) {
  if (t)
    return M(t, "mantine-shadow", !1);
}
function Dr(t) {
  return t;
}
function q(t) {
  var r, e, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (r = 0; r < i; r++) t[r] && (e = q(t[r])) && (n && (n += " "), n += e);
  } else for (e in t) t[e] && (n && (n += " "), n += e);
  return n;
}
function v() {
  for (var t, r, e = 0, n = "", i = arguments.length; e < i; e++) (t = arguments[e]) && (r = q(t)) && (n && (n += " "), n += r);
  return n;
}
const Pt = {};
function Bt(t) {
  const r = {};
  return t.forEach((e) => {
    Object.entries(e).forEach(([n, i]) => {
      r[n] ? r[n] = v(r[n], i) : r[n] = i;
    });
  }), r;
}
function O({ theme: t, classNames: r, props: e, stylesCtx: n }) {
  const s = (Array.isArray(r) ? r : [r]).map(
    (a) => typeof a == "function" ? a(t, e, n) : a || Pt
  );
  return Bt(s);
}
function P({ theme: t, styles: r, props: e, stylesCtx: n }) {
  return (Array.isArray(r) ? r : [r]).reduce((s, a) => typeof a == "function" ? { ...s, ...a(t, e, n) } : { ...s, ...a }, {});
}
const Ht = K(null);
function N() {
  const t = Q(Ht);
  if (!t)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return t;
}
function Wt() {
  return N().classNamesPrefix;
}
function Ft() {
  return N().getStyleNonce;
}
function Ot() {
  return N().withStaticClasses;
}
function Vt() {
  return N().headless;
}
function Gt() {
  var t;
  return (t = N().stylesTransform) == null ? void 0 : t.sx;
}
function Xt() {
  var t;
  return (t = N().stylesTransform) == null ? void 0 : t.styles;
}
function Dt(t) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(t);
}
function Kt(t) {
  let r = t.replace("#", "");
  if (r.length === 3) {
    const a = r.split("");
    r = [
      a[0],
      a[0],
      a[1],
      a[1],
      a[2],
      a[2]
    ].join("");
  }
  if (r.length === 8) {
    const a = parseInt(r.slice(6, 8), 16) / 255;
    return {
      r: parseInt(r.slice(0, 2), 16),
      g: parseInt(r.slice(2, 4), 16),
      b: parseInt(r.slice(4, 6), 16),
      a
    };
  }
  const e = parseInt(r, 16), n = e >> 16 & 255, i = e >> 8 & 255, s = e & 255;
  return {
    r: n,
    g: i,
    b: s,
    a: 1
  };
}
function Qt(t) {
  const [r, e, n, i] = t.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r, g: e, b: n, a: i || 1 };
}
function Yt(t) {
  const r = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, e = t.match(r);
  if (!e)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(e[1], 10), i = parseInt(e[2], 10) / 100, s = parseInt(e[3], 10) / 100, a = e[5] ? parseFloat(e[5]) : void 0, o = (1 - Math.abs(2 * s - 1)) * i, c = n / 60, f = o * (1 - Math.abs(c % 2 - 1)), p = s - o / 2;
  let u, y, l;
  return c >= 0 && c < 1 ? (u = o, y = f, l = 0) : c >= 1 && c < 2 ? (u = f, y = o, l = 0) : c >= 2 && c < 3 ? (u = 0, y = o, l = f) : c >= 3 && c < 4 ? (u = 0, y = f, l = o) : c >= 4 && c < 5 ? (u = f, y = 0, l = o) : (u = o, y = 0, l = f), {
    r: Math.round((u + p) * 255),
    g: Math.round((y + p) * 255),
    b: Math.round((l + p) * 255),
    a: a || 1
  };
}
function qt(t) {
  return Dt(t) ? Kt(t) : t.startsWith("rgb") ? Qt(t) : t.startsWith("hsl") ? Yt(t) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Ut(t, r) {
  return typeof t.primaryShade == "number" ? t.primaryShade : r === "dark" ? t.primaryShade.dark : t.primaryShade.light;
}
function z(t) {
  return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function Zt(t) {
  const r = t.match(/oklch\((.*?)%\s/);
  return r ? parseFloat(r[1]) : null;
}
function Jt(t) {
  if (t.startsWith("oklch("))
    return (Zt(t) || 0) / 100;
  const { r, g: e, b: n } = qt(t), i = r / 255, s = e / 255, a = n / 255, o = z(i), c = z(s), f = z(a);
  return 0.2126 * o + 0.7152 * c + 0.0722 * f;
}
function w(t, r = 0.179) {
  return t.startsWith("var(") ? !1 : Jt(t) > r;
}
function U({
  color: t,
  theme: r,
  colorScheme: e
}) {
  if (typeof t != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof t}`
    );
  if (t === "bright")
    return {
      color: t,
      value: e === "dark" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: w(
        e === "dark" ? r.white : r.black,
        r.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (t === "dimmed")
    return {
      color: t,
      value: e === "dark" ? r.colors.dark[2] : r.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: w(
        e === "dark" ? r.colors.dark[2] : r.colors.gray[6],
        r.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (t === "white" || t === "black")
    return {
      color: t,
      value: t === "white" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: w(
        t === "white" ? r.white : r.black,
        r.luminanceThreshold
      ),
      variable: `--mantine-color-${t}`
    };
  const [n, i] = t.split("."), s = i ? Number(i) : void 0, a = n in r.colors;
  if (a) {
    const o = s !== void 0 ? r.colors[n][s] : r.colors[n][Ut(r, e || "light")];
    return {
      color: n,
      value: o,
      shade: s,
      isThemeColor: a,
      isLight: w(o, r.luminanceThreshold),
      variable: i ? `--mantine-color-${n}-${s}` : `--mantine-color-${n}-filled`
    };
  }
  return {
    color: t,
    value: t,
    isThemeColor: a,
    isLight: w(t, r.luminanceThreshold),
    shade: s,
    variable: void 0
  };
}
const tr = K(null);
function E() {
  const t = Q(tr);
  if (!t)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return t;
}
const rr = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function nr({ theme: t, options: r, unstyled: e }) {
  return v(
    (r == null ? void 0 : r.focusable) && !e && (t.focusClassName || rr[t.focusRing]),
    (r == null ? void 0 : r.active) && !e && t.activeClassName
  );
}
function er({
  selector: t,
  stylesCtx: r,
  options: e,
  props: n,
  theme: i
}) {
  return O({
    theme: i,
    classNames: e == null ? void 0 : e.classNames,
    props: (e == null ? void 0 : e.props) || n,
    stylesCtx: r
  })[t];
}
function G({
  selector: t,
  stylesCtx: r,
  theme: e,
  classNames: n,
  props: i
}) {
  return O({ theme: e, classNames: n, props: i, stylesCtx: r })[t];
}
function ir({ rootSelector: t, selector: r, className: e }) {
  return t === r ? e : void 0;
}
function sr({ selector: t, classes: r, unstyled: e }) {
  return e ? void 0 : r[t];
}
function ar({
  themeName: t,
  classNamesPrefix: r,
  selector: e,
  withStaticClass: n
}) {
  return n === !1 ? [] : t.map((i) => `${r}-${i}-${e}`);
}
function or({
  themeName: t,
  theme: r,
  selector: e,
  props: n,
  stylesCtx: i
}) {
  return t.map(
    (s) => {
      var a, o;
      return (o = O({
        theme: r,
        classNames: (a = r.components[s]) == null ? void 0 : a.classNames,
        props: n,
        stylesCtx: i
      })) == null ? void 0 : o[e];
    }
  );
}
function cr({
  options: t,
  classes: r,
  selector: e,
  unstyled: n
}) {
  return t != null && t.variant && !n ? r[`${e}--${t.variant}`] : void 0;
}
function fr({
  theme: t,
  options: r,
  themeName: e,
  selector: n,
  classNamesPrefix: i,
  classNames: s,
  classes: a,
  unstyled: o,
  className: c,
  rootSelector: f,
  props: p,
  stylesCtx: u,
  withStaticClasses: y,
  headless: l,
  transformedStyles: h
}) {
  return v(
    nr({ theme: t, options: r, unstyled: o || l }),
    or({ theme: t, themeName: e, selector: n, props: p, stylesCtx: u }),
    cr({ options: r, classes: a, selector: n, unstyled: o }),
    G({ selector: n, stylesCtx: u, theme: t, classNames: s, props: p }),
    G({ selector: n, stylesCtx: u, theme: t, classNames: h, props: p }),
    er({ selector: n, stylesCtx: u, options: r, props: p, theme: t }),
    ir({ rootSelector: f, selector: n, className: c }),
    sr({ selector: n, classes: a, unstyled: o || l }),
    y && !l && ar({
      themeName: e,
      classNamesPrefix: i,
      selector: n,
      withStaticClass: r == null ? void 0 : r.withStaticClass
    }),
    r == null ? void 0 : r.className
  );
}
function ur({
  theme: t,
  themeName: r,
  props: e,
  stylesCtx: n,
  selector: i
}) {
  return r.map(
    (s) => {
      var a;
      return P({
        theme: t,
        styles: (a = t.components[s]) == null ? void 0 : a.styles,
        props: e,
        stylesCtx: n
      })[i];
    }
  ).reduce((s, a) => ({ ...s, ...a }), {});
}
function B({ style: t, theme: r }) {
  return Array.isArray(t) ? [...t].reduce(
    (e, n) => ({ ...e, ...B({ style: n, theme: r }) }),
    {}
  ) : typeof t == "function" ? t(r) : t ?? {};
}
function pr(t) {
  return t.reduce((r, e) => (e && Object.keys(e).forEach((n) => {
    r[n] = { ...r[n], ...F(e[n]) };
  }), r), {});
}
function yr({
  vars: t,
  varsResolver: r,
  theme: e,
  props: n,
  stylesCtx: i,
  selector: s,
  themeName: a,
  headless: o
}) {
  var c;
  return (c = pr([
    o ? {} : r == null ? void 0 : r(e, n, i),
    ...a.map((f) => {
      var p, u, y;
      return (y = (u = (p = e.components) == null ? void 0 : p[f]) == null ? void 0 : u.vars) == null ? void 0 : y.call(u, e, n, i);
    }),
    t == null ? void 0 : t(e, n, i)
  ])) == null ? void 0 : c[s];
}
function lr({
  theme: t,
  themeName: r,
  selector: e,
  options: n,
  props: i,
  stylesCtx: s,
  rootSelector: a,
  styles: o,
  style: c,
  vars: f,
  varsResolver: p,
  headless: u,
  withStylesTransform: y
}) {
  return {
    ...!y && ur({ theme: t, themeName: r, props: i, stylesCtx: s, selector: e }),
    ...!y && P({ theme: t, styles: o, props: i, stylesCtx: s })[e],
    ...!y && P({ theme: t, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || i, stylesCtx: s })[e],
    ...yr({ theme: t, props: i, stylesCtx: s, vars: f, varsResolver: p, selector: e, themeName: r, headless: u }),
    ...a === e ? B({ style: c, theme: t }) : null,
    ...B({ style: n == null ? void 0 : n.style, theme: t })
  };
}
function dr({ props: t, stylesCtx: r, themeName: e }) {
  var a;
  const n = E(), i = (a = Xt()) == null ? void 0 : a();
  return {
    getTransformedStyles: (o) => i ? [
      ...o.map(
        (f) => i(f, { props: t, theme: n, ctx: r })
      ),
      ...e.map(
        (f) => {
          var p;
          return i((p = n.components[f]) == null ? void 0 : p.styles, { props: t, theme: n, ctx: r });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!i
  };
}
function Kr({
  name: t,
  classes: r,
  props: e,
  stylesCtx: n,
  className: i,
  style: s,
  rootSelector: a = "root",
  unstyled: o,
  classNames: c,
  styles: f,
  vars: p,
  varsResolver: u
}) {
  const y = E(), l = Wt(), h = Ot(), b = Vt(), S = (Array.isArray(t) ? t : [t]).filter((d) => d), { withStylesTransform: x, getTransformedStyles: C } = dr({
    props: e,
    stylesCtx: n,
    themeName: S
  });
  return (d, m) => ({
    className: fr({
      theme: y,
      options: m,
      themeName: S,
      selector: d,
      classNamesPrefix: l,
      classNames: c,
      classes: r,
      unstyled: o,
      className: i,
      rootSelector: a,
      props: e,
      stylesCtx: n,
      withStaticClasses: h,
      headless: b,
      transformedStyles: C([m == null ? void 0 : m.styles, f])
    }),
    style: lr({
      theme: y,
      themeName: S,
      selector: d,
      options: m,
      props: e,
      stylesCtx: n,
      rootSelector: a,
      styles: f,
      style: s,
      vars: p,
      varsResolver: u,
      headless: b,
      withStylesTransform: x
    })
  });
}
function Qr(t, r, e) {
  var a;
  const n = E(), i = (a = n.components[t]) == null ? void 0 : a.defaultProps, s = typeof i == "function" ? i(n) : i;
  return { ...r, ...s, ...F(e) };
}
function I(t) {
  return W(t).reduce(
    (r, e) => t[e] !== void 0 ? `${r}${_t(e)}:${t[e]};` : r,
    ""
  ).trim();
}
function mr({ selector: t, styles: r, media: e, container: n }) {
  const i = r ? I(r) : "", s = Array.isArray(e) ? e.map((o) => `@media${o.query}{${t}{${I(o.styles)}}}`) : [], a = Array.isArray(n) ? n.map(
    (o) => `@container ${o.query}{${t}{${I(o.styles)}}}`
  ) : [];
  return `${i ? `${t}{${i}}` : ""}${s.join("")}${a.join("")}`.trim();
}
function gr(t) {
  const r = Ft();
  return /* @__PURE__ */ R(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: mr(t) }
    }
  );
}
function hr(t) {
  const {
    m: r,
    mx: e,
    my: n,
    mt: i,
    mb: s,
    ml: a,
    mr: o,
    me: c,
    ms: f,
    p,
    px: u,
    py: y,
    pt: l,
    pb: h,
    pl: b,
    pr: S,
    pe: x,
    ps: C,
    bd: d,
    bg: m,
    c: T,
    opacity: $,
    ff: A,
    fz: k,
    fw: rt,
    lts: nt,
    ta: et,
    lh: it,
    fs: st,
    tt: at,
    td: ot,
    w: ct,
    miw: ft,
    maw: ut,
    h: pt,
    mih: yt,
    mah: lt,
    bgsz: dt,
    bgp: mt,
    bgr: gt,
    bga: ht,
    pos: bt,
    top: St,
    left: $t,
    bottom: xt,
    right: Nt,
    inset: Ct,
    display: wt,
    flex: Tt,
    hiddenFrom: At,
    visibleFrom: kt,
    lightHidden: Rt,
    darkHidden: Mt,
    sx: vt,
    ...Et
  } = t;
  return { styleProps: F({
    m: r,
    mx: e,
    my: n,
    mt: i,
    mb: s,
    ml: a,
    mr: o,
    me: c,
    ms: f,
    p,
    px: u,
    py: y,
    pt: l,
    pb: h,
    pl: b,
    pr: S,
    pe: x,
    ps: C,
    bd: d,
    bg: m,
    c: T,
    opacity: $,
    ff: A,
    fz: k,
    fw: rt,
    lts: nt,
    ta: et,
    lh: it,
    fs: st,
    tt: at,
    td: ot,
    w: ct,
    miw: ft,
    maw: ut,
    h: pt,
    mih: yt,
    mah: lt,
    bgsz: dt,
    bgp: mt,
    bgr: gt,
    bga: ht,
    pos: bt,
    top: St,
    left: $t,
    bottom: xt,
    right: Nt,
    inset: Ct,
    display: wt,
    flex: Tt,
    hiddenFrom: At,
    visibleFrom: kt,
    lightHidden: Rt,
    darkHidden: Mt,
    sx: vt
  }), rest: Et };
}
const br = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function V(t, r) {
  const e = U({ color: t, theme: r });
  return e.color === "dimmed" ? "var(--mantine-color-dimmed)" : e.color === "bright" ? "var(--mantine-color-bright)" : e.variable ? `var(${e.variable})` : e.color;
}
function Sr(t, r) {
  const e = U({ color: t, theme: r });
  return e.isThemeColor && e.shade === void 0 ? `var(--mantine-color-${e.color}-text)` : V(t, r);
}
function $r(t, r) {
  if (typeof t == "number")
    return g(t);
  if (typeof t == "string") {
    const [e, n, ...i] = t.split(" ").filter((a) => a.trim() !== "");
    let s = `${g(e)}`;
    return n && (s += ` ${n}`), i.length > 0 && (s += ` ${V(i.join(" "), r)}`), s.trim();
  }
  return t;
}
const X = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function xr(t) {
  return typeof t == "string" && t in X ? X[t] : t;
}
const Nr = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Cr(t, r) {
  return typeof t == "string" && t in r.fontSizes ? `var(--mantine-font-size-${t})` : typeof t == "string" && Nr.includes(t) ? `var(--mantine-${t}-font-size)` : typeof t == "number" || typeof t == "string" ? g(t) : t;
}
function wr(t) {
  return t;
}
const Tr = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Ar(t, r) {
  return typeof t == "string" && t in r.lineHeights ? `var(--mantine-line-height-${t})` : typeof t == "string" && Tr.includes(t) ? `var(--mantine-${t}-line-height)` : t;
}
function kr(t) {
  return typeof t == "number" ? g(t) : t;
}
function Rr(t, r) {
  if (typeof t == "number")
    return g(t);
  if (typeof t == "string") {
    const e = t.replace("-", "");
    if (!(e in r.spacing))
      return g(t);
    const n = `--mantine-spacing-${e}`;
    return t.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return t;
}
const _ = {
  color: V,
  textColor: Sr,
  fontSize: Cr,
  spacing: Rr,
  identity: wr,
  size: kr,
  lineHeight: Ar,
  fontFamily: xr,
  border: $r
};
function D(t) {
  return t.replace("(min-width: ", "").replace("em)", "");
}
function Mr({
  media: t,
  ...r
}) {
  const n = Object.keys(t).sort((i, s) => Number(D(i)) - Number(D(s))).map((i) => ({ query: i, styles: t[i] }));
  return { ...r, media: n };
}
function vr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(t);
  return !(r.length === 1 && r[0] === "base");
}
function Er(t) {
  return typeof t == "object" && t !== null ? "base" in t ? t.base : void 0 : t;
}
function jr(t) {
  return typeof t == "object" && t !== null ? W(t).filter((r) => r !== "base") : [];
}
function zr(t, r) {
  return typeof t == "object" && t !== null && r in t ? t[r] : t;
}
function Ir({
  styleProps: t,
  data: r,
  theme: e
}) {
  return Mr(
    W(t).reduce(
      (n, i) => {
        if (i === "hiddenFrom" || i === "visibleFrom" || i === "sx")
          return n;
        const s = r[i], a = Array.isArray(s.property) ? s.property : [s.property], o = Er(t[i]);
        if (!vr(t[i]))
          return a.forEach((f) => {
            n.inlineStyles[f] = _[s.type](o, e);
          }), n;
        n.hasResponsiveStyles = !0;
        const c = jr(t[i]);
        return a.forEach((f) => {
          o && (n.styles[f] = _[s.type](o, e)), c.forEach((p) => {
            const u = `(min-width: ${e.breakpoints[p]})`;
            n.media[u] = {
              ...n.media[u],
              [f]: _[s.type](
                zr(t[i], p),
                e
              )
            };
          });
        }), n;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
function _r() {
  return `__m__-${jt().replace(/:/g, "")}`;
}
function Z(t) {
  return t.startsWith("data-") ? t : `data-${t}`;
}
function Lr(t) {
  return Object.keys(t).reduce((r, e) => {
    const n = t[e];
    return n === void 0 || n === "" || n === !1 || n === null || (r[Z(e)] = t[e]), r;
  }, {});
}
function J(t) {
  return t ? typeof t == "string" ? { [Z(t)]: !0 } : Array.isArray(t) ? [...t].reduce(
    (r, e) => ({ ...r, ...J(e) }),
    {}
  ) : Lr(t) : null;
}
function H(t, r) {
  return Array.isArray(t) ? [...t].reduce(
    (e, n) => ({ ...e, ...H(n, r) }),
    {}
  ) : typeof t == "function" ? t(r) : t ?? {};
}
function Pr({
  theme: t,
  style: r,
  vars: e,
  styleProps: n
}) {
  const i = H(r, t), s = H(e, t);
  return { ...i, ...s, ...n };
}
const tt = L(
  ({
    component: t,
    style: r,
    __vars: e,
    className: n,
    variant: i,
    mod: s,
    size: a,
    hiddenFrom: o,
    visibleFrom: c,
    lightHidden: f,
    darkHidden: p,
    renderRoot: u,
    __size: y,
    ...l
  }, h) => {
    var k;
    const b = E(), S = t || "div", { styleProps: x, rest: C } = hr(l), d = Gt(), m = (k = d == null ? void 0 : d()) == null ? void 0 : k(x.sx), T = _r(), $ = Ir({
      styleProps: x,
      theme: b,
      data: br
    }), A = {
      ref: h,
      style: Pr({
        theme: b,
        style: r,
        vars: e,
        styleProps: $.inlineStyles
      }),
      className: v(n, m, {
        [T]: $.hasResponsiveStyles,
        "mantine-light-hidden": f,
        "mantine-dark-hidden": p,
        [`mantine-hidden-from-${o}`]: o,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": i,
      "data-size": Y(a) ? void 0 : a || void 0,
      size: y,
      ...J(s),
      ...C
    };
    return /* @__PURE__ */ zt(It, { children: [
      $.hasResponsiveStyles && /* @__PURE__ */ R(
        gr,
        {
          selector: `.${T}`,
          styles: $.styles,
          media: $.media
        }
      ),
      typeof u == "function" ? u(A) : /* @__PURE__ */ R(S, { ...A })
    ] });
  }
);
tt.displayName = "@mantine/core/Box";
const Yr = tt;
function Br(t) {
  return t;
}
function qr(t) {
  const r = L(t);
  return r.extend = Br, r.withProps = (e) => {
    const n = L((i, s) => /* @__PURE__ */ R(r, { ...e, ...i, ref: s }));
    return n.extend = r.extend, n.displayName = `WithProps(${r.displayName})`, n;
  }, r;
}
export {
  Yr as B,
  P as a,
  Qr as b,
  g as c,
  Kr as d,
  hr as e,
  qr as f,
  Dr as g,
  M as h,
  Vr as i,
  Gr as j,
  Or as k,
  v as l,
  Br as m,
  Xr as n,
  U as p,
  O as r,
  qt as t,
  E as u
};
