import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as y, useRef as i, useImperativeHandle as D } from "react";
import { getFieldLabel as P } from "./util.js";
import { useFieldManager as I, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { DatePickerInput as Y } from "@mantine/dates";
import k from "dayjs";
const q = y(function(e, l) {
  const s = e.valueFormat || "YYYY-MM-DD", u = (t) => {
    if (t)
      return k(t, o);
  }, c = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(o);
  }, r = I(e.attribute, e, { format: c, parse: u }), { getError: m, getValue: f, setValue: d, mutateOptions: g, refreshError: C } = r, F = l || i(null), b = m(), h = f(), M = i(null);
  D(F, () => ({
    ...R(r),
    focus() {
      M.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: o, ...n } = r.getFieldProps();
  return n.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, n.onBlur = C, /* @__PURE__ */ a(v, { children: !g.visible && /* @__PURE__ */ a(
    V,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        Y,
        {
          ...n,
          value: h,
          type: e.type,
          valueFormat: s,
          error: b.message,
          label: e.label
        }
      )
    }
  ) });
});
export {
  q as MantineDatePickerInput
};
