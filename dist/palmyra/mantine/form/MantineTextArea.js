import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { forwardRef as h, useRef as u, useImperativeHandle as F } from "react";
import { useFieldManager as v, getFieldHandler as x, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { Textarea as V } from "@mantine/core";
const j = h(function(e, r) {
  const t = v(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: f, refreshError: L } = t, m = r || u(null), d = i(), o = u(null), g = e.variant || "default";
  F(m, () => ({
    ...x(t),
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
    M,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        V,
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
