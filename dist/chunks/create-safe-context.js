import { jsx as n } from "react/jsx-runtime";
import { createContext as c, useContext as s } from "react";
function a(o) {
  const e = c(null);
  return [({ children: t, value: r }) => /* @__PURE__ */ n(e.Provider, { value: r, children: t }), () => {
    const t = s(e);
    if (t === null)
      throw new Error(o);
    return t;
  }];
}
export {
  a as c
};
