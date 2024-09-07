import o, { useLayoutEffect as r, useEffect as i, useState as s } from "react";
function d() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
const f = typeof document < "u" ? r : i, c = o.useId || (() => {
});
function a() {
  const e = c();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function p(e) {
  const t = a(), [n, u] = s(t);
  return f(() => {
    u(d());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
export {
  f as a,
  d as r,
  p as u
};
