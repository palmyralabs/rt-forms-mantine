import { jsx as a, Fragment as v, jsxs as x } from "react/jsx-runtime";
import { RangeSlider as M } from "@mantine/core";
import { useFieldManager as O, getFieldHandler as B, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { forwardRef as S, useRef as s, useImperativeHandle as j } from "react";
import { getFieldLabel as y } from "./util.js";
const P = S(function(e, i) {
  const l = e.min || 0, c = e.max || 100, u = (n) => n || [l, l + 1], m = (n) => n, t = O(e.attribute, e, { format: m, parse: u }), { getError: d, getValue: f, setValue: g, mutateOptions: C, refreshError: E } = t, b = i || s(null), h = d(), F = e.label || "", o = s(null);
  j(b, () => ({
    ...B(t),
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
    L,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x("div", { style: { width: "100%", textAlign: "center" }, children: [
        F,
        /* @__PURE__ */ a(
          M,
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
