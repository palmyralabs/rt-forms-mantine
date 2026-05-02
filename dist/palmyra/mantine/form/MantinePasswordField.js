import { jsx as n, Fragment as f } from "react/jsx-runtime";
import { PasswordInput as m } from "@mantine/core";
import { useFieldManager as g, getFieldHandler as C, FieldDecorator as h } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as b } from "react";
import { getFieldLabel as v } from "./util.js";
function x(e) {
  const l = g(e.attribute, e), { getError: o, getValue: i, setValue: u, mutateOptions: s, refreshError: V } = l, c = o(), r = F(null), d = e.variant || "default";
  b(e.ref, () => ({
    ...C(l),
    focus() {
      r.current.focus();
    }
  }), [l]);
  var t = l.getFieldProps();
  return t.onChange = (a) => {
    e.readOnly || (u(a.target.value), e.onChange && e.onChange(a));
  }, t.onBlur = (a) => {
    e.onBlur && e.onBlur(a);
  }, /* @__PURE__ */ n(f, { children: !s.visible && /* @__PURE__ */ n(
    h,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        m,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: d,
          ref: r,
          ...t,
          placeholder: e.placeholder,
          value: i(),
          error: c.message
        }
      )
    }
  ) });
}
export {
  x as MantinePasswordField
};
