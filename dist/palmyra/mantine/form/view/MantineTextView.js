import { jsx as t, Fragment as r, jsxs as c } from "react/jsx-runtime";
import { forwardRef as h, useRef as d, useImperativeHandle as x } from "react";
import { useFieldManager as b, getFieldHandler as C, FieldDecorator as F } from "@palmyralabs/rt-forms";
import { getFieldLabel as w } from "../util.js";
import { getVariantClassName as o } from "./variantClassName.js";
const j = h(function(e, a) {
  const l = b(e.attribute, e), { getValue: n, mutateOptions: m } = l, u = a || d(null), f = e.textAlign || "left", v = e.viewType || "normal", g = d(null), i = e.variant || "standard";
  x(u, () => ({
    ...C(l),
    focus() {
      g.current.focus();
    }
  }), [l]);
  var { textAlign: A, ...s } = l.getFieldProps();
  return /* @__PURE__ */ t(r, { children: !m.visible && /* @__PURE__ */ t(
    F,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ c("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: o(i, e.label), children: n() || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...s, style: { textAlign: f }, children: /* @__PURE__ */ t("div", { className: o(i, e.title), children: v == "preformatted" ? /* @__PURE__ */ c("pre", { children: [
        " ",
        n() || "--",
        " "
      ] }) : /* @__PURE__ */ t(r, { children: n() || "--" }) }) })
    }
  ) });
});
export {
  j as MantineTextView
};
