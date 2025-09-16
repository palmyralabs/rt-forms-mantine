import { jsx as h } from "react/jsx-runtime";
import { NoopGridCustomizer as y, useServerQuery as k, generateColumns as z, EmptyChildTable as Q } from "@palmyralabs/rt-forms";
import { forwardRef as R, useRef as v, useImperativeHandle as d } from "react";
import w from "./BaseTable.js";
import { useLSQueryOptions as x } from "./useLSQueryOptions.js";
const G = R(function(s, u) {
  const { columns: m, EmptyChild: l, lsKey: r } = s, g = l || Q, n = s.customizer || y, o = x({ lsKey: r, pageSize: s.pageSize }), P = { ...s.initParams, ...o.getLSOptions() }, a = { ...s, initParams: P }, t = k(a), i = u || v(null);
  d(i, () => r ? { ...t, setQuickSearch: (e) => {
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
  }, f = t.getCurrentData(), p = i.current?.setSortColumns || t.setSortColumns;
  return /* @__PURE__ */ h(
    w,
    {
      columnDefs: S,
      EmptyChild: g,
      customizer: n,
      rowData: f,
      onRowClick: C,
      onColumnSort: p,
      initParams: a.initParams
    }
  );
});
export {
  G as ApiDataTable
};
