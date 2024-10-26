import { jsx as n, Fragment as w } from "react/jsx-runtime";
import { forwardRef as y, useRef as s, useImperativeHandle as M } from "react";
import { useServerLookupFieldManager as D, getFieldHandler as R, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as x } from "./util.js";
import { delayGenerator as E } from "@palmyralabs/ts-utils";
import { ServerLookup as H } from "./internal/ServerLookup.js";
import { a as I } from "../../../chunks/index.js";
const c = E(100), q = y(function(e, t) {
  const i = s(null), r = D(e.attribute, e), {
    getError: u,
    getValue: d,
    setValue: m,
    options: g,
    getFieldProps: f,
    setSearchText: C,
    refreshOptions: h,
    getOptionValue: a,
    getOptionKey: b,
    refreshError: F
  } = r, v = u(), L = t || s(null), l = d(), O = l ? a(l) : "";
  M(L, () => ({
    ...R(r),
    focus() {
      i.current.focus();
    }
  }), [r]);
  const S = {
    onValueChange: (o, k) => {
      m(o), e.onChange && e.onChange(k);
    },
    onChange: (o) => {
      c(C, o), e.onChange && e.onChange(o);
    },
    onDropdownOpen: () => {
      c(h);
    },
    onDropdownClose: () => {
    },
    onBlur: () => {
      F();
    }
  };
  return /* @__PURE__ */ n(w, { children: /* @__PURE__ */ n(
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
          value: O,
          rightSection: /* @__PURE__ */ n(I, {}),
          getOptionKey: b,
          getOptionValue: a,
          data: g,
          label: e.label,
          error: v.message,
          ...S
        }
      )
    }
  ) });
});
export {
  q as MantineServerLookup
};
