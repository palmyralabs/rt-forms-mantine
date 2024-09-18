import { useCallback as o } from "react";
function u(n, t) {
  typeof n == "function" ? n(t) : typeof n == "object" && n !== null && "current" in n && (n.current = t);
}
function c(...n) {
  return (t) => {
    n.forEach((e) => u(e, t));
  };
}
function r(...n) {
  return o(c(...n), n);
}
export {
  u as a,
  c as m,
  r as u
};
