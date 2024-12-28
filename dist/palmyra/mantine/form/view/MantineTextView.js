import { jsx as t, Fragment as f, jsxs as g } from "react/jsx-runtime";
import { forwardRef as v, useRef as c, useImperativeHandle as x } from "react";
import { useFieldManager as b, getFieldHandler as h, FieldDecorator as C } from "@palmyralabs/rt-forms";
import { getFieldLabel as F } from "../util.js";
import { getVariantClassName as r } from "./variantClassName.js";
const H = v(function(e, a) {
  const l = b(e.attribute, e), { getValue: n, mutateOptions: d } = l, o = a || c(null), m = e.textAlign || "left", u = c(null), i = e.variant || "standard";
  x(o, () => ({
    ...h(l),
    focus() {
      u.current.focus();
    }
  }), [l]);
  var { textAlign: N, ...s } = l.getFieldProps();
  return /* @__PURE__ */ t(f, { children: !d.visible && /* @__PURE__ */ t(
    C,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ g("div", { ...s, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: r(i, e.label), children: n() || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...s, style: { textAlign: m }, children: /* @__PURE__ */ t("div", { className: r(i, e.title), children: n() || "--" }) })
    }
  ) });
});
export {
  H as MantineTextView
};
