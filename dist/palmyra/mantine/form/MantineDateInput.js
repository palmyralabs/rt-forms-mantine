import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as M, useRef as i, useImperativeHandle as y } from "react";
import { getFieldLabel as D } from "./util.js";
import { useFieldManager as I, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { DateInput as Y } from "@mantine/dates";
import B from "dayjs";
const q = M(function(e, o) {
  const s = e.valueFormat || e.serverPattern || "YYYY-MM-DD", u = (t) => {
    if (t)
      return B(t, l);
  }, c = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(l);
  }, r = I(e.attribute, e, { format: c, parse: u }), { getError: m, getValue: f, setValue: d, mutateOptions: g, refreshError: P } = r, C = o || i(null), F = m(), h = i(null), b = f();
  y(C, () => ({
    ...R(r),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: l, ...n } = r.getFieldProps();
  return n.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(v, { children: !g.visible && /* @__PURE__ */ a(
    V,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        Y,
        {
          ...n,
          value: b,
          type: e.type,
          valueFormat: s,
          error: F.message
        }
      )
    }
  ) });
});
export {
  q as MantineDateInput
};
