import { jsx as t, Fragment as s, jsxs as T } from "react/jsx-runtime";
import { Table as a } from "@mantine/core";
import { useBaseGridManager as F } from "@palmyralabs/rt-forms";
import { useReactTable as O, flexRender as u } from "@tanstack/react-table";
import { useRef as R, useEffect as j } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import k from "./ColumnHeader.js";
import B from "./LoadingChild.js";
function K(o) {
  const { rowData: n, customizer: f } = o, p = o.initParams?.sort || {}, { onColumnSort: C, options: d, EmptyChildren: N, onRowClick: w } = F(o), D = R(null), v = f?.getTableRef ? f.getTableRef() : D, g = o.tableOptions || {}, c = !!g.enableColumnResizing, m = {
    ...d,
    ...g,
    columns: d.columns,
    data: d.data
  };
  c && !m.columnResizeMode && (m.columnResizeMode = "onChange");
  const r = O(m);
  v.current = r, o.tableRef && (o.tableRef.current = r);
  const h = R(!1);
  j(() => {
    if (o.onTableReady && !h.current) {
      h.current = !0;
      try {
        o.onTableReady(r);
      } catch (l) {
        console.error(l);
      }
    }
  }, [r]);
  const x = (l) => {
    const e = l.column?.columnDef?.meta?.attribute;
    if (e)
      return p[e];
  }, z = c ? { layout: "fixed", style: { width: r.getTotalSize(), minWidth: "100%" } } : {};
  return /* @__PURE__ */ t(s, { children: /* @__PURE__ */ T("div", { className: o.className, children: [
    /* @__PURE__ */ T(a, { "aria-label": o["aria-label"], className: "py-baseGrid", ...z, children: [
      /* @__PURE__ */ t(a.Thead, { className: "py-grid-header", children: r.getHeaderGroups().map((l) => /* @__PURE__ */ t(a.Tr, { className: "py-grid-header-row", children: l.headers.map((e) => e.isPlaceholder ? null : /* @__PURE__ */ t(
        k,
        {
          header: e,
          sortMode: x(e),
          onSortChange: C,
          resizeEnabled: c,
          children: u(
            e.column.columnDef.header,
            e.getContext()
          )
        },
        e.id
      )) }, l.id)) }),
      n == null || n == null || n.length == 0 ? /* @__PURE__ */ t(s, {}) : /* @__PURE__ */ t(a.Tbody, { children: r.getRowModel().rows.map((l, e) => {
        const M = "py-grid-data-row py-grid-data-row-" + (e % 2 == 1 ? "even" : "odd"), S = { animationDelay: Math.min(e, 14) * 18 + "ms" };
        return /* @__PURE__ */ t(a.Tr, { className: M, style: S, children: l.getVisibleCells().map((i) => {
          const b = i.column.columnDef.meta, P = "py-grid-data-cell " + (b?.columnDef?.type === "number" ? " py-grid-data-cell-type-number" : ""), y = c ? i.column.getSize() : b?.columnDef?.width, E = y ? { width: y } : void 0;
          return /* @__PURE__ */ t(
            a.Td,
            {
              className: P,
              style: E,
              onClick: () => w(l.original),
              children: u(
                i.column.columnDef.cell,
                i.getContext()
              )
            },
            i.id
          );
        }) }, l.id);
      }) }),
      !o.showFooter || n == null || n == null || n.length == 0 ? /* @__PURE__ */ t(s, {}) : /* @__PURE__ */ t(a.Tfoot, { className: "py-grid-footer", children: r.getFooterGroups().map((l) => /* @__PURE__ */ t(a.Tr, { className: "py-grid-footer-row", children: l.headers.map((e) => /* @__PURE__ */ t(a.Td, { className: "py-grid-footer-cell", children: e.isPlaceholder ? null : u(
        e.column.columnDef.footer,
        e.getContext()
      ) }, e.id)) }, l.id)) })
    ] }),
    n == null ? /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(B, {}) }) : n == null ? /* @__PURE__ */ t("div", { children: "Error while loading data" }) : n.length == 0 ? /* @__PURE__ */ t(N, {}) : /* @__PURE__ */ t(s, {})
  ] }) });
}
export {
  K as default
};
