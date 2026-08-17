import { useRef as u, useEffect as c } from "react";
const o = (e, t) => {
  const r = u(!0);
  c(() => {
    if (r.current) {
      r.current = !1;
      return;
    }
    return e();
  }, t);
}, a = (e, t, r) => {
  const s = u(!0);
  let n = "";
  try {
    n = JSON.stringify(t);
  } catch {
    n = String(t);
  }
  c(() => {
    s.current && (s.current = !1, !r?.applyOnMount) || e?.current?.setFilter?.(t);
  }, [n]);
};
export {
  a as useGridFilter,
  o as useUpdateEffect
};
