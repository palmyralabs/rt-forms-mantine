import { jsx as r } from "react/jsx-runtime";
import { useRef as e } from "react";
import { T as i } from "../../../../chunks/index.js";
import { DropdownButton as m } from "../../widget/DropdownButton.js";
import { FilterForm as n } from "../plugins/filter/FilterForm.js";
const c = (t) => {
  const o = e();
  return /* @__PURE__ */ r(
    m,
    {
      title: "Filter",
      ref: o,
      PrefixAdornment: /* @__PURE__ */ r(i, {}),
      children: /* @__PURE__ */ r(n, { ...t, onClose: () => o.current.close() })
    }
  );
};
export {
  c as FilterButton
};
