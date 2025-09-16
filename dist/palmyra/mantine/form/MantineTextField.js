import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { TextInput as F } from "@mantine/core";
import { useFieldManager as b, getFieldHandler as v, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { forwardRef as M, useRef as i, useImperativeHandle as R } from "react";
import { getFieldLabel as B } from "./util.js";
const j = M(function(e, r) {
  const l = b(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: d, refreshError: T } = l, m = r || i(null), f = u(), o = i(null), g = e.variant || "default";
  R(m, () => ({
    ...v(l),
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
    x,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        F,
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
