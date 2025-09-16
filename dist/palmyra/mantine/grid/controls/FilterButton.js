import { jsx as r } from "react/jsx-runtime";
import { useRef as e } from "react";
import { T as i } from "../../../../chunks/index2.js";
import "@mantine/core";
import { DropdownButton as m } from "../../widget/DropdownButton.js";
import { FilterForm as n } from "../plugins/filter/FilterForm.js";
const d = (t) => {
  const o = e(null);
  return /* @__PURE__ */ r(
    m,
    {
      title: "Filter",
      ref: o,
      PrefixAdornment: /* @__PURE__ */ r(i, {}),
      width: t.width || "650",
      children: /* @__PURE__ */ r(n, { ...t, onClose: () => o.current.close() })
    }
  );
};
export {
  d as FilterButton
};
