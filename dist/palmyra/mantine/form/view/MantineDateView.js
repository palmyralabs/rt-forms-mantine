import { jsx as n, Fragment as P, jsxs as y } from "react/jsx-runtime";
import D from "dayjs";
import { forwardRef as N, useRef as d, useImperativeHandle as V } from "react";
import '../../../../assets/TextView.css';/* empty css                          */
import { useFieldManager as w, getFieldHandler as A, FieldDecorator as L } from "@palmyralabs/rt-forms";
import { getFieldLabel as M } from "../util.js";
import { getVariantClassName as m } from "./variantClassName.js";
import { getDefaultDatePattern as u } from "../DateUtils.js";
const K = N(function(t, l) {
  const r = w(t.attribute, t), { getValue: f, mutateOptions: g } = r, v = l || d(null), i = f(), b = t.textAlign || "left", s = t.variant || "standard", F = t.serverPattern || u(), h = t.displayPattern || t.serverPattern || u(), x = d(null);
  V(v, () => ({
    ...A(r),
    focus() {
      x.current.focus();
    }
  }), [r]);
  const C = (e) => {
    if (e == null || e == null || e == "")
      return null;
    const a = D(e, F);
    if (a.isValid())
      return a;
  }, o = (e) => {
    if (!e)
      return "";
    if (e) {
      const a = C(e);
      return a != null ? a.format(h) : (console.error("Invalid date provided:", e), "");
    }
  };
  var {
    datePattern: j,
    serverPattern: H,
    textAlign: I,
    displayPattern: O,
    ...c
  } = r.getFieldProps();
  return /* @__PURE__ */ n(P, { children: !g.visible && /* @__PURE__ */ n(
    L,
    {
      label: M(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ y("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ n("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ n("div", { className: m(s, t.label), children: o(i) || "--" })
      ] }) : /* @__PURE__ */ n("div", { ...c, style: { textAlign: b }, children: /* @__PURE__ */ n("div", { className: m(s, t.title), children: o(i) || "--" }) })
    }
  ) });
});
export {
  K as MantineDateView
};
