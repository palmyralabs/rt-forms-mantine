import { jsx as o, jsxs as G, Fragment as K } from "react/jsx-runtime";
import { useEffect as Q } from "react";
import { G as A } from "./iconBase.js";
import '../assets/ColumnHeader.css';/* empty css             */
import { useSortColumn as X } from "@palmyralabs/rt-forms";
import { f as w, u as N, B as k, d as L, g as O, r as x, l as _ } from "./factory.js";
import { g as S } from "./get-theme-color.js";
import { c as Y } from "./create-safe-context.js";
import { S as Z } from "./ScrollArea.js";
const [ee, te] = Y(
  "Table component was not found in the tree"
);
var v = { table: "m_b23fa0ef", th: "m_4e7aa4f3", tr: "m_4e7aa4fd", td: "m_4e7aa4ef", tbody: "m_b2404537", thead: "m_b242d975", caption: "m_9e5a3ac7", scrollContainer: "m_a100c15", scrollContainerInner: "m_62259741" };
function re(e, r) {
  if (!r)
    return;
  const t = {};
  return r.columnBorder && e.withColumnBorders && (t["data-with-column-border"] = !0), r.rowBorder && e.withRowBorders && (t["data-with-row-border"] = !0), r.striped && e.striped && (t["data-striped"] = e.striped), r.highlightOnHover && e.highlightOnHover && (t["data-hover"] = !0), r.captionSide && e.captionSide && (t["data-side"] = e.captionSide), r.stickyHeader && e.stickyHeader && (t["data-sticky"] = !0), t;
}
function h(e, r) {
  const t = `Table${e.charAt(0).toUpperCase()}${e.slice(1)}`, a = w((l, s) => {
    const i = N(t, {}, l), { classNames: c, className: m, style: u, styles: b, ...d } = i, p = te();
    return /* @__PURE__ */ o(
      k,
      {
        component: e,
        ref: s,
        ...re(p, r),
        ...p.getStyles(e, { className: m, classNames: c, style: u, styles: b, props: i }),
        ...d
      }
    );
  });
  return a.displayName = `@mantine/core/${t}`, a.classes = v, a;
}
const C = h("th", { columnBorder: !0 }), $ = h("td", { columnBorder: !0 }), g = h("tr", {
  rowBorder: !0,
  striped: !0,
  highlightOnHover: !0
}), j = h("thead", { stickyHeader: !0 }), M = h("tbody"), P = h("tfoot"), I = h("caption", { captionSide: !0 });
function B({ data: e }) {
  return /* @__PURE__ */ G(K, { children: [
    e.caption && /* @__PURE__ */ o(I, { children: e.caption }),
    e.head && /* @__PURE__ */ o(j, { children: /* @__PURE__ */ o(g, { children: e.head.map((r, t) => /* @__PURE__ */ o(C, { children: r }, t)) }) }),
    e.body && /* @__PURE__ */ o(M, { children: e.body.map((r, t) => /* @__PURE__ */ o(g, { children: r.map((a, l) => /* @__PURE__ */ o($, { children: a }, l)) }, t)) }),
    e.foot && /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o(g, { children: e.foot.map((r, t) => /* @__PURE__ */ o(C, { children: r }, t)) }) })
  ] });
}
B.displayName = "@mantine/core/TableDataRenderer";
const oe = {
  type: "scrollarea"
}, ae = O((e, { minWidth: r, type: t }) => ({
  scrollContainer: {
    "--table-min-width": x(r),
    "--table-overflow": t === "native" ? "auto" : void 0
  }
})), D = w((e, r) => {
  const t = N("TableScrollContainer", oe, e), {
    classNames: a,
    className: l,
    style: s,
    styles: i,
    unstyled: c,
    vars: m,
    children: u,
    minWidth: b,
    type: d,
    ...p
  } = t, f = L({
    name: "TableScrollContainer",
    classes: v,
    props: t,
    className: l,
    style: s,
    classNames: a,
    styles: i,
    unstyled: c,
    vars: m,
    varsResolver: ae,
    rootSelector: "scrollContainer"
  });
  return /* @__PURE__ */ o(
    k,
    {
      component: d === "scrollarea" ? Z : "div",
      ...d === "scrollarea" ? { offsetScrollbars: "x" } : {},
      ref: r,
      ...f("scrollContainer"),
      ...p,
      children: /* @__PURE__ */ o("div", { ...f("scrollContainerInner"), children: u })
    }
  );
});
D.classes = v;
D.displayName = "@mantine/core/TableScrollContainer";
const ne = {
  withRowBorders: !0,
  verticalSpacing: 7
}, le = O(
  (e, {
    layout: r,
    captionSide: t,
    horizontalSpacing: a,
    verticalSpacing: l,
    borderColor: s,
    stripedColor: i,
    highlightOnHoverColor: c,
    striped: m,
    highlightOnHover: u,
    stickyHeaderOffset: b,
    stickyHeader: d
  }) => ({
    table: {
      "--table-layout": r,
      "--table-caption-side": t,
      "--table-horizontal-spacing": _(a),
      "--table-vertical-spacing": _(l),
      "--table-border-color": s ? S(s, e) : void 0,
      "--table-striped-color": m && i ? S(i, e) : void 0,
      "--table-highlight-on-hover-color": u && c ? S(c, e) : void 0,
      "--table-sticky-header-offset": d ? x(b) : void 0
    }
  })
), n = w((e, r) => {
  const t = N("Table", ne, e), {
    classNames: a,
    className: l,
    style: s,
    styles: i,
    unstyled: c,
    vars: m,
    horizontalSpacing: u,
    verticalSpacing: b,
    captionSide: d,
    stripedColor: p,
    highlightOnHoverColor: f,
    striped: y,
    highlightOnHover: T,
    withColumnBorders: U,
    withRowBorders: V,
    withTableBorder: W,
    borderColor: ce,
    layout: de,
    variant: z,
    data: H,
    children: E,
    stickyHeader: F,
    stickyHeaderOffset: me,
    mod: q,
    ...J
  } = t, R = L({
    name: "Table",
    props: t,
    className: l,
    style: s,
    classes: v,
    classNames: a,
    styles: i,
    unstyled: c,
    rootSelector: "table",
    vars: m,
    varsResolver: le
  });
  return /* @__PURE__ */ o(
    ee,
    {
      value: {
        getStyles: R,
        stickyHeader: F,
        striped: y === !0 ? "odd" : y || void 0,
        highlightOnHover: T,
        withColumnBorders: U,
        withRowBorders: V,
        captionSide: d || "bottom"
      },
      children: /* @__PURE__ */ o(
        k,
        {
          component: "table",
          variant: z,
          ref: r,
          mod: [{ "data-with-table-border": W }, q],
          ...R("table"),
          ...J,
          children: E || !!H && /* @__PURE__ */ o(B, { data: H })
        }
      )
    }
  );
});
n.classes = v;
n.displayName = "@mantine/core/Table";
n.Td = $;
n.Th = C;
n.Tr = g;
n.Thead = j;
n.Tbody = M;
n.Tfoot = P;
n.Caption = I;
n.ScrollContainer = D;
n.DataRenderer = B;
function se(e) {
  return A({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(e);
}
function ie(e) {
  return A({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(e);
}
const Se = ({ header: e, children: r, onSortChange: t }) => {
  var p, f, y, T;
  const a = ((p = e.column.columnDef.meta) == null ? void 0 : p.attribute) || e.id, l = !e.column.columnDef.enableSorting, s = ((y = (f = e.column.columnDef.meta) == null ? void 0 : f.columnDef) == null ? void 0 : y.width) || "auto", { sortColumn: i, order: c, sortOrder: m } = X({ sortDisabled: l, onSortChange: t });
  Q(() => {
    t(a, c);
  }, [c]);
  const u = e.column.columnDef.meta, d = "py-dataGrid-header-text" + (((T = u == null ? void 0 : u.columnDef) == null ? void 0 : T.type) === "number" ? " py-dataGrid-header-text-type-number" : "");
  return e.column.columnDef.columns ? /* @__PURE__ */ o(n.Td, { className: "py-baseGrid-header-cell", colSpan: e.colSpan, children: /* @__PURE__ */ o("div", { className: d, style: { width: s }, children: r }) }, e.id) : /* @__PURE__ */ o(
    n.Td,
    {
      colSpan: e.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ G(
        "div",
        {
          className: d,
          style: { width: s },
          onClick: () => i(),
          children: [
            r,
            m === "asc" ? /* @__PURE__ */ o(ie, { className: "py-baseGrid-header-sort-icon" }) : m === "desc" ? /* @__PURE__ */ o(se, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    e.id
  );
};
export {
  Se as C,
  n as T
};
