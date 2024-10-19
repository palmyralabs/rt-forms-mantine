import { jsx as n, Fragment as O } from "react/jsx-runtime";
import { forwardRef as k, useRef as s, useImperativeHandle as y } from "react";
import { useServerLookupFieldManager as S, getFieldHandler as M, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { delayGenerator as w } from "@palmyralabs/ts-utils";
import { ServerLookup as x } from "./internal/ServerLookup.js";
const c = w(100), P = k(function(e, r) {
  const u = s(null), t = S(e.attribute, e), {
    getError: i,
    getValue: d,
    setValue: m,
    options: f,
    getFieldProps: g,
    setSearchText: C,
    refreshOptions: b,
    getOptionValue: a,
    getOptionKey: h
  } = t, F = i(), p = r || s(null), l = d(), v = l ? a(l) : "";
  y(p, () => ({
    ...M(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  const L = {
    onValueChange: (o) => {
      m(o);
    },
    onChange: (o) => {
      c(C, o);
    },
    onDropdownOpen: () => {
      c(b);
    },
    onDropdownClose: () => {
    }
  };
  return /* @__PURE__ */ n(O, { children: /* @__PURE__ */ n(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        x,
        {
          readOnly: e.readOnly,
          ...g(),
          value: v,
          getOptionKey: h,
          getOptionValue: a,
          data: f,
          label: e.label,
          error: F.message,
          ...L
        }
      )
    }
  ) });
});
export {
  P as MantineServerLookup
};
