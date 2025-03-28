import { jsx as o, jsxs as k } from "react/jsx-runtime";
import { useEffect as N } from "react";
import { G as f } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as g } from "@palmyralabs/rt-forms";
import { Table as p } from "@mantine/core";
function w(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function G(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: e, sortMode: h, onSortChange: n }) => {
  var s, d, m, u;
  const b = ((s = t.column.columnDef.meta) == null ? void 0 : s.attribute) || t.id, y = !t.column.columnDef.enableSorting, a = ((m = (d = t.column.columnDef.meta) == null ? void 0 : d.columnDef) == null ? void 0 : m.width) || "auto", { sortColumn: D, order: l, sortOrder: c } = g({ sortDisabled: y, onSortChange: n, initMode: h });
  N(() => {
    n(b, l);
  }, [l]);
  const r = t.column.columnDef.meta, i = "py-dataGrid-header-text" + (((u = r == null ? void 0 : r.columnDef) == null ? void 0 : u.type) === "number" ? " py-dataGrid-header-text-type-number" : "");
  return t.column.columnDef.columns ? /* @__PURE__ */ o(p.Td, { className: "py-baseGrid-header-cell", colSpan: t.colSpan, children: /* @__PURE__ */ o("div", { className: i, style: { width: a }, children: e }) }, t.id) : /* @__PURE__ */ o(
    p.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ k(
        "div",
        {
          className: i,
          style: { width: a },
          onClick: () => D(),
          children: [
            e,
            c === "asc" ? /* @__PURE__ */ o(G, { className: "py-baseGrid-header-sort-icon" }) : c === "desc" ? /* @__PURE__ */ o(w, { className: "py-baseGrid-header-sort-icon" }) : null
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
