import { jsx as y } from "react/jsx-runtime";
import { forwardRef as k, useRef as Q, useImperativeHandle as R } from "react";
import { NoopGridCustomizer as v, useServerQuery as z, generateColumns as d, EmptyChildTable as w } from "@palmyralabs/rt-forms";
import x from "./BaseTable.js";
import { useLSQueryOptions as D } from "./useLSQueryOptions.js";
const G = k(function(s, m) {
  var i;
  const { columns: u, EmptyChild: l } = s, g = "hello", P = l || w, r = s.customizer || v, o = D({ lsKey: g }), C = { ...s.initParams, ...o.getLSOptions() }, n = { ...s, initParams: C }, t = z(n), a = m || Q();
  R(a, () => ({ ...t, setQuickSearch: (e) => {
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
  } }), [t]);
  const S = d(u, r), f = s.onRowClick ? (c) => {
    s.onRowClick(c);
  } : () => {
  }, p = t.getCurrentData(), h = ((i = a.current) == null ? void 0 : i.setSortColumns) || t.setSortColumns;
  return /* @__PURE__ */ y(
    x,
    {
      columnDefs: S,
      EmptyChild: P,
      customizer: r,
      rowData: p,
      onRowClick: f,
      onColumnSort: h,
      initParams: n.initParams
    }
  );
});
export {
  G as ApiDataTable
};
