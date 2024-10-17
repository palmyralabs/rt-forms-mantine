import { jsx as l, Fragment as F } from "react/jsx-runtime";
import { forwardRef as O, useRef as o, useImperativeHandle as M } from "react";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as y } from "./util.js";
import { MultiSelect as L } from "@mantine/core";
const w = O(function(e, r) {
  const a = R(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: d, refreshError: f } = a, m = r || o(null), g = s(), i = o(null), C = e.variant || "default";
  M(m, () => ({
    ...V(a),
    focus() {
      i && i.current.focus();
    },
    setOptions(h) {
    },
    getOptions() {
    }
  }), [a]);
  var t = a.getFieldProps();
  e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (n) => {
    e.readOnly || (c(n), e.onChange && e.onChange(n));
  }, t.onBlur = f;
  const b = Object.keys(t.options).map((n, h) => {
    var v = {
      label: t.options[n],
      value: n
    };
    return v;
  });
  return /* @__PURE__ */ l(F, { children: !d.visible && /* @__PURE__ */ l(
    x,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        L,
        {
          defaultValue: e == null ? void 0 : e.defaultValue,
          data: b,
          value: u(),
          ...t,
          variant: C,
          error: g.message
        }
      )
    }
  ) });
});
export {
  w as MantineMultiSelect
};
