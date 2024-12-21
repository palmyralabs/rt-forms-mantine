import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as b } from "react";
import { useFieldManager as v, getFieldHandler as x, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { TextInput as B } from "@mantine/core";
const j = F(function(e, r) {
  const l = v(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: d, refreshError: T } = l, m = r || i(null), f = u(), o = i(null), g = e.variant || "default";
  b(m, () => ({
    ...x(l),
    focus() {
      o.current.focus();
    }
  }), [l]);
  var n = l.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (c(t.target.value), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const C = s();
  return /* @__PURE__ */ a(h, { children: !d.visible && /* @__PURE__ */ a(
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
          variant: g,
          ref: o,
          ...n,
          value: C,
          placeholder: e.placeholder,
          error: f.message
        }
      )
    }
  ) });
});
export {
  j as MantineTextField
};
