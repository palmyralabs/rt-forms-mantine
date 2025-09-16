import { jsx as o, Fragment as h } from "react/jsx-runtime";
import { Calendar as F } from "@mantine/dates";
import { useFieldManager as b, getFieldHandler as v, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { forwardRef as D, useRef as i, useImperativeHandle as M } from "react";
import { getFieldLabel as R } from "./util.js";
const H = D(function(e, s) {
  const n = b(e.attribute, e), { getError: u, getValue: a, setValue: c, mutateOptions: d, refreshError: f } = n, m = s || i(null), C = u(), g = i(null);
  M(m, () => ({
    ...v(n),
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
    w,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        F,
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
