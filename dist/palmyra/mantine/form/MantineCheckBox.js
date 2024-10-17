import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as k, useRef as u, useImperativeHandle as F } from "react";
import { useFieldManager as O, getFieldHandler as x, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { Checkbox as R } from "@mantine/core";
const T = k(function(e, c) {
  const n = O(e.attribute, e), { getError: d, getValue: i, setValue: s, mutateOptions: f, refreshError: m } = n, h = c || u(null), o = i() == !0, a = u(null), C = d();
  F(h, () => ({
    ...x(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    setOptions(g) {
    },
    getOptions() {
    }
  }), [n]);
  var r = n.getFieldProps();
  return r.onChange = (t, g) => {
    e.readOnly || (s(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
  }, r.onBlur = m, /* @__PURE__ */ l(b, { children: !f.visible && /* @__PURE__ */ l(
    v,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        R,
        {
          ...r,
          defaultChecked: e.defaultChecked,
          checked: o,
          value: o,
          defaultValue: e.defaultValue,
          disabled: e.disabled,
          readOnly: e.readOnly,
          ref: (t) => {
            a.current = t;
          },
          label: e.label,
          error: C.message
        }
      )
    }
  ) });
});
export {
  T as MantineCheckBox
};
