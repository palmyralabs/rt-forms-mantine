import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { PinInput as b } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as v, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { forwardRef as M, useRef as i, useImperativeHandle as P } from "react";
import { getFieldLabel as R } from "./util.js";
const j = M(function(e, r) {
  const t = F(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: m, refreshError: L } = t, d = r || i(null), f = u(), o = i(null), g = e.variant || "default";
  P(d, () => ({
    ...v(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (n) => {
    e.readOnly || (c(n), e.onChange && e.onChange(n));
  }, a.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  };
  const C = s();
  return /* @__PURE__ */ l(h, { children: !m.visible && /* @__PURE__ */ l(
    I,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        b,
        {
          label: e.label,
          variant: g,
          ref: o,
          ...a,
          value: C,
          placeholder: e.placeholder,
          error: f.message
        }
      )
    }
  ) });
});
export {
  j as MantinePinInput
};
