import { jsx as t, Fragment as u, jsxs as f } from "react/jsx-runtime";
import { useRef as b, useImperativeHandle as g } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { getFieldLabel as v } from "../util.js";
import { useFieldManager as h, getFieldHandler as x, FieldDecorator as C } from "@palmyralabs/rt-forms";
import { getVariantClassName as o } from "./variantClassName.js";
function y(e) {
  const l = h(e.attribute, e), { getValue: c, mutateOptions: r } = l, a = c(), i = e.lookupOptions?.labelAttribute || "name", d = e.textAlign || "left", n = e.variant || "standard", m = b(null);
  g(e.ref, () => ({
    ...x(l),
    focus() {
      m.current.focus();
    }
  }), [l]);
  var { lookupOptions: L, textAlign: k, ...s } = l.getFieldProps();
  return /* @__PURE__ */ t(u, { children: !r.visible && /* @__PURE__ */ t(
    C,
    {
      label: v(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ f("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: o(n, e.label), children: a[i] || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...s, style: { textAlign: d }, children: /* @__PURE__ */ t("div", { className: o(n, e.title), children: a[i] || "--" }) })
    }
  ) });
}
export {
  y as MantineLookupView
};
