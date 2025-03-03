import { jsx as o, jsxs as D } from "react/jsx-runtime";
import { useEffect as k } from "react";
import { G as f } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as N } from "@palmyralabs/rt-forms";
import { Table as p } from "@mantine/core";
function g(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function w(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: e, onSortChange: n }) => {
  var s, d, m, u;
  const h = ((s = t.column.columnDef.meta) == null ? void 0 : s.attribute) || t.id, b = !t.column.columnDef.enableSorting, a = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", { sortColumn: y, order: l, sortOrder: c } = N({ sortDisabled: b, onSortChange: n });
  k(() => {
    n(h, l);
  }, [l]);
  const r = t.column.columnDef.meta, i = "py-dataGrid-header-text" + (((u = r == null ? void 0 : r.columnDef) == null ? void 0 : u.type) === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ o(p.Td, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ o("div", { className: i, style: { width: a }, children: e }) }, t.id) : /* @__PURE__ */ o(
    p.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ D(
        "div",
        {
          className: i,
          style: { width: a },
          onClick: () => y(),
          children: [
            e,
            c === "asc" ? /* @__PURE__ */ o(w, { className: "py-baseGrid-header-sort-icon" }) : c === "desc" ? /* @__PURE__ */ o(g, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    t.id
  );
};
export {
  j as default
};
