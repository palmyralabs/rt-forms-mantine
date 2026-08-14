import { jsx as n, Fragment as B } from "react/jsx-runtime";
import { useDisclosure as H } from "@mantine/hooks";
import { useServerLookupFieldManager as P, StoreFactoryContext as T, getFieldHandler as G, FieldDecorator as K } from "@palmyralabs/rt-forms";
import { delayGenerator as z } from "@palmyralabs/ts-utils";
import { useRef as b, useState as J, useContext as N, useEffect as Q, useImperativeHandle as U } from "react";
import { a as W } from "../../../chunks/index.js";
import { R as X } from "../../../chunks/index4.js";
import { ServerLookup as Y } from "./internal/ServerLookup.js";
import { getFieldLabel as Z } from "./util.js";
function ae(e) {
  const l = z(e.queryOptions.delay || 200), O = b(null), a = P(e.attribute, e), {
    getError: k,
    getValue: v,
    setValue: s,
    options: F,
    getFieldProps: L,
    setSearchText: d,
    refreshOptions: f,
    getOptionValue: m,
    getOptionKey: S,
    refreshError: w
  } = a, x = k(), [g, i] = J(!1), [C, { open: h, close: c }] = H(!1), t = v(), D = t ? m(t) : "", I = N(T), y = b(void 0);
  Q(() => {
    if (!(t == null || t === "") && typeof t != "object" && y.current !== t) {
      y.current = t;
      try {
        const o = e.lookupOptions?.idAttribute || "id", r = I?.getLookupStore?.({}, e.queryOptions.endPoint, o);
        if (!r?.query) return;
        r.query({ filter: { [o]: t } }).then((A) => {
          const u = A?.result?.[0];
          u && typeof u == "object" && s(u);
        }).catch(() => {
        });
      } catch (o) {
        console.error("Error resolving lookup value", o);
      }
    }
  }, [t]);
  const R = () => {
    i(!0), C ? c() : (h(), l(f));
  };
  U(e.ref, () => ({
    ...G(a),
    focus() {
      O.current.focus();
    }
  }), [a]);
  const V = {
    onValueChange: (o, r) => {
      s(o), e.onChange && e.onChange(r, o), c();
    },
    onChange: (o) => {
      l(d, o), e.onChange && e.onChange(o);
    },
    onDropdownOpen: () => {
      g || h(), i(!1), l(f);
    },
    onDropdownClose: () => {
      g || c(), i(!1);
    },
    onBlur: (o) => {
      w(), e.onBlur && e.onBlur(o);
    }
  }, q = () => {
    s(null), d?.(""), e.onChange && e.onChange("", null);
  }, E = e.readOnly, M = e.disabled, j = t && !E && !M ? /* @__PURE__ */ n(X, { onClick: q, style: { cursor: "pointer" } }) : /* @__PURE__ */ n(W, { onClick: R, style: { cursor: "pointer" } });
  return /* @__PURE__ */ n(B, { children: /* @__PURE__ */ n(
    K,
    {
      label: Z(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        Y,
        {
          readOnly: e.readOnly,
          rightSection: j,
          ...L(),
          value: D,
          getOptionKey: S,
          getOptionValue: m,
          noOptionsLabel: e.noOptionsLabel,
          data: F,
          dropdownOpened: C,
          label: e.label,
          error: x.message,
          ...V
        }
      )
    }
  ) });
}
export {
  ae as MantineServerLookup
};
