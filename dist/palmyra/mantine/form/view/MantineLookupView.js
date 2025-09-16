import { jsx as t, Fragment as g, jsxs as v } from "react/jsx-runtime";
import { forwardRef as h, useRef as c, useImperativeHandle as x } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { getFieldLabel as C } from "../util.js";
import { useFieldManager as F, getFieldHandler as L, FieldDecorator as k } from "@palmyralabs/rt-forms";
import { getVariantClassName as r } from "./variantClassName.js";
const I = h(function(e, a) {
  const l = F(e.attribute, e), { getValue: d, mutateOptions: u } = l, m = a || c(null), n = d(), i = e.lookupOptions?.labelAttribute || "name", f = e.textAlign || "left", s = e.variant || "standard", b = c(null);
  x(m, () => ({
    ...L(l),
    focus() {
      b.current.focus();
    }
  }), [l]);
  var { lookupOptions: O, textAlign: w, ...o } = l.getFieldProps();
  return /* @__PURE__ */ t(g, { children: !u.visible && /* @__PURE__ */ t(
    k,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ v("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: r(s, e.label), children: n[i] || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...o, style: { textAlign: f }, children: /* @__PURE__ */ t("div", { className: r(s, e.title), children: n[i] || "--" }) })
    }
  ) });
});
export {
  I as MantineLookupView
};
