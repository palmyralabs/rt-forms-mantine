import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { MultiSelect as v } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as O, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { useRef as V, useImperativeHandle as x } from "react";
import { getFieldLabel as y } from "./util.js";
function R(e) {
  const i = (t) => t || [], o = (t) => t, a = F(e.attribute, e, { format: o, parse: i }), { getError: s, getValue: u, setValue: c, mutateOptions: d, refreshError: B } = a, f = s(), l = V(null), m = e.variant || "default";
  x(e.ref, () => ({
    ...O(a),
    focus() {
      l && l.current.focus();
    },
    setOptions(C) {
    },
    getOptions() {
    }
  }), [a]);
  var n = a.getFieldProps();
  e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (t) => {
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const g = Object.keys(n.options).map((t, C) => {
    var b = {
      label: n.options[t],
      value: t
    };
    return b;
  });
  return /* @__PURE__ */ r(h, { children: !d.visible && /* @__PURE__ */ r(
    M,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        v,
        {
          defaultValue: e?.defaultValue,
          data: g,
          value: u(),
          ...n,
          variant: m,
          error: f.message
        }
      )
    }
  ) });
}
export {
  R as MantineMultiSelect
};
