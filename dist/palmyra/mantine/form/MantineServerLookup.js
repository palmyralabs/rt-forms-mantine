import { jsx as o, Fragment as R } from "react/jsx-runtime";
import { useServerLookupFieldManager as V, getFieldHandler as w, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { delayGenerator as x } from "@palmyralabs/ts-utils";
import { forwardRef as D, useRef as i, useImperativeHandle as I } from "react";
import { a as E } from "../../../chunks/index.js";
import { R as H } from "../../../chunks/index3.js";
import { ServerLookup as j } from "./internal/ServerLookup.js";
import { getFieldLabel as q } from "./util.js";
const U = D(function(e, a) {
  const l = x(e.queryOptions.delay || 200), u = i(null), r = V(e.attribute, e), {
    getError: d,
    getValue: m,
    setValue: s,
    options: g,
    getFieldProps: C,
    setSearchText: h,
    refreshOptions: f,
    getOptionValue: c,
    getOptionKey: b,
    refreshError: y
  } = r, F = d(), v = a || i(null), t = m(), L = t ? c(t) : "";
  I(v, () => ({
    ...w(r),
    focus() {
      u.current.focus();
    }
  }), [r]);
  const O = {
    onValueChange: (n, k) => {
      s(n), e.onChange && e.onChange(k, n);
    },
    onChange: (n) => {
      l(h, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      l(f);
    },
    onDropdownClose: () => {
    },
    onBlur: () => {
      y();
    }
  }, S = t ? /* @__PURE__ */ o(H, { onClick: () => {
    s(null), e.onChange && e.onChange("", null);
  }, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(E, {});
  return /* @__PURE__ */ o(R, { children: /* @__PURE__ */ o(
    M,
    {
      label: q(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        j,
        {
          readOnly: e.readOnly,
          rightSection: S,
          ...C(),
          value: L,
          getOptionKey: b,
          getOptionValue: c,
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
