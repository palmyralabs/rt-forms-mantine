import { jsx as h } from "react/jsx-runtime";
import { NoopGridCustomizer as y, useServerQuery as R, generateColumns as k, EmptyChildTable as v } from "@palmyralabs/rt-forms";
import { useRef as z, useImperativeHandle as Q } from "react";
import w from "./BaseTable.js";
import { useLSQueryOptions as F } from "./useLSQueryOptions.js";
import { resolveGridPersistence as x } from "./gridPersistence.js";
function H(t) {
  const { columns: m, EmptyChild: c } = t, u = c || v, a = t.customizer || y, n = x(t), s = F({ lsKey: n.key, pageSize: t.pageSize, mode: n.mode }), g = n.enabled ? { ...t.initParams, ...s.getLSOptions() } : { ...t.initParams }, i = { ...t, initParams: g }, o = R(i), P = z(null), l = t.ref ?? P;
  Q(l, () => n.enabled ? { ...o, setQuickSearch: (e) => {
    s.setQuickSearch(e), o.setQuickSearch(e);
  }, setFilter: (e) => {
    s.setFilter(e), o.setFilter(e);
  }, gotoPage: (e) => {
    s.setPage(e), o.gotoPage(e);
  }, nextPage: () => {
    const e = o.nextPage();
    return e >= 0 && s.setPage(e), e;
  }, prevPage: () => {
    const e = o.prevPage();
    return e >= 0 ? s.setPage(e) : s.resetPage(), e;
  }, setPageSize: (e) => {
    s.setPageSize(e), o.setPageSize(e);
  }, setSortColumns: (e) => {
    s.setSortColumns(e), o.setSortColumns(e);
  } } : o, [o]);
  const C = (m || []).filter((r) => !r.hideColumn), S = k(C, a), f = t.onRowClick ? (r) => {
    t.onRowClick(r);
  } : () => {
  }, b = o.getCurrentData(), d = l.current?.setSortColumns || o.setSortColumns;
  return /* @__PURE__ */ h(
    w,
    {
      columnDefs: S,
      EmptyChild: u,
      customizer: a,
      showFooter: t.showFooter,
      rowData: b,
      onRowClick: f,
      onColumnSort: d,
      initParams: i.initParams,
      tableOptions: t.tableOptions,
      onTableReady: t.onTableReady,
      tableRef: t.tableRef
    }
  );
}
export {
  H as ApiDataTable
};
