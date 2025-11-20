import { jsx as o, Fragment as H } from "react/jsx-runtime";
import { useDisclosure as T } from "@mantine/hooks";
import { useServerLookupFieldManager as j, getFieldHandler as q, FieldDecorator as A } from "@palmyralabs/rt-forms";
import { delayGenerator as G } from "@palmyralabs/ts-utils";
import { forwardRef as K, useRef as h, useState as P, useImperativeHandle as z } from "react";
import { a as J } from "../../../chunks/index.js";
import { R as N } from "../../../chunks/index4.js";
import { ServerLookup as Q } from "./internal/ServerLookup.js";
import { getFieldLabel as U } from "./util.js";
const le = K(function(e, c) {
  const l = G(e.queryOptions.delay || 200), y = h(null), t = j(e.attribute, e), {
    getError: b,
    getValue: O,
    setValue: i,
    options: k,
    getFieldProps: F,
    setSearchText: u,
    refreshOptions: d,
    getOptionValue: f,
    getOptionKey: S,
    refreshError: v
  } = t, w = b(), L = c || h(null), [m, r] = P(!1), [g, { open: C, close: a }] = T(!1), s = O(), D = s ? f(s) : "", R = () => {
    r(!0), g ? a() : (C(), l(d));
  };
  z(L, () => ({
    ...q(t),
    focus() {
      y.current.focus();
    }
  }), [t]);
  const M = {
    onValueChange: (n, E) => {
      i(n), e.onChange && e.onChange(E, n), a();
    },
    onChange: (n) => {
      l(u, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      m || C(), r(!1), l(d);
    },
    onDropdownClose: () => {
      m || a(), r(!1);
    },
    onBlur: (n) => {
      v(), e.onBlur && e.onBlur(n);
    }
  }, V = () => {
    i(null), u(null), e.onChange && e.onChange("", null);
  }, x = e.readOnly, I = e.disabled, B = s && !x && !I ? /* @__PURE__ */ o(N, { onClick: V, style: { cursor: "pointer" } }) : /* @__PURE__ */ o(J, { onClick: R, style: { cursor: "pointer" } });
  return /* @__PURE__ */ o(H, { children: /* @__PURE__ */ o(
    A,
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
          ...F(),
          value: D,
          getOptionKey: S,
          getOptionValue: f,
          data: k,
          dropdownOpened: g,
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
