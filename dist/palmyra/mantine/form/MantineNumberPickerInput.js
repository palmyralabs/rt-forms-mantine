import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as h } from "react";
import { useFieldManager as v, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { NumberPickerInput as B } from "./internal/NumberPickerInput.js";
const H = F(function(e, n) {
  const t = v(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: m, refreshError: L } = t, d = n || u(null), f = i(), o = u(null), b = e.variant || "default";
  var g = s();
  h(d, () => ({
    ...M(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var r = t.getFieldProps();
  return r.onChange = (l) => {
    c(l);
  }, r.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  }, /* @__PURE__ */ a(C, { children: !m.visible && /* @__PURE__ */ a(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        B,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: b,
          ref: o,
          ...r,
          placeholder: e.placeholder,
          value: g,
          error: f.message
        }
      )
    }
  ) });
});
export {
  H as MantineNumberPickerInput
};
