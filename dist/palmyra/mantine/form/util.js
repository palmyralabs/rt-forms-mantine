import { jsx as t, Fragment as r, jsxs as i } from "react/jsx-runtime";
const n = (e) => e.required && e.title ? /* @__PURE__ */ t(r, { children: /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: "3px" }, children: [
  e.title,
  /* @__PURE__ */ t("span", { style: { color: "red" }, children: "*" })
] }) }) : e.title, d = (e) => typeof e == "number" ? e + "" : e;
export {
  n as getFieldLabel,
  d as keyToString
};
