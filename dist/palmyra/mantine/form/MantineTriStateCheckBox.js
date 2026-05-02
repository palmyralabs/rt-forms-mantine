import { jsx as n, Fragment as d } from "react/jsx-runtime";
import { useFieldManager as f, getFieldHandler as g, FieldDecorator as C } from "@palmyralabs/rt-forms";
import { useRef as h, useImperativeHandle as F } from "react";
import { TriStateCheckBox as b } from "../ext/TriStateCheckBox.js";
import { getFieldLabel as v } from "./util.js";
function E(e) {
  const r = f(e.attribute, e), { getError: i, getValue: a, setValue: s, mutateOptions: c, refreshError: B } = r, u = a() ? a() : void 0, o = h(null), m = i();
  F(e.ref, () => ({
    ...g(r),
    focus() {
      o.current.checked = !0, o.current.focus();
    },
    setOptions(k) {
    },
    getOptions() {
    }
  }), [r]);
  var l = r.getFieldProps();
  return l.onChange = (t) => {
    e.readOnly || (s(t), e.onChange && e.onChange(t.currentTarget.checked));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ n(d, { children: !c.visible && /* @__PURE__ */ n(
    C,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(b, { value: u, error: m.message, ...e })
    }
  ) });
}
export {
  E as MantineTriStateCheckBox
};
