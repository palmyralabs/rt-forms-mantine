import { jsx as t, Fragment as m, jsxs as r } from "react/jsx-runtime";
import { forwardRef as d, useRef as u, useImperativeHandle as f } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as v, FieldDecorator as b } from "@palmyralabs/rt-forms";
import { getFieldLabel as C } from "../util.js";
import { getVariantClassName as c } from "./variantClassName.js";
const V = d(function(e, i) {
  const a = v(e.attribute, e), o = i || u(null), n = e.textAlign || "left", s = e.variant || "standard", { getValue: l } = a;
  return f(o, () => ({
    getValue: l
  }), [a]), /* @__PURE__ */ t(m, { children: !a.mutateOptions.visible && /* @__PURE__ */ t(
    b,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ r("div", { className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t(
          "div",
          {
            style: { textAlign: n },
            className: c(s, e.label),
            children: e.options[l()] || "--"
          }
        )
      ] }) : /* @__PURE__ */ t("div", { style: { textAlign: n }, children: /* @__PURE__ */ t("div", { className: c(s, e.title), children: e.options[l()] || "--" }) })
    }
  ) });
});
export {
  V as MantineOptionsView
};
