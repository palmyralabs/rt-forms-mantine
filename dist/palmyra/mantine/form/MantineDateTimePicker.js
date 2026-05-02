import { jsx as a, Fragment as F } from "react/jsx-runtime";
import { DateTimePicker as h } from "@mantine/dates";
import { useFieldManager as b, getFieldHandler as v, FieldDecorator as P } from "@palmyralabs/rt-forms";
import D from "dayjs";
import { useRef as V, useImperativeHandle as y } from "react";
import { getDefaultDateTimePattern as B } from "./DateUtils.js";
import { getFieldLabel as L } from "./util.js";
function R(e) {
  const o = e.valueFormat || e.serverPattern || B(), i = (t) => {
    if (t)
      return D(t, l);
  }, s = (t) => t && t.isValid && t.isValid() ? t.format(l) : null, r = b(e.attribute, e, { format: s, parse: i }), { getError: u, getValue: m, setValue: c, mutateOptions: f, refreshError: M } = r, d = u(), g = V(null);
  y(e.ref, () => ({
    ...v(r),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var { serverPattern: l, ...n } = r.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const C = m();
  return /* @__PURE__ */ a(F, { children: !f.visible && /* @__PURE__ */ a(
    P,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        h,
        {
          ...n,
          value: C,
          valueFormat: o,
          error: d.message
        }
      )
    }
  ) });
}
export {
  R as MantineDateTimePicker
};
