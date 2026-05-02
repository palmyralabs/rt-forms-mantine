import { jsx as o, Fragment as R } from "react/jsx-runtime";
import { useDisclosure as B } from "@mantine/hooks";
import { useServerLookupFieldManager as E, getFieldHandler as H, FieldDecorator as T } from "@palmyralabs/rt-forms";
import { delayGenerator as j } from "@palmyralabs/ts-utils";
import { useRef as q, useState as A, useImperativeHandle as G } from "react";
import { a as K } from "../../../chunks/index.js";
import { R as P } from "../../../chunks/index4.js";
import { ServerLookup as z } from "./internal/ServerLookup.js";
import { getFieldLabel as J } from "./util.js";
function p(e) {
  const l = j(e.queryOptions.delay || 200), C = q(null), t = E(e.attribute, e), {
    getError: h,
    getValue: b,
    setValue: i,
    options: O,
    getFieldProps: y,
    setSearchText: c,
    refreshOptions: u,
    getOptionValue: d,
    getOptionKey: k,
    refreshError: F
  } = t, L = h(), [m, a] = A(!1), [f, { open: g, close: r }] = B(!1), s = b(), S = s ? d(s) : "", v = () => {
    a(!0), f ? r() : (g(), l(u));
  };
  G(e.ref, () => ({
    ...H(t),
    focus() {
      C.current.focus();
    }
  }), [t]);
  const w = {
    onValueChange: (n, M) => {
      i(n), e.onChange && e.onChange(M, n), r();
    },
    onChange: (n) => {
      l(c, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      m || g(), a(!1), l(u);
    },
    onDropdownClose: () => {
      m || r(), a(!1);
    },
    onBlur: (n) => {
      F(), e.onBlur && e.onBlur(n);
    }
  }, D = () => {
    i(null), c(null), e.onChange && e.onChange("", null);
  }, V = e.readOnly, x = e.disabled, I = s && !V && !x ? /* @__PURE__ */ o(P, { onClick: D, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(K, { onClick: v, style: { cursor: "pointer" } });
  return /* @__PURE__ */ o(R, { children: /* @__PURE__ */ o(
    T,
    {
      label: J(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        z,
        {
          readOnly: e.readOnly,
          rightSection: I,
          ...y(),
          value: S,
          getOptionKey: k,
          getOptionValue: d,
          noOptionsLabel: e.noOptionsLabel,
          data: O,
          dropdownOpened: f,
          label: e.label,
          error: L.message,
          ...w
        }
      )
    }
  ) });
}
export {
  p as MantineServerLookup
};
