import { jsx as n, Fragment as D } from "react/jsx-runtime";
import { forwardRef as v, useRef as u, useImperativeHandle as b } from "react";
import { getFieldLabel as M } from "./util.js";
import { useFieldManager as P, getFieldHandler as V, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { DateTimePicker as Y } from "@mantine/dates";
const E = v(function(e, l) {
  const s = e.displayPattern || e.serverPattern || "YYYY-MM-DD", t = P(e.attribute, e), { getError: c, getValue: i, setValue: m, mutateOptions: f, refreshError: d } = t, g = l || u(null), C = c(), F = u(null);
  b(g, () => ({
    ...V(t),
    focus() {
      F.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (r) => {
    e.readOnly || (m(r), e.onChange && e.onChange(r));
  }, a.onBlur = d;
  var o;
  i() != "" && (o = new Date(i()));
  const h = e.defaultValue ? new Date(e.defaultValue) : "";
  return /* @__PURE__ */ n(D, { children: !f.visible && /* @__PURE__ */ n(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        Y,
        {
          defaultValue: h,
          ...a,
          value: o,
          valueFormat: s,
          error: C.message
        }
      )
    }
  ) });
});
export {
  E as MantineDateTimePicker
};
