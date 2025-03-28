import { jsx as r, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as c, useImperativeHandle as F } from "react";
import { useFieldManager as b, getFieldHandler as B, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { getFieldLabel as v } from "./util.js";
import { TriStateCheckBox as x } from "../ext/TriStateCheckBox.js";
const V = h(function(e, a) {
  const n = b(e.attribute, e), { getError: s, getValue: o, setValue: u, mutateOptions: m, refreshError: O } = n, d = a || c(null), f = o() ? o() : void 0, l = c(null), g = s();
  F(d, () => ({
    ...B(n),
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
    k,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(x, { value: f, error: g.message, ...e })
    }
  ) });
});
export {
  V as MantineTriStateCheckBox
};
