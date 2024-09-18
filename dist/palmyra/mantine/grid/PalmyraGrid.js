import { jsx as i, Fragment as a } from "react/jsx-runtime";
import { forwardRef as u, useRef as l, useEffect as p } from "react";
import { GridX as d } from "./GridX.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as e } from "../../../chunks/topic.js";
import { StoreFactoryContext as b } from "@palmyralabs/rt-forms";
import { PalmyraStoreFactory as y } from "@palmyralabs/palmyra-wire";
const S = u(function(t, c) {
  const o = t.topic, r = c || l(), n = new y({ baseUrl: "/api/palmyra/" });
  return p(() => {
    if (t.topic) {
      const f = e.subscribe(o + "/refresh", () => {
        r.current && r.current.refresh();
      }), s = e.subscribe(o + "/filter", (F, m) => {
        r.current && r.current.setFilter(m);
      });
      return () => {
        e.unsubscribe(f), e.unsubscribe(s);
      };
    }
  }, [o]), /* @__PURE__ */ i(a, { children: /* @__PURE__ */ i(b.Provider, { value: n, children: /* @__PURE__ */ i(d, { ...t, ref: r }) }) });
});
export {
  S as PalmyraGrid
};
