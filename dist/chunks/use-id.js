import o, { useState as u } from "react";
import { u as i } from "./use-isomorphic-effect.js";
function s() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
const d = o.useId || (() => {
});
function a() {
  const t = d();
  return t ? `mantine-${t.replace(/:/g, "")}` : "";
}
function m(t) {
  const e = a(), [n, r] = u(e);
  return i(() => {
    r(s());
  }, []), typeof t == "string" ? t : typeof window > "u" ? e : n;
}
export {
  s as r,
  m as u
};
