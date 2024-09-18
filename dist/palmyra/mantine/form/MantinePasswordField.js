import { jsx as s, Fragment as ie } from "react/jsx-runtime";
import { forwardRef as ne, useRef as R, useImperativeHandle as le } from "react";
import { useFieldManager as ce, getFieldHandler as de, FieldDecorator as ue } from "@palmyralabs/rt-forms";
import { getFieldLabel as me } from "./util.js";
import { f as fe, u as Ce, d as pe, e as he, m as ge, g as ve, h as x } from "../../../chunks/factory.js";
import { u as we } from "../../../chunks/use-resolved-styles-api.js";
import { A as ye } from "../../../chunks/ActionIcon.js";
import { I as z } from "../../../chunks/Input.js";
import { I as be } from "../../../chunks/InputBase.js";
import { u as Ie } from "../../../chunks/use-id.js";
import { u as Se } from "../../../chunks/use-uncontrolled.js";
const Pe = ({
  reveal: l
}) => /* @__PURE__ */ s(
  "svg",
  {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" },
    children: /* @__PURE__ */ s(
      "path",
      {
        d: l ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  }
);
var S = { root: "m_f61ca620", input: "m_ccf8da4c", innerInput: "m_f2d85dd2", visibilityToggle: "m_b1072d44" };
const Me = {
  visibilityToggleIcon: Pe
}, Ve = ve((l, { size: e }) => ({
  root: {
    "--psi-icon-size": x(e, "psi-icon-size"),
    "--psi-button-size": x(e, "psi-button-size")
  }
})), P = fe((l, e) => {
  const a = Ce("PasswordInput", Me, l), {
    classNames: o,
    className: h,
    style: g,
    styles: C,
    unstyled: r,
    vars: v,
    required: p,
    error: c,
    leftSection: d,
    disabled: u,
    id: m,
    variant: i,
    inputContainer: D,
    description: E,
    label: N,
    size: M,
    errorProps: Z,
    descriptionProps: A,
    labelProps: W,
    withAsterisk: O,
    inputWrapperOrder: k,
    wrapperProps: H,
    radius: V,
    rightSection: K,
    rightSectionWidth: j,
    rightSectionPointerEvents: q,
    leftSectionWidth: U,
    visible: G,
    defaultVisible: J,
    onVisibilityChange: Q,
    visibilityToggleIcon: T,
    visibilityToggleButtonProps: t,
    rightSectionProps: X,
    leftSectionProps: Y,
    leftSectionPointerEvents: $,
    withErrorStyles: B,
    mod: ee,
    ...te
  } = a, w = Ie(m), [y, se] = Se({
    value: G,
    defaultValue: J,
    finalValue: !1,
    onChange: Q
  }), F = () => se(!y), b = pe({
    name: "PasswordInput",
    classes: S,
    props: a,
    className: h,
    style: g,
    classNames: o,
    styles: C,
    unstyled: r,
    vars: v,
    varsResolver: Ve
  }), { resolvedClassNames: I, resolvedStyles: _ } = we({
    classNames: o,
    styles: C,
    props: a
  }), { styleProps: oe, rest: L } = he(te), ae = T, re = /* @__PURE__ */ s(
    ye,
    {
      ...b("visibilityToggle"),
      disabled: u,
      radius: V,
      "aria-hidden": !t,
      tabIndex: -1,
      ...t,
      variant: "subtle",
      color: "gray",
      unstyled: r,
      onMouseDown: (n) => {
        var f;
        n.preventDefault(), (f = t == null ? void 0 : t.onMouseDown) == null || f.call(t, n), F();
      },
      onKeyDown: (n) => {
        var f;
        (f = t == null ? void 0 : t.onKeyDown) == null || f.call(t, n), n.key === " " && (n.preventDefault(), F());
      },
      children: /* @__PURE__ */ s(ae, { reveal: y })
    }
  );
  return /* @__PURE__ */ s(
    z.Wrapper,
    {
      required: p,
      id: w,
      label: N,
      error: c,
      description: E,
      size: M,
      classNames: I,
      styles: _,
      __staticSelector: "PasswordInput",
      errorProps: Z,
      descriptionProps: A,
      unstyled: r,
      withAsterisk: O,
      inputWrapperOrder: k,
      inputContainer: D,
      variant: i,
      labelProps: { ...W, htmlFor: w },
      mod: ee,
      ...b("root"),
      ...oe,
      ...H,
      children: /* @__PURE__ */ s(
        z,
        {
          component: "div",
          error: c,
          leftSection: d,
          size: M,
          classNames: { ...I, input: ge(S.input, I.input) },
          styles: _,
          radius: V,
          disabled: u,
          __staticSelector: "PasswordInput",
          rightSectionWidth: j,
          rightSection: K ?? re,
          variant: i,
          unstyled: r,
          leftSectionWidth: U,
          rightSectionPointerEvents: q || "all",
          rightSectionProps: X,
          leftSectionProps: Y,
          leftSectionPointerEvents: $,
          withAria: !1,
          withErrorStyles: B,
          children: /* @__PURE__ */ s(
            "input",
            {
              required: p,
              "data-invalid": !!c || void 0,
              "data-with-left-section": !!d || void 0,
              ...b("innerInput"),
              disabled: u,
              id: w,
              ref: e,
              ...L,
              autoComplete: L.autoComplete || "off",
              type: y ? "text" : "password"
            }
          )
        }
      )
    }
  );
});
P.classes = { ...be.classes, ...S };
P.displayName = "@mantine/core/PasswordInput";
const We = ne(function(e, a) {
  const o = ce(e.attribute, e), { getError: h, getValue: g, setValue: C, mutateOptions: r, refreshError: v } = o, p = a || R(null), c = h(), d = R(null), u = e.variant || "default";
  le(p, () => ({
    ...de(o),
    focus() {
      d.current.focus();
    }
  }), [o]);
  var m = o.getFieldProps();
  return m.onChange = (i) => {
    e.readOnly || (C(i.target.value), e.onChange && e.onChange(i));
  }, m.onBlur = v, /* @__PURE__ */ s(ie, { children: !r.visible && /* @__PURE__ */ s(
    ue,
    {
      label: me(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        P,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: u,
          ref: d,
          ...m,
          placeholder: e.placeholder,
          value: g(),
          error: c.message
        }
      )
    }
  ) });
});
export {
  We as MantinePasswordField
};
