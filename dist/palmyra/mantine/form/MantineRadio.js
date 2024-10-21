import { jsx as a, Fragment as C } from "react/jsx-runtime";
import { forwardRef as h, useRef as l, useImperativeHandle as F } from "react";
import { useFieldManager as R, getFieldHandler as b, FieldDecorator as O } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "./util.js";
import { Radio as L } from "@mantine/core";
const w = h(function(e, o) {
  const t = R(e.attribute, e), { getError: i, getValue: s, setValue: c, mutateOptions: u, refreshError: d } = t, m = o || l(null), f = i(), g = l(null);
  F(m, () => ({
    ...b(t),
    focus() {
      g.current.focus();
    },
    setOptions(x) {
    },
    getOptions() {
    }
  }), [t]);
  var n = t.getFieldProps();
  return n.onChange = (r) => {
    e.readOnly || (c(r), e.onChange && e.onChange(r));
  }, n.onBlur = d, /* @__PURE__ */ a(C, { children: !u.visible && /* @__PURE__ */ a(
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
          checked: s(),
          ...n,
          error: f.message
        }
      )
    }
  ) });
});
export {
  w as MantineRadio
};
