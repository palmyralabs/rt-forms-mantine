import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as b, useRef as i, useImperativeHandle as F } from "react";
import { useFieldManager as v, getFieldHandler as I, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { ColorInput as B } from "@mantine/core";
const w = b(function(e, r) {
  const t = v(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: m, refreshError: x } = t, d = r || i(null), f = u(), o = i(null), C = e.variant || "default";
  F(d, () => ({
    ...I(t),
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
    M,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        B,
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
