import { jsx as p, jsxs as no } from "react/jsx-runtime";
import "react";
import { f as $, u as G, d as T, g as U, j as V, r as K, B as D, p as H, h as x, e as to } from "./factory.js";
import { g as N } from "./get-theme-color.js";
import { g as J, a as M } from "./get-auto-contrast-value.js";
import { I as co, b as lo } from "./InputsGroupFieldset.js";
import { u as uo } from "./DirectionProvider.js";
import { U as po } from "./UnstyledButton.js";
import { c as Q, I as X } from "./Input.js";
import { u as Y } from "./use-id.js";
import { u as mo } from "./use-uncontrolled.js";
const [fo, Z] = Q(), [vo, ho] = Q();
var oo = { card: "m_9dc8ae12" };
const yo = {
  withBorder: !0
}, Ro = U((o, { radius: a }) => ({
  card: {
    "--card-radius": V(a)
  }
})), j = $((o, a) => {
  const e = G("RadioCard", yo, o), {
    classNames: s,
    className: c,
    style: u,
    styles: n,
    unstyled: r,
    vars: m,
    checked: y,
    mod: I,
    withBorder: b,
    value: R,
    onClick: g,
    name: C,
    onKeyDown: v,
    ...z
  } = e, k = T({
    name: "RadioCard",
    classes: oo,
    props: e,
    className: c,
    style: u,
    classNames: s,
    styles: n,
    unstyled: r,
    vars: m,
    varsResolver: Ro,
    rootSelector: "card"
  }), { dir: h } = uo(), d = Z(), _ = typeof y == "boolean" ? y : (d == null ? void 0 : d.value) === R || !1, w = C || (d == null ? void 0 : d.name), A = (i) => {
    if (v == null || v(i), ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(i.nativeEvent.code)) {
      i.preventDefault();
      const l = Array.from(
        document.querySelectorAll(
          `[role="radio"][name="${w || "__mantine"}"]`
        )
      ), P = l.findIndex((B) => B === i.target), f = P + 1 >= l.length ? 0 : P + 1, t = P - 1 < 0 ? l.length - 1 : P - 1;
      i.nativeEvent.code === "ArrowDown" && (l[f].focus(), l[f].click()), i.nativeEvent.code === "ArrowUp" && (l[t].focus(), l[t].click()), i.nativeEvent.code === "ArrowLeft" && (l[h === "ltr" ? t : f].focus(), l[h === "ltr" ? t : f].click()), i.nativeEvent.code === "ArrowRight" && (l[h === "ltr" ? f : t].focus(), l[h === "ltr" ? f : t].click());
    }
  };
  return /* @__PURE__ */ p(vo, { value: { checked: _ }, children: /* @__PURE__ */ p(
    po,
    {
      ref: a,
      mod: [{ "with-border": b, checked: _ }, I],
      ...k("card"),
      ...z,
      role: "radio",
      "aria-checked": _,
      name: w,
      onClick: (i) => {
        g == null || g(i), d == null || d.onChange(R || "");
      },
      onKeyDown: A
    }
  ) });
});
j.displayName = "@mantine/core/RadioCard";
j.classes = oo;
const go = {}, L = $((o, a) => {
  const { value: e, defaultValue: s, onChange: c, size: u, wrapperProps: n, children: r, name: m, readOnly: y, ...I } = G("RadioGroup", go, o), b = Y(m), [R, g] = mo({
    value: e,
    defaultValue: s,
    finalValue: "",
    onChange: c
  });
  return /* @__PURE__ */ p(fo, { value: { value: R, onChange: (v) => !y && g(typeof v == "string" ? v : v.currentTarget.value), size: u, name: b }, children: /* @__PURE__ */ p(
    X.Wrapper,
    {
      size: u,
      ref: a,
      ...n,
      ...I,
      labelElement: "div",
      __staticSelector: "RadioGroup",
      children: /* @__PURE__ */ p(co, { role: "radiogroup", children: r })
    }
  ) });
});
L.classes = X.Wrapper.classes;
L.displayName = "@mantine/core/RadioGroup";
function eo({ size: o, style: a, ...e }) {
  return /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 5 5",
      style: { width: K(o), height: K(o), ...a },
      "aria-hidden": !0,
      ...e,
      children: /* @__PURE__ */ p("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "currentColor" })
    }
  );
}
var ro = { indicator: "m_717d7ff6", icon: "m_3e4da632", "indicator--outline": "m_2980836c" };
const Co = {
  icon: eo
}, _o = U(
  (o, { radius: a, color: e, size: s, iconColor: c, variant: u, autoContrast: n }) => {
    const r = H({ color: e || o.primaryColor, theme: o }), m = r.isThemeColor && r.shade === void 0 ? `var(--mantine-color-${r.color}-outline)` : r.color;
    return {
      indicator: {
        "--radio-size": x(s, "radio-size"),
        "--radio-radius": a === void 0 ? void 0 : V(a),
        "--radio-color": u === "outline" ? m : N(e, o),
        "--radio-icon-size": x(s, "radio-icon-size"),
        "--radio-icon-color": c ? N(c, o) : J(n, o) ? M({ color: e, theme: o, autoContrast: n }) : void 0
      }
    };
  }
), O = $((o, a) => {
  const e = G("RadioIndicator", Co, o), {
    classNames: s,
    className: c,
    style: u,
    styles: n,
    unstyled: r,
    vars: m,
    icon: y,
    radius: I,
    color: b,
    iconColor: R,
    autoContrast: g,
    checked: C,
    mod: v,
    variant: z,
    disabled: k,
    ...h
  } = e, d = y, _ = T({
    name: "RadioIndicator",
    classes: ro,
    props: e,
    className: c,
    style: u,
    classNames: s,
    styles: n,
    unstyled: r,
    vars: m,
    varsResolver: _o,
    rootSelector: "indicator"
  }), w = ho(), A = typeof C == "boolean" ? C : (w == null ? void 0 : w.checked) || !1;
  return /* @__PURE__ */ p(
    D,
    {
      ref: a,
      ..._("indicator", { variant: z }),
      variant: z,
      mod: [{ checked: A, disabled: k }, v],
      ...h,
      children: /* @__PURE__ */ p(d, { ..._("icon") })
    }
  );
});
O.displayName = "@mantine/core/RadioIndicator";
O.classes = ro;
var ao = { root: "m_f3f1af94", inner: "m_89c4f5e4", icon: "m_f3ed6b2b", radio: "m_8a3dbb89", "radio--outline": "m_1bfe9d39" };
const wo = {
  labelPosition: "right"
}, Io = U(
  (o, { size: a, radius: e, color: s, iconColor: c, variant: u, autoContrast: n }) => {
    const r = H({ color: s || o.primaryColor, theme: o }), m = r.isThemeColor && r.shade === void 0 ? `var(--mantine-color-${r.color}-outline)` : r.color;
    return {
      root: {
        "--radio-size": x(a, "radio-size"),
        "--radio-radius": e === void 0 ? void 0 : V(e),
        "--radio-color": u === "outline" ? m : N(s, o),
        "--radio-icon-color": c ? N(c, o) : J(n, o) ? M({ color: s, theme: o, autoContrast: n }) : void 0,
        "--radio-icon-size": x(a, "radio-icon-size")
      }
    };
  }
), S = $((o, a) => {
  const e = G("Radio", wo, o), {
    classNames: s,
    className: c,
    style: u,
    styles: n,
    unstyled: r,
    vars: m,
    id: y,
    size: I,
    label: b,
    labelPosition: R,
    description: g,
    error: C,
    radius: v,
    color: z,
    variant: k,
    disabled: h,
    wrapperProps: d,
    icon: _ = eo,
    rootRef: w,
    iconColor: A,
    onChange: i,
    mod: l,
    ...P
  } = e, f = T({
    name: "Radio",
    classes: ao,
    props: e,
    className: c,
    style: u,
    classNames: s,
    styles: n,
    unstyled: r,
    vars: m,
    varsResolver: Io
  }), t = Z(), B = (t == null ? void 0 : t.size) ?? I, so = e.size ? I : B, { styleProps: io, rest: E } = to(P), W = Y(y), q = t ? {
    checked: t.value === E.value,
    name: E.name ?? t.name,
    onChange: (F) => {
      t.onChange(F), i == null || i(F);
    }
  } : {};
  return /* @__PURE__ */ p(
    lo,
    {
      ...f("root"),
      __staticSelector: "Radio",
      __stylesApiProps: e,
      id: W,
      size: so,
      labelPosition: R,
      label: b,
      description: g,
      error: C,
      disabled: h,
      classNames: s,
      styles: n,
      unstyled: r,
      "data-checked": q.checked || void 0,
      variant: k,
      ref: w,
      mod: l,
      ...io,
      ...d,
      children: /* @__PURE__ */ no(D, { ...f("inner"), mod: { "label-position": R }, children: [
        /* @__PURE__ */ p(
          D,
          {
            ...f("radio", { focusable: !0, variant: k }),
            onChange: i,
            ...E,
            ...q,
            component: "input",
            mod: { error: !!C },
            ref: a,
            id: W,
            disabled: h,
            type: "radio"
          }
        ),
        /* @__PURE__ */ p(_, { ...f("icon"), "aria-hidden": !0 })
      ] })
    }
  );
});
S.classes = ao;
S.displayName = "@mantine/core/Radio";
S.Group = L;
S.Card = j;
S.Indicator = O;
export {
  S as R
};
