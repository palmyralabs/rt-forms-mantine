import { jsx as o, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as b } from "react";
import { getFieldLabel as v } from "./util.js";
import { useFieldManager as V, getFieldHandler as w, FieldDecorator as D } from "@palmyralabs/rt-forms";
import { Calendar as M } from "@mantine/dates";
const H = F(function(e, s) {
  const n = V(e.attribute, e), { getError: u, getValue: a, setValue: c, mutateOptions: f, refreshError: d } = n, m = s || i(null), C = u(), g = i(null);
  b(m, () => ({
    ...w(n),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var r = n.getFieldProps();
  r.onChange = (l) => {
    e.readOnly || (console.log("e", l), c(l), e.onChange && e.onChange(l));
  }, r.onBlur = d;
  var t;
  return a() != "" && (Array.isArray(a()) ? t = [new Date(a()[0]), new Date(a()[1])] : t = new Date(a())), console.log(t, e.defaultValue), /* @__PURE__ */ o(h, { children: !f.visible && /* @__PURE__ */ o(
    D,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        M,
        {
          defaultValue: e.defaultValue,
          ...r,
          value: t,
          error: C.message
        }
      )
    }
  ) });
});
export {
  H as MantineCalendar
};
