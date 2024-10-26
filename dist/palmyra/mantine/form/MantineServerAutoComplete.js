import { jsx as o, Fragment as w } from "react/jsx-runtime";
import { forwardRef as M, useRef as i, useImperativeHandle as S } from "react";
import { useServerAutoComplete as A, getFieldHandler as D, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "./util.js";
import { delayGenerator as V } from "@palmyralabs/ts-utils";
import { a as x } from "../../../chunks/index.js";
import { MantineAutoComplete as k } from "./internal/MantineAutoComplete.js";
const _ = M(function(e, a) {
  const r = V(e.queryOptions.delay || 250), u = i(null), t = A(e.attribute, e), {
    getError: m,
    getValue: d,
    setValue: l,
    options: C,
    getFieldProps: f,
    setSearchText: g,
    refreshOptions: h,
    getOptionValue: F
  } = t, b = m(), v = a || i(null), s = d(), y = s || "";
  S(v, () => ({
    ...D(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  const O = {
    onValueChange: (n, c) => {
      l(c), e.onChange && e.onChange(c);
    },
    onChange: (n) => {
      r(g, n), l(n), e.onChange && e.onChange(n);
    },
    onDropdownOpen: () => {
      r(h);
    },
    onDropdownClose: () => {
    }
  };
  return /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o(
    L,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        k,
        {
          readOnly: e.readOnly,
          ...f(),
          value: y,
          rightSection: /* @__PURE__ */ o(x, {}),
          data: C,
          getOptionValue: F,
          label: e.label,
          error: b.message,
          ...O
        }
      )
    }
  ) });
});
export {
  _ as MantineServerAutoComplete
};
