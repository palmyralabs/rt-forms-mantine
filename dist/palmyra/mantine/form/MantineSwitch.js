import { jsx as o, Fragment as w } from "react/jsx-runtime";
import { forwardRef as y, useMemo as V, useRef as d, useImperativeHandle as L, useEffect as R } from "react";
import { useFieldManager as S, getFieldHandler as B, FieldDecorator as E } from "@palmyralabs/rt-forms";
import { getFieldLabel as x } from "./util.js";
import H from "../options/OptionsParser.js";
import { Switch as I } from "@mantine/core";
const K = y(function(e, s) {
  const n = V(
    () => H(e.options, e.label),
    [e.options, e.label]
  ), f = (t) => {
    if (n)
      return t ? n.checked.value : n.unchecked.value;
  }, m = (t) => n ? t == n.checked.value : !1, r = S(e.attribute, e, { format: f, parse: m }), { getError: h, getValue: g, setValue: i, mutateOptions: k, refreshError: D } = r, C = s || d(null), b = h(), a = g(), l = d(null);
  L(C, () => ({
    ...B(r),
    focus() {
      l.current.checked = !0, l.current.focus();
    },
    getOptions() {
    },
    setOptions(M) {
    }
  }), [r]);
  const v = () => {
    i(!a);
  };
  R(() => {
    c.onChange = () => u();
  }, [a]);
  const u = () => {
    var t = a ? "checked" : "unchecked";
    if (n)
      return n[t].title;
  }, O = () => {
    var t = a ? "checked" : "unchecked";
    if (n)
      return n[t].value;
  };
  var c = r.getFieldProps();
  c.onChange = (t, M) => {
    e.readOnly || (i(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, c.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const F = n ? b.message : "Invalid options, must contain two keys";
  return /* @__PURE__ */ o(w, { children: !k.visible && /* @__PURE__ */ o(
    E,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        I,
        {
          checked: a,
          onClick: v,
          value: O(),
          label: u(),
          defaultValue: e.defaultValue,
          disabled: e.readOnly,
          error: F,
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
