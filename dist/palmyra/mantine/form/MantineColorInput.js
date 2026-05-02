import { jsx as a, Fragment as f } from "react/jsx-runtime";
import { ColorInput as C } from "@mantine/core";
import { useFieldManager as g, getFieldHandler as h, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as v } from "react";
import { getFieldLabel as B } from "./util.js";
function O(e) {
  const t = g(e.attribute, e), { getError: o, getValue: i, setValue: u, mutateOptions: s, refreshError: I } = t, c = o(), r = F(null), m = e.variant || "default";
  v(e.ref, () => ({
    ...h(t),
    focus() {
      r.current.focus();
    }
  }), [t]);
  var n = t.getFieldProps();
  n.onChange = (l) => {
    e.readOnly || (u(l), e.onChange && e.onChange(l));
  }, n.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  };
  const d = i();
  return /* @__PURE__ */ a(f, { children: !s.visible && /* @__PURE__ */ a(
    b,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        C,
        {
          label: e.label,
          variant: m,
          ref: r,
          ...n,
          value: d,
          placeholder: e.placeholder,
          error: c.message
        }
      )
    }
  ) });
}
export {
  O as MantineColorInput
};
