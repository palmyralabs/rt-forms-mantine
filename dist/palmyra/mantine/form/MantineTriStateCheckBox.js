import { jsx as r, Fragment as C } from "react/jsx-runtime";
import { useFieldManager as h, getFieldHandler as F, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { forwardRef as B, useRef as c, useImperativeHandle as k } from "react";
import { TriStateCheckBox as v } from "../ext/TriStateCheckBox.js";
import { getFieldLabel as x } from "./util.js";
const V = B(function(e, a) {
  const n = h(e.attribute, e), { getError: s, getValue: o, setValue: u, mutateOptions: m, refreshError: O } = n, d = a || c(null), f = o() ? o() : void 0, l = c(null), g = s();
  k(d, () => ({
    ...F(n),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    setOptions(R) {
    },
    getOptions() {
    }
  }), [n]);
  var i = n.getFieldProps();
  return i.onChange = (t) => {
    e.readOnly || (u(t), e.onChange && e.onChange(t.currentTarget.checked));
  }, i.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ r(C, { children: !m.visible && /* @__PURE__ */ r(
    b,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(v, { value: f, error: g.message, ...e })
    }
  ) });
});
export {
  V as MantineTriStateCheckBox
};
