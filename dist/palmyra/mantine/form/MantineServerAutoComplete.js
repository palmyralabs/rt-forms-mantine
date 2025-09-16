import { jsx as o, Fragment as w } from "react/jsx-runtime";
import { useServerAutoComplete as M, getFieldHandler as S, FieldDecorator as A } from "@palmyralabs/rt-forms";
import { delayGenerator as D } from "@palmyralabs/ts-utils";
import { forwardRef as L, useRef as i, useImperativeHandle as R } from "react";
import { a as V } from "../../../chunks/index.js";
import { MantineAutoComplete as x } from "./internal/MantineAutoComplete.js";
import { getFieldLabel as k } from "./util.js";
const z = L(function(e, a) {
  const r = D(e.queryOptions.delay || 250), u = i(null), t = M(e.attribute, e), {
    getError: m,
    getValue: d,
    setValue: l,
    options: C,
    getFieldProps: f,
    setSearchText: g,
    refreshOptions: h,
    getOptionValue: F
  } = t, b = m(), v = a || i(null), s = d(), y = s || "";
  R(v, () => ({
    ...S(t),
    focus() {
      u.current.focus();
    }
  }), [t]);
  const O = {
    onValueChange: (n, c) => {
      l(c), e.onChange && e.onChange(c, n);
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
    A,
    {
      label: k(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ o(
        x,
        {
          readOnly: e.readOnly,
          ...f(),
          value: y,
          rightSection: /* @__PURE__ */ o(V, {}),
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
  z as MantineServerAutoComplete
};
