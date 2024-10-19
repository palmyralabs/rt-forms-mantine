import { jsx as l, Fragment as M } from "react/jsx-runtime";
import { forwardRef as R, useRef as o, useImperativeHandle as V } from "react";
import { useFieldManager as x, getFieldHandler as y, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as S } from "./util.js";
import { MultiSelect as j } from "@mantine/core";
const k = R(function(e, r) {
  const s = (t) => t || [], u = (t) => t, a = x(e.attribute, e, { format: u, parse: s }), { getError: c, getValue: d, setValue: f, mutateOptions: m, refreshError: g } = a, C = r || o(null), b = c(), i = o(null), h = e.variant || "default";
  V(C, () => ({
    ...y(a),
    focus() {
      i && i.current.focus();
    },
    setOptions(F) {
    },
    getOptions() {
    }
  }), [a]);
  var n = a.getFieldProps();
  e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (t) => {
    e.readOnly || (f(t), e.onChange && e.onChange(t));
  }, n.onBlur = g;
  const v = Object.keys(n.options).map((t, F) => {
    var O = {
      label: n.options[t],
      value: t
    };
    return O;
  });
  return /* @__PURE__ */ l(M, { children: !m.visible && /* @__PURE__ */ l(
    L,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        j,
        {
          defaultValue: e == null ? void 0 : e.defaultValue,
          data: v,
          value: d(),
          ...n,
          variant: h,
          error: b.message
        }
      )
    }
  ) });
});
export {
  k as MantineMultiSelect
};
