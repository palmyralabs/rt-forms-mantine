import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as o, useImperativeHandle as b } from "react";
import { getFieldLabel as v } from "./util.js";
import { useFieldManager as I, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { TimeInput as y } from "@mantine/dates";
const V = F(function(e, l) {
  const t = I(e.attribute, e), { getError: s, getValue: i, setValue: u, mutateOptions: c, refreshError: m } = t, d = l || o(null), f = s(), g = o(null), C = i();
  b(d, () => ({
    ...M(t),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var { serverPattern: T, ...n } = t.getFieldProps();
  return n.onChange = (r) => {
    e.readOnly || (u(r.target.value), e.onChange && e.onChange(r));
  }, n.onBlur = m, /* @__PURE__ */ a(h, { children: !c.visible && /* @__PURE__ */ a(
    R,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        y,
        {
          ...n,
          value: C,
          type: e.type,
          error: f.message
        }
      )
    }
  ) });
});
export {
  V as MantineTimeInput
};
