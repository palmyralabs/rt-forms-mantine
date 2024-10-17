import { jsx as o, jsxs as y } from "react/jsx-runtime";
import { useEffect as D } from "react";
import { G as f } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as k } from "@palmyralabs/rt-forms";
import { Table as p } from "@mantine/core";
function N(t) {
  return f({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function v(t) {
  return f({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: e, onSortChange: n }) => {
  var i, d, m, u;
  const h = ((i = t.column.columnDef.meta) == null ? void 0 : i.attribute) || t.id, b = !t.column.columnDef.enableSorting, a = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", { sortColumn: g, order: l, sortOrder: c } = k({ sortDisabled: b, onSortChange: n });
  D(() => {
    n(h, l);
  }, [l]);
  const r = t.column.columnDef.meta, s = "py-dataGrid-header-text" + (((u = r == null ? void 0 : r.columnDef) == null ? void 0 : u.type) === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ o(p.Td, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ o("div", { className: s, style: { width: a }, children: e }) }, t.id) : /* @__PURE__ */ o(
    p.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ y(
        "div",
        {
          className: s,
          style: { width: a },
          onClick: () => g(),
          children: [
            e,
            c === "asc" ? /* @__PURE__ */ o(v, { className: "py-baseGrid-header-sort-icon" }) : c === "desc" ? /* @__PURE__ */ o(N, { className: "py-baseGrid-header-sort-icon" }) : null
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
