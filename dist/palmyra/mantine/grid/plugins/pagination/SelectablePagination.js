import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { Select as S, Pagination as x } from "@mantine/core";
import { delayGenerator as R } from "@palmyralabs/ts-utils";
import { useCallback as w, useState as d, useImperativeHandle as z } from "react";
import '../../../../../assets/SelectablePagination.css';function L(a) {
  const p = w(R(50), []), n = a.queryRef?.current, [C, h] = d(0), [I, u] = d();
  z(a.ref, () => ({
    refresh() {
      p(() => h((t) => t + 1));
    }
  }), [a.ref]);
  const m = (t, g) => {
    const N = parseInt(g.value, 10);
    u(g.value), n.setPageSize(N);
  }, l = n?.getTotalRecords() || 0, y = n?.getQueryLimit() || { limit: 15 }, i = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], o = n?.getPageNo() || 0, r = y.limit || 25, c = Math.ceil(l / r), v = o * r + 1, P = Math.min((o + 1) * r, l), f = (t) => {
    n.gotoPage(t - 1);
  }, b = i.map((t) => t);
  return /* @__PURE__ */ e("div", { children: (() => {
    const t = a.ignoreSinglePage ? 1 : 0;
    return !isNaN(c) && c > t;
  })() && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ s("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-text", children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e("div", { style: { width: "100px" }, children: /* @__PURE__ */ e(
        S,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: m,
          size: "xs",
          checkIconPosition: "right",
          data: b.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ s("div", { className: "py-selectable-pagination-show-result", children: [
        /* @__PURE__ */ s("span", { children: [
          v,
          " - ",
          P,
          " of ",
          l
        ] }),
        /* @__PURE__ */ e("span", { className: "py-selectable-pagination-text", children: "Results" })
      ] })
    ] }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      x,
      {
        total: c,
        onChange: f,
        value: n.getPageNo() + 1
      }
    ) })
  ] }) }) });
}
export {
  L as SelectablePagination
};
