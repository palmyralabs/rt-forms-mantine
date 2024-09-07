import { jsx as t, Fragment as l, jsxs as i } from "react/jsx-runtime";
const n = (e) => e.required && e.title ? /* @__PURE__ */ t(l, { children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
  e.title,
  /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
] }) }) : e.title;
export {
  n as getFieldLabel
};
