import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as o, useImperativeHandle as F } from "react";
import { getFieldLabel as b } from "./util.js";
import { useFieldManager as v, getFieldHandler as I, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { TimeInput as R } from "@mantine/dates";
const P = h(function(e, l) {
  const n = v(e.attribute, e), { getError: i, getValue: s, setValue: u, mutateOptions: c, refreshError: B } = n, m = l || o(null), f = i(), d = o(null), g = s();
  F(m, () => ({
    ...I(n),
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
    M,
    {
      label: b(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        R,
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
