import { jsx as i, Fragment as R } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as O } from "react";
import { useFieldManager as M, getFieldHandler as S, FieldDecorator as B } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { Rating as x } from "@mantine/core";
const D = v(function(e, u) {
  const n = M(e.attribute, e), { getError: o, getValue: r, setValue: m, mutateOptions: f, refreshError: E } = n, s = u || c(null), d = o(), a = c(null), g = e.variant || "default", C = (e == null ? void 0 : e.autoFocus) || !1, b = (e == null ? void 0 : e.fractions) || 1, F = e == null ? void 0 : e.fullSymbol, h = e == null ? void 0 : e.emptySymbol;
  O(s, () => ({
    ...S(n),
    focus() {
      a.current.checked = !0, a.current.focus();
    },
    getOptions() {
    },
    setOptions(y) {
    }
  }), [n]);
  var l = n.getFieldProps();
  return l.onChange = (t, y) => {
    e.readOnly || (m(t), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ i(R, { children: !f.visible && /* @__PURE__ */ i(
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
          inputRef: a,
          size: e.size,
          fractions: b,
          ...l,
          fullSymbol: F,
          emptySymbol: h,
          value: r(),
          error: d.message,
          autoFocus: C
        }
      )
    }
  ) });
});
export {
  D as MantineRating
};
