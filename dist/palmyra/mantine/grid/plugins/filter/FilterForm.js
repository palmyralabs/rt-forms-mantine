import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { convertToField as h, PalmyraForm as C, FieldGroupContainer as R } from "@palmyralabs/rt-forms";
import { setValueByKey as g } from "@palmyralabs/ts-utils";
import { useRef as D } from "react";
import { a as j, T as x } from "../../../../../chunks/index2.js";
import T from "./FieldGenerator.js";
import { Button as m } from "@mantine/core";
import '../../../../../assets/FilterForm.css';const B = (t) => {
  const i = t.queryRef.current.getCurrentFilter() || {}, s = D(), l = t.defaultFilter || {}, f = h(t.columns), u = () => f.map((e, o) => T(e, e.label)), p = t.onClose || ((e) => {
  });
  Object.keys(l).map((e) => {
    const o = l[e];
    g(e, i, o);
  });
  const c = (e) => {
    t.queryRef.current ? (t.queryRef.current.setFilter(e), p(e)) : console.warn("Query reference not found");
  }, d = () => {
    c({});
  }, F = () => {
    const e = s.current.getData();
    var o = {};
    Object.entries(e).map(([b, n]) => {
      n && n != "" && (o[b] = n);
    }), c(o);
  }, y = t.column || 2;
  return /* @__PURE__ */ a("div", { onMouseDown: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ r(C, { formData: i, ref: s, children: /* @__PURE__ */ r(R, { columns: y, children: u() }) }),
    /* @__PURE__ */ a("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ r(m, { className: "py-reset-button", onClick: d, leftSection: /* @__PURE__ */ r(j, { size: 14 }), children: "Reset" }),
      /* @__PURE__ */ r(m, { className: "py-filter-button", onClick: F, leftSection: /* @__PURE__ */ r(x, { size: 14 }), children: "Filter" })
    ] })
  ] });
};
export {
  B as FilterForm
};
