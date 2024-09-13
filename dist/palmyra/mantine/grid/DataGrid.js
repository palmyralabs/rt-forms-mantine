import { jsx as a, Fragment as c } from "react/jsx-runtime";
import { forwardRef as f, useRef as m } from "react";
import { ApiDataTable as h } from "./base/ApiDataTable.js";
import "../../../chunks/NoopConverter.js";
import "dayjs";
import { o as D } from "../../../chunks/topic.js";
const R = f(function(r, e) {
  const n = e || m();
  return /* @__PURE__ */ a(c, { children: /* @__PURE__ */ a(h, { ...r, onDataChange: (t, i) => {
    if (r.onDataChange)
      try {
        r.onDataChange(t, i);
      } catch (o) {
        console.error(o);
      }
    if (r.topic)
      try {
        D.publish(r.topic + "/data", t);
      } catch (o) {
        console.error(o);
      }
  }, ref: n }) });
});
export {
  R as DataGrid
};
