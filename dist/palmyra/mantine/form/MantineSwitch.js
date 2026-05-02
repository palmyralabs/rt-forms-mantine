import { jsx as o, Fragment as v } from "react/jsx-runtime";
import { Switch as F } from "@mantine/core";
import { useFieldManager as y, getFieldHandler as M, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { useMemo as L, useRef as w, useImperativeHandle as B, useEffect as E } from "react";
import S from "../options/OptionsParser.js";
import { getFieldLabel as x } from "./util.js";
function z(e) {
  const n = L(
    () => S(e.options, e.label),
    [e.options, e.label]
  ), u = (t) => {
    if (n)
      return t ? n.checked.value : n.unchecked.value;
  }, d = (t) => n ? t == n.checked.value : !1, r = y(e.attribute, e, { format: u, parse: d }), { getError: f, getValue: m, setValue: s, mutateOptions: h, refreshError: H } = r, g = f(), a = m(), c = w(null);
  B(e.ref, () => ({
    ...M(r),
    focus() {
      c.current && (c.current.checked = !0, c.current.focus());
    },
    getOptions() {
    },
    setOptions(O) {
    }
  }), [r]);
  const k = () => {
    s(!a);
  };
  E(() => {
    l.onChange = () => i();
  }, [a]);
  const i = () => {
    const t = a ? "checked" : "unchecked";
    if (n)
      return n[t].title;
  }, C = () => {
    const t = a ? "checked" : "unchecked";
    if (n)
      return n[t].value;
  };
  var l = r.getFieldProps();
  l.onChange = (t, O) => {
    e.readOnly || (s(t.target.checked), e.onChange && e.onChange(t.target.checked));
  }, l.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const b = n ? g.message : "Invalid options, must contain two keys";
  return /* @__PURE__ */ o(v, { children: !h.visible && /* @__PURE__ */ o(
    V,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        F,
        {
          checked: a,
          onClick: k,
          value: C(),
          label: i(),
          defaultValue: e.defaultValue,
          disabled: e.readOnly,
          error: b,
          ref: (t) => {
            c.current = t;
          },
          ...l
        }
      )
    }
  ) });
}
export {
  z as MantineSwitch
};
