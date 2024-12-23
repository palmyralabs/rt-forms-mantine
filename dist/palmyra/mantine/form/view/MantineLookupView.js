import { jsx as t, Fragment as g, jsxs as h } from "react/jsx-runtime";
import { forwardRef as C, useRef as o, useImperativeHandle as F } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { getFieldLabel as x } from "../util.js";
import { useFieldManager as L, getFieldHandler as N, FieldDecorator as w } from "@palmyralabs/rt-forms";
import { getVariantClassName as d } from "./variantClassName.js";
const k = C(function(e, n) {
  const l = L(e.attribute, e), { getValue: m, mutateOptions: u } = l, f = n || o(null), i = m(), a = e.lookupOptions, s = (a == null ? void 0 : a.labelAttribute) || "name", b = e.textAlign || "left", c = e.variant || "standard", v = o(null);
  F(f, () => ({
    ...N(l),
    focus() {
      v.current.focus();
    }
  }), [l]);
  var r = l.getFieldProps();
  return /* @__PURE__ */ t(g, { children: !u.visible && /* @__PURE__ */ t(
    w,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ h("div", { ...r, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: d(c, e.label), children: i[s] || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...r, style: { textAlign: b }, children: /* @__PURE__ */ t("div", { className: d(c, e.title), children: i[s] || "--" }) })
    }
  ) });
});
export {
  k as MantineLookupView
};
