import { jsx as l, Fragment as f } from "react/jsx-runtime";
import { PinInput as g } from "@mantine/core";
import { useFieldManager as C, getFieldHandler as h, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as v } from "react";
import { getFieldLabel as B } from "./util.js";
function H(e) {
  const t = C(e.attribute, e), { getError: o, getValue: i, setValue: u, mutateOptions: s, refreshError: I } = t, c = o(), r = F(null), m = e.variant || "default";
  v(e.ref, () => ({
    ...h(t),
    focus() {
      r.current.focus();
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (n) => {
    e.readOnly || (u(n), e.onChange && e.onChange(n));
  }, a.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  };
  const d = i();
  return /* @__PURE__ */ l(f, { children: !s.visible && /* @__PURE__ */ l(
    b,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        g,
        {
          label: e.label,
          variant: m,
          ref: r,
          ...a,
          value: d,
          placeholder: e.placeholder,
          error: c.message
        }
      )
    }
  ) });
}
export {
  H as MantinePinInput
};
