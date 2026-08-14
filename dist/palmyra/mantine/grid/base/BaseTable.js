import { jsx as t, Fragment as c, jsxs as h } from "react/jsx-runtime";
import { Table as n } from "@mantine/core";
import { useBaseGridManager as P } from "@palmyralabs/rt-forms";
import { useReactTable as E, flexRender as u } from "@tanstack/react-table";
import { useRef as y, useEffect as F } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import O from "./ColumnHeader.js";
import j from "./LoadingChild.js";
function J(o) {
  const { rowData: a, customizer: f } = o, T = o.initParams?.sort || {}, { onColumnSort: R, options: d, EmptyChildren: p, onRowClick: C } = P(o), N = y(null), w = f?.getTableRef ? f.getTableRef() : N, g = o.tableOptions || {}, s = !!g.enableColumnResizing, m = {
    ...d,
    ...g,
    columns: d.columns,
    data: d.data
  };
  s && !m.columnResizeMode && (m.columnResizeMode = "onChange");
  const r = E(m);
  w.current = r, o.tableRef && (o.tableRef.current = r);
  const b = y(!1);
  F(() => {
    if (o.onTableReady && !b.current) {
      b.current = !0;
      try {
        o.onTableReady(r);
      } catch (l) {
        console.error(l);
      }
    }
  }, [r]);
  const v = (l) => {
    const e = l.column?.columnDef?.meta?.attribute;
    if (e)
      return T[e];
  }, D = s ? { layout: "fixed", style: { width: r.getTotalSize(), minWidth: "100%" } } : {};
  return /* @__PURE__ */ t(c, { children: /* @__PURE__ */ h("div", { className: o.className, children: [
    /* @__PURE__ */ h(n, { "aria-label": o["aria-label"], className: "py-baseGrid", ...D, children: [
      /* @__PURE__ */ t(n.Thead, { className: "py-grid-header", children: r.getHeaderGroups().map((l) => /* @__PURE__ */ t(n.Tr, { className: "py-grid-header-row", children: l.headers.map((e) => e.isPlaceholder ? null : /* @__PURE__ */ t(
        O,
        {
          header: e,
          sortMode: v(e),
          onSortChange: R,
          resizeEnabled: s,
          children: u(
            e.column.columnDef.header,
            e.getContext()
          )
        },
        e.id
      )) }, l.id)) }),
      a == null || a == null || a.length == 0 ? /* @__PURE__ */ t(c, {}) : /* @__PURE__ */ t(n.Tbody, { children: r.getRowModel().rows.map((l, e) => {
        const x = "py-grid-data-row py-grid-data-row-" + (e % 2 == 1 ? "even" : "odd"), z = { animationDelay: Math.min(e, 14) * 18 + "ms" };
        return /* @__PURE__ */ t(n.Tr, { className: x, style: z, children: l.getVisibleCells().map((i) => {
          const M = "py-grid-data-cell " + (i.column.columnDef.meta?.columnDef?.type === "number" ? " py-grid-data-cell-type-number" : ""), S = s ? { width: i.column.getSize() } : void 0;
          return /* @__PURE__ */ t(
            n.Td,
            {
              className: M,
              style: S,
              onClick: () => C(l.original),
              children: u(
                i.column.columnDef.cell,
                i.getContext()
              )
            },
            i.id
          );
        }) }, l.id);
      }) }),
      !o.showFooter || a == null || a == null || a.length == 0 ? /* @__PURE__ */ t(c, {}) : /* @__PURE__ */ t(n.Tfoot, { className: "py-grid-footer", children: r.getFooterGroups().map((l) => /* @__PURE__ */ t(n.Tr, { className: "py-grid-footer-row", children: l.headers.map((e) => /* @__PURE__ */ t(n.Td, { className: "py-grid-footer-cell", children: e.isPlaceholder ? null : u(
        e.column.columnDef.footer,
        e.getContext()
      ) }, e.id)) }, l.id)) })
    ] }),
    a == null ? /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(j, {}) }) : a == null ? /* @__PURE__ */ t("div", { children: "Error while loading data" }) : a.length == 0 ? /* @__PURE__ */ t(p, {}) : /* @__PURE__ */ t(c, {})
  ] }) });
}
export {
  J as default
};
