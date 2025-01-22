import { jsx as a, Fragment as M } from "react/jsx-runtime";
import { forwardRef as P, useRef as i, useImperativeHandle as v } from "react";
import { getFieldLabel as D } from "./util.js";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as Y } from "@palmyralabs/rt-forms";
import { DateTimePicker as k } from "@mantine/dates";
import y from "dayjs";
const I = P(function(e, l) {
  const s = e.valueFormat || e.serverPattern || "YYYY-MM-DD hh:mm:ss", u = (r) => {
    if (r)
      return y(r, o);
  }, m = (r) => r && r.isValid && r.isValid() ? r.format(o) : null, t = R(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: L } = t, C = l || i(null), F = c(), h = i(null);
  v(C, () => ({
    ...V(t),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var { serverPattern: o, ...n } = t.getFieldProps();
  n.onChange = (r) => {
    e.readOnly || (d(r), e.onChange && e.onChange(r));
  }, n.onBlur = (r) => {
    e.onBlur && e.onBlur(r);
  };
  const b = f();
  return /* @__PURE__ */ a(M, { children: !g.visible && /* @__PURE__ */ a(
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
