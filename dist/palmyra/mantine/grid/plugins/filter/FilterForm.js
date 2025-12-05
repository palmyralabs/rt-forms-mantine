import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { Button as f } from "@mantine/core";
import { convertToField as h, PalmyraForm as C, FieldGroupContainer as R } from "@palmyralabs/rt-forms";
import { setValueByKey as g } from "@palmyralabs/ts-utils";
import { useRef as x } from "react";
import { a as D, T as N } from "../../../../../chunks/index2.js";
import j from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const B = (t) => {
  const l = t.queryRef.current.getCurrentFilter() || {}, s = x(null), c = t.defaultFilter || {}, m = h(t.columns), u = () => m.map((e, o) => j(e, e.label)), d = t.onClose || ((e) => {
  });
  Object.keys(c || {}).map((e) => {
    const o = c[e];
    g(e, l, o);
  });
  const n = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), d(e)) : console.warn("Query reference not found");
  }, p = () => {
    n({});
  }, F = () => {
    const e = s.current.getData();
    var o = {};
    Object.entries(e).map(([b, i]) => {
      i && i != "" && (o[b] = i);
    }), n && n(o);
  }, y = t.column || 2;
  return /* @__PURE__ */ a("div", { onMouseDown: (e) => e.stopPropagation(), className: "filter-container", children: [
    /* @__PURE__ */ r("div", { className: "filter-form-scroll", children: /* @__PURE__ */ r(C, { formData: l, ref: s, children: /* @__PURE__ */ r(R, { columns: y, children: u() }) }) }),
    /* @__PURE__ */ a("div", { className: "py-filter-button-container fixed-buttons", children: [
      /* @__PURE__ */ r(f, { className: "py-reset-button", onClick: p, leftSection: /* @__PURE__ */ r(D, { size: 14 }), children: "Reset" }),
      /* @__PURE__ */ r(f, { className: "py-filter-button", onClick: F, leftSection: /* @__PURE__ */ r(N, { size: 14 }), children: "Filter" })
    ] })
  ] });
};
export {
  B as FilterForm
};
