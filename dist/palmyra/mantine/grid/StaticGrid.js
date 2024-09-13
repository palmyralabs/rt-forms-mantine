import { jsx as a } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { NoopGridCustomizer as s, generateColumns as d, EmptyChildTable as u } from "@palmyralabs/rt-forms";
import f from "./base/BaseTable.js";
const S = C(function(o, h) {
  const { columns: n, EmptyChild: i } = o, r = i || u, t = o.customizer || s, m = d(n, t), c = o.onRowClick ? (l) => {
    o.onRowClick(l);
  } : () => {
  }, e = o.rowData;
  return /* @__PURE__ */ a(
    f,
    {
      columnDefs: m,
      EmptyChild: r,
      customizer: t,
      rowData: e,
      onRowClick: c,
      onColumnSort: o.setSortColumns
    }
  );
});
export {
  S as StaticGrid
};
