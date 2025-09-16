import { jsx as r, Fragment as b } from "react/jsx-runtime";
import { useFieldManager as g, getFieldHandler as C, FieldDecorator as F } from "@palmyralabs/rt-forms";
import { forwardRef as h, useRef as v, useImperativeHandle as M } from "react";
import { NumberPickerInput as V } from "./internal/NumberPickerInput.js";
import { getFieldLabel as B } from "./util.js";
const E = h(function(e, n) {
  const a = g(e.attribute, e), { getError: o, getValue: u, setValue: i, mutateOptions: s, refreshError: L } = a, c = n || v(null), m = o(), d = e.variant || "default";
  var f = u();
  M(c, () => ({
    ...C(a),
    focus() {
    }
  }), [a]);
  var t = a.getFieldProps();
  return t.onChange = (l) => {
    i(l);
  }, t.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  }, /* @__PURE__ */ r(b, { children: !s.visible && /* @__PURE__ */ r(
    F,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        V,
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
