import { jsx as t, Fragment as b, jsxs as g } from "react/jsx-runtime";
import { forwardRef as x, useRef as o, useImperativeHandle as h } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { getFieldLabel as C } from "../util.js";
import { useFieldManager as F, getFieldHandler as w, FieldDecorator as L } from "@palmyralabs/rt-forms";
const H = x(function(e, n) {
  const l = F(e.attribute, e), { getValue: r, mutateOptions: d } = l, u = n || o(null), i = r(), a = e.lookupOptions, s = (a == null ? void 0 : a.labelAttribute) || "name", m = e.textAlign || "left", v = e.variant || "standard", f = o(null);
  h(u, () => ({
    ...w(l),
    focus() {
      f.current.focus();
    }
  }), [l]);
  var c = l.getFieldProps();
  return /* @__PURE__ */ t(b, { children: !d.visible && /* @__PURE__ */ t(
    L,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ g("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: v == "standard" ? "text-view-value" : "text-view-value-outlined", children: i[s] || "--" })
      ] }) : /* @__PURE__ */ t("div", { ...c, style: { textAlign: m }, children: i[s] || "--" })
    }
  ) });
});
export {
  H as MantineLookupView
};
