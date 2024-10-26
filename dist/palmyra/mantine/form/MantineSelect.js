import { jsx as l, Fragment as y } from "react/jsx-runtime";
import { forwardRef as M, useRef as u, useImperativeHandle as R } from "react";
import { useFieldManager as S, getFieldHandler as x, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { keyToString as c, getFieldLabel as j } from "./util.js";
import { Select as D } from "@mantine/core";
const B = M(function(e, s) {
  const r = S(e.attribute, e), { getError: d, getValue: m, setValue: o, mutateOptions: f, refreshError: g } = r, v = s || u(null), C = d(), i = u(null), b = e.variant || "default";
  var h = m();
  R(v, () => ({
    ...x(r),
    focus() {
      i && i.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var t = r.getFieldProps();
  e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (n, a) => {
    e.readOnly || (o(a ? a.value : null), e.onChange && e.onChange(n, a));
  }, t.onBlur = g;
  const F = Object.keys(t.options).map((n, a) => {
    var O = {
      label: t.options[n],
      value: c(n)
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
          value: c(h),
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
