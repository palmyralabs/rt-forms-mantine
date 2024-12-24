import { jsx as t, Fragment as R } from "react/jsx-runtime";
import { forwardRef as v, useRef as m, useImperativeHandle as V } from "react";
import { useFieldManager as G, getFieldHandler as M, FieldDecorator as j } from "@palmyralabs/rt-forms";
import { getFieldLabel as x } from "./util.js";
import { Radio as c, Group as B } from "@mantine/core";
const D = v(function(e, s) {
  const r = G(e.attribute, e), { getError: g, getValue: n, setValue: b, mutateOptions: h, refreshError: y } = r, C = s || m(null), d = g(), i = m(null);
  V(C, () => ({
    ...M(r),
    focus() {
      i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var o = r.getFieldProps();
  o.onChange = (l) => {
    e.readOnly || (b(l), e.onChange && e.onChange(l));
  }, o.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  };
  const F = (l) => {
    if (l) {
      if (l instanceof Array)
        return l.map((u, O) => /* @__PURE__ */ t(
          c,
          {
            ref: i,
            label: u.label,
            value: u.value,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: n()
          },
          u.label + O
        ));
      if (typeof l == "object")
        return Object.keys(l).map((a, f) => /* @__PURE__ */ t(
          c,
          {
            ref: i,
            label: l[a],
            value: a,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: n()
          },
          l[a] + f
        ));
    }
    return /* @__PURE__ */ t("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ t(R, { children: !h.visible && /* @__PURE__ */ t(
    j,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        c.Group,
        {
          label: e.label,
          value: n().toString(),
          ...o,
          description: e.description,
          children: /* @__PURE__ */ t(B, { mt: "xs", children: F(e.options) })
        }
      )
    }
  ) });
});
export {
  D as MantineRadioGroup
};
