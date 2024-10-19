import { jsx as a, Fragment as x, jsxs as M } from "react/jsx-runtime";
import { forwardRef as O, useRef as o, useImperativeHandle as L } from "react";
import { useFieldManager as S, getFieldHandler as j, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as z } from "./util.js";
import { RangeSlider as E } from "@mantine/core";
const P = O(function(e, i) {
  const r = e.min || 0, c = e.max || 100, u = (n) => n || [r, r + 1], m = (n) => n, t = S(e.attribute, e, { format: m, parse: u }), { getError: d, getValue: f, setValue: g, mutateOptions: C, refreshError: b } = t, h = i || o(null), F = d(), R = e.label || "", s = o(null);
  L(h, () => ({
    ...j(t),
    focus() {
      s.current.focus();
    },
    getOptions() {
    },
    setOptions(V) {
    }
  }), [t]);
  var l = t.getFieldProps();
  l.onChange = (n) => {
    e.readOnly || (g(n), e.onChange && e.onChange(n));
  }, l.onBlur = b;
  var v = f();
  return /* @__PURE__ */ a(x, { children: !C.visible && /* @__PURE__ */ a(
    y,
    {
      label: z(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ M("div", { style: { width: "100%", textAlign: "center" }, children: [
        R,
        /* @__PURE__ */ a(
          E,
          {
            ...l,
            ref: s,
            value: v,
            label: e.labelName,
            min: r,
            max: c,
            size: e.size,
            error: F.message
          }
        )
      ] })
    }
  ) });
});
export {
  P as MantineRangeSlider
};
