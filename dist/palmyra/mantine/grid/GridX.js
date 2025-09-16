import { jsx as r, Fragment as c, jsxs as l } from "react/jsx-runtime";
import { forwardRef as y, useRef as d, useMemo as D } from "react";
import { T as S } from "../../../chunks/index2.js";
import { renderTitle as C } from "../widget/InfoTooltip.js";
import { DropdownButton as v } from "../widget/DropdownButton.js";
import { ApiDataTable as F } from "./base/ApiDataTable.js";
import { FilterForm as G } from "./plugins/filter/FilterForm.js";
import { SelectablePagination as N } from "./plugins/pagination/SelectablePagination.js";
import '../../../assets/GridX.css';const w = y(function(e, g) {
  const n = g || d(null), t = d(null), m = e.topic || D(() => "id" + Math.random(), []), s = (i, P) => {
    if (t.current && t.current.refresh)
      try {
        t.current.refresh();
      } catch (a) {
        console.error(a);
      }
    if (e.onDataChange)
      try {
        e.onDataChange(i, P);
      } catch (a) {
        console.error(a);
      }
  }, h = e.pagination?.ignoreSinglePage, o = {
    ...e.DataGridControlProps,
    queryRef: n,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    quickSearch: e.quickSearch,
    topic: m,
    ignoreSinglePage: h
  }, f = e.DataGridControls || ((i) => /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(v, { title: "Filter", PrefixAdornment: /* @__PURE__ */ r(S, {}), children: /* @__PURE__ */ r(G, { ...i }) }) })), u = e.DataGridPagination || N;
  return /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ l("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ r("div", { className: "py-datagrid-title", children: C(e.title) }) }),
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ r(f, { ...o }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "py-data-grid-table", children: /* @__PURE__ */ r(F, { ...e, onDataChange: s, ref: n }) }),
    /* @__PURE__ */ r(u, { ...o, ref: t })
  ] });
});
export {
  w as GridX
};
