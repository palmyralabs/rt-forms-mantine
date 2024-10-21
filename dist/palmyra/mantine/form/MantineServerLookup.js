import { jsx as r, Fragment as O } from "react/jsx-runtime";
import { forwardRef as S, useRef as s, useImperativeHandle as k } from "react";
import { useServerLookupFieldManager as w, getFieldHandler as y, FieldDecorator as M } from "@palmyralabs/rt-forms";
import { getFieldLabel as D } from "./util.js";
import { delayGenerator as R } from "@palmyralabs/ts-utils";
import { ServerLookup as V } from "./internal/ServerLookup.js";
import { a as x } from "../../../chunks/index.js";
const c = R(100), T = S(function(e, n) {
  const i = s(null), t = w(e.attribute, e), {
    getError: u,
    getValue: d,
    setValue: m,
    options: f,
    getFieldProps: g,
    setSearchText: C,
    refreshOptions: b,
    getOptionValue: a,
    getOptionKey: h
  } = t, p = u(), F = n || s(null), l = d(), v = l ? a(l) : "";
  k(F, () => ({
    ...y(t),
    focus() {
      i.current.focus();
    }
  }), [t]);
  const L = {
    onValueChange: (o) => {
      m(o);
    },
    onChange: (o) => {
      c(C, o);
    },
    onDropdownOpen: () => {
      c(b);
    },
    onDropdownClose: () => {
    }
  };
  return /* @__PURE__ */ r(O, { children: /* @__PURE__ */ r(
    M,
    {
      label: D(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        V,
        {
          readOnly: e.readOnly,
          ...g(),
          value: v,
          rightSection: /* @__PURE__ */ r(x, {}),
          getOptionKey: h,
          getOptionValue: a,
          data: f,
          label: e.label,
          error: p.message,
          ...L
        }
      )
    }
  ) });
});
export {
  T as MantineServerLookup
};
