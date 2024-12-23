import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { delayGenerator as w } from "@palmyralabs/ts-utils";
import { forwardRef as x, useState as m, useRef as z, useImperativeHandle as C } from "react";
import { Select as I, Pagination as j } from "@mantine/core";
import '../../../../../assets/SelectablePagination.css';const q = w(10), G = x(function(a, r) {
  var h;
  const e = (h = a.queryRef) == null ? void 0 : h.current, [E, u] = m(0), [L, f] = m(), d = r || z(null);
  C(d, () => ({
    refresh() {
      q(() => u((n) => n + 1));
    }
  }), [d]);
  const v = (n, p) => {
    const N = parseInt(p.value, 10);
    f(p.value), e.setPageSize(N);
  }, s = (e == null ? void 0 : e.getTotalRecords()) || 0, P = (e == null ? void 0 : e.getQueryLimit()) || { limit: 15 }, i = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], g = (e == null ? void 0 : e.getPageNo()) || 0, l = P.limit || 25, o = Math.ceil(s / l), S = g * l + 1, R = Math.min((g + 1) * l, s), b = (n) => {
    e.gotoPage(n - 1);
  }, y = i.map((n) => n);
  return /* @__PURE__ */ t("div", { children: (() => {
    const n = a.ignoreSinglePage ? 1 : 0;
    return !isNaN(o) && o > n;
  })() && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ c("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ c("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: "Showing" }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ t("div", { style: { width: "100px" }, children: /* @__PURE__ */ t(
        I,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: v,
          size: "xs",
          checkIconPosition: "right",
          data: y.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ c("span", { children: [
        S,
        " - ",
        R,
        " of ",
        s,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ t(
      j,
      {
        total: o,
        onChange: b
      }
    ) })
  ] }) }) });
});
export {
  G as SelectablePagination
};
