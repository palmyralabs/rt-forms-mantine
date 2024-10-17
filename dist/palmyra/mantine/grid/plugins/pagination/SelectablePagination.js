import { jsx as t, jsxs as r } from "react/jsx-runtime";
import "../../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as m } from "../../../../../chunks/topic.js";
import { useState as u, useEffect as w } from "react";
import { Select as x, Pagination as z } from "@mantine/core";
import '../../../../../assets/SelectablePagination.css';const C = (n) => {
  {
    var e;
    return function(d, ...c) {
      clearTimeout(e), e = setTimeout(d.bind(null, ...c), n);
    };
  }
}, T = C(10), _ = (n) => {
  var h;
  const e = (h = n.queryRef) == null ? void 0 : h.current, [d, c] = u(0), [j, v] = u();
  w(() => {
    if (n.topic) {
      const i = m.subscribe(n.topic + "/data", () => {
        T(() => c((s) => s + 1));
      });
      return () => {
        m.unsubscribe(i);
      };
    }
  }, [n.topic]);
  const f = (i, s) => {
    const R = parseInt(s.value, 10);
    v(s.value), e.setPageSize(R);
  }, o = (e == null ? void 0 : e.getTotalRecords()) || 0, P = (e == null ? void 0 : e.getQueryLimit()) || { limit: 15 }, a = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], g = (e == null ? void 0 : e.getPageNo()) || 0, l = P.limit || 25, p = Math.ceil(o / l), b = g * l + 1, S = Math.min((g + 1) * l, o), N = (i) => {
    e.gotoPage(i - 1);
  }, y = a.map((i) => i);
  return /* @__PURE__ */ t("div", { children: !isNaN(p) && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ r("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-left-container", children: a && a.length > 1 ? /* @__PURE__ */ r("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { children: "Showing" }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ t("div", { style: { width: "100px" }, children: /* @__PURE__ */ t(
        x,
        {
          id: "rows-per-page-select",
          defaultValue: a[0].toString(),
          onChange: f,
          size: "xs",
          checkIconPosition: "right",
          data: y.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ t("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ r("span", { children: [
        b,
        " - ",
        S,
        " of ",
        o,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ t("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ t(
      z,
      {
        total: p,
        onChange: N
      }
    ) })
  ] }) }) });
};
export {
  _ as SelectablePagination
};
