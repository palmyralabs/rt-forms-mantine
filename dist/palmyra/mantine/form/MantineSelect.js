import { jsx as o, Fragment as M } from "react/jsx-runtime";
import { Select as y } from "@mantine/core";
import { useFieldManager as R, getFieldHandler as w, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { forwardRef as D, useRef as c, useImperativeHandle as I } from "react";
import { a as L } from "../../../chunks/index.js";
import { keyToString as u, getFieldLabel as j } from "./util.js";
const T = D(function(e, l) {
  const r = R(e.attribute, e), { getError: d, getValue: m, setValue: i, mutateOptions: f, refreshError: g } = r, h = l || c(null), v = d(), s = c(null), C = e.variant || "default";
  var b = m();
  I(h, () => ({
    ...w(r),
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
    e.readOnly || (i(a ? a.value : null), e.onChange && e.onChange(n, a));
  }, t.onBlur = g;
  const F = Object.keys(t.options).map((n, a) => {
    var S = {
      label: t.options[n],
      value: u(n)
    };
    return S;
  }), O = e.rightSection ? e.rightSection : /* @__PURE__ */ o(L, {});
  return /* @__PURE__ */ o(M, { children: !f.visible && /* @__PURE__ */ o(
    x,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        y,
        {
          data: F,
          value: u(b),
          ...t,
          variant: C,
          error: v.message,
          rightSection: O
        }
      )
    }
  ) });
});
export {
  T as MantineSelect
};
