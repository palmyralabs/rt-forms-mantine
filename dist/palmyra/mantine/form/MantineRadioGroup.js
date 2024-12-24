import { jsx as l, Fragment as v } from "react/jsx-runtime";
import { forwardRef as O, useRef as f, useImperativeHandle as R } from "react";
import { useFieldManager as V, getFieldHandler as x, FieldDecorator as G } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { Radio as u, Group as j } from "@mantine/core";
const D = O(function(e, c) {
  const r = V(e.attribute, e), { getError: m, getValue: n, setValue: g, mutateOptions: b, refreshError: B } = r, h = c || f(null), s = m(), i = f(null);
  R(h, () => ({
    ...x(r),
    focus() {
      i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var o = r.getFieldProps();
  o.onChange = (t) => {
    e.readOnly || (g(t), e.onChange && e.onChange(t));
  }, o.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const C = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((d, L) => /* @__PURE__ */ l(
          u,
          {
            ref: i,
            label: d.label,
            value: d.value,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
      if (typeof t == "object")
        return Object.keys(t).map((a, F) => /* @__PURE__ */ l(
          u,
          {
            ref: i,
            label: t[a],
            value: a,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
    }
    return /* @__PURE__ */ l("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ l(v, { children: !b.visible && /* @__PURE__ */ l(
    G,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        u.Group,
        {
          label: e.label,
          value: n().toString(),
          ...o,
          description: e.description,
          children: /* @__PURE__ */ l(j, { mt: "xs", children: C(e.options) })
        }
      )
    }
  ) });
});
export {
  D as MantineRadioGroup
};
