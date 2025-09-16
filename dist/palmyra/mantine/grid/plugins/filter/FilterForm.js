import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { Button as f } from "@mantine/core";
import { convertToField as h, PalmyraForm as C, FieldGroupContainer as R } from "@palmyralabs/rt-forms";
import { setValueByKey as g } from "@palmyralabs/ts-utils";
import { useRef as D } from "react";
import { a as j, T as x } from "../../../../../chunks/index2.js";
import T from "./FieldGenerator.js";
import '../../../../../assets/FilterForm.css';const B = (t) => {
  const l = t.queryRef.current.getCurrentFilter() || {}, s = D(null), c = t.defaultFilter || {}, m = h(t.columns), u = () => m.map((e, o) => T(e, e.label)), p = t.onClose || ((e) => {
  });
  Object.keys(c || {}).map((e) => {
    const o = c[e];
    g(e, l, o);
  });
  const n = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), p(e)) : console.warn("Query reference not found");
  }, d = () => {
    n({});
  }, F = () => {
    const e = s.current.getData();
    var o = {};
    Object.entries(e).map(([b, i]) => {
      i && i != "" && (o[b] = i);
    }), n && n(o);
  }, y = t.column || 2;
  return /* @__PURE__ */ a("div", { onMouseDown: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ r(C, { formData: l, ref: s, children: /* @__PURE__ */ r(R, { columns: y, children: u() }) }),
    /* @__PURE__ */ a("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ r(f, { className: "py-reset-button", onClick: d, leftSection: /* @__PURE__ */ r(j, { size: 14 }), children: "Reset" }),
      /* @__PURE__ */ r(f, { className: "py-filter-button", onClick: F, leftSection: /* @__PURE__ */ r(x, { size: 14 }), children: "Filter" })
    ] })
  ] });
};
export {
  B as FilterForm
};
