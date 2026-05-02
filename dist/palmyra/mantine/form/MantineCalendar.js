import { jsx as o, Fragment as d } from "react/jsx-runtime";
import { Calendar as C } from "@mantine/dates";
import { useFieldManager as g, getFieldHandler as h, FieldDecorator as F } from "@palmyralabs/rt-forms";
import { useRef as b, useImperativeHandle as v } from "react";
import { getFieldLabel as D } from "./util.js";
function x(e) {
  const r = g(e.attribute, e), { getError: i, getValue: a, setValue: s, mutateOptions: u, refreshError: c } = r, m = i(), f = b(null);
  v(e.ref, () => ({
    ...h(r),
    focus() {
      f.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  var t = r.getFieldProps();
  t.onChange = (l) => {
    e.readOnly || (s(l), e.onChange && e.onChange(l));
  }, t.onBlur = c;
  var n;
  return a() != "" && (Array.isArray(a()) ? n = [new Date(a()[0]), new Date(a()[1])] : n = new Date(a())), /* @__PURE__ */ o(d, { children: !u.visible && /* @__PURE__ */ o(
    F,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        C,
        {
          defaultValue: e.defaultValue,
          ...t,
          value: n,
          error: m.message
        }
      )
    }
  ) });
}
export {
  x as MantineCalendar
};
