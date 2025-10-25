import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { DateInput as y } from "@mantine/dates";
import { useFieldManager as D, getFieldHandler as I, FieldDecorator as M } from "@palmyralabs/rt-forms";
import P from "dayjs";
import { forwardRef as R, useRef as i, useImperativeHandle as V } from "react";
import { getDefaultDatePattern as B } from "./DateUtils.js";
import { getFieldLabel as L } from "./util.js";
const A = R(function(e, o) {
  const s = e.valueFormat || e.serverPattern || B(), u = (t) => {
    if (t)
      return P(t, l);
  }, m = (t) => t && t.isValid && t.isValid() ? t.format(l) : null, r = D(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: x } = r, C = o || i(null), F = c(), h = i(null), b = f();
  V(C, () => ({
    ...I(r),
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
    M,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        y,
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
  A as MantineDateInput
};
