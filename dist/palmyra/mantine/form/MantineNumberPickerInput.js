import { jsx as r, Fragment as d } from "react/jsx-runtime";
import { useFieldManager as f, getFieldHandler as b, FieldDecorator as g } from "@palmyralabs/rt-forms";
import { useImperativeHandle as C } from "react";
import { NumberPickerInput as h } from "./internal/NumberPickerInput.js";
import { getFieldLabel as F } from "./util.js";
function P(e) {
  const a = f(e.attribute, e), { getError: n, getValue: o, setValue: i, mutateOptions: u, refreshError: v } = a, s = n(), c = e.variant || "default";
  var m = o();
  C(e.ref, () => ({
    ...b(a),
    focus() {
    }
  }), [a]);
  var t = a.getFieldProps();
  return t.onChange = (l) => {
    i(l);
  }, t.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  }, /* @__PURE__ */ r(d, { children: !u.visible && /* @__PURE__ */ r(
    g,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        h,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: c,
          ...t,
          placeholder: e.placeholder,
          value: m,
          error: s.message
        }
      )
    }
  ) });
}
export {
  P as MantineNumberPickerInput
};
