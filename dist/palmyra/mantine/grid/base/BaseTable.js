import { jsx as n, Fragment as u, jsxs as R } from "react/jsx-runtime";
import { Table as a } from "@mantine/core";
import { useBaseGridManager as G } from "@palmyralabs/rt-forms";
import { useReactTable as O, flexRender as h } from "@tanstack/react-table";
import { useRef as C, useEffect as W } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import j from "./ColumnHeader.js";
import k from "./LoadingChild.js";
function Q(l) {
  const { rowData: o, customizer: b } = l, N = l.initParams?.sort || {}, { onColumnSort: z, options: d, EmptyChildren: x, onRowClick: v } = G(l), w = C(null), D = b?.getTableRef ? b.getTableRef() : w, y = l.tableOptions || {}, s = !!y.enableColumnResizing, S = (t) => {
    if (typeof t == "number") return t;
    if (typeof t == "string") {
      const e = t.match(/^(\d+(?:\.\d+)?)\s*px$/) || t.match(/^(\d+(?:\.\d+)?)$/);
      if (e) return parseFloat(e[1]);
    }
  }, f = {
    ...d,
    ...y,
    columns: s ? ((t) => (t || []).map((e) => {
      if (e?.size != null) return e;
      const i = S(e?.meta?.columnDef?.width);
      if (i == null) return e;
      const m = { ...e, size: i };
      return i < 20 && (m.minSize = i), m;
    }))(d.columns) : d.columns,
    data: d.data
  };
  s && !f.columnResizeMode && (f.columnResizeMode = "onChange");
  const r = O(f);
  D.current = r, l.tableRef && (l.tableRef.current = r);
  const p = C(!1);
  W(() => {
    if (l.onTableReady && !p.current) {
      p.current = !0;
      try {
        l.onTableReady(r);
      } catch (t) {
        console.error(t);
      }
    }
  }, [r]);
  const M = (t) => {
    const e = t.column?.columnDef?.meta?.attribute;
    if (e)
      return N[e];
  }, P = s ? { layout: "fixed", style: { width: r.getTotalSize(), minWidth: "100%" } } : {};
  return /* @__PURE__ */ n(u, { children: /* @__PURE__ */ R("div", { className: l.className, children: [
    /* @__PURE__ */ n("div", { className: "py-baseGrid-scroll", children: /* @__PURE__ */ R(a, { "aria-label": l["aria-label"], className: "py-baseGrid", ...P, children: [
      /* @__PURE__ */ n(a.Thead, { className: "py-grid-header", children: r.getHeaderGroups().map((t) => /* @__PURE__ */ n(a.Tr, { className: "py-grid-header-row", children: t.headers.map((e) => e.isPlaceholder ? null : /* @__PURE__ */ n(
        j,
        {
          header: e,
          sortMode: M(e),
          onSortChange: z,
          resizeEnabled: s,
          children: h(
            e.column.columnDef.header,
            e.getContext()
          )
        },
        e.id
      )) }, t.id)) }),
      o == null || o == null || o.length == 0 ? /* @__PURE__ */ n(u, {}) : /* @__PURE__ */ n(a.Tbody, { children: r.getRowModel().rows.map((t, e) => {
        const i = "py-grid-data-row py-grid-data-row-" + (e % 2 == 1 ? "even" : "odd"), m = { animationDelay: Math.min(e, 14) * 18 + "ms" };
        return /* @__PURE__ */ n(a.Tr, { className: i, style: m, children: t.getVisibleCells().map((c) => {
          const T = c.column.columnDef.meta, E = "py-grid-data-cell " + (T?.columnDef?.type === "number" ? " py-grid-data-cell-type-number" : ""), g = s ? c.column.getSize() : T?.columnDef?.width, F = g ? { width: g, minWidth: g } : void 0;
          return /* @__PURE__ */ n(
            a.Td,
            {
              className: E,
              style: F,
              onClick: () => v(t.original),
              children: h(
                c.column.columnDef.cell,
                c.getContext()
              )
            },
            c.id
          );
        }) }, t.id);
      }) }),
      !l.showFooter || o == null || o == null || o.length == 0 ? /* @__PURE__ */ n(u, {}) : /* @__PURE__ */ n(a.Tfoot, { className: "py-grid-footer", children: r.getFooterGroups().map((t) => /* @__PURE__ */ n(a.Tr, { className: "py-grid-footer-row", children: t.headers.map((e) => /* @__PURE__ */ n(a.Td, { className: "py-grid-footer-cell", children: e.isPlaceholder ? null : h(
        e.column.columnDef.footer,
        e.getContext()
      ) }, e.id)) }, t.id)) })
    ] }) }),
    o == null ? /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(k, {}) }) : o == null ? /* @__PURE__ */ n("div", { children: "Error while loading data" }) : o.length == 0 ? /* @__PURE__ */ n(x, {}) : /* @__PURE__ */ n(u, {})
  ] }) });
}
export {
  Q as default
};
