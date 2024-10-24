import { jsx as f, Fragment as k } from "react/jsx-runtime";
import { forwardRef as L, useRef as g, useImperativeHandle as j } from "react";
import { getFieldLabel as x } from "./util.js";
import { useFieldManager as E, getFieldHandler as H, FieldDecorator as J } from "@palmyralabs/rt-forms";
import { DatePickerInput as O } from "@mantine/dates";
import A from "dayjs";
const K = L(function(t, m) {
  const C = t.valueFormat || "YYYY-MM-DD", l = t.type, o = (e, n) => {
    if (e)
      return A(e, n);
  }, a = (e, n) => {
    if (e && e.isValid && e.isValid())
      return e.format(n);
  }, F = (e) => {
    if (l == "range") {
      if (e && typeof e == "string") {
        var n, s;
        const d = e.charAt(0);
        if (d == ">")
          n = o(e.slice(1), r);
        else if (d == "<")
          s = o(e.slice(1), r);
        else {
          const u = e.split("...");
          n = o(u[0], r), u[1] && (s = o(u[1], r));
        }
      }
      return [n, s];
    }
    return o(e, r);
  }, h = (e) => {
    if (l == "range") {
      if (e) {
        const n = a(e.from, r), s = a(e.to, r);
        if (n)
          return s ? n + "..." + s : ">" + n;
        if (s)
          return "<" + s;
      }
    } else l == "default" && a(e, r);
  }, i = E(t.attribute, t, { format: h, parse: F }), { getError: y, getValue: b, setValue: M, mutateOptions: P, refreshError: v } = i, I = m || g(null), R = y(), V = b(), Y = g(null);
  j(I, () => ({
    ...H(i),
    focus() {
      Y.current.focus();
    },
    setCurrent() {
    }
  }), [i]);
  var { serverPattern: r, ...c } = i.getFieldProps();
  return c.onChange = (e) => {
    t.readOnly || (console.log("onchange", e), M(e), t.onChange && t.onChange(e));
  }, c.onBlur = v, /* @__PURE__ */ f(k, { children: !P.visible && /* @__PURE__ */ f(
    J,
    {
      label: x(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ f(
        O,
        {
          ...c,
          value: V,
          type: t.type,
          valueFormat: C,
          error: R.message,
          label: t.label
        }
      )
    }
  ) });
});
export {
  K as MantineDatePickerInput
};
