import { jsx as a, Fragment as v, jsxs as x } from "react/jsx-runtime";
import { forwardRef as M, useRef as s, useImperativeHandle as O } from "react";
import { useFieldManager as R, getFieldHandler as V, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as S } from "./util.js";
import { Slider as j } from "@mantine/core";
const D = M(function(e, r) {
  const t = R(e.attribute, e), { getError: o, getValue: u, setValue: c, mutateOptions: m, refreshError: d } = t, f = r || s(null), g = o(), C = e.label || "", b = e.min || 0, h = e.max || 100, i = s(null);
  O(f, () => ({
    ...V(t),
    focus() {
      i.current.focus();
    },
    getOptions() {
    },
    setOptions(y) {
    }
  }), [t]);
  var l = t.getFieldProps();
  l.onChange = (n) => {
    e.readOnly || (c(n), e.onChange && e.onChange(n));
  };
  var F = u();
  return l.onBlur = d, /* @__PURE__ */ a(v, { children: !m.visible && /* @__PURE__ */ a(
    L,
    {
      label: S(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ x("div", { style: { width: "100%", textAlign: "center" }, children: [
        C,
        /* @__PURE__ */ a(
          j,
          {
            ...l,
            ref: i,
            defaultValue: e.defaultValue,
            value: F,
            label: e.labelName,
            min: b,
            max: h,
            size: e.size,
            error: g.message
          }
        )
      ] })
    }
  ) });
});
export {
  D as MantineSlider
};
