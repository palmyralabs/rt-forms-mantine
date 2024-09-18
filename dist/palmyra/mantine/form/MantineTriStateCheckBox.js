import { jsx as n, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as b } from "react";
import { useFieldManager as k, getFieldHandler as v, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as B } from "./util.js";
import { TriStateCheckBox as M } from "../ext/TriStateCheckBox.js";
const V = F(function(e, a) {
  const t = k(e.attribute, e), { getError: c, getValue: o, setValue: u, mutateOptions: m, refreshError: d } = t, f = a || s(null), g = o() ? o() : void 0, l = s(null), C = c();
  b(f, () => ({
    ...v(t),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    setOptions(R) {
    },
    getOptions() {
    }
  }), [t]);
  var i = t.getFieldProps();
  return i.onChange = (r) => {
    e.readOnly || (u(r), e.onChange && e.onChange(r.currentTarget.checked));
  }, i.onBlur = d, /* @__PURE__ */ n(h, { children: !m.visible && /* @__PURE__ */ n(
    x,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(M, { value: g, error: C.message, ...e })
    }
  ) });
});
export {
  V as MantineTriStateCheckBox
};
