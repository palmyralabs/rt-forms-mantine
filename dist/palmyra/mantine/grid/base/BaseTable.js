import { jsx as e, Fragment as m, jsxs as c } from "react/jsx-runtime";
import { Table as t } from "@mantine/core";
import { useBaseGridManager as C } from "@palmyralabs/rt-forms";
import { useReactTable as w, flexRender as s } from "@tanstack/react-table";
import { useRef as R } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import v from "./ColumnHeader.js";
import x from "./LoadingChild.js";
function S(a) {
  const { rowData: r, customizer: d } = a, u = a.initParams?.sort || {}, { onColumnSort: g, options: f, EmptyChildren: h, onRowClick: p } = C(a), b = d?.getTableRef ? d?.getTableRef() : R(null), n = w(f);
  b.current = n;
  const y = (o) => {
    const l = o.column?.columnDef?.meta?.attribute;
    if (l)
      return u[l];
  };
  return /* @__PURE__ */ e(m, { children: /* @__PURE__ */ c("div", { className: a.className, children: [
    /* @__PURE__ */ c(t, { "aria-label": a["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(t.Thead, { className: "py-grid-header", children: n.getHeaderGroups().map((o) => /* @__PURE__ */ e(t.Tr, { className: "py-grid-header-row", children: o.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        v,
        {
          header: l,
          sortMode: y(l),
          onSortChange: g,
          children: s(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, o.id)) }),
      r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(m, {}) : /* @__PURE__ */ e(t.Tbody, { children: n.getRowModel().rows.map((o, l) => {
        const T = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(t.Tr, { className: T, children: o.getVisibleCells().map((i) => {
          const N = "py-grid-data-cell " + (i.column.columnDef.meta?.columnDef?.type === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            t.Td,
            {
              className: N,
              onClick: () => p(o.original),
              children: s(
                i.column.columnDef.cell,
                i.getContext()
              )
            },
            i.id
          );
        }) }, o.id);
      }) }),
      !a.showFooter || r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(m, {}) : /* @__PURE__ */ e(t.Tfoot, { className: "py-grid-footer", children: n.getFooterGroups().map((o) => /* @__PURE__ */ e(t.Tr, { className: "py-grid-footer-row", children: o.headers.map((l) => /* @__PURE__ */ e(t.Td, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : s(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, o.id)) })
    ] }),
    r == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(x, {}) }) : r == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : r.length == 0 ? /* @__PURE__ */ e(h, {}) : /* @__PURE__ */ e(m, {})
  ] }) });
}
export {
  S as default
};
