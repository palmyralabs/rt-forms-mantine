import { jsx as r } from "react/jsx-runtime";
import { NoopGridCustomizer as s, generateColumns as u, EmptyChildTable as d } from "@palmyralabs/rt-forms";
import b from "./base/BaseTable.js";
function y(o) {
  const { columns: i, EmptyChild: e } = o, l = e || d, n = o.customizer || s, m = (i || []).filter((t) => !t.hideColumn), a = u(m, n), c = o.onRowClick ? (t) => {
    o.onRowClick(t);
  } : () => {
  }, C = o.rowData;
  return /* @__PURE__ */ r(
    b,
    {
      columnDefs: a,
      EmptyChild: l,
      customizer: n,
      rowData: C,
      onRowClick: c,
      onColumnSort: o.setSortColumns,
      tableOptions: o.tableOptions,
      onTableReady: o.onTableReady
    }
  );
}
export {
  y as StaticGrid
};
