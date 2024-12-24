import { jsx as o, Fragment as R } from "react/jsx-runtime";
import { useServerLookupFieldManager as V, getFieldHandler as w, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { delayGenerator as x } from "@palmyralabs/ts-utils";
import { forwardRef as D, useRef as i, useImperativeHandle as B } from "react";
import { a as I } from "../../../chunks/index.js";
import { R as E } from "../../../chunks/index3.js";
import { ServerLookup as H } from "./internal/ServerLookup.js";
import { getFieldLabel as j } from "./util.js";
const U = D(function(e, a) {
  const l = x(e.queryOptions.delay || 200), c = i(null), r = V(e.attribute, e), {
    getError: d,
    getValue: m,
    setValue: s,
    options: g,
    getFieldProps: C,
    setSearchText: f,
    refreshOptions: h,
    getOptionValue: u,
    getOptionKey: b,
    refreshError: y
  } = r, F = d(), v = a || i(null), t = m(), L = t ? u(t) : "";
  B(v, () => ({
    ...w(r),
    focus() {
      c.current.focus();
    }
  }), [r]);
  const O = {
    onValueChange: (n, k) => {
      s(n), e.onChange && e.onChange(k, n);
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
  }, S = t ? /* @__PURE__ */ o(E, { onClick: () => {
    s(null), e.onChange && e.onChange("", null);
  }, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(I, {});
  return /* @__PURE__ */ o(R, { children: /* @__PURE__ */ o(
    M,
    {
      label: j(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        H,
        {
          readOnly: e.readOnly,
          rightSection: S,
          ...C(),
          value: L,
          getOptionKey: b,
          getOptionValue: u,
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
  U as MantineServerLookup
};
