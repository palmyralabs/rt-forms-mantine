import { jsx as a, Fragment as C, jsxs as b } from "react/jsx-runtime";
import { Slider as h } from "@mantine/core";
import { useFieldManager as F, getFieldHandler as v, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { useRef as O, useImperativeHandle as V } from "react";
import { getFieldLabel as B } from "./util.js";
function R(e) {
  const l = F(e.attribute, e), { getError: r, getValue: o, setValue: s, mutateOptions: u, refreshError: L } = l, c = r(), m = e.label || "", d = e.min || 0, f = e.max || 100, i = O(null);
  V(e.ref, () => ({
    ...v(l),
    focus() {
      i.current.focus();
    },
    getOptions() {
    },
    setOptions(M) {
    }
  }), [l]);
  var n = l.getFieldProps();
  n.onChange = (t) => {
    e.readOnly || (s(t), e.onChange && e.onChange(t));
  };
  var g = o();
  return n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(C, { children: !u.visible && /* @__PURE__ */ a(
    x,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ b("div", { style: { width: "100%", textAlign: "center" }, children: [
        m,
        /* @__PURE__ */ a(
          h,
          {
            ...n,
            ref: i,
            defaultValue: e.defaultValue,
            value: g,
            label: e.labelName,
            min: d,
            max: f,
            size: e.size,
            error: c.message
          }
        )
      ] })
    }
  ) });
}
export {
  R as MantineSlider
};
