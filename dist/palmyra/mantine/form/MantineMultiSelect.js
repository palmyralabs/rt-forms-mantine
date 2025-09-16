import { jsx as r, Fragment as O } from "react/jsx-runtime";
import { MultiSelect as M } from "@mantine/core";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { forwardRef as y, useRef as i, useImperativeHandle as B } from "react";
import { getFieldLabel as L } from "./util.js";
const k = y(function(e, l) {
  const s = (t) => t || [], u = (t) => t, a = R(e.attribute, e, { format: u, parse: s }), { getError: c, getValue: d, setValue: f, mutateOptions: m, refreshError: j } = a, g = l || i(null), C = c(), o = i(null), b = e.variant || "default";
  B(g, () => ({
    ...V(a),
    focus() {
      o && o.current.focus();
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
  return /* @__PURE__ */ r(O, { children: !m.visible && /* @__PURE__ */ r(
    x,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        M,
        {
          defaultValue: e?.defaultValue,
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
