import { p as a } from "./factory.js";
function i({ color: r, theme: o, autoContrast: t }) {
  return (typeof t == "boolean" ? t : o.autoContrast) && a({ color: r || o.primaryColor, theme: o }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function l(r, o) {
  return typeof r == "boolean" ? r : o.autoContrast;
}
export {
  i as a,
  l as g
};
