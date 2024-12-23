import { jsx as t, Fragment as f, jsxs as v } from "react/jsx-runtime";
import { forwardRef as b, useRef as c, useImperativeHandle as g } from "react";
import { useFieldManager as h, getFieldHandler as x, FieldDecorator as C } from "@palmyralabs/rt-forms";
import { getFieldLabel as F } from "../util.js";
import { getVariantClassName as r } from "./variantClassName.js";
const A = b(function(e, a) {
  const l = h(e.attribute, e), { getValue: n, mutateOptions: d } = l, o = a || c(null), m = e.textAlign || "left", u = c(null), i = e.variant || "standard";
  g(o, () => ({
    ...x(l),
    focus() {
      u.current.focus();
    }
  }), [l]);
  var s = l.getFieldProps();
  return /* @__PURE__ */ t(f, { children: !d.visible && /* @__PURE__ */ t(
    C,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ v("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: r(i, e.label), children: n() || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...s, style: { textAlign: m }, children: /* @__PURE__ */ t("div", { className: r(i, e.title), children: n() || "--" }) })
    }
  ) });
});
export {
  A as MantineTextView
};
