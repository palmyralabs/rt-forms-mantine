import { jsx as e, Fragment as s, jsxs as g } from "react/jsx-runtime";
import { useRef as C } from "react";
import '../../../../assets/BaseTable.css';/* empty css                           */
import w from "./ColumnHeader.js";
import { useReactTable as R, flexRender as m } from "@tanstack/react-table";
import x from "./LoadingChild.js";
import { useBaseGridManager as D } from "@palmyralabs/rt-forms";
import { Table as a } from "@mantine/core";
function P(i) {
  const { rowData: r, customizer: o } = i, { onColumnSort: f, options: p, EmptyChildren: h, onRowClick: b } = D(i), y = o != null && o.getTableRef ? o == null ? void 0 : o.getTableRef() : C(), t = R(p);
  return y.current = t, /* @__PURE__ */ e(s, { children: /* @__PURE__ */ g("div", { className: i.className, children: [
    /* @__PURE__ */ g(a, { "aria-label": i["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ e(a.Thead, { className: "py-grid-header", children: t.getHeaderGroups().map((n) => /* @__PURE__ */ e(a.Tr, { className: "py-grid-header-row", children: n.headers.map((l) => l.isPlaceholder ? null : /* @__PURE__ */ e(
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
      )) }, n.id)) }),
      r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(a.Tbody, { children: t.getRowModel().rows.map((n, l) => {
        const T = "py-grid-data-row py-grid-data-row-" + (l % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ e(a.Tr, { className: T, children: n.getVisibleCells().map((d) => {
          var u;
          const c = d.column.columnDef.meta, N = "py-grid-data-cell " + (((u = c == null ? void 0 : c.columnDef) == null ? void 0 : u.type) === "number" ? " py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ e(
            a.Td,
            {
              className: N,
              onClick: () => b(n.original),
              children: m(
                d.column.columnDef.cell,
                d.getContext()
              )
            },
            d.id
          );
        }) }, n.id);
      }) }),
      !i.showFooter || r == null || r == null || r.length == 0 ? /* @__PURE__ */ e(s, {}) : /* @__PURE__ */ e(a.Tfoot, { className: "py-grid-footer", children: t.getFooterGroups().map((n) => /* @__PURE__ */ e(a.Tr, { className: "py-grid-footer-row", children: n.headers.map((l) => /* @__PURE__ */ e(a.Td, { className: "py-grid-footer-cell", children: l.isPlaceholder ? null : m(
        l.column.columnDef.footer,
        l.getContext()
      ) }, l.id)) }, n.id)) })
    ] }),
    r == null ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(x, {}) }) : r == null ? /* @__PURE__ */ e("div", { children: "Error while loading data" }) : r.length == 0 ? /* @__PURE__ */ e(h, {}) : /* @__PURE__ */ e(s, {})
  ] }) });
}
export {
  P as default
};
