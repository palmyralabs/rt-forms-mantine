import { jsx as n, Fragment as C } from "react/jsx-runtime";
import { PasswordInput as h } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as b, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { forwardRef as w, useRef as i, useImperativeHandle as M } from "react";
import { getFieldLabel as P } from "./util.js";
const I = w(function(e, r) {
  const l = F(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: d, refreshError: V } = l, f = r || i(null), m = u(), o = i(null), g = e.variant || "default";
  M(f, () => ({
    ...b(l),
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
    v,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        h,
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
