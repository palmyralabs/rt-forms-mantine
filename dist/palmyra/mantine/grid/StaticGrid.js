import { jsx as a } from "react/jsx-runtime";
import { NoopGridCustomizer as C, generateColumns as s, EmptyChildTable as d } from "@palmyralabs/rt-forms";
import { forwardRef as u } from "react";
import f from "./base/BaseTable.js";
const S = u(function(o, h) {
  const { columns: n, EmptyChild: i } = o, r = i || d, t = o.customizer || C, m = s(n, t), c = o.onRowClick ? (l) => {
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
