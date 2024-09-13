import { jsx as i, Fragment as n, jsxs as o } from "react/jsx-runtime";
import { forwardRef as s, useRef as g, useMemo as f } from "react";
import { DropdownButton as h } from "../widget/DropdownButton.js";
import { T as u } from "../../../chunks/index.js";
import { FilterForm as P } from "./plugins/filter/FilterForm.js";
import { DataGrid as p } from "./DataGrid.js";
import { SelectablePagination as y } from "./plugins/pagination/SelectablePagination.js";
import { renderTitle as G } from "../widget/InfoTooltip.js";
import '../../../assets/GridX.css';const O = s(function(t, d) {
  const e = d || g(), r = t.topic || f(() => "id" + Math.random(), []), a = {
    ...t.DataGridControlProps,
    queryRef: e,
    columns: t.columns,
    getPluginOptions: t.getPluginOptions,
    pageSize: t.pageSize,
    topic: r,
    quickSearch: t.quickSearch
  }, l = t.DataGridControls || ((m) => /* @__PURE__ */ i(n, { children: /* @__PURE__ */ i(h, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(u, {}), children: /* @__PURE__ */ i(P, { ...m }) }) })), c = t.DataGridPagination || y;
  return /* @__PURE__ */ o(n, { children: [
    /* @__PURE__ */ o("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: G(t.title) }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(l, { ...a }) })
    ] }),
    /* @__PURE__ */ i("div", { className: "py-data-grid-table", children: /* @__PURE__ */ i(p, { ...t, topic: r, ref: e }) }),
    /* @__PURE__ */ i(c, { ...a })
  ] });
});
export {
  O as GridX
};
