import { jsx as n, Fragment as f } from "react/jsx-runtime";
import { NumberInput as g } from "@mantine/core";
import { useFieldManager as C, getFieldHandler as b, FieldDecorator as h } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as v } from "react";
import { getFieldLabel as V } from "./util.js";
function I(e) {
  const l = C(e.attribute, e), { getError: u, getValue: i, setValue: o, mutateOptions: s, refreshError: B } = l, c = u(), r = F(null), m = e.variant || "default";
  var d = i();
  v(e.ref, () => ({
    ...b(l),
    focus() {
      r.current.focus();
    }
  }), [l]);
  var t = l.getFieldProps();
  return t.onChange = (a) => {
    e.readOnly || (o(a), e.onChange && e.onChange(a));
  }, t.onBlur = (a) => {
    e.onBlur && e.onBlur(a);
  }, /* @__PURE__ */ n(f, { children: !s.visible && /* @__PURE__ */ n(
    h,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        g,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: m,
          ref: r,
          ...t,
          placeholder: e.placeholder,
          value: d,
          error: c.message
        }
      )
    }
  ) });
}
export {
  I as MantineNumberField
};
