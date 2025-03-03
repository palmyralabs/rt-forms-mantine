import { jsxs as c, jsx as r, Fragment as a } from "react/jsx-runtime";
import { Tooltip as o } from "@mantine/core";
import { G as i } from "../../../chunks/iconBase.js";
function s(e) {
  return i({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }, child: [] }] })(e);
}
const l = function() {
  return /* @__PURE__ */ r(s, { className: "header-info-icon" });
}, m = (e) => {
  if (e) {
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e.toolTip) {
      const t = e;
      return /* @__PURE__ */ c("div", { className: "info-header", children: [
        /* @__PURE__ */ r("span", { className: "header-content-text", children: t.title }),
        /* @__PURE__ */ r(o, { label: t.toolTip, children: /* @__PURE__ */ r("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ r(l, {}) }) })
      ] });
    }
    const n = typeof e == "string" ? e : e.title;
    return /* @__PURE__ */ r("span", { className: "header-content-text", children: n });
  } else
    return /* @__PURE__ */ r(a, {});
};
export {
  l as InfoCircle,
  m as renderTitle
};
