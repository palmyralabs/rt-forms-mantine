import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { convertToField as h, PalmyraForm as C, FieldGroupContainer as R } from "@palmyralabs/rt-forms";
import { setValueByKey as g } from "@palmyralabs/ts-utils";
import { useRef as j } from "react";
import { a as x, T as D } from "../../../../../chunks/index.js";
import T from "./FieldGenerator.js";
import { Button as m } from "@mantine/core";
import '../../../../../assets/FilterForm.css';const G = (t) => {
  const s = {}, l = j(), c = t.defaultFilter || {}, f = h(t.columns), u = () => f.map((e, o) => T(e, e.label)), d = t.onClose || ((e) => {
  });
  Object.keys(c || {}).map((e) => {
    const o = c[e];
    g(e, s, o);
  });
  const n = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), d(e)) : console.warn("Query reference not found");
  }, p = () => {
    n({});
  }, F = () => {
    const e = l.current.getData();
    var o = {};
    Object.entries(e).map(([b, i]) => {
      i && i != "" && (o[b] = i);
    }), n && n(o);
  }, y = t.column || 2;
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ r(C, { formData: s, ref: l, children: /* @__PURE__ */ r(R, { columns: y, children: u() }) }),
    /* @__PURE__ */ a("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ r(m, { className: "py-reset-button", onClick: p, leftSection: /* @__PURE__ */ r(x, { size: 14 }), children: "Reset" }),
      /* @__PURE__ */ r(m, { className: "py-filter-button", onClick: F, leftSection: /* @__PURE__ */ r(D, { size: 14 }), children: "Filter" })
    ] })
  ] });
};
export {
  G as FilterForm
};
