import { jsx as C, Fragment as j } from "react/jsx-runtime";
import { forwardRef as x, useRef as h, useImperativeHandle as E } from "react";
import { getFieldLabel as H } from "./util.js";
import { useFieldManager as J, getFieldHandler as O, FieldDecorator as A } from "@palmyralabs/rt-forms";
import { DatePickerInput as B } from "@mantine/dates";
import c from "dayjs";
const S = x(function(t, F) {
  const r = t.serverPattern || t.valueFormat || "YYYY-MM-DD", b = t.valueFormat || "YYYY-MM-DD", i = t.type, l = (e, n) => e ? c(e, n) : null, u = (e, n) => {
    if (e && e.isValid && e.isValid())
      return e.format(n);
  }, M = (e) => {
    if (i == "range") {
      if (e && typeof e == "string") {
        var n, s;
        const y = e.charAt(0);
        if (y == ">")
          n = l(e.slice(1), r);
        else if (y == "<")
          s = l(e.slice(1), r);
        else {
          const g = e.split("...");
          n = l(g[0], r), g[1] && (s = l(g[1], r));
        }
      }
      return [n, s];
    } else
      return l(e, r);
  }, Y = (e) => {
    if (i == "range") {
      if (e) {
        const n = u(e.from, r), s = u(e.to, r);
        if (n)
          return s ? n + "..." + s : ">" + n;
        if (s)
          return "<" + s;
      }
    } else
      u(e, r);
  }, o = J(t.attribute, t, { format: Y, parse: M }), { getError: P, getValue: V, setValue: a, mutateOptions: v, refreshError: D } = o, I = F || h(null), R = P(), f = V(), m = (e) => e && e.isValid() && e.toDate() || null, k = i == "range" ? [m(f[0]), m(f[1])] : m(f), L = h(null);
  E(I, () => ({
    ...O(o),
    focus() {
      L.current.focus();
    },
    setCurrent() {
    }
  }), [o]);
  var { ...d } = o.getFieldProps();
  return d.onChange = (e) => {
    t.readOnly || (i == "range" ? a(e ? [c(e[0]), c(e[1])] : void 0) : a(e ? c(e) : void 0), t.onChange && t.onChange(e));
  }, d.onBlur = D, /* @__PURE__ */ C(j, { children: !v.visible && /* @__PURE__ */ C(
    A,
    {
      label: H(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ C(
        B,
        {
          ...d,
          value: k,
          type: t.type,
          valueFormat: b,
          error: R.message,
          label: t.label
        }
      )
    }
  ) });
});
export {
  S as MantineDatePickerInput
};
