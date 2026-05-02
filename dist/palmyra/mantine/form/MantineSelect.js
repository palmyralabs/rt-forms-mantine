import { jsx as l, Fragment as b } from "react/jsx-runtime";
import { Select as F } from "@mantine/core";
import { useFieldManager as O, getFieldHandler as S, FieldDecorator as y } from "@palmyralabs/rt-forms";
import { useRef as M, useImperativeHandle as x } from "react";
import { a as B } from "../../../chunks/index.js";
import { keyToString as s, getFieldLabel as D } from "./util.js";
function R(e) {
  const r = O(e.attribute, e), { getError: u, getValue: c, setValue: i, mutateOptions: d, refreshError: I } = r, m = u(), o = M(null), f = e.variant || "default";
  var g = c();
  x(e.ref, () => ({
    ...S(r),
    focus() {
      o && o.current.focus();
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
  const h = Object.keys(n.options).map((t, a) => {
    var C = {
      label: n.options[t],
      value: s(t)
    };
    return C;
  }), v = e.rightSection ? e.rightSection : /* @__PURE__ */ l(B, {});
  return /* @__PURE__ */ l(b, { children: !d.visible && /* @__PURE__ */ l(
    y,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ l(
        F,
        {
          data: h,
          value: s(g),
          ...n,
          variant: f,
          error: m.message,
          rightSection: v
        }
      )
    }
  ) });
}
export {
  R as MantineSelect
};
