import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as D, useRef as i, useImperativeHandle as b } from "react";
import { getFieldLabel as M } from "./util.js";
import { useFieldManager as V, getFieldHandler as y, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { DateInput as R } from "@mantine/dates";
const O = D(function(e, o) {
  const c = e.valueFormat || e.serverPattern || "YYYY-MM-DD", t = V(e.attribute, e), { getError: m, getValue: u, setValue: f, mutateOptions: d, refreshError: g } = t, C = o || i(null), F = m(), h = i(null);
  b(C, () => ({
    ...y(t),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var n = t.getFieldProps();
  n.onChange = (a) => {
    e.readOnly || (console.log("e", a), f(a), e.onChange && e.onChange(a));
  }, n.onBlur = g;
  var r;
  u() != "" && (r = new Date(u()));
  const s = e.defaultValue ? new Date(e.defaultValue) : "";
  return console.log(r, s), /* @__PURE__ */ l(v, { children: !d.visible && /* @__PURE__ */ l(
    I,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        R,
        {
          defaultValue: s,
          ...n,
          value: r,
          type: e.type,
          valueFormat: c,
          error: F.message
        }
      )
    }
  ) });
});
export {
  O as MantineDateInput
};
