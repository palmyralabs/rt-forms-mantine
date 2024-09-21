import { jsx as n, Fragment as F } from "react/jsx-runtime";
import { forwardRef as b, useRef as i, useImperativeHandle as v } from "react";
import { useFieldManager as x, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as T } from "./util.js";
import { T as L } from "../../../chunks/TextInput.js";
const w = b(function(e, r) {
  const t = x(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: d, refreshError: m } = t, f = r || i(null), g = s(), o = i(null), C = e.variant || "default";
  v(f, () => ({
    ...M(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (l) => {
    e.readOnly || (c(l.target.value), e.onChange && e.onChange(l));
  }, a.onBlur = m;
  const h = u();
  return /* @__PURE__ */ n(F, { children: !d.visible && /* @__PURE__ */ n(
    R,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
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
  w as MantineTextField
};
