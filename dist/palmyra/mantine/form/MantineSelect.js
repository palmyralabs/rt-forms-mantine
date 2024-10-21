import { jsx as l, Fragment as y } from "react/jsx-runtime";
import { forwardRef as M, useRef as i, useImperativeHandle as R } from "react";
import { useFieldManager as S, getFieldHandler as x, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { keyToString as u, getFieldLabel as j } from "./util.js";
import { Select as D } from "@mantine/core";
const B = M(function(e, o) {
  const r = S(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = r, v = o || i(null), C = c(), s = i(null), b = e.variant || "default";
  var h = d();
  R(v, () => ({
    ...x(r),
    focus() {
      s && s.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var t = r.getFieldProps();
  e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (n, a) => {
    e.readOnly || (a && m(a.value), e.onChange && e.onChange(n, a));
  }, t.onBlur = g;
  const F = Object.keys(t.options).map((n, a) => {
    var O = {
      label: t.options[n],
      value: u(n)
    };
    return O;
  });
  return /* @__PURE__ */ l(y, { children: !f.visible && /* @__PURE__ */ l(
    L,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        D,
        {
          data: F,
          value: u(h),
          ...t,
          variant: b,
          error: C.message
        }
      )
    }
  ) });
});
export {
  B as MantineSelect
};
