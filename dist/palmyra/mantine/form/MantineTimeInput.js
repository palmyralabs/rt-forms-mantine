import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { TimeInput as h } from "@mantine/dates";
import { useFieldManager as F, getFieldHandler as b, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { forwardRef as I, useRef as o, useImperativeHandle as M } from "react";
import { getFieldLabel as R } from "./util.js";
const P = I(function(e, l) {
  const n = F(e.attribute, e), { getError: i, getValue: s, setValue: u, mutateOptions: c, refreshError: B } = n, m = l || o(null), f = i(), d = o(null), g = s();
  M(m, () => ({
    ...b(n),
    focus() {
      d.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var { serverPattern: L, ...r } = n.getFieldProps();
  return r.onChange = (t) => {
    e.readOnly || (u(t.target.value), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(C, { children: !c.visible && /* @__PURE__ */ a(
    v,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        h,
        {
          ...r,
          value: g,
          type: e.type,
          error: f.message
        }
      )
    }
  ) });
});
export {
  P as MantineTimeInput
};
