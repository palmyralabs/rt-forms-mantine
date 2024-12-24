import { jsx as n, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as i, useImperativeHandle as F } from "react";
import { useFieldManager as b, getFieldHandler as v, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { PasswordInput as P } from "@mantine/core";
const I = h(function(e, r) {
  const l = b(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: d, refreshError: V } = l, f = r || i(null), m = u(), o = i(null), g = e.variant || "default";
  F(f, () => ({
    ...v(l),
    focus() {
      o.current.focus();
    }
  }), [l]);
  var t = l.getFieldProps();
  return t.onChange = (a) => {
    e.readOnly || (c(a.target.value), e.onChange && e.onChange(a));
  }, t.onBlur = (a) => {
    e.onBlur && e.onBlur(a);
  }, /* @__PURE__ */ n(C, { children: !d.visible && /* @__PURE__ */ n(
    w,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        P,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: g,
          ref: o,
          ...t,
          placeholder: e.placeholder,
          value: s(),
          error: m.message
        }
      )
    }
  ) });
});
export {
  I as MantinePasswordField
};
