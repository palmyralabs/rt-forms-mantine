import { jsx as n, Fragment as y } from "react/jsx-runtime";
import { useServerAutoComplete as O, getFieldHandler as v, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { delayGenerator as A } from "@palmyralabs/ts-utils";
import { useRef as D, useImperativeHandle as M } from "react";
import { a as S } from "../../../chunks/index.js";
import { MantineAutoComplete as V } from "./internal/MantineAutoComplete.js";
import { getFieldLabel as x } from "./util.js";
function E(e) {
  const a = A(e.queryOptions.delay || 250), i = D(null), o = O(e.attribute, e), {
    getError: c,
    getValue: u,
    setValue: r,
    options: m,
    getFieldProps: d,
    setSearchText: C,
    refreshOptions: g,
    getOptionValue: f
  } = o, h = c(), l = u(), F = l || "";
  M(e.ref, () => ({
    ...v(o),
    focus() {
      i.current.focus();
    }
  }), [o]);
  const b = {
    onValueChange: (t, s) => {
      r(s), e.onChange && e.onChange(s, t);
    },
    onChange: (t) => {
      a(C, t), r(t), e.onChange && e.onChange(t);
    },
    onDropdownOpen: () => {
      a(g);
    },
    onDropdownClose: () => {
    }
  };
  return /* @__PURE__ */ n(y, { children: /* @__PURE__ */ n(
    w,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        V,
        {
          readOnly: e.readOnly,
          ...d(),
          value: F,
          rightSection: /* @__PURE__ */ n(S, {}),
          data: m,
          getOptionValue: f,
          label: e.label,
          error: h.message,
          ...b
        }
      )
    }
  ) });
}
export {
  E as MantineServerAutoComplete
};
