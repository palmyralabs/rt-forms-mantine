import { jsxs as u, Fragment as m, jsx as a } from "react/jsx-runtime";
import { useState as d } from "react";
import { TextInput as g, rem as i } from "@mantine/core";
import { G as p } from "../../../../chunks/iconBase.js";
function S(r) {
  return p({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" }, child: [] }] })(r);
}
const T = (r) => {
  const { width: f, queryRef: e, ...c } = r, [n, s] = d(""), o = c.visible != !1, h = (l) => {
    const t = l.target.value;
    s(t), e != null && e.current && (t && t.length > 0 ? e.current.setQuickSearch(t) : e.current.setQuickSearch(null));
  };
  return /* @__PURE__ */ u(m, { children: [
    " ",
    o && /* @__PURE__ */ a(
      g,
      {
        value: n,
        rightSection: /* @__PURE__ */ a(S, { style: { width: i(18), height: i(18) } }),
        onChange: h,
        className: "py-dataGrid-search-field",
        placeholder: "Quick Search",
        ...c
      }
    )
  ] });
};
export {
  T as QuickSearch
};
