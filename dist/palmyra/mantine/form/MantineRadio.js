import { jsx as a, Fragment as d } from "react/jsx-runtime";
import { Radio as m } from "@mantine/core";
import { useFieldManager as f, getFieldHandler as g, FieldDecorator as C } from "@palmyralabs/rt-forms";
import { useRef as h, useImperativeHandle as F } from "react";
import { getFieldLabel as b } from "./util.js";
function E(e) {
  const n = f(e.attribute, e), { getError: l, getValue: o, setValue: i, mutateOptions: s, refreshError: O } = n, u = l(), c = h(null);
  F(e.ref, () => ({
    ...g(n),
    focus() {
      c.current.focus();
    },
    setOptions(R) {
    },
    getOptions() {
    }
  }), [n]);
  var r = n.getFieldProps();
  return r.onChange = (t) => {
    e.readOnly || (i(t), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  }, /* @__PURE__ */ a(d, { children: !s.visible && /* @__PURE__ */ a(
    C,
    {
      label: b(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        m,
        {
          checked: o(),
          ...r,
          error: u.message
        }
      )
    }
  ) });
}
export {
  E as MantineRadio
};
