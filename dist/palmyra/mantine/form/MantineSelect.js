import { jsx as u, Fragment as h } from "react/jsx-runtime";
import { forwardRef as V, useRef as c, useImperativeHandle as M } from "react";
import { useFieldManager as R, getFieldHandler as S, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { getFieldLabel as y } from "./util.js";
import { S as D } from "../../../chunks/Select.js";
const I = V(function(e, o) {
  const l = R(e.attribute, e), { getError: d, getValue: s, setValue: f, mutateOptions: m } = l, v = o || c(null), g = d(), i = c(null), C = e.variant || "default";
  var b = s() != "" ? s() : null;
  M(v, () => ({
    ...S(l),
    focus() {
      i && i.current.focus();
    },
    setOptions(n) {
    },
    getOptions() {
    }
  }), [l]);
  var a = l.getFieldProps();
  e.readOnly && (a.inputProps = { readOnly: !0 }), a.onChange = (t, n) => {
    e.readOnly || (f(n.value), e.onChange && e.onChange(t.currentTarget.value, n));
  };
  const F = Object.keys(a.options).map((t, n) => {
    var r = {
      label: "",
      value: ""
    };
    return r.label = a.options[t], r.value = t, r;
  });
  var O = {
    label: a.options[e.defaultValue],
    value: e.defaultValue
  };
  return /* @__PURE__ */ u(h, { children: !m.visible && /* @__PURE__ */ u(
    x,
    {
      label: y(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ u(
        D,
        {
          defaultValue: O.value,
          data: F,
          value: b,
          ...a,
          variant: C,
          error: g.message
        }
      )
    }
  ) });
});
export {
  I as MantineSelect
};
