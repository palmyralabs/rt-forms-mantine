import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { useEffect as h } from "react";
import { G as s } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as b } from "@palmyralabs/rt-forms";
import { Table as i } from "@mantine/core";
function y(t) {
  return s({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function D(t) {
  return s({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const L = ({ header: t, children: e, sortMode: m, onSortChange: r }) => {
  const d = t.column.columnDef.meta?.attribute || t.id, u = !t.column.columnDef.enableSorting, n = t.column.columnDef.meta?.columnDef?.width || "auto", { sortColumn: p, order: a, sortOrder: l } = b({ sortDisabled: u, onSortChange: r, initMode: m });
  h(() => {
    r(d, a);
  }, [a]);
  const c = "py-dataGrid-header-text" + (t.column.columnDef.meta?.columnDef?.type === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ o(i.Td, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ o("div", { className: c, style: { width: n }, children: e }) }, t.id) : /* @__PURE__ */ o(
    i.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ f(
        "div",
        {
          className: c,
          style: { width: n },
          onClick: () => p(),
          children: [
            e,
            l === "asc" ? /* @__PURE__ */ o(D, { className: "py-baseGrid-header-sort-icon" }) : l === "desc" ? /* @__PURE__ */ o(y, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    t.id
  );
};
export {
  L as default
};
