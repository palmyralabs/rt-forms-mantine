import { jsx as u, Fragment as h } from "react/jsx-runtime";
import { forwardRef as L, useRef as d, useImperativeHandle as S } from "react";
import { useServerLookupFieldManager as k, getFieldHandler as v, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { Autocomplete as q } from "@mantine/core";
const V = L(function(t, s) {
  const m = d(null), o = k(t.attribute, t), { getError: b, getValue: c, setValue: f, options: g, getFieldProps: C } = o, O = b(), F = s || d(null);
  S(F, () => ({
    ...v(o),
    focus() {
      m.current.focus();
    }
  }), [o]);
  const r = g.map((n, l) => {
    var i = {
      label: n[t.queryOptions.labelAttribute] || n[t.lookupOptions.labelAttribute],
      value: n[t.queryOptions.idAttribute].toString() || n[t.lookupOptions.idAttribute].toString()
    };
    return i;
  }), A = {
    onChange: (n) => {
      const l = r.find((i) => i.label === n) || null;
      f(parseInt(l == null ? void 0 : l.value)), t.onChange && t.onChange(n);
    }
  };
  var e = c();
  typeof c() == "object" && (e = (e == null ? void 0 : e[t.queryOptions.idAttribute]) || (e == null ? void 0 : e[t.lookupOptions.idAttribute]));
  const a = r.find((n) => n.value === (e == null ? void 0 : e.toString())) || null;
  return /* @__PURE__ */ u(h, { children: /* @__PURE__ */ u(
    M,
    {
      label: R(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ u(
        q,
        {
          readOnly: t.readOnly,
          renderOption: t.renderOption,
          ...C(),
          value: a == null ? void 0 : a.label,
          data: r,
          label: t.label,
          defaultValue: t.defaultValue,
          error: O.message,
          ...A
        }
      )
    }
  ) });
});
export {
  V as MantineServerLookup
};
