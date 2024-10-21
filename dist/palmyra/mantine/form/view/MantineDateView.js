import { jsx as n, Fragment as F, jsxs as H } from "react/jsx-runtime";
import h from "dayjs";
import { forwardRef as x, useRef as c, useImperativeHandle as C } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as w, getFieldHandler as y, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as R } from "../util.js";
const S = x(function(t, i) {
  const a = w(t.attribute, t), { getValue: d, mutateOptions: m } = a, u = i || c(null), r = d(), D = t.textAlign || "left", M = t.variant || "standard", f = t.displayPattern || "DD-MM-YYYY", v = c(null);
  C(u, () => ({
    ...y(a),
    focus() {
      v.current.focus();
    }
  }), [a]);
  const b = (e) => {
    const l = [
      "YYYY-MM-DD",
      "DD-MM-YYYY",
      "MM-DD-YYYY",
      "DD-YYYY-MM",
      "YYYY/MM/DD",
      "DD/MM/YYYY",
      "YYYY-MM-DD'T'HH:mm:ss",
      "DD-MM-YYYY HH:mm",
      "MM-DD-YYYY h:mm a",
      "YYYY/MM/DD HH:mm:ss",
      "DD/MM/YYYY HH:mm"
    ];
    if (e == null || e == null || e == "")
      return null;
    for (const g of l) {
      const Y = h(e, g);
      if (Y.isValid())
        return Y;
    }
    return null;
  }, s = (e) => {
    if (!e)
      return "";
    if (e) {
      const l = b(e);
      return l != null ? l.format(f) : (console.error("Invalid date provided:", e), "");
    }
  };
  var o = a.getFieldProps();
  return /* @__PURE__ */ n(F, { children: !m.visible && /* @__PURE__ */ n(
    L,
    {
      label: R(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ H("div", { ...o, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ n("div", { className: M == "standard" ? "text-view-value" : "text-view-value-outlined", children: s(r) })
      ] }) : /* @__PURE__ */ n("div", { ...o, style: { textAlign: D }, children: s(r) })
    }
  ) });
});
export {
  S as MantineDateView
};
