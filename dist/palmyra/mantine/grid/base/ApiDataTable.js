import { jsx as y } from "react/jsx-runtime";
import { NoopGridCustomizer as k, useServerQuery as z, generateColumns as p, EmptyChildTable as Q } from "@palmyralabs/rt-forms";
import { useRef as R, useImperativeHandle as v } from "react";
import w from "./BaseTable.js";
import { useLSQueryOptions as F } from "./useLSQueryOptions.js";
function A(o) {
  const { columns: u, EmptyChild: m, lsKey: r } = o, l = m || Q, n = o.customizer || k, s = F({ lsKey: r, pageSize: o.pageSize }), g = { ...o.initParams, ...s.getLSOptions() }, a = { ...o, initParams: g }, t = z(a), P = R(null), i = o.ref ?? P;
  v(i, () => r ? { ...t, setQuickSearch: (e) => {
    s.setQuickSearch(e), t.setQuickSearch(e);
  }, setFilter: (e) => {
    s.setFilter(e), t.setFilter(e);
  }, gotoPage: (e) => {
    s.setPage(e), t.gotoPage(e);
  }, nextPage: () => {
    const e = t.nextPage();
    return e >= 0 && s.setPage(e), e;
  }, prevPage: () => {
    const e = t.prevPage();
    return e >= 0 ? s.setPage(e) : s.resetPage(), e;
  }, setPageSize: (e) => {
    s.setPageSize(e), t.setPageSize(e);
  }, setSortColumns: (e) => {
    s.setSortColumns(e), t.setSortColumns(e);
  } } : t, [t]);
  const S = p(u, n), C = o.onRowClick ? (c) => {
    o.onRowClick(c);
  } : () => {
  }, f = t.getCurrentData(), h = i.current?.setSortColumns || t.setSortColumns;
  return /* @__PURE__ */ y(
    w,
    {
      columnDefs: S,
      EmptyChild: l,
      customizer: n,
      showFooter: o.showFooter,
      rowData: f,
      onRowClick: C,
      onColumnSort: h,
      initParams: a.initParams
    }
  );
}
export {
  A as ApiDataTable
};
