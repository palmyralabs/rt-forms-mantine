import { jsx as _ } from "react/jsx-runtime";
import { Children as $ } from "react";
import { f as B, u as N, l as d, d as S, B as z, g as O } from "./factory.js";
function P(r) {
  return $.toArray(r).filter(Boolean);
}
var u = { root: "m_4081bf90" };
const R = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, W = O(
  (r, { grow: o, preventGrowOverflow: s, gap: e, align: t, justify: a, wrap: l }, { childWidth: n }) => ({
    root: {
      "--group-child-width": o && s ? n : void 0,
      "--group-gap": d(e),
      "--group-align": t,
      "--group-justify": a,
      "--group-wrap": l
    }
  })
), f = B((r, o) => {
  const s = N("Group", R, r), {
    classNames: e,
    className: t,
    style: a,
    styles: l,
    unstyled: n,
    children: g,
    gap: m,
    align: b,
    justify: A,
    wrap: F,
    grow: h,
    preventGrowOverflow: V,
    vars: y,
    variant: v,
    __size: w,
    mod: G,
    ...x
  } = s, i = P(g), c = i.length, p = d(m ?? "md"), C = { childWidth: `calc(${100 / c}% - (${p} - ${p} / ${c}))` }, j = S({
    name: "Group",
    props: s,
    stylesCtx: C,
    className: t,
    style: a,
    classes: u,
    classNames: e,
    styles: l,
    unstyled: n,
    vars: y,
    varsResolver: W
  });
  return /* @__PURE__ */ _(
    z,
    {
      ...j("root"),
      ref: o,
      variant: v,
      mod: [{ grow: h }, G],
      size: w,
      ...x,
      children: i
    }
  );
});
f.classes = u;
f.displayName = "@mantine/core/Group";
export {
  f as G
};
