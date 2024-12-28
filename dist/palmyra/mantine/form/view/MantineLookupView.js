import { jsx as t, Fragment as v, jsxs as h } from "react/jsx-runtime";
import { forwardRef as x, useRef as r, useImperativeHandle as C } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { getFieldLabel as F } from "../util.js";
import { useFieldManager as A, getFieldHandler as N, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { getVariantClassName as d } from "./variantClassName.js";
const I = x(function(e, n) {
  const l = A(e.attribute, e), { getValue: m, mutateOptions: u } = l, f = n || r(null), i = m(), a = e.lookupOptions, s = (a == null ? void 0 : a.labelAttribute) || "name", b = e.textAlign || "left", c = e.variant || "standard", g = r(null);
  C(f, () => ({
    ...N(l),
    focus() {
      g.current.focus();
    }
  }), [l]);
  var { lookupOptions: M, textAlign: R, ...o } = l.getFieldProps();
  return /* @__PURE__ */ t(v, { children: !u.visible && /* @__PURE__ */ t(
    w,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ h("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: d(c, e.label), children: i[s] || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...o, style: { textAlign: b }, children: /* @__PURE__ */ t("div", { className: d(c, e.title), children: i[s] || "--" }) })
    }
  ) });
});
export {
  I as MantineLookupView
};
