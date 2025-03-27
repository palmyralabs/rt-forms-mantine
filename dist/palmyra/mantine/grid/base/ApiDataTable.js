import { jsx as y } from "react/jsx-runtime";
import { forwardRef as k, useRef as z, useImperativeHandle as Q } from "react";
import { NoopGridCustomizer as R, useServerQuery as v, generateColumns as d, EmptyChildTable as w } from "@palmyralabs/rt-forms";
import x from "./BaseTable.js";
import { useLSQueryOptions as D } from "./useLSQueryOptions.js";
const H = k(function(s, u) {
  var c;
  const { columns: l, EmptyChild: g, lsKey: r } = s, P = g || w, n = s.customizer || R, o = D({ lsKey: r, pageSize: s.pageSize }), S = { ...s.initParams, ...o.getLSOptions() }, a = { ...s, initParams: S }, t = v(a), i = u || z();
  Q(i, () => r ? { ...t, setQuickSearch: (e) => {
    o.setQuickSearch(e), t.setQuickSearch(e);
  }, setFilter: (e) => {
    o.setFilter(e), t.setFilter(e);
  }, gotoPage: (e) => {
    o.setPage(e), t.gotoPage(e);
  }, nextPage: () => {
    const e = t.nextPage();
    return e >= 0 && o.setPage(e), e;
  }, prevPage: () => {
    const e = t.prevPage();
    return e >= 0 ? o.setPage(e) : o.resetPage(), e;
  }, setPageSize: (e) => {
    o.setPageSize(e), t.setPageSize(e);
  }, setSortColumns: (e) => {
    o.setSortColumns(e), t.setSortColumns(e);
  } } : t, [t]);
  const C = d(l, n), f = s.onRowClick ? (m) => {
    s.onRowClick(m);
  } : () => {
  }, p = t.getCurrentData(), h = ((c = i.current) == null ? void 0 : c.setSortColumns) || t.setSortColumns;
  return /* @__PURE__ */ y(
    x,
    {
      columnDefs: C,
      EmptyChild: P,
      customizer: n,
      rowData: p,
      onRowClick: f,
      onColumnSort: h,
      initParams: a.initParams
    }
  );
});
export {
  H as ApiDataTable
};
