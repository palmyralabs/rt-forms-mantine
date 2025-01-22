import { jsx as a, Fragment as b } from "react/jsx-runtime";
import { forwardRef as v, useRef as l, useImperativeHandle as D } from "react";
import { getFieldLabel as M } from "./util.js";
import { useFieldManager as R, getFieldHandler as T, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { DateTimePicker as k } from "@mantine/dates";
import y from "dayjs";
import { getDefaultDateTimePattern as B } from "./DateUtils.js";
const z = v(function(e, o) {
  const s = e.valueFormat || e.serverPattern || B(), u = (t) => {
    if (t)
      return y(t, i);
  }, m = (t) => t && t.isValid && t.isValid() ? t.format(i) : null, r = R(e.attribute, e, { format: m, parse: u }), { getError: c, getValue: f, setValue: d, mutateOptions: g, refreshError: j } = r, C = o || l(null), F = c(), h = l(null);
  D(C, () => ({
    ...T(r),
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
    V,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        k,
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
