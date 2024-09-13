import { jsx as l, Fragment as F } from "react/jsx-runtime";
import { forwardRef as h, useRef as u, useImperativeHandle as b } from "react";
import { useFieldManager as v, getFieldHandler as x, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { T } from "../../../chunks/TextInput.js";
const w = h(function(e, n) {
  const a = v(e.attribute, e), { getError: s, getValue: r, setValue: c, mutateOptions: d } = a, m = n || u(null), f = s(), o = u(null), g = e.variant || "default";
  var C = r() != "" ? r() : null;
  b(m, () => ({
    ...x(a),
    focus() {
      o.current.focus();
    }
  }), [a]);
  var i = a.getFieldProps();
  return i.onChange = (t) => {
    e.readOnly || (c(t.target.value), e.onChange && e.onChange(t.target.value));
  }, /* @__PURE__ */ l(F, { children: !d.visible && /* @__PURE__ */ l(
    M,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        T,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: g,
          ref: o,
          ...i,
          placeholder: e.placeholder,
          value: C,
          error: f.message
        }
      )
    }
  ) });
});
export {
  w as MantineTextField
};
