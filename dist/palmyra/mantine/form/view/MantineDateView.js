import { jsx as n, Fragment as D, jsxs as M } from "react/jsx-runtime";
import Y from "dayjs";
import { forwardRef as x, useRef as d, useImperativeHandle as y } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as N, getFieldHandler as P, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as w } from "../util.js";
import { getVariantClassName as m } from "./variantClassName.js";
const k = x(function(e, i) {
  const l = N(e.attribute, e), { getValue: u, mutateOptions: f } = l, v = i || d(null), r = u(), b = e.textAlign || "left", s = e.variant || "standard", g = e.serverPattern || "YYYY-MM-DD", F = e.displayPattern || e.serverPattern || "DD-MM-YYYY", h = d(null);
  y(v, () => ({
    ...P(l),
    focus() {
      h.current.focus();
    }
  }), [l]);
  const C = (t) => {
    if (t == null || t == null || t == "")
      return null;
    const a = Y(t, g);
    if (a.isValid())
      return a;
  }, o = (t) => {
    if (!t)
      return "";
    if (t) {
      const a = C(t);
      return a != null ? a.format(F) : (console.error("Invalid date provided:", t), "");
    }
  };
  var c = l.getFieldProps();
  return /* @__PURE__ */ n(D, { children: !f.visible && /* @__PURE__ */ n(
    V,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ M("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ n("div", { className: m(s, e.label), children: o(r) || "--" })
      ] }) : /* @__PURE__ */ n("div", { ...c, style: { textAlign: b }, children: /* @__PURE__ */ n("div", { className: m(s, e.title), children: o(r) || "--" }) })
    }
  ) });
});
export {
  k as MantineDateView
};
