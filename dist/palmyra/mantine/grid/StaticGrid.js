import { jsx as a } from "react/jsx-runtime";
import { NoopGridCustomizer as C, generateColumns as s, EmptyChildTable as u } from "@palmyralabs/rt-forms";
import d from "./base/BaseTable.js";
function k(o) {
  const { columns: n, EmptyChild: i } = o, m = i || u, t = o.customizer || C, c = s(n, t), l = o.onRowClick ? (r) => {
    o.onRowClick(r);
  } : () => {
  }, e = o.rowData;
  return /* @__PURE__ */ a(
    d,
    {
      columnDefs: c,
      EmptyChild: m,
      customizer: t,
      rowData: e,
      onRowClick: l,
      onColumnSort: o.setSortColumns
    }
  );
}
export {
  k as StaticGrid
};
