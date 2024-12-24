import { jsx as l, Fragment as S } from "react/jsx-runtime";
import { Select as M } from "@mantine/core";
import { useFieldManager as y, getFieldHandler as R, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { forwardRef as x, useRef as c, useImperativeHandle as B } from "react";
import { a as D } from "../../../chunks/index.js";
import { keyToString as u, getFieldLabel as I } from "./util.js";
const T = x(function(e, o) {
  const r = y(e.attribute, e), { getError: d, getValue: m, setValue: i, mutateOptions: f, refreshError: j } = r, g = o || c(null), h = d(), s = c(null), v = e.variant || "default";
  var C = m();
  B(g, () => ({
    ...R(r),
    focus() {
      s && s.current.focus();
    },
    setOptions(a) {
    },
    getOptions() {
    }
  }), [r]);
  var n = r.getFieldProps();
  e.readOnly && (n.inputProps = { readOnly: !0 }), n.onChange = (t, a) => {
    e.readOnly || (i(a ? a.value : null), e.onChange && e.onChange(t, a));
  }, n.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const b = Object.keys(n.options).map((t, a) => {
    var O = {
      label: n.options[t],
      value: u(t)
    };
    return O;
  }), F = e.rightSection ? e.rightSection : /* @__PURE__ */ l(D, {});
  return /* @__PURE__ */ l(S, { children: !f.visible && /* @__PURE__ */ l(
    w,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        M,
        {
          data: b,
          value: u(C),
          ...n,
          variant: v,
          error: h.message,
          rightSection: F
        }
      )
    }
  ) });
});
export {
  T as MantineSelect
};
