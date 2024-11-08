import { jsx as n, Fragment as k } from "react/jsx-runtime";
import { forwardRef as w, useRef as i, useImperativeHandle as M } from "react";
import { useServerLookupFieldManager as D, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as x } from "./util.js";
import { delayGenerator as E } from "@palmyralabs/ts-utils";
import { ServerLookup as H } from "./internal/ServerLookup.js";
import { a as I } from "../../../chunks/index.js";
const p = w(function(e, t) {
  const a = E(e.queryOptions.delay || 200), u = i(null), r = D(e.attribute, e), {
    getError: c,
    getValue: d,
    setValue: m,
    options: g,
    getFieldProps: f,
    setSearchText: C,
    refreshOptions: h,
    getOptionValue: l,
    getOptionKey: b,
    refreshError: F
  } = r, v = c(), y = t || i(null), s = d(), L = s ? l(s) : "";
  M(y, () => ({
    ...R(r),
    focus() {
      u.current.focus();
    }
  }), [r]);
  const O = {
    onValueChange: (o, S) => {
      m(o), e.onChange && e.onChange(S, o);
    },
    onChange: (o) => {
      a(C, o), e.onChange && e.onChange(o);
    },
    onDropdownOpen: () => {
      a(h);
    },
    onDropdownClose: () => {
    },
    onBlur: () => {
      F();
    }
  };
  return /* @__PURE__ */ n(k, { children: /* @__PURE__ */ n(
    V,
    {
      label: x(e),
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
          getOptionValue: l,
          data: g,
          label: e.label,
          error: v.message,
          ...O
        }
      )
    }
  ) });
});
export {
  p as MantineServerLookup
};
