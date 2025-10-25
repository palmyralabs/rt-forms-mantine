import { jsx as r, Fragment as I } from "react/jsx-runtime";
import { DatePickerInput as R } from "@mantine/dates";
import { useFieldManager as M, getFieldHandler as k, FieldDecorator as B } from "@palmyralabs/rt-forms";
import o from "dayjs";
import { forwardRef as L, useRef as s, useImperativeHandle as S } from "react";
import { F as V } from "../../../chunks/index3.js";
import { getDefaultDatePattern as j, DateUtils as x } from "./DateUtils.js";
import { getFieldLabel as E } from "./util.js";
const Q = L(function(e, i) {
  const c = e.valueFormat || j(), u = e.type, { parse: m, format: f, revert: d } = x(e), a = M(e.attribute, e, { format: f, parse: m }), { getError: g, getValue: C, setValue: n, mutateOptions: F, refreshError: O } = a, h = i || s(null), v = g(), b = C(), y = s(null);
  S(h, () => ({
    ...k(a),
    focus() {
      y.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var { serverPattern: w, ...l } = a.getFieldProps();
  l.onChange = (t) => {
    e.readOnly || (u == "range" ? n(t ? [o(t[0]), o(t[1])] : void 0) : n(t ? o(t) : void 0), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const D = d(b), P = e.rightSection ? e.rightSection : /* @__PURE__ */ r(V, {});
  return /* @__PURE__ */ r(I, { children: !F.visible && /* @__PURE__ */ r(
    B,
    {
      label: E(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        R,
        {
          ...l,
          value: D,
          type: e.type,
          valueFormat: c,
          error: v.message,
          label: e.label,
          rightSection: P
        }
      )
    }
  ) });
});
export {
  Q as MantineDatePickerInput
};
