import { jsx as t, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { useRef as o, useMemo as s } from "react";
import { T as D } from "../../../chunks/index2.js";
import { renderTitle as b } from "../widget/InfoTooltip.js";
import { DropdownButton as O } from "../widget/DropdownButton.js";
import { ApiDataTable as C } from "./base/ApiDataTable.js";
import { FilterForm as R } from "./plugins/filter/FilterForm.js";
import { SelectablePagination as v } from "./plugins/pagination/SelectablePagination.js";
import { buildFetchFailureStoreOptions as N } from "./util/buildFetchFailureHook.js";
import '../../../assets/GridX.css';function w(e) {
  const g = o(null), l = e.ref ?? g, r = o(null), c = o(null), h = e.topic || s(() => "id" + Math.random(), []), f = (n, y) => {
    if (r.current && r.current.refresh)
      try {
        r.current.refresh();
      } catch (a) {
        console.error(a);
      }
    if (e.onDataChange)
      try {
        e.onDataChange(n, y);
      } catch (a) {
        console.error(a);
      }
  }, u = e.pagination?.ignoreSinglePage, i = {
    ...e.DataGridControlProps,
    queryRef: l,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    quickSearch: e.quickSearch,
    topic: h,
    ignoreSinglePage: u
  };
  i.tableRef = c;
  const F = e.DataGridControls || ((n) => /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(O, { title: "Filter", PrefixAdornment: /* @__PURE__ */ t(D, {}), children: /* @__PURE__ */ t(R, { ...n }) }) })), P = e.DataGridPagination || v, S = s(
    () => N(e.onFetchFailure, e.storeOptions),
    [e.onFetchFailure, e.storeOptions]
  );
  return /* @__PURE__ */ m(d, { children: [
    /* @__PURE__ */ m("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ t("div", { className: "py-datagrid-title", children: b(e.title) }) }),
      /* @__PURE__ */ t("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ t(F, { ...i }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "py-data-grid-table", children: /* @__PURE__ */ t(C, { ...e, storeOptions: S, onDataChange: f, ref: l, tableRef: c }) }),
    /* @__PURE__ */ t(P, { ...i, ref: r })
  ] });
}
export {
  w as GridX
};
