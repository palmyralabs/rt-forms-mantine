import { jsx as n, Fragment as u } from "react/jsx-runtime";
import { topic as t } from "@palmyralabs/ts-utils";
import { useRef as l, useEffect as m } from "react";
import { GridX as b } from "./GridX.js";
function g(e) {
  const i = e.topic, c = l(null), r = e.ref ?? c;
  return m(() => {
    if (e.topic) {
      const f = t.subscribe(i + "/refresh", () => {
        r.current && r.current.refresh();
      }), o = t.subscribe(i + "/filter", (a, s) => {
        r.current && r.current.setFilter(s);
      });
      return () => {
        t.unsubscribe(f), t.unsubscribe(o);
      };
    }
  }, [i]), /* @__PURE__ */ n(u, { children: /* @__PURE__ */ n(b, { ...e, ref: r }) });
}
export {
  g as PalmyraGrid
};
