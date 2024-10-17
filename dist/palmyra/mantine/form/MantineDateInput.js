import { jsx as l, Fragment as D } from "react/jsx-runtime";
import { forwardRef as v, useRef as i, useImperativeHandle as b } from "react";
import { getFieldLabel as M } from "./util.js";
import { useFieldManager as y, getFieldHandler as V, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { DateInput as R } from "@mantine/dates";
const H = v(function(e, o) {
  const c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", t = y(e.attribute, e), { getError: m, getValue: u, setValue: f, mutateOptions: d, refreshError: g } = t, C = o || i(null), F = m(), h = i(null);
  b(C, () => ({
    ...V(t),
    focus() {
      h.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var a = t.getFieldProps();
  a.onChange = (n) => {
    e.readOnly || (console.log("e", n), f(n), e.onChange && e.onChange(n));
  }, a.onBlur = g;
  var r;
  u() != "" && (r = new Date(u()));
  const s = e.defaultValue ? new Date(e.defaultValue) : "";
  return console.log(r, s), /* @__PURE__ */ l(D, { children: !d.visible && /* @__PURE__ */ l(
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
          ...a,
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
  H as MantineDateInput
};
