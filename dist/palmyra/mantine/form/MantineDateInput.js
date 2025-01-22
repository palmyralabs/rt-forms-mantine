import { jsx as a, Fragment as M } from "react/jsx-runtime";
import { forwardRef as v, useRef as i, useImperativeHandle as y } from "react";
import { getFieldLabel as D } from "./util.js";
import { useFieldManager as I, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { DateInput as Y } from "@mantine/dates";
import B from "dayjs";
const q = v(function(e, l) {
  const s = e.valueFormat || e.serverPattern || "YYYY-MM-DD", u = (t) => {
    if (t)
      return B(t, o);
  }, c = (t) => t && t.isValid && t.isValid() ? t.format(o) : null, n = I(e.attribute, e, { format: c, parse: u }), { getError: m, getValue: f, setValue: d, mutateOptions: g, refreshError: P } = n, C = l || i(null), F = m(), h = i(null), b = f();
  y(C, () => ({
    ...R(n),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var { serverPattern: o, ...r } = n.getFieldProps();
  return r.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(M, { children: !g.visible && /* @__PURE__ */ a(
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
          ...r,
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
