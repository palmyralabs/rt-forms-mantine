import { jsxs as u, Fragment as m, jsx as c } from "react/jsx-runtime";
import { useState as f } from "react";
import { TextInput as S, rem as a } from "@mantine/core";
import { I as d } from "../../../../chunks/index.js";
const Q = (s) => {
  const { width: p, queryRef: t, ...r } = s, [i, o] = f(""), n = r.visible != !1, h = (l) => {
    const e = l.target.value;
    o(e), t?.current && (e && e.length > 0 ? t.current.setQuickSearch(e + "*") : t.current.setQuickSearch(null));
  };
  return /* @__PURE__ */ u(m, { children: [
    " ",
    n && /* @__PURE__ */ c(
      S,
      {
        value: i,
        rightSection: /* @__PURE__ */ c(d, { style: { width: a(18), height: a(18) } }),
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
