import { jsx as t, Fragment as c, jsxs as r } from "react/jsx-runtime";
import { forwardRef as d, useRef as m, useImperativeHandle as u } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as v, FieldDecorator as f } from "@palmyralabs/rt-forms";
import { getFieldLabel as b } from "../util.js";
const M = d(function(e, a) {
  const l = v(e.attribute, e), n = a || m(null), s = e.textAlign || "left", o = e.variant || "standard", { getValue: i } = l;
  return u(n, () => ({
    getValue: i
  }), [l]), /* @__PURE__ */ t(c, { children: !l.mutateOptions.visible && /* @__PURE__ */ t(
    f,
    {
      label: b(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ r("div", { className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t(
          "div",
          {
            style: { textAlign: s },
            className: e.label ? o === "outlined" ? "text-view-value-outlined" : "text-view-value" : "",
            children: e.options[i()]
          }
        )
      ] })
    }
  ) });
});
export {
  M as MantineOptionsView
};
