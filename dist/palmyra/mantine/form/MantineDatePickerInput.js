import { jsx as n, Fragment as I } from "react/jsx-runtime";
import { forwardRef as R, useRef as s, useImperativeHandle as H } from "react";
import { getFieldLabel as P } from "./util.js";
import { useFieldManager as Y, getFieldHandler as k, FieldDecorator as x } from "@palmyralabs/rt-forms";
import { DatePickerInput as L } from "@mantine/dates";
import l from "dayjs";
import { DateUtils as S } from "./DateUtils.js";
import { G as j } from "../../../chunks/iconBase.js";
function w(o) {
  return j({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" }, child: [] }] })(o);
}
const K = R(function(e, i) {
  const m = e.valueFormat || "YYYY-MM-DD", u = e.type, { parse: h, format: v, revert: f } = S(e), c = Y(e.attribute, e, { format: v, parse: h }), { getError: d, getValue: g, setValue: a, mutateOptions: C, refreshError: F } = c, b = i || s(null), z = d(), y = g(), D = s(null);
  H(b, () => ({
    ...k(c),
    focus() {
      D.current.focus();
    },
    setCurrent() {
    }
  }), [c]);
  var { ...r } = c.getFieldProps();
  r.onChange = (t) => {
    e.readOnly || (u == "range" ? a(t ? [l(t[0]), l(t[1])] : void 0) : a(t ? l(t) : void 0), e.onChange && e.onChange(t));
  }, r.onBlur = F;
  const M = f(y), V = e.rightSection ? e.rightSection : /* @__PURE__ */ n(w, {});
  return /* @__PURE__ */ n(I, { children: !C.visible && /* @__PURE__ */ n(
    x,
    {
      label: P(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n(
        L,
        {
          ...r,
          value: M,
          type: e.type,
          valueFormat: m,
          error: z.message,
          label: e.label,
          rightSection: V
        }
      )
    }
  ) });
});
export {
  K as MantineDatePickerInput
};
