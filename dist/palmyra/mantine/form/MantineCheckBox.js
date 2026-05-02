import { jsx as r, Fragment as m } from "react/jsx-runtime";
import { Checkbox as h } from "@mantine/core";
import { useFieldManager as g, getFieldHandler as C, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { useRef as k, useImperativeHandle as F } from "react";
import { getFieldLabel as O } from "./util.js";
function M(e) {
  const a = g(e.attribute, e), { getError: u, getValue: i, setValue: o, mutateOptions: d, refreshError: v } = a, c = i() == !0, l = k(null), s = u();
  F(e.ref, () => ({
    ...C(a),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    setOptions(f) {
    },
    getOptions() {
    }
  }), [a]);
  var n = a.getFieldProps();
  return n.onChange = (t, f) => {
    e.readOnly || (o(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ r(m, { children: !d.visible && /* @__PURE__ */ r(
    b,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        h,
        {
          ...n,
          defaultChecked: e.defaultChecked,
          checked: c,
          value: c,
          defaultValue: e.defaultValue,
          disabled: e.disabled,
          readOnly: e.readOnly,
          ref: (t) => {
            l.current = t;
          },
          label: e.label,
          error: s.message
        }
      )
    }
  ) });
}
export {
  M as MantineCheckBox
};
