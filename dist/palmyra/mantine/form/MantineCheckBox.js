import { jsx as r, Fragment as g } from "react/jsx-runtime";
import { forwardRef as b, useRef as o, useImperativeHandle as k } from "react";
import { useFieldManager as F, getFieldHandler as O, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as B } from "./util.js";
import { Checkbox as v } from "@mantine/core";
const T = b(function(e, c) {
  const n = F(e.attribute, e), { getError: i, getValue: d, setValue: s, mutateOptions: f, refreshError: R } = n, m = c || o(null), u = d() == !0, a = o(null), h = i();
  k(m, () => ({
    ...O(n),
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
    x,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        v,
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
