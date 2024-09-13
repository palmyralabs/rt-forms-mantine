import { jsx as a, Fragment as F } from "react/jsx-runtime";
import { forwardRef as R, useRef as f, useImperativeHandle as O } from "react";
import { useFieldManager as V, getFieldHandler as x, FieldDecorator as G } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { R as i } from "../../../chunks/Radio.js";
import { G as j } from "../../../chunks/Group.js";
const E = R(function(e, o) {
  const l = V(e.attribute, e), { getError: m, getValue: u, setValue: g, mutateOptions: b } = l, h = o || f(null), s = m(), n = f(null);
  O(h, () => ({
    ...x(l),
    focus() {
      n.current.focus();
    },
    setOptions(r) {
    },
    getOptions() {
    }
  }), [l]);
  var c = l.getFieldProps();
  c.onChange = (t, r) => {
    e.readOnly || (g(t.currentTarget.value), e.onChange && e.onChange(t.currentTarget.value));
  };
  const C = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((d, L) => /* @__PURE__ */ a(
          i,
          {
            ref: n,
            label: d.label,
            value: d.value,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: u()
          }
        ));
      if (typeof t == "object")
        return Object.keys(t).map((r, v) => /* @__PURE__ */ a(
          i,
          {
            ref: n,
            label: t[r],
            value: r,
            error: s.message,
            defaultValue: e.defaultValue,
            checked: u()
          }
        ));
    }
    return /* @__PURE__ */ a("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ a(F, { children: !b.visible && /* @__PURE__ */ a(
    G,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        i.Group,
        {
          label: e.label,
          ...c,
          description: e.description,
          children: /* @__PURE__ */ a(j, { mt: "xs", children: C(e.options) })
        }
      )
    }
  ) });
});
export {
  E as MantineRadioGroup
};
