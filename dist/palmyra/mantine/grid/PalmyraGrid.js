import { jsx as i, Fragment as m } from "react/jsx-runtime";
import { forwardRef as u, useRef as l, useEffect as d } from "react";
import { GridX as p } from "./GridX.js";
import { topic as e } from "@palmyralabs/ts-utils";
import { StoreFactoryContext as b } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory as y } from "@palmyralabs/palmyra-wire";
const w = u(function(t, c) {
  const o = t.topic, r = c || l(), n = new y({ baseUrl: "/api/palmyra/" });
  return d(() => {
    if (t.topic) {
      const f = e.subscribe(o + "/refresh", () => {
        r.current && r.current.refresh();
      }), s = e.subscribe(o + "/filter", (F, a) => {
        r.current && r.current.setFilter(a);
      });
      return () => {
        e.unsubscribe(f), e.unsubscribe(s);
      };
    }
  }, [o]), /* @__PURE__ */ i(m, { children: /* @__PURE__ */ i(b.Provider, { value: n, children: /* @__PURE__ */ i(p, { ...t, ref: r }) }) });
});
export {
  w as PalmyraGrid
};
