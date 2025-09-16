import { jsx as o, Fragment as w } from "react/jsx-runtime";
import { Switch as y } from "@mantine/core";
import { useFieldManager as V, getFieldHandler as L, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { forwardRef as S, useMemo as B, useRef as d, useImperativeHandle as E, useEffect as x } from "react";
import H from "../options/OptionsParser.js";
import { getFieldLabel as I } from "./util.js";
const K = S(function(e, s) {
  const n = B(
    () => H(e.options, e.label),
    [e.options, e.label]
  ), f = (t) => {
    if (n)
      return t ? n.checked.value : n.unchecked.value;
  }, m = (t) => n ? t == n.checked.value : !1, r = V(e.attribute, e, { format: f, parse: m }), { getError: h, getValue: g, setValue: i, mutateOptions: k, refreshError: D } = r, C = s || d(null), b = h(), a = g(), l = d(null);
  E(C, () => ({
    ...L(r),
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
  x(() => {
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
    R,
    {
      label: I(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        y,
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
