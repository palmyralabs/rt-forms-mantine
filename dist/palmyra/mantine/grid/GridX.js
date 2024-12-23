import { jsx as r, Fragment as l, jsxs as g } from "react/jsx-runtime";
import { forwardRef as D, useRef as m, useMemo as S } from "react";
import { DropdownButton as C } from "../widget/DropdownButton.js";
import { T as v } from "../../../chunks/index2.js";
import { FilterForm as F } from "./plugins/filter/FilterForm.js";
import { SelectablePagination as G } from "./plugins/pagination/SelectablePagination.js";
import { renderTitle as N } from "../widget/InfoTooltip.js";
import { ApiDataTable as b } from "./base/ApiDataTable.js";
import '../../../assets/GridX.css';const z = D(function(e, n) {
  var d;
  const o = n || m(), t = n || m(), s = e.topic || S(() => "id" + Math.random(), []), h = (i, y) => {
    if (t.current)
      try {
        t.current.refresh();
      } catch (a) {
        console.error(a);
      }
    if (e.onDataChange)
      try {
        e.onDataChange(i, y);
      } catch (a) {
        console.error(a);
      }
  }, f = (d = e.pagination) == null ? void 0 : d.ignoreSinglePage, c = {
    ...e.DataGridControlProps,
    queryRef: o,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    quickSearch: e.quickSearch,
    topic: s,
    ignoreSinglePage: f
  }, u = e.DataGridControls || ((i) => /* @__PURE__ */ r(l, { children: /* @__PURE__ */ r(C, { title: "Filter", PrefixAdornment: /* @__PURE__ */ r(v, {}), children: /* @__PURE__ */ r(F, { ...i }) }) })), P = e.DataGridPagination || G;
  return /* @__PURE__ */ g(l, { children: [
    /* @__PURE__ */ g("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ r("div", { className: "py-datagrid-title", children: N(e.title) }) }),
      /* @__PURE__ */ r("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ r(u, { ...c }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "py-data-grid-table", children: /* @__PURE__ */ r(b, { ...e, onDataChange: h, ref: o }) }),
    /* @__PURE__ */ r(P, { ...c, ref: t })
  ] });
});
export {
  z as GridX
};
