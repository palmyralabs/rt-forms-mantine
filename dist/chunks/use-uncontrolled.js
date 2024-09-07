import { useState as n } from "react";
function f({
  value: r,
  defaultValue: o,
  finalValue: l,
  onChange: t = () => {
  }
}) {
  const [c, s] = n(
    o !== void 0 ? o : l
  ), u = (e, ...d) => {
    s(e), t == null || t(e, ...d);
  };
  return r !== void 0 ? [r, t, !0] : [c, u, !1];
}
export {
  f as u
};
