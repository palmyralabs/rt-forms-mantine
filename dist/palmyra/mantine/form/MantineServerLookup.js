import { jsx as o, Fragment as E } from "react/jsx-runtime";
import { useDisclosure as H } from "@mantine/hooks";
import { useServerLookupFieldManager as T, getFieldHandler as j, FieldDecorator as q } from "@palmyralabs/rt-forms";
import { delayGenerator as G } from "@palmyralabs/ts-utils";
import { forwardRef as K, useRef as C, useState as N, useImperativeHandle as P } from "react";
import { a as z } from "../../../chunks/index.js";
import { R as J } from "../../../chunks/index3.js";
import { ServerLookup as Q } from "./internal/ServerLookup.js";
import { getFieldLabel as U } from "./util.js";
const le = K(function(e, i) {
  const l = G(e.queryOptions.delay || 200), h = C(null), t = T(e.attribute, e), {
    getError: b,
    getValue: y,
    setValue: c,
    options: O,
    getFieldProps: k,
    setSearchText: v,
    refreshOptions: u,
    getOptionValue: d,
    getOptionKey: F,
    refreshError: S
  } = t, w = b(), D = i || C(null), [f, r] = N(!1), [m, { open: g, close: a }] = H(!1), s = y(), L = s ? d(s) : "", R = () => {
    r(!0), m ? a() : (g(), l(u));
  };
  P(D, () => ({
    ...j(t),
    focus() {
      h.current.focus();
    }
  }), [t]);
  const M = {
    onValueChange: (n, A) => {
      c(n), e.onChange && e.onChange(A, n), a();
    },
    onChange: (n) => {
      l(v, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      f || g(), r(!1), l(u);
    },
    onDropdownClose: () => {
      f || a(), r(!1);
    },
    onBlur: (n) => {
      S(), e.onBlur && e.onBlur(n);
    }
  }, V = () => {
    c(null), e.onChange && e.onChange("", null);
  }, x = e.readOnly, I = e.disabled, B = s && !x && !I ? /* @__PURE__ */ o(J, { onClick: V, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(z, { onClick: R, style: { cursor: "pointer" } });
  return /* @__PURE__ */ o(E, { children: /* @__PURE__ */ o(
    q,
    {
      label: U(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        Q,
        {
          readOnly: e.readOnly,
          rightSection: B,
          ...k(),
          value: L,
          getOptionKey: F,
          getOptionValue: d,
          data: O || "No Data Available",
          dropdownOpened: m,
          label: e.label,
          error: w.message,
          ...M
        }
      )
    }
  ) });
});
export {
  le as MantineServerLookup
};
