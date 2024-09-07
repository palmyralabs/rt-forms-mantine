import { jsx as m, jsxs as ae } from "react/jsx-runtime";
import { m as ve, f as F, b as N, d as q, B as P, g as L, j as W, c as C, e as ye, h as se, i as he } from "./factory.js";
import { createContext as fe, useContext as be, forwardRef as ne, Fragment as Se, createElement as _e } from "react";
import { u as Ie } from "./use-id.js";
function ge(t = null) {
  const e = fe(t);
  return [({ children: n, value: r }) => /* @__PURE__ */ m(e.Provider, { value: r, children: n }), () => be(e)];
}
function Ne(t) {
  const e = ne(t);
  return e.withProps = (s) => {
    const i = ne((n, r) => /* @__PURE__ */ m(e, { ...s, ...n, ref: r }));
    return i.extend = e.extend, i.displayName = `WithProps(${e.displayName})`, i;
  }, e.extend = ve, e;
}
const [$e, H] = ge({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var _ = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const re = {}, ze = L((t, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  }
})), J = F((t, e) => {
  const s = N("InputDescription", re, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    vars: y,
    size: h,
    __staticSelector: S,
    __inheritStyles: f = !0,
    variant: I,
    ...c
  } = N("InputDescription", re, s), a = H(), l = q({
    name: ["InputWrapper", S],
    props: s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    rootSelector: "description",
    vars: y,
    varsResolver: ze
  }), d = f && (a == null ? void 0 : a.getStyles) || l;
  return /* @__PURE__ */ m(
    P,
    {
      component: "p",
      ref: e,
      variant: I,
      size: h,
      ...d("description", a != null && a.getStyles ? { className: n, style: r } : void 0),
      ...c
    }
  );
});
J.classes = _;
J.displayName = "@mantine/core/InputDescription";
const we = {}, Ee = L((t, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${W(e)} - ${C(2)})`
  }
})), K = F((t, e) => {
  const s = N("InputError", we, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    vars: y,
    size: h,
    __staticSelector: S,
    __inheritStyles: f = !0,
    variant: I,
    ...c
  } = s, a = q({
    name: ["InputWrapper", S],
    props: s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    rootSelector: "error",
    vars: y,
    varsResolver: Ee
  }), l = H(), d = f && (l == null ? void 0 : l.getStyles) || a;
  return /* @__PURE__ */ m(
    P,
    {
      component: "p",
      ref: e,
      variant: I,
      size: h,
      ...d("error", l != null && l.getStyles ? { className: n, style: r } : void 0),
      ...c
    }
  );
});
K.classes = _;
K.displayName = "@mantine/core/InputError";
const oe = {
  labelElement: "label"
}, We = L((t, { size: e }) => ({
  label: {
    "--input-label-size": W(e),
    "--input-asterisk-color": void 0
  }
})), M = F((t, e) => {
  const s = N("InputLabel", oe, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    vars: y,
    labelElement: h,
    size: S,
    required: f,
    htmlFor: I,
    onMouseDown: c,
    children: a,
    __staticSelector: l,
    variant: d,
    mod: z,
    ...p
  } = N("InputLabel", oe, s), o = q({
    name: ["InputWrapper", l],
    props: s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    rootSelector: "label",
    vars: y,
    varsResolver: We
  }), g = H(), A = (g == null ? void 0 : g.getStyles) || o;
  return /* @__PURE__ */ ae(
    P,
    {
      ...A("label", g != null && g.getStyles ? { className: n, style: r } : void 0),
      component: h,
      variant: d,
      size: S,
      ref: e,
      htmlFor: h === "label" ? I : void 0,
      mod: [{ required: f }, z],
      onMouseDown: ($) => {
        c == null || c($), !$.defaultPrevented && $.detail > 1 && $.preventDefault();
      },
      ...p,
      children: [
        a,
        f && /* @__PURE__ */ m("span", { ...A("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
M.classes = _;
M.displayName = "@mantine/core/InputLabel";
const ie = {}, Z = F((t, e) => {
  const s = N("InputPlaceholder", ie, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    vars: y,
    __staticSelector: h,
    variant: S,
    error: f,
    mod: I,
    ...c
  } = N("InputPlaceholder", ie, s), a = q({
    name: ["InputPlaceholder", h],
    props: s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ m(
    P,
    {
      ...a("placeholder"),
      mod: [{ error: !!f }, I],
      component: "span",
      variant: S,
      ref: e,
      ...c
    }
  );
});
Z.classes = _;
Z.displayName = "@mantine/core/InputPlaceholder";
function Pe(t, { hasDescription: e, hasError: s }) {
  const i = t.findIndex((y) => y === "input"), n = t.slice(0, i), r = t.slice(i + 1), v = e && n.includes("description") || s && n.includes("error");
  return { offsetBottom: e && r.includes("description") || s && r.includes("error"), offsetTop: v };
}
const Be = {
  labelElement: "label",
  inputContainer: (t) => t,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Re = L((t, { size: e }) => ({
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
  const s = N("InputWrapper", Be, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    vars: y,
    size: h,
    variant: S,
    __staticSelector: f,
    inputContainer: I,
    inputWrapperOrder: c,
    label: a,
    error: l,
    description: d,
    labelProps: z,
    descriptionProps: p,
    errorProps: o,
    labelElement: g,
    children: A,
    withAsterisk: $,
    id: T,
    required: Q,
    __stylesApiProps: U,
    mod: X,
    ...te
  } = s, k = q({
    name: ["InputWrapper", f],
    props: U || s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    vars: y,
    varsResolver: Re
  }), w = {
    size: h,
    variant: S,
    __staticSelector: f
  }, E = Ie(T), Y = typeof $ == "boolean" ? $ : Q, x = (o == null ? void 0 : o.id) || `${E}-error`, O = (p == null ? void 0 : p.id) || `${E}-description`, j = E, D = !!l && typeof l != "boolean", u = !!d, V = `${D ? x : ""} ${u ? O : ""}`, R = V.trim().length > 0 ? V.trim() : void 0, G = (z == null ? void 0 : z.id) || `${E}-label`, le = a && /* @__PURE__ */ m(
    M,
    {
      labelElement: g,
      id: G,
      htmlFor: j,
      required: Y,
      ...w,
      ...z,
      children: a
    },
    "label"
  ), ce = u && /* @__PURE__ */ m(
    J,
    {
      ...p,
      ...w,
      size: (p == null ? void 0 : p.size) || w.size,
      id: (p == null ? void 0 : p.id) || O,
      children: d
    },
    "description"
  ), de = /* @__PURE__ */ m(Se, { children: I(A) }, "input"), pe = D && /* @__PURE__ */ _e(
    K,
    {
      ...o,
      ...w,
      size: (o == null ? void 0 : o.size) || w.size,
      key: "error",
      id: (o == null ? void 0 : o.id) || x
    },
    l
  ), ue = c.map((me) => {
    switch (me) {
      case "label":
        return le;
      case "input":
        return de;
      case "description":
        return ce;
      case "error":
        return pe;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ m(
    $e,
    {
      value: {
        getStyles: k,
        describedBy: R,
        inputId: j,
        labelId: G,
        ...Pe(c, { hasDescription: u, hasError: D })
      },
      children: /* @__PURE__ */ m(
        P,
        {
          ref: e,
          variant: S,
          size: h,
          mod: [{ error: !!l }, X],
          ...k("root"),
          ...te,
          children: ue
        }
      )
    }
  );
});
ee.classes = _;
ee.displayName = "@mantine/core/InputWrapper";
const Ce = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, qe = L((t, e, s) => ({
  wrapper: {
    "--input-margin-top": s.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": s.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": se(e.size, "input-height"),
    "--input-fz": W(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : he(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? C(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? C(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? se(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
})), B = Ne((t, e) => {
  const s = N("Input", Ce, t), {
    classNames: i,
    className: n,
    style: r,
    styles: v,
    unstyled: b,
    required: y,
    __staticSelector: h,
    __stylesApiProps: S,
    size: f,
    wrapperProps: I,
    error: c,
    disabled: a,
    leftSection: l,
    leftSectionProps: d,
    leftSectionWidth: z,
    rightSection: p,
    rightSectionProps: o,
    rightSectionWidth: g,
    rightSectionPointerEvents: A,
    leftSectionPointerEvents: $,
    variant: T,
    vars: Q,
    pointer: U,
    multiline: X,
    radius: te,
    id: k,
    withAria: w,
    withErrorStyles: E,
    mod: Y,
    inputSize: x,
    ...O
  } = s, { styleProps: j, rest: D } = ye(O), u = H(), V = { offsetBottom: u == null ? void 0 : u.offsetBottom, offsetTop: u == null ? void 0 : u.offsetTop }, R = q({
    name: ["Input", h],
    props: S || s,
    classes: _,
    className: n,
    style: r,
    classNames: i,
    styles: v,
    unstyled: b,
    stylesCtx: V,
    rootSelector: "wrapper",
    vars: Q,
    varsResolver: qe
  }), G = w ? {
    required: y,
    disabled: a,
    "aria-invalid": !!c,
    "aria-describedby": u == null ? void 0 : u.describedBy,
    id: (u == null ? void 0 : u.inputId) || k
  } : {};
  return /* @__PURE__ */ ae(
    P,
    {
      ...R("wrapper"),
      ...j,
      ...I,
      mod: [
        {
          error: !!c && E,
          pointer: U,
          disabled: a,
          multiline: X,
          "data-with-right-section": !!p,
          "data-with-left-section": !!l
        },
        Y
      ],
      variant: T,
      size: f,
      children: [
        l && /* @__PURE__ */ m(
          "div",
          {
            ...d,
            "data-position": "left",
            ...R("section", {
              className: d == null ? void 0 : d.className,
              style: d == null ? void 0 : d.style
            }),
            children: l
          }
        ),
        /* @__PURE__ */ m(
          P,
          {
            component: "input",
            ...D,
            ...G,
            ref: e,
            required: y,
            mod: { disabled: a, error: !!c && E },
            variant: T,
            __size: x,
            ...R("input")
          }
        ),
        p && /* @__PURE__ */ m(
          "div",
          {
            ...o,
            "data-position": "right",
            ...R("section", {
              className: o == null ? void 0 : o.className,
              style: o == null ? void 0 : o.style
            }),
            children: p
          }
        )
      ]
    }
  );
});
B.classes = _;
B.Wrapper = ee;
B.Label = M;
B.Error = K;
B.Description = J;
B.Placeholder = Z;
B.displayName = "@mantine/core/Input";
export {
  B as I,
  ge as c,
  Ne as p,
  H as u
};
