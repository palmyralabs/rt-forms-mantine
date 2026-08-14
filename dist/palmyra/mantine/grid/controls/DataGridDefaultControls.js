import { jsxs as s, Fragment as u, jsx as e } from "react/jsx-runtime";
import { QuickSearch as c } from "./QuickSearch.js";
import { FilterButton as m } from "./FilterButton.js";
import { NewButton as a } from "./ActionButton.js";
import { ExportDataButton as p } from "./ExportDataButton.js";
import { ColumnChooserButton as d } from "./ColumnChooserButton.js";
const q = (l) => {
  const { getPluginOptions: i, ...o } = l, t = i ? i() : {}, r = t.columnChooser || {}, n = r.visible !== !1 && Array.isArray(o.columns) && o.columns.length > 0;
  return /* @__PURE__ */ s(u, { children: [
    o.quickSearch && /* @__PURE__ */ e(
      c,
      {
        width: "200",
        queryRef: o.queryRef,
        columns: o.columns,
        ...t.quickSearch
      }
    ),
    /* @__PURE__ */ e(m, { ...o }),
    n && /* @__PURE__ */ e(
      d,
      {
        columns: o.columns,
        tableRef: o.tableRef,
        title: r.title,
        ungroupedLabel: r.ungroupedLabel,
        width: r.width
      }
    ),
    /* @__PURE__ */ e(a, { label: "Add", topic: o.topic, ...t.add }),
    /* @__PURE__ */ e(
      p,
      {
        exportOption: { csv: "CSV" },
        visible: t.export?.visible,
        disabled: t.export?.disabled,
        queryRef: o.queryRef,
        ...t.export
      }
    )
  ] });
};
export {
  q as DataGridDefaultControls
};
