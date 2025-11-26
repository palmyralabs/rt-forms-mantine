import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { Select as w, Pagination as x } from "@mantine/core";
import { delayGenerator as z } from "@palmyralabs/ts-utils";
import { forwardRef as C, useCallback as I, useState as u, useRef as j, useImperativeHandle as k } from "react";
import '../../../../../assets/SelectablePagination.css';const D = C(function(a, c) {
  const h = I(z(50), []), n = a.queryRef?.current, [A, m] = u(0), [E, v] = u(), g = c || j(null);
  k(g, () => ({
    refresh() {
      h(() => m((t) => t + 1));
    }
  }), [g]);
  const P = (t, p) => {
    const R = parseInt(p.value, 10);
    v(p.value), n.setPageSize(R);
  }, s = n?.getTotalRecords() || 0, f = n?.getQueryLimit() || { limit: 15 }, i = Array.isArray(a.pageSize) ? a.pageSize : [a.pageSize], d = n?.getPageNo() || 0, l = f.limit || 25, r = Math.ceil(s / l), y = d * l + 1, S = Math.min((d + 1) * l, s), b = (t) => {
    n.gotoPage(t - 1);
  }, N = i.map((t) => t);
  return /* @__PURE__ */ e("div", { children: (() => {
    const t = a.ignoreSinglePage ? 1 : 0;
    return !isNaN(r) && r > t;
  })() && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ o("div", { className: "py-selectable-pagination-container", children: [
    /* @__PURE__ */ e("div", { className: "py-selectable-pagination-left-container", children: i && i.length > 1 ? /* @__PURE__ */ o("div", { className: "py-selectable-pagination-left-content-container", children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: "Showing" }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-select-field", children: /* @__PURE__ */ e("div", { style: { width: "100px" }, children: /* @__PURE__ */ e(
        w,
        {
          id: "rows-per-page-select",
          defaultValue: i[0].toString(),
          onChange: P,
          size: "xs",
          checkIconPosition: "right",
          data: N.toString().split(",")
        }
      ) }) }),
      /* @__PURE__ */ e("div", { className: "py-selectable-pagination-show-result", children: /* @__PURE__ */ o("span", { children: [
        y,
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
        onChange: b,
        value: n.getPageNo() + 1
      }
    ) })
  ] }) }) });
});
export {
  D as SelectablePagination
};
