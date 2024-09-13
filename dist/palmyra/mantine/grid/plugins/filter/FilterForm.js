import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { convertToField as v, PalmyraForm as C, FieldGroupContainer as N } from "@palmyralabs/rt-forms";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as g } from "react";
import { a as R, T as x } from "../../../../../chunks/index.js";
import j from "./FieldGenerator.js";
import { B as u } from "../../../../../chunks/Button.js";
import '../../../../../assets/FilterForm.css';const d = (e, r, s) => {
  var n = e.indexOf(".");
  if (n < 0) {
    r[e] = s;
    return;
  }
  var o = e.substring(0, n), a = e.substring(n + 1);
  return (r[o] === void 0 || r[o] == null) && (r[o] = {}), d(a, r[o], s);
}, P = (e) => {
  const r = {}, s = g(), n = e.defaultFilter || {}, o = v(e.columns), a = () => o.map((t, i) => j(t, t.label)), p = e.onClose || ((t) => {
  });
  Object.keys(n || {}).map((t) => {
    const i = n[t];
    d(t, r, i);
  });
  const m = (t) => {
    e.queryRef.current ? (e.queryRef.current.setFilter(t), p(t)) : console.warn("Query reference not found");
  }, F = () => {
    m({});
  }, b = () => {
    const t = s.current.getData();
    var i = {};
    Object.entries(t).map(([h, f]) => {
      f && f != "" && (i[h] = f);
    }), m && m(i);
  }, y = e.column || 2;
  return /* @__PURE__ */ c("div", { className: "py-filter-container", children: [
    /* @__PURE__ */ l("div", { className: "py-filter-content", children: /* @__PURE__ */ l(C, { formData: r, ref: s, children: /* @__PURE__ */ l(N, { columns: y, children: a() }) }) }),
    /* @__PURE__ */ c("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ c(u, { className: "py-reset-button", onClick: F, children: [
        /* @__PURE__ */ l(R, { className: "py-button-icon" }),
        "Reset"
      ] }),
      /* @__PURE__ */ c(u, { className: "py-filter-button", onClick: b, children: [
        /* @__PURE__ */ l(x, { className: "py-button-icon" }),
        "Filter"
      ] })
    ] })
  ] });
};
export {
  P as FilterForm
};
