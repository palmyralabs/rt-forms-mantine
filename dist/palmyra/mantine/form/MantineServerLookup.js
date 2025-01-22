import { jsx as o, Fragment as V } from "react/jsx-runtime";
import { useServerLookupFieldManager as x, getFieldHandler as D, FieldDecorator as B } from "@palmyralabs/rt-forms";
import { delayGenerator as I } from "@palmyralabs/ts-utils";
import { forwardRef as E, useRef as c, useImperativeHandle as H } from "react";
import { a as j } from "../../../chunks/index.js";
import { R as q } from "../../../chunks/index3.js";
import { ServerLookup as A } from "./internal/ServerLookup.js";
import { getFieldLabel as G } from "./util.js";
const X = E(function(e, a) {
  const l = I(e.queryOptions.delay || 200), u = c(null), r = x(e.attribute, e), {
    getError: d,
    getValue: m,
    setValue: s,
    options: g,
    getFieldProps: C,
    setSearchText: f,
    refreshOptions: h,
    getOptionValue: i,
    getOptionKey: b,
    refreshError: y
  } = r, O = d(), F = a || c(null), t = m(), v = t ? i(t) : "";
  H(F, () => ({
    ...D(r),
    focus() {
      u.current.focus();
    }
  }), [r]);
  const L = {
    onValueChange: (n, M) => {
      s(n), e.onChange && e.onChange(M, n);
    },
    onChange: (n) => {
      l(f, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      l(h);
    },
    onDropdownClose: () => {
    },
    onBlur: (n) => {
      y(), e.onBlur && e.onBlur(n);
    }
  }, S = () => {
    s(null), e.onChange && e.onChange("", null);
  }, k = e.readOnly, R = e.disabled, w = t && !k && !R ? /* @__PURE__ */ o(q, { onClick: S, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(j, {});
  return /* @__PURE__ */ o(V, { children: /* @__PURE__ */ o(
    B,
    {
      label: G(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        A,
        {
          readOnly: e.readOnly,
          rightSection: w,
          ...C(),
          value: v,
          getOptionKey: b,
          getOptionValue: i,
          data: g,
          label: e.label,
          error: O.message,
          ...L
        }
      )
    }
  ) });
});
export {
  X as MantineServerLookup
};
