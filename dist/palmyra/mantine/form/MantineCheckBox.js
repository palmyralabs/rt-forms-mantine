import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as k, useRef as u, useImperativeHandle as F } from "react";
import { useFieldManager as O, getFieldHandler as x, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { C as R } from "../../../chunks/Checkbox.js";
const T = k(function(e, c) {
  const a = O(e.attribute, e), { getError: s, getValue: d, setValue: i, mutateOptions: f, refreshError: m } = a, h = c || u(null), o = d() == !0, n = u(null), C = s();
  F(h, () => ({
    ...x(a),
    focus() {
      n.current.checked = !0, n.current.focus();
    },
    setOptions(g) {
    },
    getOptions() {
    }
  }), [a]);
  var r = a.getFieldProps();
  return r.onChange = (t, g) => {
    e.readOnly || (i(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
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
            n.current = t;
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
