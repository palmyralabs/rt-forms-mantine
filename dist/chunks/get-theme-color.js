import { p as e } from "./factory.js";
function i(r, o) {
  const a = e({ color: r || o.primaryColor, theme: o });
  return a.variable ? `var(${a.variable})` : r;
}
export {
  i as g
};
