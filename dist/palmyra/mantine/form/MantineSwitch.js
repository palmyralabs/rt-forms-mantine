import { jsx as s, Fragment as w } from "react/jsx-runtime";
import { forwardRef as y, useRef as g, useMemo as L, useState as R, useEffect as k, useImperativeHandle as E } from "react";
import { useFieldManager as x, getFieldHandler as H, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { getFieldLabel as j } from "./util.js";
import B from "../options/OptionsParser.js";
import { Switch as D } from "@mantine/core";
const N = y(function(e, i) {
  const l = x(e.attribute, e), { getError: C, getValue: c, setValue: b, mutateOptions: O, refreshError: V } = l, F = i || g(null), v = C(), a = L(
    () => B(e.options, e.label),
    [e.options, e.label]
  ), d = (t, u) => {
    var m = a.checked.value;
    return t != null && t != null ? m == t : m == u;
  }, [n, f] = R(d(c(), e.defaultValue)), o = g(null);
  k(() => {
    f(d(c(), e.defaultValue));
  }, [c()]), E(F, () => ({
    ...H(l),
    focus() {
      o.current.checked = !0, o.current.focus();
    },
    getOptions() {
    },
    setOptions(u) {
    }
  }), [l]);
  const M = () => {
    f(!n);
  };
  k(() => {
    r.onChange = () => h();
  }, [n]);
  const h = () => {
    var t = n ? "checked" : "unchecked";
    return console.log(a[t].title, t), a[t].title;
  }, S = () => {
    var t = n ? "checked" : "unchecked";
    return a[t].value || null;
  };
  var r = l.getFieldProps();
  return r.onChange = (t, u) => {
    e.readOnly || (b(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, r.onBlur = V, /* @__PURE__ */ s(w, { children: !O.visible && /* @__PURE__ */ s(
    I,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ s(
        D,
        {
          checked: n,
          onClick: M,
          value: S(),
          label: h(),
          defaultValue: e.defaultValue,
          disabled: e.readOnly,
          error: v.message,
          ref: (t) => {
            o.current = t;
          },
          ...r
        }
      )
    }
  ) });
});
export {
  N as MantineSwitch
};
