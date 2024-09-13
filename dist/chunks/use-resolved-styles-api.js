import "react";
import "react/jsx-runtime";
import { a, b as r, c as i } from "./factory.js";
function d({
  classNames: o,
  styles: l,
  props: e,
  stylesCtx: s
}) {
  const t = a();
  return {
    resolvedClassNames: r({
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
  d as u
};
