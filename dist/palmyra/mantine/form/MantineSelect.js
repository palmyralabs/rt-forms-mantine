import { jsx as r, Fragment as V } from "react/jsx-runtime";
import { forwardRef as M, useRef as s, useImperativeHandle as R } from "react";
import { useFieldManager as x, getFieldHandler as y, FieldDecorator as D } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "./util.js";
import { Select as S } from "@mantine/core";
const I = M(function(e, o) {
  const n = x(e.attribute, e), { getError: i, getValue: c, setValue: d, mutateOptions: f, refreshError: m } = n, g = o || s(null), v = i(), u = s(null), C = e.variant || "default";
  var b = c();
  R(g, () => ({
    ...y(n),
    focus() {
      u && u.current.focus();
    },
    setOptions(l) {
    },
    getOptions() {
    }
  }), [n]);
  var t = n.getFieldProps();
  e.readOnly && (t.inputProps = { readOnly: !0 }), t.onChange = (a, l) => {
    e.readOnly || (d(l.value), e.onChange && e.onChange(a.currentTarget.value, l));
  }, t.onBlur = m;
  const h = Object.keys(t.options).map((a, l) => {
    var O = {
      label: t.options[a],
      value: a
    };
    return O;
  });
  var F = {
    label: t.options[e.defaultValue],
    value: e.defaultValue
  };
  return /* @__PURE__ */ r(V, { children: !f.visible && /* @__PURE__ */ r(
    D,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        S,
        {
          defaultValue: F.value,
          data: h,
          value: b,
          ...t,
          variant: C,
          error: v.message
        }
      )
    }
  ) });
});
export {
  I as MantineSelect
};
