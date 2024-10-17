import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { convertToField as v, PalmyraForm as C, FieldGroupContainer as g } from "@palmyralabs/rt-forms";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { useRef as R } from "react";
import { a as x, T as j } from "../../../../../chunks/index.js";
import D from "./FieldGenerator.js";
import { Button as u } from "@mantine/core";
import '../../../../../assets/FilterForm.css';const d = (e, r, s) => {
  var n = e.indexOf(".");
  if (n < 0) {
    r[e] = s;
    return;
  }
  var o = e.substring(0, n), c = e.substring(n + 1);
  return (r[o] === void 0 || r[o] == null) && (r[o] = {}), d(c, r[o], s);
}, w = (e) => {
  const r = {}, s = R(), n = e.defaultFilter || {}, o = v(e.columns), c = () => o.map((t, l) => D(t, t.label)), p = e.onClose || ((t) => {
  });
  Object.keys(n || {}).map((t) => {
    const l = n[t];
    d(t, r, l);
  });
  const a = (t) => {
    e.queryRef.current ? (e.queryRef.current.setFilter(t), p(t)) : console.warn("Query reference not found");
  }, F = () => {
    a({});
  }, b = () => {
    const t = s.current.getData();
    var l = {};
    Object.entries(t).map(([y, f]) => {
      f && f != "" && (l[y] = f);
    }), a && a(l);
  }, h = e.column || 2;
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ i(C, { formData: r, ref: s, children: /* @__PURE__ */ i(g, { columns: h, children: c() }) }),
    /* @__PURE__ */ m("div", { className: "py-filter-button-container", children: [
      /* @__PURE__ */ i(u, { className: "py-reset-button", onClick: F, leftSection: /* @__PURE__ */ i(x, { size: 14 }), children: "Reset" }),
      /* @__PURE__ */ i(u, { className: "py-filter-button", onClick: b, leftSection: /* @__PURE__ */ i(j, { size: 14 }), children: "Filter" })
    ] })
  ] });
};
export {
  w as FilterForm
};
