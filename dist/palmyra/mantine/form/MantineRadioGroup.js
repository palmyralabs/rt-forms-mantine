import { jsx as r, Fragment as O } from "react/jsx-runtime";
import { forwardRef as R, useRef as f, useImperativeHandle as V } from "react";
import { useFieldManager as x, getFieldHandler as G, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { Radio as u, Group as y } from "@mantine/core";
const B = R(function(e, c) {
  const l = x(e.attribute, e), { getError: m, getValue: n, setValue: g, mutateOptions: b, refreshError: h } = l, C = c || f(null), s = m(), i = f(null);
  V(C, () => ({
    ...G(l),
    focus() {
      i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [l]);
  var o = l.getFieldProps();
  o.onChange = (t, a) => {
    e.readOnly || (g(t.currentTarget.value), e.onChange && e.onChange(t.currentTarget.value));
  }, o.onBlur = h;
  const v = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((d, k) => /* @__PURE__ */ r(
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
        return Object.keys(t).map((a, F) => /* @__PURE__ */ r(
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
    return /* @__PURE__ */ r("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ r(O, { children: !b.visible && /* @__PURE__ */ r(
    M,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        u.Group,
        {
          label: e.label,
          value: n().toString(),
          ...o,
          description: e.description,
          children: /* @__PURE__ */ r(y, { mt: "xs", children: v(e.options) })
        }
      )
    }
  ) });
});
export {
  B as MantineRadioGroup
};
