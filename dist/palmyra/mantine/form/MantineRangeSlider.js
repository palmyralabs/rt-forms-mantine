import { jsx as a, Fragment as h, jsxs as F } from "react/jsx-runtime";
import { RangeSlider as v } from "@mantine/core";
import { useFieldManager as x, getFieldHandler as O, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { useRef as B, useImperativeHandle as L } from "react";
import { getFieldLabel as M } from "./util.js";
function A(e) {
  const l = e.min || 0, o = e.max || 100, s = (n) => n || [l, l + 1], u = (n) => n, t = x(e.attribute, e, { format: u, parse: s }), { getError: c, getValue: m, setValue: d, mutateOptions: f, refreshError: j } = t, g = c(), C = e.label || "", i = B(null);
  L(e.ref, () => ({
    ...O(t),
    focus() {
      i.current.focus();
    },
    getOptions() {
    },
    setOptions(y) {
    }
  }), [t]);
  var r = t.getFieldProps();
  r.onChange = (n) => {
    e.readOnly || (d(n), e.onChange && e.onChange(n));
  }, r.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  };
  var b = m();
  return /* @__PURE__ */ a(h, { children: !f.visible && /* @__PURE__ */ a(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ F("div", { style: { width: "100%", textAlign: "center" }, children: [
        C,
        /* @__PURE__ */ a(
          v,
          {
            ...r,
            ref: i,
            value: b,
            label: e.labelName,
            min: l,
            max: o,
            size: e.size,
            error: g.message
          }
        )
      ] })
    }
  ) });
}
export {
  A as MantineRangeSlider
};
