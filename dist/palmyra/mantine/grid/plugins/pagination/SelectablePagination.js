import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { Select as w, Pagination as x } from "@mantine/core";
import { delayGenerator as z } from "@palmyralabs/ts-utils";
import { forwardRef as C, useCallback as I, useState as u, useRef as j, useImperativeHandle as k } from "react";
import '../../../../../assets/SelectablePagination.css';const D = C(function(n, c) {
  const h = I(z(50), []), a = n.queryRef?.current, [A, m] = u(0), [E, f] = u(), g = c || j(null);
  k(g, () => ({
    refresh() {
      h(() => m((t) => t + 1));
    }
  }), [g]);
  const v = (t, p) => {
    const N = parseInt(p.value, 10);
    f(p.value), a.setPageSize(N);
  }, s = a?.getTotalRecords() || 0, y = a?.getQueryLimit() || { limit: 15 }, i = Array.isArray(n.pageSize) ? n.pageSize : [n.pageSize], d = a?.getPageNo() || 0, l = y.limit || 25, r = Math.ceil(s / l), P = d * l + 1, S = Math.min((d + 1) * l, s), b = (t) => {
    a.gotoPage(t - 1);
  }, R = i.map((t) => t);
  return /* @__PURE__ */ e("div", { children: (() => {
    const t = n.ignoreSinglePage ? 1 : 0;
    return !isNaN(r) && r > t;
  })() && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ o("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e("div", { style: { width: "100px" }, children: /* @__PURE__ */ e(
        w,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: v,
          size: "xs",
          checkIconPosition: "right",
          data: R.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ o("span", { children: [
        P,
        " - ",
        S,
        " of ",
        s,
        " Results"
      ] }) })
    ] }) : null }),
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-right-container", children: /* @__PURE__ */ e(
      x,
      {
        total: r,
        onChange: b
      }
    ) })
  ] }) }) });
});
export {
  D as SelectablePagination
};
