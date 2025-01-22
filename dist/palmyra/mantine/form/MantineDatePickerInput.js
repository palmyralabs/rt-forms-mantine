import { jsx as a, Fragment as I } from "react/jsx-runtime";
import { forwardRef as P, useRef as s, useImperativeHandle as M } from "react";
import { getFieldLabel as R } from "./util.js";
import { useFieldManager as B, getFieldHandler as H, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { DatePickerInput as x } from "@mantine/dates";
import l from "dayjs";
import { getDefaultDatePattern as L, DateUtils as S } from "./DateUtils.js";
import { G as j } from "../../../chunks/iconBase.js";
function w(i) {
  return j({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" }, child: [] }] })(i);
}
const T = P(function(e, o) {
  const u = e.valueFormat || L(), m = e.type, { parse: h, format: f, revert: v } = S(e), c = B(e.attribute, e, { format: f, parse: h }), { getError: d, getValue: g, setValue: n, mutateOptions: C, refreshError: E } = c, F = o || s(null), b = d(), z = g(), y = s(null);
  M(F, () => ({
    ...H(c),
    focus() {
      y.current.focus();
    },
    setCurrent() {
    }
  }), [c]);
  var { serverPattern: G, ...r } = c.getFieldProps();
  r.onChange = (t) => {
    e.readOnly || (m == "range" ? n(t ? [l(t[0]), l(t[1])] : void 0) : n(t ? l(t) : void 0), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const D = v(z), V = e.rightSection ? e.rightSection : /* @__PURE__ */ a(w, {});
  return /* @__PURE__ */ a(I, { children: !C.visible && /* @__PURE__ */ a(
    k,
    {
      label: R(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        x,
        {
          ...r,
          value: D,
          type: e.type,
          valueFormat: u,
          error: b.message,
          label: e.label,
          rightSection: V
        }
      )
    }
  ) });
});
export {
  T as MantineDatePickerInput
};
