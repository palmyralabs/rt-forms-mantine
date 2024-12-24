import { jsx as a, Fragment as v, jsxs as x } from "react/jsx-runtime";
import { forwardRef as M, useRef as s, useImperativeHandle as O } from "react";
import { useFieldManager as B, getFieldHandler as L, FieldDecorator as S } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { RangeSlider as y } from "@mantine/core";
const P = M(function(e, i) {
  const l = e.min || 0, c = e.max || 100, u = (n) => n || [l, l + 1], m = (n) => n, t = B(e.attribute, e, { format: m, parse: u }), { getError: d, getValue: f, setValue: g, mutateOptions: C, refreshError: E } = t, b = i || s(null), h = d(), F = e.label || "", o = s(null);
  O(b, () => ({
    ...L(t),
    focus() {
      o.current.focus();
    },
    getOptions() {
    },
    setOptions(H) {
    }
  }), [t]);
  var r = t.getFieldProps();
  r.onChange = (n) => {
    e.readOnly || (g(n), e.onChange && e.onChange(n));
  }, r.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  };
  var R = f();
  return /* @__PURE__ */ a(v, { children: !C.visible && /* @__PURE__ */ a(
    S,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x("div", { style: { width: "100%", textAlign: "center" }, children: [
        F,
        /* @__PURE__ */ a(
          y,
          {
            ...r,
            ref: o,
            value: R,
            label: e.labelName,
            min: l,
            max: c,
            size: e.size,
            error: h.message
          }
        )
      ] })
    }
  ) });
});
export {
  P as MantineRangeSlider
};
