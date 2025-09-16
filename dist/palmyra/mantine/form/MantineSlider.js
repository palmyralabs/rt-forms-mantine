import { jsx as a, Fragment as F, jsxs as v } from "react/jsx-runtime";
import { Slider as x } from "@mantine/core";
import { useFieldManager as M, getFieldHandler as O, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { forwardRef as V, useRef as o, useImperativeHandle as B } from "react";
import { getFieldLabel as L } from "./util.js";
const D = V(function(e, r) {
  const l = M(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: m, refreshError: j } = l, d = r || o(null), f = s(), g = e.label || "", C = e.min || 0, b = e.max || 100, i = o(null);
  B(d, () => ({
    ...O(l),
    focus() {
      i.current.focus();
    },
    getOptions() {
    },
    setOptions(w) {
    }
  }), [l]);
  var n = l.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  };
  var h = u();
  return n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(F, { children: !m.visible && /* @__PURE__ */ a(
    R,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ v("div", { style: { width: "100%", textAlign: "center" }, children: [
        g,
        /* @__PURE__ */ a(
          x,
          {
            ...n,
            ref: i,
            defaultValue: e.defaultValue,
            value: h,
            label: e.labelName,
            min: C,
            max: b,
            size: e.size,
            error: f.message
          }
        )
      ] })
    }
  ) });
});
export {
  D as MantineSlider
};
