import { jsx as n, Fragment as C } from "react/jsx-runtime";
import { NumberInput as h } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as v, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { forwardRef as R, useRef as u, useImperativeHandle as V } from "react";
import { getFieldLabel as B } from "./util.js";
const j = R(function(e, r) {
  const a = F(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: d, refreshError: N } = a, m = r || u(null), f = i(), o = u(null), g = e.variant || "default";
  var b = s();
  V(m, () => ({
    ...v(a),
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
    M,
    {
      label: B(e),
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
