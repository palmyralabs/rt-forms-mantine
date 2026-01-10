import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { Select as x, Pagination as w } from "@mantine/core";
import { delayGenerator as z } from "@palmyralabs/ts-utils";
import { forwardRef as C, useCallback as I, useState as u, useRef as j, useImperativeHandle as k } from "react";
import '../../../../../assets/SelectablePagination.css';const D = C(function(n, r) {
  const h = I(z(50), []), a = n.queryRef?.current, [A, m] = u(0), [E, y] = u(), g = r || j(null);
  k(g, () => ({
    refresh() {
      h(() => m((t) => t + 1));
    }
  }), [g]);
  const v = (t, p) => {
    const R = parseInt(p.value, 10);
    y(p.value), a.setPageSize(R);
  }, l = a?.getTotalRecords() || 0, P = a?.getQueryLimit() || { limit: 15 }, i = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], d = a?.getPageNo() || 0, c = P.limit || 25, o = Math.ceil(l / c), f = d * c + 1, b = Math.min((d + 1) * c, l), N = (t) => {
    a.gotoPage(t - 1);
  }, S = i.map((t) => t);
  return /* @__PURE__ */ e("div", { children: (() => {
    const t = n.ignoreSinglePage ? 1 : 0;
    return !isNaN(o) && o > t;
  })() && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ s("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ s("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-text", children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e("div", { style: { width: "100px" }, children: /* @__PURE__ */ e(
        x,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: v,
          size: "xs",
          checkIconPosition: "right",
          data: S.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ s("div", { className: "py-selectable-pagination-show-result", children: [
        /* @__PURE__ */ s("span", { children: [
          f,
          " - ",
          b,
          " of ",
          l
        ] }),
        /* @__PURE__ */ e("span", { className: "py-selectable-pagination-text", children: "Results" })
      ] })
    ] }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      w,
      {
        total: o,
        onChange: N,
        value: a.getPageNo() + 1
      }
    ) })
  ] }) }) });
});
export {
  D as SelectablePagination
};
