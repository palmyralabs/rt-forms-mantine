import { jsx as a, Fragment as V } from "react/jsx-runtime";
import { forwardRef as I, useRef as s, useImperativeHandle as R } from "react";
import { getFieldLabel as B } from "./util.js";
import { useFieldManager as H, getFieldHandler as P, FieldDecorator as Y } from "@palmyralabs/rt-forms";
import { DatePickerInput as k } from "@mantine/dates";
import l from "dayjs";
import { DateUtils as x } from "./DateUtils.js";
import { G as L } from "../../../chunks/iconBase.js";
function S(i) {
  return L({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" }, child: [] }] })(i);
}
const K = I(function(e, o) {
  const u = e.valueFormat || "YYYY-MM-DD", m = e.type, { parse: h, format: f, revert: v } = x(e), c = H(e.attribute, e, { format: f, parse: h }), { getError: d, getValue: g, setValue: n, mutateOptions: C, refreshError: j } = c, F = o || s(null), b = d(), z = g(), y = s(null);
  R(F, () => ({
    ...P(c),
    focus() {
      y.current.focus();
    },
    setCurrent() {
    }
  }), [c]);
  var { ...r } = c.getFieldProps();
  r.onChange = (t) => {
    e.readOnly || (m == "range" ? n(t ? [l(t[0]), l(t[1])] : void 0) : n(t ? l(t) : void 0), e.onChange && e.onChange(t));
  }, r.onBlur = (t) => {
    e.onBlur && e.onBlur(t);
  };
  const D = v(z), M = e.rightSection ? e.rightSection : /* @__PURE__ */ a(S, {});
  return /* @__PURE__ */ a(V, { children: !C.visible && /* @__PURE__ */ a(
    Y,
    {
      label: B(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        k,
        {
          ...r,
          value: D,
          type: e.type,
          valueFormat: u,
          error: b.message,
          label: e.label,
          rightSection: M
        }
      )
    }
  ) });
});
export {
  K as MantineDatePickerInput
};
