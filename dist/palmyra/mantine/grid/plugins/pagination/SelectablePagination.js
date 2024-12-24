import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { delayGenerator as x } from "@palmyralabs/ts-utils";
import { forwardRef as z, useCallback as C, useState as m, useRef as I, useImperativeHandle as j } from "react";
import { Select as k, Pagination as q } from "@mantine/core";
import '../../../../../assets/SelectablePagination.css';const H = z(function(a, r) {
  var h;
  const u = C(x(50), []), e = (h = a.queryRef) == null ? void 0 : h.current, [E, f] = m(0), [L, v] = m(), d = r || I(null);
  j(d, () => ({
    refresh() {
      u(() => f((n) => n + 1));
    }
  }), [d]);
  const P = (n, p) => {
    const w = parseInt(p.value, 10);
    v(p.value), e.setPageSize(w);
  }, s = (e == null ? void 0 : e.getTotalRecords()) || 0, S = (e == null ? void 0 : e.getQueryLimit()) || { limit: 15 }, i = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], g = (e == null ? void 0 : e.getPageNo()) || 0, l = S.limit || 25, o = Math.ceil(s / l), b = g * l + 1, R = Math.min((g + 1) * l, s), y = (n) => {
    e.gotoPage(n - 1);
  }, N = i.map((n) => n);
  return /* @__PURE__ */ t("div", { children: (() => {
    const n = a.ignoreSinglePage ? 1 : 0;
    return !isNaN(o) && o > n;
  })() && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ c("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ c("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: "Showing" }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ t("div", { style: { width: "100px" }, children: /* @__PURE__ */ t(
        k,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: P,
          size: "xs",
          checkIconPosition: "right",
          data: N.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ c("span", { children: [
        b,
        " - ",
        R,
        " of ",
        s,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ t(
      q,
      {
        total: o,
        onChange: y
      }
    ) })
  ] }) }) });
});
export {
  H as SelectablePagination
};
