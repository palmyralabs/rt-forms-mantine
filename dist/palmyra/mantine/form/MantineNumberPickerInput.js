import { jsx as a, Fragment as F } from "react/jsx-runtime";
import { forwardRef as h, useRef as u, useImperativeHandle as v } from "react";
import { useFieldManager as M, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
import { NumberPickerInput as L } from "./internal/NumberPickerInput.js";
const j = h(function(e, l) {
  const t = M(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: m, refreshError: d } = t, f = l || u(null), b = i(), n = u(null), g = e.variant || "default";
  var C = s();
  v(f, () => ({
    ...R(t),
    focus() {
      n.current.focus();
    }
  }), [t]);
  var r = t.getFieldProps();
  return r.onChange = (o) => {
    c(o);
  }, r.onBlur = d, /* @__PURE__ */ a(F, { children: !m.visible && /* @__PURE__ */ a(
    V,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        L,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: g,
          ref: n,
          ...r,
          placeholder: e.placeholder,
          value: C,
          error: b.message
        }
      )
    }
  ) });
});
export {
  j as MantineNumberPickerInput
};
