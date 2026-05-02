import { jsx as r, Fragment as c, jsxs as l } from "react/jsx-runtime";
import { useRef as d, useMemo as y } from "react";
import { T as D } from "../../../chunks/index2.js";
import { renderTitle as S } from "../widget/InfoTooltip.js";
import { DropdownButton as C } from "../widget/DropdownButton.js";
import { ApiDataTable as v } from "./base/ApiDataTable.js";
import { FilterForm as F } from "./plugins/filter/FilterForm.js";
import { SelectablePagination as N } from "./plugins/pagination/SelectablePagination.js";
import '../../../assets/GridX.css';function k(e) {
  const g = d(null), a = e.ref ?? g, t = d(null), m = e.topic || y(() => "id" + Math.random(), []), s = (i, P) => {
    if (t.current && t.current.refresh)
      try {
        t.current.refresh();
      } catch (n) {
        console.error(n);
      }
    if (e.onDataChange)
      try {
        e.onDataChange(i, P);
      } catch (n) {
        console.error(n);
      }
  }, h = e.pagination?.ignoreSinglePage, o = {
    ...e.DataGridControlProps,
    queryRef: a,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    quickSearch: e.quickSearch,
    topic: m,
    ignoreSinglePage: h
  }, f = e.DataGridControls || ((i) => /* @__PURE__ */ r(c, { children: /* @__PURE__ */ r(C, { title: "Filter", PrefixAdornment: /* @__PURE__ */ r(D, {}), children: /* @__PURE__ */ r(F, { ...i }) }) })), u = e.DataGridPagination || N;
  return /* @__PURE__ */ l(c, { children: [
    /* @__PURE__ */ l("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ r("div", { className: "py-datagrid-title", children: S(e.title) }) }),
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ r(f, { ...o }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "py-data-grid-table", children: /* @__PURE__ */ r(v, { ...e, onDataChange: s, ref: a }) }),
    /* @__PURE__ */ r(u, { ...o, ref: t })
  ] });
}
export {
  k as GridX
};
