import { jsx as a, Fragment as b } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as v } from "react";
import { useFieldManager as I, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { ColorInput as x } from "@mantine/core";
const y = F(function(e, r) {
  const t = I(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: m, refreshError: d } = t, f = r || i(null), C = s(), o = i(null), g = e.variant || "default";
  v(f, () => ({
    ...M(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var n = t.getFieldProps();
  n.onChange = (l) => {
    e.readOnly || (c(l), e.onChange && e.onChange(l));
  }, n.onBlur = d;
  const h = u();
  return /* @__PURE__ */ a(b, { children: !m.visible && /* @__PURE__ */ a(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        x,
        {
          label: e.label,
          variant: g,
          ref: o,
          ...n,
          value: h,
          placeholder: e.placeholder,
          error: C.message
        }
      )
    }
  ) });
});
export {
  y as MantineColorInput
};
