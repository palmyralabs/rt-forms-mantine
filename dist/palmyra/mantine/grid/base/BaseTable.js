import { jsx as e, Fragment as s, jsxs as u } from "react/jsx-runtime";
import { useRef as N } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import { T as o, C as w } from "../../../../chunks/ColumnHeader2.js";
import { useReactTable as R, flexRender as m } from "@tanstack/react-table";
import v from "./LoadingChild.js";
import { useBaseGridManager as x } from "@palmyralabs/rt-forms";
function M(i) {
  const { rowData: a, customizer: n } = i, { onColumnSort: f, options: h, EmptyChildren: p, onRowClick: b } = x(i), y = n != null && n.getTableRef ? n == null ? void 0 : n.getTableRef() : N(), t = R(h);
  return y.current = t, /* @__PURE__ */ e(s, { children: /* @__PURE__ */ u("div", { className: i.className, children: [
    /* @__PURE__ */ u(o, { "aria-label": i["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(o.Thead, { className: "py-grid-header", children: t.getHeaderGroups().map((r) => /* @__PURE__ */ e(o.Tr, { className: "py-grid-header-row", children: r.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        w,
        {
          header: l,
          onSortChange: f,
          children: m(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, r.id)) }),
      a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(o.Tbody, { children: t.getRowModel().rows.map((r, l) => {
        const T = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(o.Tr, { className: T, children: r.getVisibleCells().map((d) => {
          var g;
          const c = d.column.columnDef.meta, C = "py-grid-data-cell " + (((g = c == null ? void 0 : c.columnDef) == null ? void 0 : g.type) === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            o.Td,
            {
              className: C,
              onClick: () => b(r.original),
              children: m(
                d.column.columnDef.cell,
                d.getContext()
              )
            },
            d.id
          );
        }) }, r.id);
      }) }),
      !i.showFooter || a == null || a == null || a.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(o.Tfoot, { className: "py-grid-footer", children: t.getFooterGroups().map((r) => /* @__PURE__ */ e(o.Tr, { className: "py-grid-footer-row", children: r.headers.map((l) => /* @__PURE__ */ e(o.Td, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, r.id)) })
    ] }),
    a == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(v, {}) }) : a == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : a.length == 0 ? /* @__PURE__ */ e(p, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  M as default
};
