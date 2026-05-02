import { jsx as n, Fragment as y } from "react/jsx-runtime";
import { DatePickerInput as D } from "@mantine/dates";
import { useFieldManager as P, getFieldHandler as I, FieldDecorator as B } from "@palmyralabs/rt-forms";
import i from "dayjs";
import { useRef as L, useImperativeHandle as M } from "react";
import { F as R } from "../../../chunks/index3.js";
import { getDefaultDatePattern as S, DateUtils as V } from "./DateUtils.js";
import { getFieldLabel as j } from "./util.js";
function G(e) {
  const o = e.valueFormat || S(), s = e.type, { parse: u, format: c, revert: m } = V(e), a = P(e.attribute, e, { format: c, parse: u }), { getError: f, getValue: g, setValue: r, mutateOptions: d, refreshError: k } = a, C = f(), F = g(), h = L(null);
  M(e.ref, () => ({
    ...I(a),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var { serverPattern: x, ...l } = a.getFieldProps();
  l.onChange = (t) => {
    e.readOnly || (s == "range" ? r(t ? [i(t[0]), i(t[1])] : void 0) : r(t ? i(t) : void 0), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const v = m(F), b = e.rightSection ? e.rightSection : /* @__PURE__ */ n(R, {});
  return /* @__PURE__ */ n(y, { children: !d.visible && /* @__PURE__ */ n(
    B,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        D,
        {
          ...l,
          value: v,
          type: e.type,
          valueFormat: o,
          error: C.message,
          label: e.label,
          rightSection: b
        }
      )
    }
  ) });
}
export {
  G as MantineDatePickerInput
};
