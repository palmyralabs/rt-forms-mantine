import { jsx as l, Fragment as O } from "react/jsx-runtime";
import { forwardRef as M, useRef as o, useImperativeHandle as R } from "react";
import { useFieldManager as V, getFieldHandler as x, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as B } from "./util.js";
import { MultiSelect as L } from "@mantine/core";
const k = M(function(e, r) {
  const u = (t) => t || [], s = (t) => t, a = V(e.attribute, e, { format: s, parse: u }), { getError: c, getValue: d, setValue: f, mutateOptions: m, refreshError: j } = a, g = r || o(null), C = c(), i = o(null), b = e.variant || "default";
  R(g, () => ({
    ...x(a),
    focus() {
      i && i.current.focus();
    },
    setOptions(v) {
    },
    getOptions() {
    }
  }), [a]);
  var n = a.getFieldProps();
  e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (t) => {
    e.readOnly || (f(t), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const h = Object.keys(n.options).map((t, v) => {
    var F = {
      label: n.options[t],
      value: t
    };
    return F;
  });
  return /* @__PURE__ */ l(O, { children: !m.visible && /* @__PURE__ */ l(
    y,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        L,
        {
          defaultValue: e == null ? void 0 : e.defaultValue,
          data: h,
          value: d(),
          ...n,
          variant: b,
          error: C.message
        }
      )
    }
  ) });
});
export {
  k as MantineMultiSelect
};
