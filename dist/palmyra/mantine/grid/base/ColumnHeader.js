import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { useEffect as G } from "react";
import { G as g } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as k } from "@palmyralabs/rt-forms";
import { Table as p } from "@mantine/core";
function v(t) {
  return g({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function z(t) {
  return g({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const j = ({ header: t, children: i, sortMode: f, onSortChange: a, resizeEnabled: l }) => {
  const h = t.column.columnDef.meta?.attribute || t.id, r = t.column.columnDef.meta?.columnDef || {}, e = !!r.disableColumn, b = !!l && r.enableResizing === !0 && !e && (t.column.getCanResize ? t.column.getCanResize() : !0), y = !t.column.columnDef.enableSorting || e, s = l ? t.getSize() : r.width || "auto", { sortColumn: C, order: c, sortOrder: d } = k({ sortDisabled: y, onSortChange: a, initMode: f });
  G(() => {
    a(h, c);
  }, [c]);
  const m = "py-dataGrid-header-text" + (t.column.columnDef.meta?.columnDef?.type === "number" ? " py-dataGrid-header-text-type-number" : "") + (e ? " py-dataGrid-header-text-disabled" : ""), u = b ? /* @__PURE__ */ o(
    "div",
    {
      className: "py-grid-resizer" + (t.column.getIsResizing() ? " py-grid-resizer-active" : ""),
      onMouseDown: t.getResizeHandler(),
      onTouchStart: t.getResizeHandler(),
      onClick: (D) => D.stopPropagation()
    }
  ) : null;
  return t.column.columnDef.columns ? /* @__PURE__ */ n(
    p.Td,
    {
      className: "py-baseGrid-header-cell py-baseGrid-header-group-cell",
      colSpan: t.colSpan,
      style: { width: s, position: "relative" },
      children: [
        /* @__PURE__ */ o("div", { className: m + " py-dataGrid-header-text-group", children: i }),
        u
      ]
    },
    t.id
  ) : /* @__PURE__ */ n(
    p.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      style: { width: s, position: "relative" },
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: m,
            onClick: () => {
              e || C();
            },
            children: [
              i,
              d === "asc" ? /* @__PURE__ */ o(z, { className: "py-baseGrid-header-sort-icon" }) : d === "desc" ? /* @__PURE__ */ o(v, { className: "py-baseGrid-header-sort-icon" }) : null
            ]
          }
        ),
        u
      ]
    },
    t.id
  );
};
export {
  j as default
};
