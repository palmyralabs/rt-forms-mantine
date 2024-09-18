import { jsx as n } from "react/jsx-runtime";
import { r as o } from "./factory.js";
import "react";
function l({ size: r, style: e, ...t }) {
  const i = r !== void 0 ? { width: o(r), height: o(r), ...e } : e;
  return /* @__PURE__ */ n(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: i,
      "aria-hidden": !0,
      ...t,
      children: /* @__PURE__ */ n(
        "path",
        {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function w({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e,
      children: /* @__PURE__ */ n("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ n(l, { ...e });
}
export {
  l as C,
  w as a
};
