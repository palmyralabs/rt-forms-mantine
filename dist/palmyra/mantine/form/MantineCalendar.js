import { jsx as o, Fragment as h } from "react/jsx-runtime";
import { forwardRef as v, useRef as i, useImperativeHandle as b } from "react";
import { getFieldLabel as D } from "./util.js";
import { useFieldManager as M, getFieldHandler as y, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { Calendar as w } from "@mantine/dates";
const E = v(function(e, s) {
  const u = e.displayPattern || e.serverPattern || "YYYY-MM-DD", t = M(e.attribute, e), { getError: c, getValue: a, setValue: d, mutateOptions: m, refreshError: f } = t, C = s || i(null), g = c(), F = i(null);
  b(C, () => ({
    ...y(t),
    focus() {
      F.current.focus();
    },
    setCurrent() {
    }
  }), [t]);
  var l = t.getFieldProps();
  l.onChange = (r) => {
    e.readOnly || (console.log("e", r), d(r), e.onChange && e.onChange(r));
  }, l.onBlur = f;
  var n;
  return a() != "" && (Array.isArray(a()) ? n = [new Date(a()[0]), new Date(a()[1])] : n = new Date(a())), console.log(n, e.defaultValue), /* @__PURE__ */ o(h, { children: !m.visible && /* @__PURE__ */ o(
    V,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        w,
        {
          defaultValue: e.defaultValue,
          ...l,
          value: n,
          valueFormat: u,
          error: g.message
        }
      )
    }
  ) });
});
export {
  E as MantineCalendar
};
