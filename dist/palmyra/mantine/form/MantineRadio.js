import { jsx as a, Fragment as g } from "react/jsx-runtime";
import { forwardRef as C, useRef as l, useImperativeHandle as h } from "react";
import { useFieldManager as F, getFieldHandler as R, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { getFieldLabel as O } from "./util.js";
import { Radio as M } from "@mantine/core";
const k = C(function(e, o) {
  const t = F(e.attribute, e), { getError: i, getValue: s, setValue: u, mutateOptions: c, refreshError: L } = t, d = o || l(null), m = i(), f = l(null);
  h(d, () => ({
    ...R(t),
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
    b,
    {
      label: O(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        M,
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
