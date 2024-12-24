import { jsx as i, Fragment as R } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as O } from "react";
import { useFieldManager as M, getFieldHandler as S, FieldDecorator as B } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { Rating as x } from "@mantine/core";
const I = v(function(e, u) {
  const n = M(e.attribute, e), { getError: o, getValue: r, setValue: f, mutateOptions: m, refreshError: E } = n, s = u || c(null), d = o(), a = c(null), g = e.variant || "default", C = (e == null ? void 0 : e.autoFocus) || !1, b = (e == null ? void 0 : e.fractions) || 1, F = e == null ? void 0 : e.fullSymbol, y = e == null ? void 0 : e.emptySymbol;
  O(s, () => ({
    ...S(n),
    focus() {
      a.current && a.current.focus && a.current.focus();
    },
    getOptions() {
    },
    setOptions(h) {
    }
  }), [n]);
  var l = n.getFieldProps();
  return l.onChange = (t, h) => {
    e.readOnly || (f(t), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ i(R, { children: !m.visible && /* @__PURE__ */ i(
    B,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        x,
        {
          variant: g,
          readOnly: e.readOnly,
          ref: a,
          size: e.size,
          fractions: b,
          ...l,
          fullSymbol: F,
          emptySymbol: y,
          value: r(),
          error: d.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  I as MantineRating
};
