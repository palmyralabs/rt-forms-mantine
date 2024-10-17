import { jsx as a, Fragment as R, jsxs as v } from "react/jsx-runtime";
import { forwardRef as x, useRef as s, useImperativeHandle as M } from "react";
import { useFieldManager as O, getFieldHandler as V, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as S } from "./util.js";
import { RangeSlider as j } from "@mantine/core";
const D = x(function(e, r) {
  const t = O(e.attribute, e), { getError: o, getValue: u, setValue: c, mutateOptions: m, refreshError: d } = t, f = r || s(null), g = o(), C = e.label || "", b = e.min || 0, h = e.max || 100, i = s(null);
  M(f, () => ({
    ...V(t),
    focus() {
      i.current.focus();
    },
    getOptions() {
    },
    setOptions(y) {
    }
  }), [t]);
  var n = t.getFieldProps();
  n.onChange = (l) => {
    e.readOnly || (c(l), e.onChange && e.onChange(l));
  }, n.onBlur = d;
  var F = u();
  return /* @__PURE__ */ a(R, { children: !m.visible && /* @__PURE__ */ a(
    L,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v("div", { style: { width: "100%", textAlign: "center" }, children: [
        C,
        /* @__PURE__ */ a(
          j,
          {
            ...n,
            ref: i,
            defaultValue: e.defaultValue,
            value: F,
            label: e.labelName,
            min: b,
            max: h,
            size: e.size,
            error: g.message
          }
        )
      ] })
    }
  ) });
});
export {
  D as MantineRangeSlider
};
