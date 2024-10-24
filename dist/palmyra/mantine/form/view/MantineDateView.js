import { jsx as a, Fragment as h, jsxs as C } from "react/jsx-runtime";
import D from "dayjs";
import { forwardRef as M, useRef as c, useImperativeHandle as Y } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as w, getFieldHandler as y, FieldDecorator as P } from "@palmyralabs/rt-forms";
import { getFieldLabel as L } from "../util.js";
const O = M(function(e, r) {
  const l = w(e.attribute, e), { getValue: d, mutateOptions: u } = l, m = r || c(null), i = d(), f = e.textAlign || "left", v = e.variant || "standard", b = e.serverPattern || "YYYY-MM-DD", g = e.displayPattern || e.serverPattern || "DD-MM-YYYY", F = c(null);
  Y(m, () => ({
    ...y(l),
    focus() {
      F.current.focus();
    }
  }), [l]);
  const x = (t) => {
    if (t == null || t == null || t == "")
      return null;
    const n = D(t, b);
    if (n.isValid())
      return n;
  }, s = (t) => {
    if (!t)
      return "";
    if (t) {
      const n = x(t);
      return n != null ? n.format(g) : (console.error("Invalid date provided:", t), "");
    }
  };
  var o = l.getFieldProps();
  return /* @__PURE__ */ a(h, { children: !u.visible && /* @__PURE__ */ a(
    P,
    {
      label: L(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ C("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ a("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ a("div", { className: v == "standard" ? "text-view-value" : "text-view-value-outlined", children: s(i) || "--" })
      ] }) : /* @__PURE__ */ a("div", { ...o, style: { textAlign: f }, children: s(i) || "--" })
    }
  ) });
});
export {
  O as MantineDateView
};
