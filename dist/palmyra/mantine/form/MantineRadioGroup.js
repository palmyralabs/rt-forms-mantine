import { jsx as t, Fragment as R } from "react/jsx-runtime";
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
  i.onChange = (r, a) => {
    e.readOnly || (g(r.currentTarget.value), e.onChange && e.onChange(r.currentTarget.value));
  }, i.onBlur = h;
  const v = (r) => {
    if (r) {
      if (r instanceof Array)
        return r.map((d, k) => /* @__PURE__ */ t(
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
      if (typeof r == "object")
        return Object.keys(r).map((a, F) => /* @__PURE__ */ t(
          u,
          {
            ref: o,
            label: r[a],
            value: a,
            error: c.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
    }
    return /* @__PURE__ */ t("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ t(R, { children: !b.visible && /* @__PURE__ */ t(
    M,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ t(
        u.Group,
        {
          label: e.label,
          value: n(),
          ...i,
          description: e.description,
          children: /* @__PURE__ */ t(y, { mt: "xs", children: v(e.options) })
        }
      )
    }
  ) });
});
export {
  D as MantineRadioGroup
};
