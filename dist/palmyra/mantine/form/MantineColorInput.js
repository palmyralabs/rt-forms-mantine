import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { ColorInput as b } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as v, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { forwardRef as M, useRef as i, useImperativeHandle as R } from "react";
import { getFieldLabel as B } from "./util.js";
const w = M(function(e, r) {
  const t = F(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: m, refreshError: x } = t, d = r || i(null), f = u(), o = i(null), C = e.variant || "default";
  R(d, () => ({
    ...v(t),
    focus() {
      o.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  l.onChange = (n) => {
    e.readOnly || (c(n), e.onChange && e.onChange(n));
  }, l.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  };
  const g = s();
  return /* @__PURE__ */ a(h, { children: !m.visible && /* @__PURE__ */ a(
    I,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        b,
        {
          label: e.label,
          variant: C,
          ref: o,
          ...l,
          value: g,
          placeholder: e.placeholder,
          error: f.message
        }
      )
    }
  ) });
});
export {
  w as MantineColorInput
};
