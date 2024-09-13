import { jsxs as s, Fragment as u, jsx as r } from "react/jsx-runtime";
import { QuickSearch as c } from "./QuickSearch.js";
import { FilterButton as l } from "./FilterButton.js";
import { NewButton as a } from "./ActionButton.js";
import { ExportDataButton as m } from "./ExportDataButton.js";
const h = (p) => {
  var i, n;
  const { getPluginOptions: e, ...t } = p, o = e ? e() : {};
  return /* @__PURE__ */ s(u, { children: [
    t.quickSearch && /* @__PURE__ */ r(
      c,
      {
        width: "200",
        queryRef: t.queryRef,
        columns: t.columns,
        ...o.quickSearch
      }
    ),
    /* @__PURE__ */ r(l, { ...t }),
    /* @__PURE__ */ r(a, { label: "Add", topic: t.topic, ...o.add }),
    /* @__PURE__ */ r(
      m,
      {
        exportOption: { csv: "CSV" },
        visible: (i = o.export) == null ? void 0 : i.visible,
        disabled: (n = o.export) == null ? void 0 : n.disabled,
        queryRef: t.queryRef,
        ...o.export
      }
    )
  ] });
};
export {
  h as DataGridDefaultControls
};
