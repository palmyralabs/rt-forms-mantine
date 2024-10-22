import { jsx as n, Fragment as k } from "react/jsx-runtime";
import { forwardRef as w, useRef as s, useImperativeHandle as y } from "react";
import { useServerLookupFieldManager as M, getFieldHandler as D, FieldDecorator as R } from "@palmyralabs/rt-forms";
import { getFieldLabel as V } from "./util.js";
import { delayGenerator as x } from "@palmyralabs/ts-utils";
import { ServerLookup as H } from "./internal/ServerLookup.js";
import { a as I } from "../../../chunks/index.js";
const c = x(100), q = w(function(e, r) {
  const i = s(null), t = M(e.attribute, e), {
    getError: u,
    getValue: d,
    setValue: m,
    options: g,
    getFieldProps: f,
    setSearchText: C,
    refreshOptions: h,
    getOptionValue: a,
    getOptionKey: b
  } = t, F = u(), v = r || s(null), l = d(), L = l ? a(l) : "";
  y(v, () => ({
    ...D(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  const O = {
    onValueChange: (o, S) => {
      m(o), e.onChange && e.onChange(S);
    },
    onChange: (o) => {
      c(C, o), e.onChange && e.onChange(o);
    },
    onDropdownOpen: () => {
      c(h);
    },
    onDropdownClose: () => {
    }
  };
  return /* @__PURE__ */ n(k, { children: /* @__PURE__ */ n(
    R,
    {
      label: V(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        H,
        {
          readOnly: e.readOnly,
          ...f(),
          value: L,
          rightSection: /* @__PURE__ */ n(I, {}),
          getOptionKey: b,
          getOptionValue: a,
          data: g,
          label: e.label,
          error: F.message,
          ...O
        }
      )
    }
  ) });
});
export {
  q as MantineServerLookup
};
