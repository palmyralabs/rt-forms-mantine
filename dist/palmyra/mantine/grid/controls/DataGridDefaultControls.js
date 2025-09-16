import { jsxs as n, Fragment as p, jsx as r } from "react/jsx-runtime";
import { QuickSearch as s } from "./QuickSearch.js";
import { FilterButton as u } from "./FilterButton.js";
import { NewButton as c } from "./ActionButton.js";
import { ExportDataButton as l } from "./ExportDataButton.js";
const q = (i) => {
  const { getPluginOptions: e, ...t } = i, o = e ? e() : {};
  return /* @__PURE__ */ n(p, { children: [
    t.quickSearch && /* @__PURE__ */ r(
      s,
      {
        width: "200",
        queryRef: t.queryRef,
        columns: t.columns,
        ...o.quickSearch
      }
    ),
    /* @__PURE__ */ r(u, { ...t }),
    /* @__PURE__ */ r(c, { label: "Add", topic: t.topic, ...o.add }),
    /* @__PURE__ */ r(
      l,
      {
        exportOption: { csv: "CSV" },
        visible: o.export?.visible,
        disabled: o.export?.disabled,
        queryRef: t.queryRef,
        ...o.export
      }
    )
  ] });
};
export {
  q as DataGridDefaultControls
};
