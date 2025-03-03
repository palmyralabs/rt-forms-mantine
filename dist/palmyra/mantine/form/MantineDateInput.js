import { jsx as a, Fragment as v } from "react/jsx-runtime";
import { forwardRef as y, useRef as i, useImperativeHandle as D } from "react";
import { getFieldLabel as I } from "./util.js";
import { useFieldManager as M, getFieldHandler as P, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { DateInput as V } from "@mantine/dates";
import B from "dayjs";
import { getDefaultDatePattern as L } from "./DateUtils.js";
const A = y(function(e, o) {
  const s = e.valueFormat || e.serverPattern || L(), u = (t) => {
    if (t)
      return B(t, l);
  }, m = (t) => t && t.isValid && t.isValid() ? t.format(l) : null, r = M(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: x } = r, C = o || i(null), F = c(), h = i(null), b = f();
  D(C, () => ({
    ...P(r),
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
    R,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        V,
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
