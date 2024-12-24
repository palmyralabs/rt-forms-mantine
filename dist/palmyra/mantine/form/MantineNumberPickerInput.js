import { jsx as r, Fragment as b } from "react/jsx-runtime";
import { forwardRef as g, useRef as C, useImperativeHandle as F } from "react";
import { useFieldManager as h, getFieldHandler as v, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { NumberPickerInput as B } from "./internal/NumberPickerInput.js";
const E = g(function(e, n) {
  const a = h(e.attribute, e), { getError: o, getValue: u, setValue: i, mutateOptions: s, refreshError: L } = a, c = n || C(null), m = o(), d = e.variant || "default";
  var f = u();
  F(c, () => ({
    ...v(a),
    focus() {
    }
  }), [a]);
  var t = a.getFieldProps();
  return t.onChange = (l) => {
    i(l);
  }, t.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  }, /* @__PURE__ */ r(b, { children: !s.visible && /* @__PURE__ */ r(
    M,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        B,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: d,
          ...t,
          placeholder: e.placeholder,
          value: f,
          error: m.message
        }
      )
    }
  ) });
});
export {
  E as MantineNumberPickerInput
};
