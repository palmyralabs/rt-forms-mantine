import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { DateTimePicker as V } from "@mantine/dates";
import { useFieldManager as D, getFieldHandler as y, FieldDecorator as B } from "@palmyralabs/rt-forms";
import s from "dayjs";
import { useRef as L, useImperativeHandle as M } from "react";
import { getDefaultDateTimePattern as u } from "./DateUtils.js";
import { getFieldLabel as T } from "./util.js";
function q(e) {
  const m = e.valueFormat || e.serverPattern || u(), o = e.serverPattern || e.valueFormat || u(), c = (t) => {
    if (t)
      return s(t, o);
  }, f = (t) => t && t.isValid && t.isValid() ? t.format(o) : null, n = D(e.attribute, e, { format: f, parse: c }), { getError: d, getValue: g, setValue: C, mutateOptions: F, refreshError: j } = n, h = d(), v = L(null);
  M(e.ref, () => ({
    ...y(n),
    focus() {
      v.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  const a = { ...n.getFieldProps() };
  delete a.serverPattern, a.onChange = (t) => {
    if (!e.readOnly) {
      const i = t ? s(t) : null;
      C(i), e.onChange && e.onChange(i);
    }
  }, a.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const r = g(), P = r ? r.isValid ? r.isValid() ? r.toDate() : null : r : null;
  return /* @__PURE__ */ l(b, { children: !F.visible && /* @__PURE__ */ l(
    B,
    {
      label: T(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        V,
        {
          ...a,
          value: P,
          valueFormat: m,
          error: h.message
        }
      )
    }
  ) });
}
export {
  q as MantineDateTimePicker
};
