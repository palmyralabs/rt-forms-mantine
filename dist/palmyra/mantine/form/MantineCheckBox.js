import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as k, useRef as o, useImperativeHandle as F } from "react";
import { useFieldManager as O, getFieldHandler as x, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { C as R } from "../../../chunks/Checkbox.js";
const V = k(function(e, c) {
  const r = O(e.attribute, e), { getError: s, getValue: i, setValue: u, mutateOptions: d, refreshError: m } = r, f = c || o(null), h = i() == !0, n = o(null), g = s();
  F(f, () => ({
    ...x(r),
    focus() {
      n.current.checked = !0, n.current.focus();
    },
    setOptions(C) {
    },
    getOptions() {
    }
  }), [r]);
  var a = r.getFieldProps();
  return a.onChange = (t, C) => {
    e.readOnly || (u(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
  }, a.onBlur = m, /* @__PURE__ */ l(b, { children: !d.visible && /* @__PURE__ */ l(
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
          ...a,
          checked: h,
          disabled: e.disabled,
          readOnly: e.readOnly,
          ref: (t) => {
            n.current = t;
          },
          label: e.label,
          error: g.message
        }
      )
    }
  ) });
});
export {
  V as MantineCheckBox
};
