import { jsx as t, Fragment as c, jsxs as m } from "react/jsx-runtime";
import { useImperativeHandle as d } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as o, FieldDecorator as r } from "@palmyralabs/rt-forms";
import { getFieldLabel as u } from "../util.js";
import { getVariantClassName as s } from "./variantClassName.js";
function x(e) {
  const a = o(e.attribute, e), i = e.textAlign || "left", n = e.variant || "standard", { getValue: l } = a;
  return d(e.ref, () => ({
    getValue: l
  }), [a]), /* @__PURE__ */ t(c, { children: !a.mutateOptions.visible && /* @__PURE__ */ t(
    r,
    {
      label: u(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ m("div", { className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t(
          "div",
          {
            style: { textAlign: i },
            className: s(n, e.label),
            children: e.options[l()] || "--"
          }
        )
      ] }) : /* @__PURE__ */ t("div", { style: { textAlign: i }, children: /* @__PURE__ */ t("div", { className: s(n, e.title), children: e.options[l()] || "--" }) })
    }
  ) });
}
export {
  x as MantineOptionsView
};
