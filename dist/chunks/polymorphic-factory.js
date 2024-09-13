import { jsx as m } from "react/jsx-runtime";
import { forwardRef as r } from "react";
import { i as d } from "./factory.js";
function x(e) {
  const t = r(e);
  return t.withProps = (n) => {
    const o = r((i, p) => /* @__PURE__ */ m(t, { ...n, ...i, ref: p }));
    return o.extend = t.extend, o.displayName = `WithProps(${t.displayName})`, o;
  }, t.extend = d, t;
}
export {
  x as p
};
