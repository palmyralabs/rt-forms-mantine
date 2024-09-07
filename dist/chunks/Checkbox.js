import { jsx as u, jsxs as to } from "react/jsx-runtime";
import { createContext as ao, useContext as no } from "react";
import { f as G, b as $, d as w, g as B, i as T, B as V, p as q, h as D, e as lo } from "./factory.js";
import { g as S } from "./get-theme-color.js";
import { g as H, a as J } from "./get-auto-contrast-value.js";
import { I as io, a as uo, b as po } from "./InputsGroupFieldset.js";
import { U as ho } from "./UnstyledButton.js";
import { c as mo, I as K } from "./Input.js";
import { u as Co } from "./use-uncontrolled.js";
import { C as L } from "./CheckIcon.js";
import { u as bo } from "./use-id.js";
const M = ao(null), ko = M.Provider, Q = () => no(M), [xo, vo] = mo();
var X = { card: "m_26775b0a" };
const fo = {
  withBorder: !0
}, yo = B((o, { radius: r }) => ({
  card: {
    "--card-radius": T(r)
  }
})), U = G((o, r) => {
  const e = $("CheckboxCard", fo, o), {
    classNames: a,
    className: t,
    style: n,
    styles: c,
    unstyled: s,
    vars: i,
    checked: b,
    mod: l,
    withBorder: k,
    value: x,
    onClick: p,
    ...m
  } = e, h = w({
    name: "CheckboxCard",
    classes: X,
    props: e,
    className: t,
    style: n,
    classNames: a,
    styles: c,
    unstyled: s,
    vars: i,
    varsResolver: yo,
    rootSelector: "card"
  }), d = Q(), C = typeof b == "boolean" ? b : (d == null ? void 0 : d.value.includes(x || "")) || !1;
  return /* @__PURE__ */ u(xo, { value: { checked: C }, children: /* @__PURE__ */ u(
    ho,
    {
      ref: r,
      mod: [{ "with-border": k, checked: C }, l],
      ...h("card"),
      ...m,
      role: "checkbox",
      "aria-checked": C,
      onClick: (v) => {
        p == null || p(v), d == null || d.onChange(x || "");
      }
    }
  ) });
});
U.displayName = "@mantine/core/CheckboxCard";
U.classes = X;
const go = {}, j = G((o, r) => {
  const { value: e, defaultValue: a, onChange: t, size: n, wrapperProps: c, children: s, readOnly: i, ...b } = $("CheckboxGroup", go, o), [l, k] = Co({
    value: e,
    defaultValue: a,
    finalValue: [],
    onChange: t
  });
  return /* @__PURE__ */ u(ko, { value: { value: l, onChange: (p) => {
    const m = typeof p == "string" ? p : p.currentTarget.value;
    !i && k(
      l.includes(m) ? l.filter((h) => h !== m) : [...l, m]
    );
  }, size: n }, children: /* @__PURE__ */ u(
    K.Wrapper,
    {
      size: n,
      ref: r,
      ...c,
      ...b,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ u(io, { role: "group", children: s })
    }
  ) });
});
j.classes = K.Wrapper.classes;
j.displayName = "@mantine/core/CheckboxGroup";
var Y = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const _o = {
  icon: L
}, Io = B(
  (o, { radius: r, color: e, size: a, iconColor: t, variant: n, autoContrast: c }) => {
    const s = q({ color: e || o.primaryColor, theme: o }), i = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
    return {
      indicator: {
        "--checkbox-size": D(a, "checkbox-size"),
        "--checkbox-radius": r === void 0 ? void 0 : T(r),
        "--checkbox-color": n === "outline" ? i : S(e, o),
        "--checkbox-icon-color": t ? S(t, o) : H(c, o) ? J({ color: e, theme: o, autoContrast: c }) : void 0
      }
    };
  }
), A = G((o, r) => {
  const e = $("CheckboxIndicator", _o, o), {
    classNames: a,
    className: t,
    style: n,
    styles: c,
    unstyled: s,
    vars: i,
    icon: b,
    indeterminate: l,
    radius: k,
    color: x,
    iconColor: p,
    autoContrast: m,
    checked: h,
    mod: d,
    variant: C,
    disabled: v,
    ...I
  } = e, P = b, y = w({
    name: "CheckboxIndicator",
    classes: Y,
    props: e,
    className: t,
    style: n,
    classNames: a,
    styles: c,
    unstyled: s,
    vars: i,
    varsResolver: Io,
    rootSelector: "indicator"
  }), g = vo(), R = typeof h == "boolean" || typeof l == "boolean" ? h || l : (g == null ? void 0 : g.checked) || !1;
  return /* @__PURE__ */ u(
    V,
    {
      ref: r,
      ...y("indicator", { variant: C }),
      variant: C,
      mod: [{ checked: R, disabled: v }, d],
      ...I,
      children: /* @__PURE__ */ u(P, { indeterminate: l, ...y("icon") })
    }
  );
});
A.displayName = "@mantine/core/CheckboxIndicator";
A.classes = Y;
var Z = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const Po = {
  labelPosition: "right",
  icon: L
}, zo = B(
  (o, { radius: r, color: e, size: a, iconColor: t, variant: n, autoContrast: c }) => {
    const s = q({ color: e || o.primaryColor, theme: o }), i = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
    return {
      root: {
        "--checkbox-size": D(a, "checkbox-size"),
        "--checkbox-radius": r === void 0 ? void 0 : T(r),
        "--checkbox-color": n === "outline" ? i : S(e, o),
        "--checkbox-icon-color": t ? S(t, o) : H(c, o) ? J({ color: e, theme: o, autoContrast: c }) : void 0
      }
    };
  }
), _ = G((o, r) => {
  const e = $("Checkbox", Po, o), {
    classNames: a,
    className: t,
    style: n,
    styles: c,
    unstyled: s,
    vars: i,
    color: b,
    label: l,
    id: k,
    size: x,
    radius: p,
    wrapperProps: m,
    checked: h,
    labelPosition: d,
    description: C,
    error: v,
    disabled: I,
    variant: P,
    indeterminate: y,
    icon: g,
    rootRef: R,
    iconColor: No,
    onChange: z,
    autoContrast: So,
    mod: oo,
    ...eo
  } = e, f = Q(), so = x || (f == null ? void 0 : f.size), ro = g, N = w({
    name: "Checkbox",
    props: e,
    classes: Z,
    className: t,
    style: n,
    classNames: a,
    styles: c,
    unstyled: s,
    vars: i,
    varsResolver: zo
  }), { styleProps: co, rest: O } = lo(eo), W = bo(k), E = f ? {
    checked: f.value.includes(O.value),
    onChange: (F) => {
      f.onChange(F), z == null || z(F);
    }
  } : {};
  return /* @__PURE__ */ u(
    po,
    {
      ...N("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: e,
      id: W,
      size: so,
      labelPosition: d,
      label: l,
      description: C,
      error: v,
      disabled: I,
      classNames: a,
      styles: c,
      unstyled: s,
      "data-checked": E.checked || h || void 0,
      variant: P,
      ref: R,
      mod: oo,
      ...co,
      ...m,
      children: /* @__PURE__ */ to(V, { ...N("inner"), mod: { "data-label-position": d }, children: [
        /* @__PURE__ */ u(
          V,
          {
            component: "input",
            id: W,
            ref: r,
            checked: h,
            disabled: I,
            mod: { error: !!v, indeterminate: y },
            ...N("input", { focusable: !0, variant: P }),
            onChange: z,
            ...O,
            ...E,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ u(ro, { indeterminate: y, ...N("icon") })
      ] })
    }
  );
});
_.classes = { ...Z, ...uo };
_.displayName = "@mantine/core/Checkbox";
_.Group = j;
_.Indicator = A;
_.Card = U;
export {
  _ as C
};
