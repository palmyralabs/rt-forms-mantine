import { jsx as a, Fragment as f } from "react/jsx-runtime";
import { TimeInput as d } from "@mantine/dates";
import { useFieldManager as g, getFieldHandler as C, FieldDecorator as h } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as b } from "react";
import { getFieldLabel as v } from "./util.js";
function H(e) {
  const n = g(e.attribute, e), { getError: l, getValue: o, setValue: i, mutateOptions: s, refreshError: y } = n, u = l(), m = F(null), c = o();
  b(e.ref, () => ({
    ...C(n),
    focus() {
      m.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var { serverPattern: B, ...r } = n.getFieldProps();
  return r.onChange = (t) => {
    e.readOnly || (i(t.target.value), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(f, { children: !s.visible && /* @__PURE__ */ a(
    h,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        d,
        {
          ...r,
          value: c,
          type: e.type,
          error: u.message
        }
      )
    }
  ) });
}
export {
  H as MantineTimeInput
};
