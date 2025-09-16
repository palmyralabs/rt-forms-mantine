import { jsx as o, Fragment as R } from "react/jsx-runtime";
import { Rating as v } from "@mantine/core";
import { useFieldManager as O, getFieldHandler as M, FieldDecorator as S } from "@palmyralabs/rt-forms";
import { forwardRef as B, useRef as i, useImperativeHandle as L } from "react";
import { getFieldLabel as x } from "./util.js";
const I = B(function(e, r) {
  const n = O(e.attribute, e), { getError: s, getValue: u, setValue: c, mutateOptions: f, refreshError: E } = n, m = r || i(null), d = s(), a = i(null), g = e.variant || "default", C = e?.autoFocus || !1, b = e?.fractions || 1, F = e?.fullSymbol, y = e?.emptySymbol;
  L(m, () => ({
    ...M(n),
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
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ o(R, { children: !f.visible && /* @__PURE__ */ o(
    S,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        v,
        {
          variant: g,
          readOnly: e.readOnly,
          ref: a,
          size: e.size,
          fractions: b,
          ...l,
          fullSymbol: F,
          emptySymbol: y,
          value: u(),
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
