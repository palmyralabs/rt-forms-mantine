import { jsx as t, Fragment as s, jsxs as r } from "react/jsx-runtime";
import { useFieldManager as f, getFieldHandler as v, FieldDecorator as g } from "@palmyralabs/rt-forms";
import { useRef as h, useImperativeHandle as b } from "react";
import { getFieldLabel as x } from "../util.js";
import { getVariantClassName as c } from "./variantClassName.js";
function M(e) {
  const l = f(e.attribute, e), { getValue: a, mutateOptions: d } = l, m = e.textAlign || "left", o = e.viewType || "normal", u = h(null), i = e.variant || "standard";
  b(e.ref, () => ({
    ...v(l),
    focus() {
      u.current.focus();
    }
  }), [l]);
  var { textAlign: C, ...n } = l.getFieldProps();
  return /* @__PURE__ */ t(s, { children: !d.visible && /* @__PURE__ */ t(
    g,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ r("div", { ...n, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: c(i, e.label), children: a() || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...n, style: { textAlign: m }, children: /* @__PURE__ */ t("div", { className: c(i, e.title), children: o == "preformatted" ? /* @__PURE__ */ r("pre", { children: [
        " ",
        a() || "--",
        " "
      ] }) : /* @__PURE__ */ t(s, { children: a() || "--" }) }) })
    }
  ) });
}
export {
  M as MantineTextView
};
