import { jsx as l, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useRef as i, useImperativeHandle as v } from "react";
import { useFieldManager as x, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as T } from "./util.js";
import { T as L } from "../../../chunks/TextInput.js";
const y = b(function(e, r) {
  const t = x(e.attribute, e), { getError: s, getValue: c, setValue: u, mutateOptions: d, refreshError: m } = t, f = r || i(null), g = s(), o = i(null), C = e.variant || "default";
  v(f, () => ({
    ...M(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (n) => {
    e.readOnly || (u(n.target.value), e.onChange && e.onChange(n));
  }, a.onBlur = m;
  const h = c();
  return /* @__PURE__ */ l(F, { children: !d.visible && /* @__PURE__ */ l(
    R,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        L,
        {
          label: e.label,
          variant: C,
          ref: o,
          ...a,
          value: h,
          placeholder: e.placeholder,
          error: g.message
        }
      )
    }
  ) });
});
export {
  y as MantineTextField
};
