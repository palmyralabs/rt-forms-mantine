import { jsx as o, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as i, useImperativeHandle as b } from "react";
import { getFieldLabel as v } from "./util.js";
import { useFieldManager as w, getFieldHandler as D, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { Calendar as R } from "@mantine/dates";
const H = F(function(e, s) {
  const n = w(e.attribute, e), { getError: u, getValue: a, setValue: c, mutateOptions: d, refreshError: f } = n, m = s || i(null), C = u(), g = i(null);
  b(m, () => ({
    ...D(n),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var r = n.getFieldProps();
  r.onChange = (l) => {
    e.readOnly || (c(l), e.onChange && e.onChange(l));
  }, r.onBlur = f;
  var t;
  return a() != "" && (Array.isArray(a()) ? t = [new Date(a()[0]), new Date(a()[1])] : t = new Date(a())), /* @__PURE__ */ o(h, { children: !d.visible && /* @__PURE__ */ o(
    M,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        R,
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
