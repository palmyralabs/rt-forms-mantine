import { jsx as n, Fragment as f } from "react/jsx-runtime";
import { TextInput as g } from "@mantine/core";
import { useFieldManager as C, getFieldHandler as h, FieldDecorator as F } from "@palmyralabs/rt-forms";
import { useRef as b, useImperativeHandle as v } from "react";
import { getFieldLabel as x } from "./util.js";
function O(e) {
  const a = C(e.attribute, e), { getError: o, getValue: i, setValue: u, mutateOptions: s, refreshError: B } = a, c = o(), r = b(null), m = e.variant || "default";
  v(e.ref, () => ({
    ...h(a),
    focus() {
      r.current.focus();
    }
  }), [a]);
  var l = a.getFieldProps();
  l.onChange = (t) => {
    e.readOnly || (u(t.target.value), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const d = i();
  return /* @__PURE__ */ n(f, { children: !s.visible && /* @__PURE__ */ n(
    F,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        g,
        {
          label: e.label,
          variant: m,
          ref: r,
          ...l,
          value: d,
          placeholder: e.placeholder,
          error: c.message
        }
      )
    }
  ) });
}
export {
  O as MantineTextField
};
