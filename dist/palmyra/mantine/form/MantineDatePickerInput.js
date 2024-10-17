import { jsx as u, Fragment as h } from "react/jsx-runtime";
import { forwardRef as y, useRef as s, useImperativeHandle as v } from "react";
import { getFieldLabel as w } from "./util.js";
import { useFieldManager as V, getFieldHandler as b, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { DatePickerInput as P } from "@mantine/dates";
const A = y(function(e, i) {
  const c = e.displayPattern || e.serverPattern || "YYYY-MM-DD", a = V(e.attribute, e), { getError: f, getValue: t, setValue: m, mutateOptions: d, refreshError: g } = a, C = i || s(null), D = f(), F = s(null);
  v(C, () => ({
    ...b(a),
    focus() {
      F.current.focus();
    },
    setCurrent() {
    }
  }), [a]);
  var l = a.getFieldProps();
  l.onChange = (r) => {
    e.readOnly || (console.log("e", r), m(r), e.onChange && e.onChange(r));
  }, l.onBlur = g;
  var n;
  t() != "" && (Array.isArray(t()) ? n = [new Date(t()[0]), new Date(t()[1])] : n = new Date(t()));
  const o = e.defaultValue ? e.type === "range" ? [new Date(e.defaultValue[0]), new Date(e.defaultValue[1])] : new Date(e.defaultValue) : "";
  return console.log(n, o), /* @__PURE__ */ u(h, { children: !d.visible && /* @__PURE__ */ u(
    M,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ u(
        P,
        {
          defaultValue: o,
          ...l,
          value: n,
          type: e.type,
          valueFormat: c,
          error: D.message
        }
      )
    }
  ) });
});
export {
  A as MantineDatePickerInput
};
