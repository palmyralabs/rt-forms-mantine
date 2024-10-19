import { jsx as a, Fragment as M } from "react/jsx-runtime";
import { forwardRef as y, useRef as s, useImperativeHandle as D } from "react";
import { getFieldLabel as I } from "./util.js";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as Y } from "@palmyralabs/rt-forms";
import { DateInput as L } from "@mantine/dates";
import P from "dayjs";
const q = y(function(e, o) {
  const i = e.valueFormat || e.serverPattern || "YYYY-MM-DD", u = (t) => {
    if (t)
      return P(t, l);
  }, c = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(l);
  }, r = R(e.attribute, e, { format: c, parse: u }), { getError: m, getValue: f, setValue: d, mutateOptions: g, refreshError: C } = r, F = o || s(null), h = m(), b = s(null), v = f();
  D(F, () => ({
    ...V(r),
    focus() {
      b.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: l, ...n } = r.getFieldProps();
  return n.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, n.onBlur = C, /* @__PURE__ */ a(M, { children: !g.visible && /* @__PURE__ */ a(
    Y,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        L,
        {
          ...n,
          value: v,
          type: e.type,
          valueFormat: i,
          error: h.message
        }
      )
    }
  ) });
});
export {
  q as MantineDateInput
};
