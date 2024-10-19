import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { delayGenerator as R, topic as p } from "@palmyralabs/ts-utils";
import { useState as h, useEffect as w } from "react";
import { Select as x, Pagination as z } from "@mantine/core";
import '../../../../../assets/SelectablePagination.css';const C = R(10), V = (n) => {
  var g;
  const e = (g = n.queryRef) == null ? void 0 : g.current, [j, m] = h(0), [q, u] = h();
  w(() => {
    if (n.topic) {
      const i = p.subscribe(n.topic + "/data", () => {
        C(() => m((s) => s + 1));
      });
      return () => {
        p.unsubscribe(i);
      };
    }
  }, [n.topic]);
  const v = (i, s) => {
    const N = parseInt(s.value, 10);
    u(s.value), e.setPageSize(N);
  }, c = (e == null ? void 0 : e.getTotalRecords()) || 0, f = (e == null ? void 0 : e.getQueryLimit()) || { limit: 15 }, a = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], r = (e == null ? void 0 : e.getPageNo()) || 0, o = f.limit || 25, d = Math.ceil(c / o), P = r * o + 1, b = Math.min((r + 1) * o, c), S = (i) => {
    e.gotoPage(i - 1);
  }, y = a.map((i) => i);
  return /* @__PURE__ */ t("div", { children: !isNaN(d) && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ l("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-left-container", children: a && a.length > 1 ? /* @__PURE__ */ l("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: "Showing" }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ t("div", { style: { width: "100px" }, children: /* @__PURE__ */ t(
        x,
        {
          id: "rows-per-page-select",
          defaultValue: a[0].toString(),
          onChange: v,
          size: "xs",
          checkIconPosition: "right",
          data: y.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ l("span", { children: [
        P,
        " - ",
        b,
        " of ",
        c,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ t(
      z,
      {
        total: d,
        onChange: S
      }
    ) })
  ] }) }) });
};
export {
  V as SelectablePagination
};
