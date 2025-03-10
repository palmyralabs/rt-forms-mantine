import { jsx as e, Fragment as m, jsxs as h } from "react/jsx-runtime";
import { useRef as v } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import x from "./ColumnHeader.js";
import { useReactTable as D, flexRender as u } from "@tanstack/react-table";
import M from "./LoadingChild.js";
import { useBaseGridManager as P } from "@palmyralabs/rt-forms";
import { Table as t } from "@mantine/core";
function V(n) {
  var g;
  const { rowData: r, customizer: i } = n, p = ((g = n.initParams) == null ? void 0 : g.sort) || {}, { onColumnSort: b, options: y, EmptyChildren: T, onRowClick: N } = P(n), C = i != null && i.getTableRef ? i == null ? void 0 : i.getTableRef() : v(), s = D(y);
  C.current = s;
  const w = (o) => {
    var c, a, d;
    const l = (d = (a = (c = o.column) == null ? void 0 : c.columnDef) == null ? void 0 : a.meta) == null ? void 0 : d.attribute;
    if (l)
      return p[l];
  };
  return /* @__PURE__ */ e(m, { children: /* @__PURE__ */ h("div", { className: n.className, children: [
    /* @__PURE__ */ h(t, { "aria-label": n["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(t.Thead, { className: "py-grid-header", children: s.getHeaderGroups().map((o) => /* @__PURE__ */ e(t.Tr, { className: "py-grid-header-row", children: o.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
        x,
        {
          header: l,
          sortMode: w(l),
          onSortChange: b,
          children: u(
            l.column.columnDef.header,
            l.getContext()
          )
        },
        l.id
      )) }, o.id)) }),
      r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(m, {}) : /* @__PURE__ */ e(t.Tbody, { children: s.getRowModel().rows.map((o, l) => {
        const c = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(t.Tr, { className: c, children: o.getVisibleCells().map((a) => {
          var f;
          const d = a.column.columnDef.meta, R = "py-grid-data-cell " + (((f = d == null ? void 0 : d.columnDef) == null ? void 0 : f.type) === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            t.Td,
            {
              className: R,
              onClick: () => N(o.original),
              children: u(
                a.column.columnDef.cell,
                a.getContext()
              )
            },
            a.id
          );
        }) }, o.id);
      }) }),
      !n.showFooter || r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(m, {}) : /* @__PURE__ */ e(t.Tfoot, { className: "py-grid-footer", children: s.getFooterGroups().map((o) => /* @__PURE__ */ e(t.Tr, { className: "py-grid-footer-row", children: o.headers.map((l) => /* @__PURE__ */ e(t.Td, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : u(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, o.id)) })
    ] }),
    r == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(M, {}) }) : r == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : r.length == 0 ? /* @__PURE__ */ e(T, {}) : /* @__PURE__ */ e(m, {})
  ] }) });
}
export {
  V as default
};
