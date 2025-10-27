import { jsx as p } from "react/jsx-runtime";
import { NoopGridCustomizer as y, useServerQuery as k, generateColumns as z, EmptyChildTable as w } from "@palmyralabs/rt-forms";
import { forwardRef as Q, useRef as R, useImperativeHandle as v } from "react";
import F from "./BaseTable.js";
import { useLSQueryOptions as d } from "./useLSQueryOptions.js";
const G = Q(function(s, u) {
  const { columns: m, EmptyChild: l, lsKey: r } = s, g = l || w, n = s.customizer || y, o = d({ lsKey: r, pageSize: s.pageSize }), P = { ...s.initParams, ...o.getLSOptions() }, a = { ...s, initParams: P }, t = k(a), i = u || R(null);
  v(i, () => r ? { ...t, setQuickSearch: (e) => {
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
  const S = z(m, n), C = s.onRowClick ? (c) => {
    s.onRowClick(c);
  } : () => {
  }, f = t.getCurrentData(), h = i.current?.setSortColumns || t.setSortColumns;
  return /* @__PURE__ */ p(
    F,
    {
      columnDefs: S,
      EmptyChild: g,
      customizer: n,
      showFooter: s.showFooter,
      rowData: f,
      onRowClick: C,
      onColumnSort: h,
      initParams: a.initParams
    }
  );
});
export {
  G as ApiDataTable
};
