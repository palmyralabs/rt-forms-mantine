import { useState as i } from "react";
import { getPersistedGridFilter as n, stripWildcards as c } from "./gridPersistence.js";
const d = (r) => {
  const s = {};
  return Object.keys(r || {}).forEach((e) => {
    const t = r[e];
    s[e] = typeof t == "string" ? c(t) : t;
  }), s;
}, u = (r, s = d, e) => {
  const [t] = i(() => {
    const o = n(r, e);
    return { filter: o, formData: s(o) };
  });
  return t;
};
export {
  u as useGridPersistedFilter
};
