import { jsxs as o, Fragment as h, jsx as l } from "react/jsx-runtime";
import { Tooltip as $ } from "@mantine/core";
import { useFieldManager as V, getFieldHandler as H, FieldDecorator as A } from "@palmyralabs/rt-forms";
import { forwardRef as T, useRef as x, useImperativeHandle as j, useState as k } from "react";
import { G as L } from "../../../../chunks/iconBase.js";
import { a as S, b as G } from "../../../../chunks/index4.js";
import { formatAmount as b } from "../../FormatCurrency.js";
import { getFieldLabel as W } from "../util.js";
import { getVariantClassName as v } from "./variantClassName.js";
function Z(i) {
  return L({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13.003 7.754a.75.75 0 0 1 .75-.75h5.232a.75.75 0 0 1 .53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 0 1 .755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 0 1-.53-1.28l2.643-2.644h-3.421a.75.75 0 0 1-.75-.75ZM7.88 15.215a1.4 1.4 0 0 0-1.446.83.75.75 0 0 1-1.37-.61 2.899 2.899 0 0 1 2.986-1.71c.589.06 1.139.323 1.557.743.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.071 1.071 0 0 0-.652-.298Zm.234-13.121a.75.75 0 0 1 .386.656V9h1.252a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5H7V4.103l-.853.533a.749.749 0 1 1-.795-1.272l2-1.25a.749.749 0 0 1 .762-.02Z" }, child: [] }] })(i);
}
const Q = T(function(e, c) {
  const s = V(e.attribute, e), { getValue: g, mutateOptions: F } = s, w = c || x(null), C = e.textAlign || "left", N = x(null), d = e.variant || "standard", y = e.valueFormat || "text";
  j(w, () => ({
    ...H(s),
    focus() {
      N.current.focus();
    }
  }), [s]);
  const [r, I] = k(y === "text"), u = g(), M = () => {
    I(!r);
  }, R = (t) => {
    if (t >= 1e7) {
      const a = (t / 1e7).toFixed(2), n = Number(a);
      return `${a} Crore${n > 1 ? "s" : ""}`;
    } else if (t >= 1e5) {
      const a = (t / 1e5).toFixed(2), n = Number(a);
      return `${a} Lakh${n > 1 ? "s" : ""}`;
    } else if (t >= 1e3) {
      const a = (t / 1e3).toFixed(2);
      return `${Number(a)} Thousand`;
    } else if (t >= 100) {
      const a = (t / 100).toFixed(2);
      return `${Number(a)} Hundred`;
    } else if (t >= 1) {
      const a = t.toFixed(0), n = Number(a);
      return `${n} Rupee${n > 1 ? "s" : ""}`;
    } else if (t < 1)
      return 0;
    b(t);
  };
  var m = s.getFieldProps();
  const f = /* @__PURE__ */ o(h, { children: [
    /* @__PURE__ */ l($, { label: r ? "Switch to Digits" : "Switch to Words", withArrow: !0, children: /* @__PURE__ */ l("div", { onClick: M, style: { cursor: "pointer" }, children: r ? /* @__PURE__ */ l(Z, {}) : /* @__PURE__ */ l(S, {}) }) }),
    /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ l(G, {}),
      r ? R(u) : b(u)
    ] })
  ] });
  return /* @__PURE__ */ l(h, { children: !F.visible && /* @__PURE__ */ l(
    A,
    {
      label: W(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ o("div", { ...m, className: "text-view-field-container", children: [
        /* @__PURE__ */ l("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ l("div", { className: v(d, e.label), style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: f })
      ] }) : /* @__PURE__ */ l("div", { ...m, style: { textAlign: C }, children: /* @__PURE__ */ l("div", { className: v(d, e.title), style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }, children: f }) })
    }
  ) });
});
export {
  Q as MantineINRView
};
