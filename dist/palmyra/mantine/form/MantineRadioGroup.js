import { jsx as t, Fragment as F } from "react/jsx-runtime";
import { Radio as o, Group as O } from "@mantine/core";
import { useFieldManager as v, getFieldHandler as V, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { useRef as R, useImperativeHandle as j } from "react";
import { getFieldLabel as x } from "./util.js";
function A(e) {
  const r = v(e.attribute, e), { getError: m, getValue: c, setValue: g, mutateOptions: b, refreshError: B } = r, s = m(), i = R(null);
  j(e.ref, () => ({
    ...V(r),
    focus() {
      i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var u = r.getFieldProps();
  u.onChange = (l) => {
    e.readOnly || (g(l), e.onChange && e.onChange(l));
  }, u.onBlur = (l) => {
    e.onBlur && e.onBlur(l);
  };
  const d = (l) => l == c(), h = (l) => {
    if (l) {
      if (l instanceof Array)
        return l.map((n, C) => /* @__PURE__ */ t(
          o,
          {
            ref: i,
            label: n.label,
            value: n.value,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: d(n.value)
          },
          n.label + C
        ));
      if (typeof l == "object")
        return Object.keys(l).map((a, f) => /* @__PURE__ */ t(
          o,
          {
            ref: i,
            label: l[a],
            value: a,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: d(a)
          },
          l[a] + f
        ));
    }
    return /* @__PURE__ */ t("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ t(F, { children: !b.visible && /* @__PURE__ */ t(
    M,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        o.Group,
        {
          label: e.label,
          value: c().toString(),
          ...u,
          description: e.description,
          children: /* @__PURE__ */ t(O, { mt: "xs", children: h(e.options) })
        }
      )
    }
  ) });
}
export {
  A as MantineRadioGroup
};
