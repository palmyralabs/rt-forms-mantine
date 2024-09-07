import { jsx as s, Fragment as ne } from "react/jsx-runtime";
import { forwardRef as re, useRef as R, useImperativeHandle as le } from "react";
import { useFieldManager as ce, getFieldHandler as de, FieldDecorator as ue } from "@palmyralabs/rt-forms";
import { getFieldLabel as fe } from "./util.js";
import { f as me, b as Ce, d as pe, e as he, l as ge, g as ve, h as x } from "../../chunks/factory.js";
import { u as we } from "../../chunks/use-resolved-styles-api.js";
import { A as be } from "../../chunks/ActionIcon.js";
import { I as z } from "../../chunks/Input.js";
import { I as ye } from "../../chunks/InputBase.js";
import { u as Ie } from "../../chunks/use-id.js";
import { u as Se } from "../../chunks/use-uncontrolled.js";
const Pe = ({
  reveal: c
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
        d: c ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z" : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  }
);
var I = { root: "m_f61ca620", input: "m_ccf8da4c", innerInput: "m_f2d85dd2", visibilityToggle: "m_b1072d44" };
const Ve = {
  visibilityToggleIcon: Pe
}, Me = ve((c, { size: e }) => ({
  root: {
    "--psi-icon-size": x(e, "psi-icon-size"),
    "--psi-button-size": x(e, "psi-button-size")
  }
})), S = me((c, e) => {
  const o = Ce("PasswordInput", Ve, c), {
    classNames: a,
    className: h,
    style: f,
    styles: m,
    unstyled: i,
    vars: g,
    required: C,
    error: n,
    leftSection: p,
    disabled: r,
    id: d,
    variant: P,
    inputContainer: D,
    description: N,
    label: Z,
    size: V,
    errorProps: A,
    descriptionProps: E,
    labelProps: W,
    withAsterisk: O,
    inputWrapperOrder: k,
    wrapperProps: H,
    radius: M,
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
  } = o, v = Ie(d), [w, se] = Se({
    value: G,
    defaultValue: J,
    finalValue: !1,
    onChange: Q
  }), F = () => se(!w), b = pe({
    name: "PasswordInput",
    classes: I,
    props: o,
    className: h,
    style: f,
    classNames: a,
    styles: m,
    unstyled: i,
    vars: g,
    varsResolver: Me
  }), { resolvedClassNames: y, resolvedStyles: _ } = we({
    classNames: a,
    styles: m,
    props: o
  }), { styleProps: ae, rest: L } = he(te), oe = T, ie = /* @__PURE__ */ s(
    be,
    {
      ...b("visibilityToggle"),
      disabled: r,
      radius: M,
      "aria-hidden": !t,
      tabIndex: -1,
      ...t,
      variant: "subtle",
      color: "gray",
      unstyled: i,
      onMouseDown: (l) => {
        var u;
        l.preventDefault(), (u = t == null ? void 0 : t.onMouseDown) == null || u.call(t, l), F();
      },
      onKeyDown: (l) => {
        var u;
        (u = t == null ? void 0 : t.onKeyDown) == null || u.call(t, l), l.key === " " && (l.preventDefault(), F());
      },
      children: /* @__PURE__ */ s(oe, { reveal: w })
    }
  );
  return /* @__PURE__ */ s(
    z.Wrapper,
    {
      required: C,
      id: v,
      label: Z,
      error: n,
      description: N,
      size: V,
      classNames: y,
      styles: _,
      __staticSelector: "PasswordInput",
      errorProps: A,
      descriptionProps: E,
      unstyled: i,
      withAsterisk: O,
      inputWrapperOrder: k,
      inputContainer: D,
      variant: P,
      labelProps: { ...W, htmlFor: v },
      mod: ee,
      ...b("root"),
      ...ae,
      ...H,
      children: /* @__PURE__ */ s(
        z,
        {
          component: "div",
          error: n,
          leftSection: p,
          size: V,
          classNames: { ...y, input: ge(I.input, y.input) },
          styles: _,
          radius: M,
          disabled: r,
          __staticSelector: "PasswordInput",
          rightSectionWidth: j,
          rightSection: K ?? ie,
          variant: P,
          unstyled: i,
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
              required: C,
              "data-invalid": !!n || void 0,
              "data-with-left-section": !!p || void 0,
              ...b("innerInput"),
              disabled: r,
              id: v,
              ref: e,
              ...L,
              autoComplete: L.autoComplete || "off",
              type: w ? "text" : "password"
            }
          )
        }
      )
    }
  );
});
S.classes = { ...ye.classes, ...I };
S.displayName = "@mantine/core/PasswordInput";
const We = re(function(e, o) {
  const a = ce(e.attribute, e), { getError: h, getValue: f, setValue: m, mutateOptions: i } = a, g = o || R(null), C = h(), n = R(null), p = e.variant || "default";
  le(g, () => ({
    ...de(a),
    focus() {
      n.current.focus();
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.onChange = (d) => {
    e.readOnly || (m(d.target.value), e.onChange && e.onChange(d));
  }, /* @__PURE__ */ s(ne, { children: !i.visible && /* @__PURE__ */ s(
    ue,
    {
      label: fe(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        S,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: p,
          ref: n,
          ...r,
          placeholder: e.placeholder,
          value: f() ? f() : e.defaultValue,
          error: C.message
        }
      )
    }
  ) });
});
export {
  We as MantinePasswordField
};
