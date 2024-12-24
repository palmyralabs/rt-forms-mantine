import { jsx as n, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as u, useImperativeHandle as F } from "react";
import { useFieldManager as v, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { NumberInput as B } from "@mantine/core";
const j = h(function(e, r) {
  const a = v(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: d, refreshError: N } = a, m = r || u(null), f = i(), o = u(null), g = e.variant || "default";
  var b = s();
  F(m, () => ({
    ...M(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var t = a.getFieldProps();
  return t.onChange = (l) => {
    e.readOnly || (c(l), e.onChange && e.onChange(l));
  }, t.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  }, /* @__PURE__ */ n(C, { children: !d.visible && /* @__PURE__ */ n(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        B,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: g,
          ref: o,
          ...t,
          placeholder: e.placeholder,
          value: b,
          error: f.message
        }
      )
    }
  ) });
});
export {
  j as MantineNumberField
};
