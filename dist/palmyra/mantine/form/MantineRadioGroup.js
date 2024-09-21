import { jsx as r, Fragment as R } from "react/jsx-runtime";
import { forwardRef as O, useRef as f, useImperativeHandle as V } from "react";
import { useFieldManager as x, getFieldHandler as G, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import { R as u } from "../../../chunks/Radio.js";
import { G as y } from "../../../chunks/Group.js";
const D = O(function(e, s) {
  const l = x(e.attribute, e), { getError: m, getValue: n, setValue: g, mutateOptions: b, refreshError: h } = l, C = s || f(null), c = m(), o = f(null);
  V(C, () => ({
    ...G(l),
    focus() {
      o.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [l]);
  var i = l.getFieldProps();
  i.onChange = (t, a) => {
    e.readOnly || (g(t.currentTarget.value), e.onChange && e.onChange(t.currentTarget.value));
  }, i.onBlur = h;
  const v = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((d, k) => /* @__PURE__ */ r(
          u,
          {
            ref: o,
            label: d.label,
            value: d.value,
            error: c.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
      if (typeof t == "object")
        return Object.keys(t).map((a, F) => /* @__PURE__ */ r(
          u,
          {
            ref: o,
            label: t[a],
            value: a,
            error: c.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
    }
    return /* @__PURE__ */ r("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ r(R, { children: !b.visible && /* @__PURE__ */ r(
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
          ...i,
          description: e.description,
          children: /* @__PURE__ */ r(y, { mt: "xs", children: v(e.options) })
        }
      )
    }
  ) });
});
export {
  D as MantineRadioGroup
};
