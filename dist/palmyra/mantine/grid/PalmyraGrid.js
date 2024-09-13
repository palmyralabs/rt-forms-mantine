import { jsx as o, Fragment as u } from "react/jsx-runtime";
import { forwardRef as m, useRef as a, useEffect as b } from "react";
import { GridX as d } from "./GridX.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as e } from "../../../chunks/topic.js";
const F = m(function(t, c) {
  const i = t.topic, r = c || a();
  return b(() => {
    if (t.topic) {
      const f = e.subscribe(i + "/refresh", () => {
        r.current && r.current.refresh();
      }), n = e.subscribe(i + "/filter", (p, s) => {
        r.current && r.current.setFilter(s);
      });
      return () => {
        e.unsubscribe(f), e.unsubscribe(n);
      };
    }
  }, [i]), /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(d, { ...t, ref: r }) });
});
export {
  F as PalmyraGrid
};
