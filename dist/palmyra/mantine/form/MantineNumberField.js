import { jsx as n, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as u, useImperativeHandle as v } from "react";
import { useFieldManager as M, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { NumberInput as N } from "@mantine/core";
const w = F(function(e, r) {
  const a = M(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: d, refreshError: m } = a, f = r || u(null), g = i(), o = u(null), b = e.variant || "default";
  var C = s();
  v(f, () => ({
    ...R(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var l = a.getFieldProps();
  return l.onChange = (t) => {
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  }, l.onBlur = m, /* @__PURE__ */ n(h, { children: !d.visible && /* @__PURE__ */ n(
    V,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        N,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: b,
          ref: o,
          ...l,
          placeholder: e.placeholder,
          value: C,
          error: g.message
        }
      )
    }
  ) });
});
export {
  w as MantineNumberField
};
