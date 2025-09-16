import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { Textarea as h } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as v, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { forwardRef as M, useRef as u, useImperativeHandle as R } from "react";
import { getFieldLabel as V } from "./util.js";
const j = M(function(e, r) {
  const t = F(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: f, refreshError: L } = t, m = r || u(null), d = i(), o = u(null), g = e.variant || "default";
  R(m, () => ({
    ...v(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var n = t.getFieldProps();
  n.onChange = (a) => {
    e.readOnly || (c(a.target.value), e.onChange && e.onChange(a));
  }, n.onBlur = (a) => {
    e.onBlur && e.onBlur(a);
  };
  const C = s();
  return /* @__PURE__ */ l(b, { children: !f.visible && /* @__PURE__ */ l(
    x,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        h,
        {
          variant: g,
          label: e.label,
          ref: o,
          defaultValue: e.defaultValue,
          ...n,
          value: C,
          error: d.message
        }
      )
    }
  ) });
});
export {
  j as MantineTextArea
};
