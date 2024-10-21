import { jsxs as u, Fragment as m, jsx as c } from "react/jsx-runtime";
import { useState as S } from "react";
import { TextInput as d, rem as a } from "@mantine/core";
import { I as p } from "../../../../chunks/index.js";
const Q = (s) => {
  const { width: f, queryRef: e, ...r } = s, [i, o] = S(""), n = r.visible != !1, h = (l) => {
    const t = l.target.value;
    o(t), e != null && e.current && (t && t.length > 0 ? e.current.setQuickSearch(t) : e.current.setQuickSearch(null));
  };
  return /* @__PURE__ */ u(m, { children: [
    " ",
    n && /* @__PURE__ */ c(
      d,
      {
        value: i,
        rightSection: /* @__PURE__ */ c(p, { style: { width: a(18), height: a(18) } }),
        onChange: h,
        className: "py-dataGrid-search-field",
        placeholder: "Quick Search",
        ...r
      }
    )
  ] });
};
export {
  Q as QuickSearch
};
