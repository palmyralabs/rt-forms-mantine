import { jsx as i, Fragment as v } from "react/jsx-runtime";
import { forwardRef as O, useRef as u, useImperativeHandle as M } from "react";
import { useFieldManager as S, getFieldHandler as L, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as z } from "./util.js";
import { Rating as E } from "@mantine/core";
const D = O(function(e, c) {
  const t = S(e.attribute, e), { getError: o, getValue: r, setValue: m, mutateOptions: s, refreshError: f } = t, d = c || u(null), g = o(), n = u(null), C = e.variant || "default", b = (e == null ? void 0 : e.autoFocus) || !1, F = (e == null ? void 0 : e.fractions) || 1, h = e == null ? void 0 : e.fullSymbol, y = e == null ? void 0 : e.emptySymbol;
  M(d, () => ({
    ...L(t),
    focus() {
      n.current.checked = !0, n.current.focus();
    },
    getOptions() {
    },
    setOptions(R) {
    }
  }), [t]);
  var a = t.getFieldProps();
  return a.onChange = (l, R) => {
    e.readOnly || (m(l), e.onChange && e.onChange(l));
  }, a.onBlur = f, /* @__PURE__ */ i(v, { children: !s.visible && /* @__PURE__ */ i(
    x,
    {
      label: z(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ i(
        E,
        {
          variant: C,
          readOnly: e.readOnly,
          inputRef: n,
          size: e.size,
          fractions: F,
          ...a,
          fullSymbol: h,
          emptySymbol: y,
          value: r(),
          error: g.message,
          autoFocus: b
        }
      )
    }
  ) });
});
export {
  D as MantineRating
};
