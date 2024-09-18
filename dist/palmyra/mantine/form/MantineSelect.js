import { jsx as r, Fragment as V } from "react/jsx-runtime";
import { forwardRef as M, useRef as u, useImperativeHandle as R } from "react";
import { useFieldManager as S, getFieldHandler as x, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { getFieldLabel as D } from "./util.js";
import { S as L } from "../../../chunks/Select.js";
const I = M(function(e, o) {
  const n = S(e.attribute, e), { getError: i, getValue: c, setValue: d, mutateOptions: f, refreshError: m } = n, g = o || u(null), v = i(), s = u(null), C = e.variant || "default";
  var b = c();
  //!= '' ? getValue() : null
  R(g, () => ({
    ...x(n),
    focus() {
      s && s.current.focus();
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
    y,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        L,
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
