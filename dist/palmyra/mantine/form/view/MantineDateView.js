import { jsx as a, Fragment as C, jsxs as h } from "react/jsx-runtime";
import x from "dayjs";
import { useRef as P, useImperativeHandle as y } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as D, getFieldHandler as N, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as A } from "../util.js";
import { getVariantClassName as d } from "./variantClassName.js";
import { getDefaultDatePattern as c } from "../DateUtils.js";
function B(t) {
  const r = D(t.attribute, t), { getValue: m, mutateOptions: u } = r, i = m(), f = t.textAlign || "left", l = t.variant || "standard", g = t.serverPattern || c(), v = t.displayPattern || t.serverPattern || c(), F = P(null);
  y(t.ref, () => ({
    ...N(r),
    focus() {
      F.current.focus();
    },
    setCurrent() {
    }
  }), [r]);
  const b = (e) => {
    if (e == null || e == null || e == "")
      return null;
    const n = x(e, g);
    if (n.isValid())
      return n;
  }, s = (e) => {
    if (!e)
      return "";
    if (e) {
      const n = b(e);
      return n != null ? n.format(v) : (console.error("Invalid date provided:", e), "");
    }
  };
  var {
    datePattern: j,
    serverPattern: w,
    textAlign: L,
    displayPattern: M,
    ...o
  } = r.getFieldProps();
  return /* @__PURE__ */ a(C, { children: !u.visible && /* @__PURE__ */ a(
    V,
    {
      label: A(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ h("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ a("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ a("div", { className: d(l, t.label), children: s(i) || "--" })
      ] }) : /* @__PURE__ */ a("div", { ...o, style: { textAlign: f }, children: /* @__PURE__ */ a("div", { className: d(l, t.title), children: s(i) || "--" }) })
    }
  ) });
}
export {
  B as MantineDateView
};
