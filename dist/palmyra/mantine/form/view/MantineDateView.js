import { jsx as n, Fragment as C, jsxs as D } from "react/jsx-runtime";
import M from "dayjs";
import { forwardRef as Y, useRef as d, useImperativeHandle as P } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as y, getFieldHandler as N, FieldDecorator as V } from "@palmyralabs/rt-forms";
import { getFieldLabel as w } from "../util.js";
import { getVariantClassName as m } from "./variantClassName.js";
const E = Y(function(t, r) {
  const l = y(t.attribute, t), { getValue: u, mutateOptions: f } = l, v = r || d(null), i = u(), g = t.textAlign || "left", s = t.variant || "standard", b = t.serverPattern || "YYYY-MM-DD", F = t.displayPattern || t.serverPattern || "DD-MM-YYYY", h = d(null);
  P(v, () => ({
    ...N(l),
    focus() {
      h.current.focus();
    }
  }), [l]);
  const x = (e) => {
    if (e == null || e == null || e == "")
      return null;
    const a = M(e, b);
    if (a.isValid())
      return a;
  }, o = (e) => {
    if (!e)
      return "";
    if (e) {
      const a = x(e);
      return a != null ? a.format(F) : (console.error("Invalid date provided:", e), "");
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
      label: w(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ D("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ n("div", { className: m(s, t.label), children: o(i) || "--" })
      ] }) : /* @__PURE__ */ n("div", { ...c, style: { textAlign: g }, children: /* @__PURE__ */ n("div", { className: m(s, t.title), children: o(i) || "--" }) })
    }
  ) });
});
export {
  E as MantineDateView
};
