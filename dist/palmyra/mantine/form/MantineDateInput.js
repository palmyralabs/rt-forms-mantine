import { jsx as r, Fragment as y } from "react/jsx-runtime";
import { DateInput as D } from "@mantine/dates";
import { useFieldManager as I, getFieldHandler as B, FieldDecorator as L } from "@palmyralabs/rt-forms";
import o from "dayjs";
import { useRef as M, useImperativeHandle as P } from "react";
import { F as R } from "../../../chunks/index3.js";
import { getDefaultDatePattern as S, DateUtils as V } from "./DateUtils.js";
import { getFieldLabel as j } from "./util.js";
function G(e) {
  const i = e.valueFormat || S(), s = e.type, { parse: u, format: c, revert: m } = V(e), a = I(e.attribute, e, { format: c, parse: u }), { getError: f, getValue: g, setValue: n, mutateOptions: d, refreshError: x } = a, C = f(), F = g(), h = M(null);
  P(e.ref, () => ({
    ...B(a),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var { serverPattern: E, ...l } = a.getFieldProps();
  l.onChange = (t) => {
    e.readOnly || (s == "range" ? n(t ? [o(t[0]), o(t[1])] : void 0) : n(t ? o(t) : void 0), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const v = m(F), b = e.rightSection ? e.rightSection : /* @__PURE__ */ r(R, {});
  return /* @__PURE__ */ r(y, { children: !d.visible && /* @__PURE__ */ r(
    L,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        D,
        {
          ...l,
          value: v,
          type: e.type,
          valueFormat: i,
          error: C.message,
          label: e.label,
          rightSection: b
        }
      )
    }
  ) });
}
export {
  G as MantineDateInput
};
