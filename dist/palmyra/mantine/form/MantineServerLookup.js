import { jsx as o, Fragment as H } from "react/jsx-runtime";
import { useDisclosure as T } from "@mantine/hooks";
import { useServerLookupFieldManager as j, getFieldHandler as q, FieldDecorator as A } from "@palmyralabs/rt-forms";
import { delayGenerator as G } from "@palmyralabs/ts-utils";
import { forwardRef as K, useRef as C, useState as P, useImperativeHandle as z } from "react";
import { a as J } from "../../../chunks/index.js";
import { R as N } from "../../../chunks/index3.js";
import { ServerLookup as Q } from "./internal/ServerLookup.js";
import { getFieldLabel as U } from "./util.js";
const te = K(function(e, c) {
  const t = G(e.queryOptions.delay || 200), h = C(null), l = j(e.attribute, e), {
    getError: y,
    getValue: b,
    setValue: i,
    options: O,
    getFieldProps: k,
    setSearchText: F,
    refreshOptions: u,
    getOptionValue: d,
    getOptionKey: S,
    refreshError: v
  } = l, w = y(), L = c || C(null), [f, r] = P(!1), [m, { open: g, close: a }] = T(!1), s = b(), D = s ? d(s) : "", R = () => {
    r(!0), m ? a() : (g(), t(u));
  };
  z(L, () => ({
    ...q(l),
    focus() {
      h.current.focus();
    }
  }), [l]);
  const M = {
    onValueChange: (n, E) => {
      i(n), e.onChange && e.onChange(E, n), a();
    },
    onChange: (n) => {
      t(F, n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      f || g(), r(!1), t(u);
    },
    onDropdownClose: () => {
      f || a(), r(!1);
    },
    onBlur: (n) => {
      v(), e.onBlur && e.onBlur(n);
    }
  }, V = () => {
    i(null), e.onChange && e.onChange("", null);
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
          ...k(),
          value: D,
          getOptionKey: S,
          getOptionValue: d,
          data: O,
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
  te as MantineServerLookup
};
