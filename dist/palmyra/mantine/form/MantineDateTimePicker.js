import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as M, useRef as l, useImperativeHandle as P } from "react";
import { getFieldLabel as D } from "./util.js";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as Y } from "@palmyralabs/rt-forms";
import { DateTimePicker as k } from "@mantine/dates";
import y from "dayjs";
const I = M(function(e, o) {
  const s = e.valueFormat || e.serverPattern || "YYYY-MM-DD hh:mm:ss", u = (t) => {
    if (t)
      return y(t, i);
  }, m = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = R(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: L } = r, C = o || l(null), F = c(), h = l(null);
  P(C, () => ({
    ...V(r),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: i, ...n } = r.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const b = f();
  return /* @__PURE__ */ a(v, { children: !g.visible && /* @__PURE__ */ a(
    Y,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        k,
        {
          ...n,
          value: b,
          valueFormat: s,
          error: F.message
        }
      )
    }
  ) });
});
export {
  I as MantineDateTimePicker
};
