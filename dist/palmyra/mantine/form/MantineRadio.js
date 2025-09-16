import { jsx as a, Fragment as g } from "react/jsx-runtime";
import { Radio as C } from "@mantine/core";
import { useFieldManager as h, getFieldHandler as F, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { forwardRef as b, useRef as l, useImperativeHandle as O } from "react";
import { getFieldLabel as M } from "./util.js";
const k = b(function(e, o) {
  const t = h(e.attribute, e), { getError: i, getValue: s, setValue: u, mutateOptions: c, refreshError: L } = t, d = o || l(null), m = i(), f = l(null);
  O(d, () => ({
    ...F(t),
    focus() {
      f.current.focus();
    },
    setOptions(v) {
    },
    getOptions() {
    }
  }), [t]);
  var r = t.getFieldProps();
  return r.onChange = (n) => {
    e.readOnly || (u(n), e.onChange && e.onChange(n));
  }, r.onBlur = (n) => {
    e.onBlur && e.onBlur(n);
  }, /* @__PURE__ */ a(g, { children: !c.visible && /* @__PURE__ */ a(
    R,
    {
      label: M(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        C,
        {
          checked: s(),
          ...r,
          error: m.message
        }
      )
    }
  ) });
});
export {
  k as MantineRadio
};
