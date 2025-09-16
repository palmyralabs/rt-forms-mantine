import { jsx as a, Fragment as b } from "react/jsx-runtime";
import { DateTimePicker as v } from "@mantine/dates";
import { useFieldManager as D, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import T from "dayjs";
import { forwardRef as V, useRef as l, useImperativeHandle as k } from "react";
import { getDefaultDateTimePattern as y } from "./DateUtils.js";
import { getFieldLabel as B } from "./util.js";
const z = V(function(e, o) {
  const s = e.valueFormat || e.serverPattern || y(), u = (t) => {
    if (t)
      return T(t, i);
  }, m = (t) => t && t.isValid && t.isValid() ? t.format(i) : null, r = D(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: j } = r, C = o || l(null), F = c(), h = l(null);
  k(C, () => ({
    ...M(r),
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
  const P = f();
  return /* @__PURE__ */ a(b, { children: !g.visible && /* @__PURE__ */ a(
    R,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        v,
        {
          ...n,
          value: P,
          valueFormat: s,
          error: F.message
        }
      )
    }
  ) });
});
export {
  z as MantineDateTimePicker
};
