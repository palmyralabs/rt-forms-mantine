import { jsx as t, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { useRef as l, useMemo as s } from "react";
import { T as D } from "../../../chunks/index2.js";
import { DropdownButton as b } from "../widget/DropdownButton.js";
import { ApiDataTable as O } from "./base/ApiDataTable.js";
import { FilterForm as C } from "./plugins/filter/FilterForm.js";
import { SelectablePagination as R } from "./plugins/pagination/SelectablePagination.js";
import { buildFetchFailureStoreOptions as v } from "./util/buildFetchFailureHook.js";
import { useGridFilter as G } from "./base/useGridFilter.js";
import { renderTitle as N } from "../widget/InfoTooltip.js";
import '../../../assets/GridX.css';function X(e) {
  const g = l(null), i = e.ref ?? g;
  G(i, e.filter);
  const r = l(null), c = l(null), f = e.topic || s(() => "id" + Math.random(), []), h = (a, y) => {
    if (r.current && r.current.refresh)
      try {
        r.current.refresh();
      } catch (o) {
        console.error(o);
      }
    if (e.onDataChange)
      try {
        e.onDataChange(a, y);
      } catch (o) {
        console.error(o);
      }
  }, u = e.pagination?.ignoreSinglePage, n = {
    ...e.DataGridControlProps,
    queryRef: i,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    quickSearch: e.quickSearch,
    topic: f,
    ignoreSinglePage: u
  };
  n.tableRef = c;
  const F = e.DataGridControls || ((a) => /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(b, { title: "Filter", PrefixAdornment: /* @__PURE__ */ t(D, {}), children: /* @__PURE__ */ t(C, { ...a }) }) })), P = e.DataGridPagination || R, S = s(
    () => v(e.onFetchFailure, e.storeOptions),
    [e.onFetchFailure, e.storeOptions]
  );
  return /* @__PURE__ */ m(d, { children: [
    /* @__PURE__ */ m("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ t("div", { className: "py-datagrid-title", children: N(e.title) }) }),
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ t(F, { ...n }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "py-data-grid-table", children: /* @__PURE__ */ t(O, { ...e, storeOptions: S, onDataChange: h, ref: i, tableRef: c }) }),
    /* @__PURE__ */ t(P, { ...n, ref: r })
  ] });
}
export {
  X as GridX
};
