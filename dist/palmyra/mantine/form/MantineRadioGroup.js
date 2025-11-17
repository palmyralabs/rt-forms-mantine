import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { Radio as o, Group as V } from "@mantine/core";
import { useFieldManager as M, getFieldHandler as G, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { forwardRef as x, useRef as g, useImperativeHandle as B } from "react";
import { getFieldLabel as L } from "./util.js";
const N = x(function(e, c) {
  const r = M(e.attribute, e), { getError: b, getValue: s, setValue: h, mutateOptions: C, refreshError: H } = r, F = c || g(null), d = b(), u = g(null);
  B(F, () => ({
    ...G(r),
    focus() {
      u.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var i = r.getFieldProps();
  i.onChange = (t) => {
    e.readOnly || (h(t), e.onChange && e.onChange(t));
  }, i.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const f = (t) => t == s(), O = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((n, R) => /* @__PURE__ */ l(
          o,
          {
            ref: u,
            label: n.label,
            value: n.value,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: f(n.value)
          },
          n.label + R
        ));
      if (typeof t == "object")
        return Object.keys(t).map((a, m) => /* @__PURE__ */ l(
          o,
          {
            ref: u,
            label: t[a],
            value: a,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: f(a)
          },
          t[a] + m
        ));
    }
    return /* @__PURE__ */ l("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ l(v, { children: !C.visible && /* @__PURE__ */ l(
    j,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        o.Group,
        {
          label: e.label,
          value: s().toString(),
          ...i,
          description: e.description,
          children: /* @__PURE__ */ l(V, { mt: "xs", children: O(e.options) })
        }
      )
    }
  ) });
});
export {
  N as MantineRadioGroup
};
