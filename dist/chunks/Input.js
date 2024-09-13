import { jsx as f, jsxs as ie } from "react/jsx-runtime";
import { f as F, u as N, d as q, B, g as k, k as W, r as C, e as me, h as se, j as ve } from "./factory.js";
import { createContext as ye, useContext as he, Fragment as fe, createElement as Se } from "react";
import { p as _e } from "./polymorphic-factory.js";
import { u as be } from "./use-id.js";
function Ie(t = null) {
  const e = ye(t);
  return [({ children: o, value: n }) => /* @__PURE__ */ f(e.Provider, { value: n, children: o }), () => he(e)];
}
const [ge, H] = Ie({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var b = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const re = {}, Ne = k((t, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  }
})), J = F((t, e) => {
  const s = N("InputDescription", re, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    vars: v,
    size: y,
    __staticSelector: _,
    __inheritStyles: h = !0,
    variant: I,
    ...l
  } = N("InputDescription", re, s), i = H(), a = q({
    name: ["InputWrapper", _],
    props: s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    rootSelector: "description",
    vars: v,
    varsResolver: Ne
  }), c = h && (i == null ? void 0 : i.getStyles) || a;
  return /* @__PURE__ */ f(
    B,
    {
      component: "p",
      ref: e,
      variant: I,
      size: y,
      ...c("description", i != null && i.getStyles ? { className: o, style: n } : void 0),
      ...l
    }
  );
});
J.classes = b;
J.displayName = "@mantine/core/InputDescription";
const $e = {}, ze = k((t, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  }
})), K = F((t, e) => {
  const s = N("InputError", $e, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    vars: v,
    size: y,
    __staticSelector: _,
    __inheritStyles: h = !0,
    variant: I,
    ...l
  } = s, i = q({
    name: ["InputWrapper", _],
    props: s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    rootSelector: "error",
    vars: v,
    varsResolver: ze
  }), a = H(), c = h && (a == null ? void 0 : a.getStyles) || i;
  return /* @__PURE__ */ f(
    B,
    {
      component: "p",
      ref: e,
      variant: I,
      size: y,
      ...c("error", a != null && a.getStyles ? { className: o, style: n } : void 0),
      ...l
    }
  );
});
K.classes = b;
K.displayName = "@mantine/core/InputError";
const oe = {
  labelElement: "label"
}, Ee = k((t, { size: e }) => ({
  label: {
    "--input-label-size": W(e),
    "--input-asterisk-color": void 0
  }
})), M = F((t, e) => {
  const s = N("InputLabel", oe, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    vars: v,
    labelElement: y,
    size: _,
    required: h,
    htmlFor: I,
    onMouseDown: l,
    children: i,
    __staticSelector: a,
    variant: c,
    mod: z,
    ...d
  } = N("InputLabel", oe, s), r = q({
    name: ["InputWrapper", a],
    props: s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    rootSelector: "label",
    vars: v,
    varsResolver: Ee
  }), g = H(), A = (g == null ? void 0 : g.getStyles) || r;
  return /* @__PURE__ */ ie(
    B,
    {
      ...A("label", g != null && g.getStyles ? { className: o, style: n } : void 0),
      component: y,
      variant: c,
      size: _,
      ref: e,
      htmlFor: y === "label" ? I : void 0,
      mod: [{ required: h }, z],
      onMouseDown: ($) => {
        l == null || l($), !$.defaultPrevented && $.detail > 1 && $.preventDefault();
      },
      ...d,
      children: [
        i,
        h && /* @__PURE__ */ f("span", { ...A("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
M.classes = b;
M.displayName = "@mantine/core/InputLabel";
const ne = {}, Z = F((t, e) => {
  const s = N("InputPlaceholder", ne, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    vars: v,
    __staticSelector: y,
    variant: _,
    error: h,
    mod: I,
    ...l
  } = N("InputPlaceholder", ne, s), i = q({
    name: ["InputPlaceholder", y],
    props: s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ f(
    B,
    {
      ...i("placeholder"),
      mod: [{ error: !!h }, I],
      component: "span",
      variant: _,
      ref: e,
      ...l
    }
  );
});
Z.classes = b;
Z.displayName = "@mantine/core/InputPlaceholder";
function we(t, { hasDescription: e, hasError: s }) {
  const u = t.findIndex((v) => v === "input"), o = t.slice(0, u), n = t.slice(u + 1), m = e && o.includes("description") || s && o.includes("error");
  return { offsetBottom: e && n.includes("description") || s && n.includes("error"), offsetTop: m };
}
const We = {
  labelElement: "label",
  inputContainer: (t) => t,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Be = k((t, { size: e }) => ({
  label: {
    "--input-label-size": W(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  }
})), ee = F((t, e) => {
  const s = N("InputWrapper", We, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    vars: v,
    size: y,
    variant: _,
    __staticSelector: h,
    inputContainer: I,
    inputWrapperOrder: l,
    label: i,
    error: a,
    description: c,
    labelProps: z,
    descriptionProps: d,
    errorProps: r,
    labelElement: g,
    children: A,
    withAsterisk: $,
    id: L,
    required: Q,
    __stylesApiProps: U,
    mod: X,
    ...te
  } = s, T = q({
    name: ["InputWrapper", h],
    props: U || s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    vars: v,
    varsResolver: Be
  }), E = {
    size: y,
    variant: _,
    __staticSelector: h
  }, w = be(L), Y = typeof $ == "boolean" ? $ : Q, O = (r == null ? void 0 : r.id) || `${w}-error`, j = (d == null ? void 0 : d.id) || `${w}-description`, V = w, D = !!a && typeof a != "boolean", p = !!c, x = `${D ? O : ""} ${p ? j : ""}`, R = x.trim().length > 0 ? x.trim() : void 0, G = (z == null ? void 0 : z.id) || `${w}-label`, ae = i && /* @__PURE__ */ f(
    M,
    {
      labelElement: g,
      id: G,
      htmlFor: V,
      required: Y,
      ...E,
      ...z,
      children: i
    },
    "label"
  ), le = p && /* @__PURE__ */ f(
    J,
    {
      ...d,
      ...E,
      size: (d == null ? void 0 : d.size) || E.size,
      id: (d == null ? void 0 : d.id) || j,
      children: c
    },
    "description"
  ), ce = /* @__PURE__ */ f(fe, { children: I(A) }, "input"), de = D && /* @__PURE__ */ Se(
    K,
    {
      ...r,
      ...E,
      size: (r == null ? void 0 : r.size) || E.size,
      key: "error",
      id: (r == null ? void 0 : r.id) || O
    },
    a
  ), pe = l.map((ue) => {
    switch (ue) {
      case "label":
        return ae;
      case "input":
        return ce;
      case "description":
        return le;
      case "error":
        return de;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ f(
    ge,
    {
      value: {
        getStyles: T,
        describedBy: R,
        inputId: V,
        labelId: G,
        ...we(l, { hasDescription: p, hasError: D })
      },
      children: /* @__PURE__ */ f(
        B,
        {
          ref: e,
          variant: _,
          size: y,
          mod: [{ error: !!a }, X],
          ...T("root"),
          ...te,
          children: pe
        }
      )
    }
  );
});
ee.classes = b;
ee.displayName = "@mantine/core/InputWrapper";
const Pe = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Re = k((t, e, s) => ({
  wrapper: {
    "--input-margin-top": s.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": s.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": se(e.size, "input-height"),
    "--input-fz": W(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : ve(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? C(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? C(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? se(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
})), P = _e((t, e) => {
  const s = N("Input", Pe, t), {
    classNames: u,
    className: o,
    style: n,
    styles: m,
    unstyled: S,
    required: v,
    __staticSelector: y,
    __stylesApiProps: _,
    size: h,
    wrapperProps: I,
    error: l,
    disabled: i,
    leftSection: a,
    leftSectionProps: c,
    leftSectionWidth: z,
    rightSection: d,
    rightSectionProps: r,
    rightSectionWidth: g,
    rightSectionPointerEvents: A,
    leftSectionPointerEvents: $,
    variant: L,
    vars: Q,
    pointer: U,
    multiline: X,
    radius: te,
    id: T,
    withAria: E,
    withErrorStyles: w,
    mod: Y,
    inputSize: O,
    ...j
  } = s, { styleProps: V, rest: D } = me(j), p = H(), x = { offsetBottom: p == null ? void 0 : p.offsetBottom, offsetTop: p == null ? void 0 : p.offsetTop }, R = q({
    name: ["Input", y],
    props: _ || s,
    classes: b,
    className: o,
    style: n,
    classNames: u,
    styles: m,
    unstyled: S,
    stylesCtx: x,
    rootSelector: "wrapper",
    vars: Q,
    varsResolver: Re
  }), G = E ? {
    required: v,
    disabled: i,
    "aria-invalid": !!l,
    "aria-describedby": p == null ? void 0 : p.describedBy,
    id: (p == null ? void 0 : p.inputId) || T
  } : {};
  return /* @__PURE__ */ ie(
    B,
    {
      ...R("wrapper"),
      ...V,
      ...I,
      mod: [
        {
          error: !!l && w,
          pointer: U,
          disabled: i,
          multiline: X,
          "data-with-right-section": !!d,
          "data-with-left-section": !!a
        },
        Y
      ],
      variant: L,
      size: h,
      children: [
        a && /* @__PURE__ */ f(
          "div",
          {
            ...c,
            "data-position": "left",
            ...R("section", {
              className: c == null ? void 0 : c.className,
              style: c == null ? void 0 : c.style
            }),
            children: a
          }
        ),
        /* @__PURE__ */ f(
          B,
          {
            component: "input",
            ...D,
            ...G,
            ref: e,
            required: v,
            mod: { disabled: i, error: !!l && w },
            variant: L,
            __size: O,
            ...R("input")
          }
        ),
        d && /* @__PURE__ */ f(
          "div",
          {
            ...r,
            "data-position": "right",
            ...R("section", {
              className: r == null ? void 0 : r.className,
              style: r == null ? void 0 : r.style
            }),
            children: d
          }
        )
      ]
    }
  );
});
P.classes = b;
P.Wrapper = ee;
P.Label = M;
P.Error = K;
P.Description = J;
P.Placeholder = Z;
P.displayName = "@mantine/core/Input";
export {
  P as I,
  Ie as c,
  H as u
};
