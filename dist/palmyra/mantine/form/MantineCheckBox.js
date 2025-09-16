import { jsx as r, Fragment as g } from "react/jsx-runtime";
import { Checkbox as b } from "@mantine/core";
import { useFieldManager as k, getFieldHandler as F, FieldDecorator as O } from "@palmyralabs/rt-forms";
import { forwardRef as x, useRef as o, useImperativeHandle as B } from "react";
import { getFieldLabel as v } from "./util.js";
const T = x(function(e, c) {
  const n = k(e.attribute, e), { getError: i, getValue: d, setValue: s, mutateOptions: f, refreshError: R } = n, m = c || o(null), u = d() == !0, a = o(null), h = i();
  B(m, () => ({
    ...F(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    setOptions(C) {
    },
    getOptions() {
    }
  }), [n]);
  var l = n.getFieldProps();
  return l.onChange = (t, C) => {
    e.readOnly || (s(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ r(g, { children: !f.visible && /* @__PURE__ */ r(
    O,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        b,
        {
          ...l,
          defaultChecked: e.defaultChecked,
          checked: u,
          value: u,
          defaultValue: e.defaultValue,
          disabled: e.disabled,
          readOnly: e.readOnly,
          ref: (t) => {
            a.current = t;
          },
          label: e.label,
          error: h.message
        }
      )
    }
  ) });
});
export {
  T as MantineCheckBox
};
