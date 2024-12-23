import { jsxs as s, Fragment as h, jsx as t } from "react/jsx-runtime";
import { useFieldManager as V, getFieldHandler as A, FieldDecorator as H } from "@palmyralabs/rt-forms";
import { forwardRef as j, useRef as g, useImperativeHandle as k, useState as L } from "react";
import { G as S } from "../../../../chunks/iconBase.js";
import { a as T, b as $ } from "../../../../chunks/index4.js";
import { formatAmount as v } from "../../FormatCurrency.js";
import { getFieldLabel as G } from "../util.js";
import { getVariantClassName as x } from "./variantClassName.js";
import { Tooltip as W } from "@mantine/core";
function Z(o) {
  return S({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M13.003 7.754a.75.75 0 0 1 .75-.75h5.232a.75.75 0 0 1 .53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 0 1 .755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 0 1-.53-1.28l2.643-2.644h-3.421a.75.75 0 0 1-.75-.75ZM7.88 15.215a1.4 1.4 0 0 0-1.446.83.75.75 0 0 1-1.37-.61 2.899 2.899 0 0 1 2.986-1.71c.589.06 1.139.323 1.557.743.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.071 1.071 0 0 0-.652-.298Zm.234-13.121a.75.75 0 0 1 .386.656V9h1.252a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5H7V4.103l-.853.533a.749.749 0 1 1-.795-1.272l2-1.25a.749.749 0 0 1 .762-.02Z" }, child: [] }] })(o);
}
const Q = j(function(e, c) {
  const n = V(e.attribute, e), { getValue: b, mutateOptions: w } = n, C = c || g(null), F = e.textAlign || "left", y = g(null), d = e.variant || "standard", N = e.valueFormat || "text";
  k(C, () => ({
    ...A(n),
    focus() {
      y.current.focus();
    }
  }), [n]);
  const [i, I] = L(N === "text"), m = b(), M = () => {
    I(!i);
  }, R = (a) => {
    if (a >= 1e7) {
      const l = (a / 1e7).toFixed(2), r = Number(l);
      return `${l} Crore${r > 1 ? "s" : ""}`;
    } else if (a >= 1e5) {
      const l = (a / 1e5).toFixed(2), r = Number(l);
      return `${l} Lakh${r > 1 ? "s" : ""}`;
    }
    return v(a);
  };
  var u = n.getFieldProps();
  const f = /* @__PURE__ */ s(h, { children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ t(T, {}),
      i ? R(m) : v(m)
    ] }),
    /* @__PURE__ */ t(W, { label: i ? "Switch to Digits" : "Switch to Words", withArrow: !0, children: /* @__PURE__ */ t("div", { onClick: M, style: { cursor: "pointer" }, children: i ? /* @__PURE__ */ t(Z, {}) : /* @__PURE__ */ t($, {}) }) })
  ] });
  return /* @__PURE__ */ t(h, { children: !w.visible && /* @__PURE__ */ t(
    H,
    {
      label: G(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ s("div", { ...u, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: x(d, e.label), style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: f })
      ] }) : /* @__PURE__ */ t("div", { ...u, style: { textAlign: F }, children: /* @__PURE__ */ t("div", { className: x(d, e.title), style: {
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
