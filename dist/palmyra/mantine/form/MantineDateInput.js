import { jsx as r, Fragment as h } from "react/jsx-runtime";
import { DateInput as v } from "@mantine/dates";
import { useFieldManager as b, getFieldHandler as D, FieldDecorator as I } from "@palmyralabs/rt-forms";
import { forwardRef as R, useRef as o, useImperativeHandle as y } from "react";
import { F as M } from "../../../chunks/index3.js";
import { getDefaultDatePattern as P } from "./DateUtils.js";
import { getFieldLabel as B } from "./util.js";
const k = R(function(e, l) {
  const i = e.valueFormat || e.serverPattern || P(), n = b(e.attribute, e), { getError: u, getValue: s, setValue: c, mutateOptions: m, refreshError: S } = n, f = l || o(null), d = u(), g = o(null), C = s();
  y(f, () => ({
    ...D(n),
    focus() {
      g.current.focus();
    },
    setCurrent() {
    }
  }), [n]);
  var { serverPattern: x, ...a } = n.getFieldProps();
  a.onChange = (t) => {
    e.readOnly || (c(t), e.onChange && e.onChange(t));
  }, a.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const F = e.rightSection ? e.rightSection : /* @__PURE__ */ r(M, {});
  return /* @__PURE__ */ r(h, { children: !m.visible && /* @__PURE__ */ r(
    I,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r(
        v,
        {
          ...a,
          value: C,
          type: e.type,
          valueFormat: i,
          error: d.message,
          rightSection: F
        }
      )
    }
  ) });
});
export {
  k as MantineDateInput
};
