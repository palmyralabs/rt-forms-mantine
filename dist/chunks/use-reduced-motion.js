import { useState as o, useRef as a, useEffect as i } from "react";
function s(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function f(e, t) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function m(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [c, u] = o(
    n ? t : f(e)
  ), r = a();
  return i(() => {
    if ("matchMedia" in window)
      return r.current = window.matchMedia(e), u(r.current.matches), s(r.current, (d) => u(d.matches));
  }, [e]), c;
}
function w(e, t) {
  const n = a(!1);
  i(
    () => () => {
      n.current = !1;
    },
    []
  ), i(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function M(e, t) {
  return m("(prefers-reduced-motion: reduce)", e, t);
}
export {
  M as a,
  w as u
};
