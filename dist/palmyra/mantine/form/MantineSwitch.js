import { jsx as o, Fragment as y } from "react/jsx-runtime";
import { forwardRef as V, useMemo as L, useRef as d, useImperativeHandle as R, useEffect as S } from "react";
import { useFieldManager as E, getFieldHandler as x, FieldDecorator as H } from "@palmyralabs/rt-forms";
import { getFieldLabel as I } from "./util.js";
import j from "../options/OptionsParser.js";
import { Switch as B } from "@mantine/core";
const K = V(function(e, s) {
  const n = L(
    () => j(e.options, e.label),
    [e.options, e.label]
  ), f = (t) => {
    if (n)
      return t ? n.checked.value : n.unchecked.value;
  }, m = (t) => n ? t == n.checked.value : !1, r = E(e.attribute, e, { format: f, parse: m }), { getError: h, getValue: g, setValue: i, mutateOptions: k, refreshError: C } = r, b = s || d(null), v = h(), a = g(), l = d(null);
  R(b, () => ({
    ...x(r),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    getOptions() {
    },
    setOptions(w) {
    }
  }), [r]);
  const O = () => {
    i(!a);
  };
  S(() => {
    c.onChange = () => u();
  }, [a]);
  const u = () => {
    var t = a ? "checked" : "unchecked";
    if (n)
      return n[t].title;
  }, F = () => {
    var t = a ? "checked" : "unchecked";
    if (n)
      return n[t].value;
  };
  var c = r.getFieldProps();
  c.onChange = (t, w) => {
    e.readOnly || (i(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, c.onBlur = C;
  const M = n ? v.message : "Invalid options, must contain two keys";
  return /* @__PURE__ */ o(y, { children: !k.visible && /* @__PURE__ */ o(
    H,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        B,
        {
          checked: a,
          onClick: O,
          value: F(),
          label: u(),
          defaultValue: e.defaultValue,
          disabled: e.readOnly,
          error: M,
          ref: (t) => {
            l.current = t;
          },
          ...c
        }
      )
    }
  ) });
});
export {
  K as MantineSwitch
};
