import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as b, useRef as o, useImperativeHandle as k } from "react";
import { useFieldManager as F, getFieldHandler as O, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as v } from "./util.js";
import { C as M } from "../../chunks/Checkbox.js";
const V = b(function(e, l) {
  const n = F(e.attribute, e), { getError: s, getValue: i, setValue: u, mutateOptions: d } = n, m = l || o(null), f = i() == !0, r = o(null), g = s();
  k(m, () => ({
    ...O(n),
    focus() {
      r.current.checked = !0, r.current.focus();
    },
    setOptions(h) {
    },
    getOptions() {
    }
  }), [n]);
  var c = n.getFieldProps();
  return c.onChange = (t, h) => {
    e.readOnly || (u(t.currentTarget.checked), e.onChange && e.onChange(t.currentTarget.checked));
  }, /* @__PURE__ */ a(C, { children: !d.visible && /* @__PURE__ */ a(
    x,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        M,
        {
          ...c,
          checked: f,
          disabled: e.disabled,
          readOnly: e.readOnly,
          ref: (t) => {
            r.current = t;
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
