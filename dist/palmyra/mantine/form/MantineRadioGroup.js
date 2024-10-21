import { jsx as l, Fragment as O } from "react/jsx-runtime";
import { forwardRef as R, useRef as f, useImperativeHandle as V } from "react";
import { useFieldManager as x, getFieldHandler as G, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { Radio as u, Group as y } from "@mantine/core";
const D = R(function(e, s) {
  const r = x(e.attribute, e), { getError: m, getValue: n, setValue: g, mutateOptions: b, refreshError: h } = r, C = s || f(null), c = m(), i = f(null);
  V(C, () => ({
    ...G(r),
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
  }, o.onBlur = h;
  const F = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((d, k) => /* @__PURE__ */ l(
          u,
          {
            ref: i,
            label: d.label,
            value: d.value,
            error: c.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
      if (typeof t == "object")
        return Object.keys(t).map((a, v) => /* @__PURE__ */ l(
          u,
          {
            ref: i,
            label: t[a],
            value: a,
            error: c.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
    }
    return /* @__PURE__ */ l("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ l(O, { children: !b.visible && /* @__PURE__ */ l(
    M,
    {
      label: j(e),
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
          children: /* @__PURE__ */ l(y, { mt: "xs", children: F(e.options) })
        }
      )
    }
  ) });
});
export {
  D as MantineRadioGroup
};
