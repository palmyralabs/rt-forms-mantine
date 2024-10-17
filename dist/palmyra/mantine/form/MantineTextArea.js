import { jsx as l, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as v } from "react";
import { useFieldManager as x, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { Textarea as L } from "@mantine/core";
const w = F(function(e, r) {
  const a = x(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: f, refreshError: m } = a, d = r || i(null), g = s(), o = i(null), C = e.variant || "default";
  v(d, () => ({
    ...M(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var t = a.getFieldProps();
  t.onChange = (n) => {
    e.readOnly || (c(n.target.value), e.onChange && e.onChange(n));
  }, t.onBlur = m;
  const b = u();
  return /* @__PURE__ */ l(h, { children: !f.visible && /* @__PURE__ */ l(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        L,
        {
          variant: C,
          label: e.label,
          ref: o,
          defaultValue: e.defaultValue,
          ...t,
          value: b,
          error: g.message
        }
      )
    }
  ) });
});
export {
  w as MantineTextArea
};
