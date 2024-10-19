import { jsx as a, Fragment as M } from "react/jsx-runtime";
import { forwardRef as P, useRef as s, useImperativeHandle as D } from "react";
import { getFieldLabel as R } from "./util.js";
import { useFieldManager as V, getFieldHandler as Y, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { DateTimePicker as y } from "@mantine/dates";
import L from "dayjs";
const I = P(function(e, o) {
  const l = e.valueFormat || e.serverPattern || "YYYY-MM-DD hh:mm:ss", m = (t) => {
    if (t)
      return L(t, i);
  }, u = (t) => {
    if (t && t.isValid && t.isValid())
      return t.format(i);
  }, r = V(e.attribute, e, { format: u, parse: m }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: C } = r, F = o || s(null), h = c(), b = s(null);
  D(F, () => ({
    ...Y(r),
    focus() {
      b.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: i, ...n } = r.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (d(t), e.onChange && e.onChange(t));
  }, n.onBlur = C;
  const v = f();
  return /* @__PURE__ */ a(M, { children: !g.visible && /* @__PURE__ */ a(
    k,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        y,
        {
          ...n,
          value: v,
          valueFormat: l,
          error: h.message
        }
      )
    }
  ) });
});
export {
  I as MantineDateTimePicker
};
