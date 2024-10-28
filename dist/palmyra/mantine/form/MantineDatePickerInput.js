import { jsx as l, Fragment as I } from "react/jsx-runtime";
import { forwardRef as P, useRef as s, useImperativeHandle as R } from "react";
import { getFieldLabel as Y } from "./util.js";
import { useFieldManager as k, getFieldHandler as L, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { DatePickerInput as j } from "@mantine/dates";
import o from "dayjs";
import { DateUtils as x } from "./DateUtils.js";
const A = P(function(e, i) {
  const u = e.valueFormat || "YYYY-MM-DD", c = e.type, { parse: m, format: f, revert: d } = x(e), a = k(e.attribute, e, { format: f, parse: m }), { getError: g, getValue: C, setValue: n, mutateOptions: F, refreshError: v } = a, b = i || s(null), h = g(), y = C(), D = s(null);
  R(b, () => ({
    ...L(a),
    focus() {
      D.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var { ...r } = a.getFieldProps();
  r.onChange = (t) => {
    e.readOnly || (c == "range" ? n(t ? [o(t[0]), o(t[1])] : void 0) : n(t ? o(t) : void 0), e.onChange && e.onChange(t));
  }, r.onBlur = v;
  const M = d(y);
  return /* @__PURE__ */ l(I, { children: !F.visible && /* @__PURE__ */ l(
    V,
    {
      label: Y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        j,
        {
          ...r,
          value: M,
          type: e.type,
          valueFormat: u,
          error: h.message,
          label: e.label
        }
      )
    }
  ) });
});
export {
  A as MantineDatePickerInput
};
