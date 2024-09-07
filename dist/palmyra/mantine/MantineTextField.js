import { jsx as n, Fragment as v } from "react/jsx-runtime";
import { forwardRef as x, useRef as c, useImperativeHandle as I } from "react";
import { useFieldManager as T, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { f as y, b as L } from "../../chunks/factory.js";
import { I as d } from "../../chunks/InputBase.js";
const P = {}, r = y((o, e) => {
  const t = L("TextInput", P, o);
  return /* @__PURE__ */ n(d, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
r.classes = d.classes;
r.displayName = "@mantine/core/TextInput";
const B = x(function(e, t) {
  const a = T(e.attribute, e), { getError: m, getValue: s, setValue: f, mutateOptions: g } = a, C = t || c(null), F = m(), u = c(null), b = e.variant || "default";
  var h = s() != "" ? s() : null;
  I(C, () => ({
    ...M(a),
    focus() {
      u.current.focus();
    }
  }), [a]);
  var i = a.getFieldProps();
  return i.onChange = (l) => {
    e.readOnly || (f(l.target.value), e.onChange && e.onChange(l.target.value));
  }, /* @__PURE__ */ n(v, { children: !g.visible && /* @__PURE__ */ n(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        r,
        {
          defaultValue: e.defaultValue,
          label: e.label,
          variant: b,
          ref: u,
          ...i,
          placeholder: e.placeholder,
          value: h,
          error: F.message
        }
      )
    }
  ) });
});
export {
  B as MantineTextField
};
