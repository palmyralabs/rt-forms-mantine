import { jsx as n, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as s, useImperativeHandle as b } from "react";
import { useFieldManager as v, getFieldHandler as w, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as P } from "./util.js";
import { PasswordInput as R } from "@mantine/core";
const O = F(function(e, r) {
  const a = v(e.attribute, e), { getError: i, getValue: u, setValue: c, mutateOptions: d, refreshError: f } = a, m = r || s(null), g = i(), o = s(null), C = e.variant || "default";
  b(m, () => ({
    ...w(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var l = a.getFieldProps();
  return l.onChange = (t) => {
    e.readOnly || (c(t.target.value), e.onChange && e.onChange(t));
  }, l.onBlur = f, /* @__PURE__ */ n(h, { children: !d.visible && /* @__PURE__ */ n(
    M,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        R,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: C,
          ref: o,
          ...l,
          placeholder: e.placeholder,
          value: u(),
          error: g.message
        }
      )
    }
  ) });
});
export {
  O as MantinePasswordField
};
