import { jsx as l, Fragment as y } from "react/jsx-runtime";
import { forwardRef as M, useRef as i, useImperativeHandle as R } from "react";
import { useFieldManager as S, getFieldHandler as x, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { keyToString as u, getFieldLabel as j } from "./util.js";
import { Select as D } from "@mantine/core";
const w = M(function(e, o) {
  const a = S(e.attribute, e), { getError: c, getValue: d, setValue: m, mutateOptions: f, refreshError: g } = a, v = o || i(null), C = c(), s = i(null), b = e.variant || "default";
  var h = d();
  R(v, () => ({
    ...x(a),
    focus() {
      s && s.current.focus();
    },
    setOptions(r) {
    },
    getOptions() {
    }
  }), [a]);
  var t = a.getFieldProps();
  e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (n, r) => {
    e.readOnly || (m(r.value), e.onChange && e.onChange(n.currentTarget.value, r));
  }, t.onBlur = g;
  const F = Object.keys(t.options).map((n, r) => {
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
  w as MantineSelect
};
