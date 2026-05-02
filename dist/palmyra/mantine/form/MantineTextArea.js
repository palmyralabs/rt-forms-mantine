import { jsx as n, Fragment as d } from "react/jsx-runtime";
import { Textarea as g } from "@mantine/core";
import { useFieldManager as C, getFieldHandler as b, FieldDecorator as h } from "@palmyralabs/rt-forms";
import { useRef as F, useImperativeHandle as v } from "react";
import { getFieldLabel as x } from "./util.js";
function O(e) {
  const t = C(e.attribute, e), { getError: o, getValue: i, setValue: u, mutateOptions: s, refreshError: V } = t, c = o(), r = F(null), f = e.variant || "default";
  v(e.ref, () => ({
    ...b(t),
    focus() {
      r.current.focus();
    }
  }), [t]);
  var l = t.getFieldProps();
  l.onChange = (a) => {
    e.readOnly || (u(a.target.value), e.onChange && e.onChange(a));
  }, l.onBlur = (a) => {
    e.onBlur && e.onBlur(a);
  };
  const m = i();
  return /* @__PURE__ */ n(d, { children: !s.visible && /* @__PURE__ */ n(
    h,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        g,
        {
          variant: f,
          label: e.label,
          ref: r,
          defaultValue: e.defaultValue,
          ...l,
          value: m,
          error: c.message
        }
      )
    }
  ) });
}
export {
  O as MantineTextArea
};
