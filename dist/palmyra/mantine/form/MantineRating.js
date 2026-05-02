import { jsx as o, Fragment as F } from "react/jsx-runtime";
import { Rating as y } from "@mantine/core";
import { useFieldManager as h, getFieldHandler as v, FieldDecorator as O } from "@palmyralabs/rt-forms";
import { useRef as R, useImperativeHandle as S } from "react";
import { getFieldLabel as B } from "./util.js";
function V(e) {
  const n = h(e.attribute, e), { getError: r, getValue: i, setValue: s, mutateOptions: u, refreshError: L } = n, c = r(), a = R(null), m = e.variant || "default", f = e?.autoFocus || !1, d = e?.fractions || 1, g = e?.fullSymbol, C = e?.emptySymbol;
  S(e.ref, () => ({
    ...v(n),
    focus() {
      a.current && a.current.focus && a.current.focus();
    },
    getOptions() {
    },
    setOptions(b) {
    }
  }), [n]);
  var l = n.getFieldProps();
  return l.onChange = (t, b) => {
    e.readOnly || (s(t), e.onChange && e.onChange(t));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ o(F, { children: !u.visible && /* @__PURE__ */ o(
    O,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        y,
        {
          variant: m,
          readOnly: e.readOnly,
          ref: a,
          size: e.size,
          fractions: d,
          ...l,
          fullSymbol: g,
          emptySymbol: C,
          value: i(),
          error: c.message,
          autoFocus: f
        }
      )
    }
  ) });
}
export {
  V as MantineRating
};
