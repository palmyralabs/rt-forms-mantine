import { jsx as r, Fragment as R } from "react/jsx-runtime";
import { DateInput as M } from "@mantine/dates";
import { useFieldManager as B, getFieldHandler as L, FieldDecorator as P } from "@palmyralabs/rt-forms";
import o from "dayjs";
import { forwardRef as S, useRef as s, useImperativeHandle as V } from "react";
import { F as j } from "../../../chunks/index3.js";
import { getDefaultDatePattern as x, DateUtils as E } from "./DateUtils.js";
import { getFieldLabel as H } from "./util.js";
const Q = S(function(e, i) {
  const u = e.valueFormat || x(), c = e.type, { parse: m, format: f, revert: d } = E(e), a = B(e.attribute, e, { format: f, parse: m }), { getError: g, getValue: C, setValue: n, mutateOptions: F, refreshError: w } = a, h = i || s(null), v = g(), b = C(), y = s(null);
  V(h, () => ({
    ...L(a),
    focus() {
      y.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var { serverPattern: A, ...l } = a.getFieldProps();
  l.onChange = (t) => {
    e.readOnly || (c == "range" ? n(t ? [o(t[0]), o(t[1])] : void 0) : n(t ? o(t) : void 0), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const D = d(b), I = e.rightSection ? e.rightSection : /* @__PURE__ */ r(j, {});
  return /* @__PURE__ */ r(R, { children: !F.visible && /* @__PURE__ */ r(
    P,
    {
      label: H(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        M,
        {
          ...l,
          value: D,
          type: e.type,
          valueFormat: u,
          error: v.message,
          label: e.label,
          rightSection: I
        }
      )
    }
  ) });
});
export {
  Q as MantineDateInput
};
