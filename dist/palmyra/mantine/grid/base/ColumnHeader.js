import { jsx as n, jsxs as a } from "react/jsx-runtime";
import { useEffect as k } from "react";
import { G as f } from "../../../../chunks/iconBase.js";
import '../../../../assets/ColumnHeader.css';/* empty css                              */
import { useSortColumn as z } from "@palmyralabs/rt-forms";
import { Table as h } from "@mantine/core";
function N(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(t);
}
function v(t) {
  return f({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(t);
}
const H = ({ header: t, children: l, sortMode: g, onSortChange: s, resizeEnabled: c }) => {
  const y = t.column.columnDef.meta?.attribute || t.id, i = t.column.columnDef.meta?.columnDef || {}, o = !!i.disableColumn, b = !!c && i.enableResizing === !0 && !o && (t.column.getCanResize ? t.column.getCanResize() : !0), w = !t.column.columnDef.enableSorting || o, e = c ? t.getSize() : i.width, C = e != null && e !== "" && e !== "auto", r = { width: e || "auto", position: "relative" };
  C && (r.minWidth = e);
  const { sortColumn: D, order: d, sortOrder: u } = z({ sortDisabled: w, onSortChange: s, initMode: g });
  k(() => {
    s(y, d);
  }, [d]);
  const m = "py-dataGrid-header-text" + (t.column.columnDef.meta?.columnDef?.type === "number" ? " py-dataGrid-header-text-type-number" : "") + (o ? " py-dataGrid-header-text-disabled" : ""), p = b ? /* @__PURE__ */ n(
    "div",
    {
      className: "py-grid-resizer" + (t.column.getIsResizing() ? " py-grid-resizer-active" : ""),
      onMouseDown: t.getResizeHandler(),
      onTouchStart: t.getResizeHandler(),
      onClick: (G) => G.stopPropagation()
    }
  ) : null;
  return t.column.columnDef.columns ? /* @__PURE__ */ a(
    h.Td,
    {
      className: "py-baseGrid-header-cell py-baseGrid-header-group-cell",
      colSpan: t.colSpan,
      style: r,
      children: [
        /* @__PURE__ */ n("div", { className: m + " py-dataGrid-header-text-group", children: l }),
        p
      ]
    },
    t.id
  ) : /* @__PURE__ */ a(
    h.Td,
    {
      colSpan: t.colSpan,
      className: "py-baseGrid-header-cell",
      style: r,
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: m,
            onClick: () => {
              o || D();
            },
            children: [
              l,
              u === "asc" ? /* @__PURE__ */ n(v, { className: "py-baseGrid-header-sort-icon" }) : u === "desc" ? /* @__PURE__ */ n(N, { className: "py-baseGrid-header-sort-icon" }) : null
            ]
          }
        ),
        p
      ]
    },
    t.id
  );
};
export {
  H as default
};
