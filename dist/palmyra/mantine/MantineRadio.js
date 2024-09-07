import { jsx as n, Fragment as C } from "react/jsx-runtime";
import { forwardRef as F, useRef as o, useImperativeHandle as R } from "react";
import { useFieldManager as h, getFieldHandler as b, FieldDecorator as v } from "@palmyralabs/rt-forms";
import { getFieldLabel as O } from "./util.js";
import { R as M } from "../../chunks/Radio.js";
const w = F(function(e, r) {
  const t = h(e.attribute, e), { getError: i, getValue: s, setValue: u, mutateOptions: c } = t, d = r || o(null), m = i(), f = o(null);
  R(d, () => ({
    ...b(t),
    focus() {
      f.current.focus();
    },
    setOptions(g) {
    },
    getOptions() {
    }
  }), [t]);
  var l = t.getFieldProps();
  return l.onChange = (a, g) => {
    e.readOnly || (u(a.currentTarget.value), e.onChange && e.onChange(a.currentTarget.value));
  }, /* @__PURE__ */ n(C, { children: !c.visible && /* @__PURE__ */ n(
    v,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        M,
        {
          value: s(),
          ...l,
          error: m.message
        }
      )
    }
  ) });
});
export {
  w as MantineRadio
};
