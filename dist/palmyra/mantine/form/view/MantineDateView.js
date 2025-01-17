import { jsx as n, Fragment as C, jsxs as D } from "react/jsx-runtime";
import M from "dayjs";
import { forwardRef as Y, useRef as d, useImperativeHandle as P } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as y, getFieldHandler as N, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as w } from "../util.js";
import { getVariantClassName as m } from "./variantClassName.js";
const E = Y(function(e, r) {
  const l = y(e.attribute, e), { getValue: u, mutateOptions: f } = l, g = r || d(null), i = u(), v = e.textAlign || "left", s = e.variant || "standard", b = e.serverPattern || "YYYY-MM-DD", F = e.displayPattern || e.serverPattern || "DD-MM-YYYY", h = d(null);
  P(g, () => ({
    ...N(l),
    focus() {
      h.current.focus();
    }
  }), [l]);
  const x = (t) => {
    if (t == null || t == null || t == "")
      return null;
    const a = M(t, b);
    if (a.isValid())
      return a;
  }, o = (t) => {
    if (!t)
      return "";
    if (t) {
      const a = x(t);
      return a != null ? a.format(F) : (console.error("Invalid date provided:", t), "");
    }
  };
  var {
    datePattern: L,
    serverPattern: R,
    textAlign: j,
    displayPattern: H,
    ...c
  } = l.getFieldProps();
  return /* @__PURE__ */ n(C, { children: !f.visible && /* @__PURE__ */ n(
    V,
    {
      label: w(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ D("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ n("div", { className: m(s, e.label), children: o(i) || "--" })
      ] }) : /* @__PURE__ */ n("div", { ...c, style: { textAlign: v }, children: /* @__PURE__ */ n("div", { className: m(s, e.title), children: o(i) || "--" }) })
    }
  ) });
});
export {
  E as MantineDateView
};
