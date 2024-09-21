import { jsx as a, Fragment as h } from "react/jsx-runtime";
import { forwardRef as F, useRef as l, useImperativeHandle as R } from "react";
import { useFieldManager as b, getFieldHandler as v, FieldDecorator as O } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { R as L } from "../../../chunks/Radio.js";
const k = F(function(e, o) {
  const t = b(e.attribute, e), { getError: s, getValue: i, setValue: u, mutateOptions: c, refreshError: d } = t, m = o || l(null), f = s(), g = l(null);
  R(m, () => ({
    ...v(t),
    focus() {
      g.current.focus();
    },
    setOptions(C) {
    },
    getOptions() {
    }
  }), [t]);
  var r = t.getFieldProps();
  return r.onChange = (n, C) => {
    e.readOnly || (u(n.currentTarget.value), e.onChange && e.onChange(n.currentTarget.value));
  }, r.onBlur = d, /* @__PURE__ */ a(h, { children: !c.visible && /* @__PURE__ */ a(
    O,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        L,
        {
          checked: i(),
          ...r,
          error: f.message
        }
      )
    }
  ) });
});
export {
  k as MantineRadio
};
