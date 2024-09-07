import "react";
import "react/jsx-runtime";
import { u as r, r as a, a as i } from "./factory.js";
function u({
  classNames: o,
  styles: l,
  props: e,
  stylesCtx: s
}) {
  const t = r();
  return {
    resolvedClassNames: a({
      theme: t,
      classNames: o,
      props: e,
      stylesCtx: s || void 0
    }),
    resolvedStyles: i({
      theme: t,
      styles: l,
      props: e,
      stylesCtx: s || void 0
    })
  };
}
export {
  u
};
