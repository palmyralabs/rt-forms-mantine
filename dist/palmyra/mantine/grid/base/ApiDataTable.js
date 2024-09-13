import { jsx as f } from "react/jsx-runtime";
import { forwardRef as d, useRef as R, useImperativeHandle as w } from "react";
import { NoopGridCustomizer as y, useServerQuery as h, generateColumns as p, EmptyChildTable as D } from "@palmyralabs/rt-forms";
import b from "./BaseTable.js";
const z = d(function(o, n) {
  const { columns: r, EmptyChild: m } = o, s = m || D, e = o.customizer || y, t = h(o), a = n || R();
  w(a, () => t, [t]);
  const i = p(r, e), c = o.onRowClick ? (C) => {
    o.onRowClick(C);
  } : () => {
  }, l = t.getCurrentData(), u = t.setSortColumns;
  return /* @__PURE__ */ f(
    b,
    {
      columnDefs: i,
      EmptyChild: s,
      customizer: e,
      rowData: l,
      onRowClick: c,
      onColumnSort: u
    }
  );
});
export {
  z as ApiDataTable
};
