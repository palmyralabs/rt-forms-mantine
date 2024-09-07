import { jsx as a, Fragment as _ } from "react/jsx-runtime";
import { Children as $, forwardRef as k, useRef as F, useImperativeHandle as B } from "react";
import { useFieldManager as L, getFieldHandler as P, FieldDecorator as S } from "@palmyralabs/rt-forms";
import { getFieldLabel as z } from "./util.js";
import { R as p } from "../../chunks/Radio.js";
import { f as A, b as H, k as O, d as T, B as W, g as D } from "../../chunks/factory.js";
function E(s) {
  return $.toArray(s).filter(Boolean);
}
var x = { root: "m_4081bf90" };
const I = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, q = D(
  (s, { grow: e, preventGrowOverflow: l, gap: r, align: i, justify: n, wrap: c }, { childWidth: u }) => ({
    root: {
      "--group-child-width": e && l ? u : void 0,
      "--group-gap": O(r),
      "--group-align": i,
      "--group-justify": n,
      "--group-wrap": c
    }
  })
), y = A((s, e) => {
  const l = H("Group", I, s), {
    classNames: r,
    className: i,
    style: n,
    styles: c,
    unstyled: u,
    children: g,
    gap: d,
    align: f,
    justify: h,
    wrap: C,
    grow: t,
    preventGrowOverflow: o,
    vars: v,
    variant: m,
    __size: b,
    mod: V,
    ...j
  } = l, w = E(g), G = w.length, R = O(d ?? "md"), M = { childWidth: `calc(${100 / G}% - (${R} - ${R} / ${G}))` }, N = T({
    name: "Group",
    props: l,
    stylesCtx: M,
    className: i,
    style: n,
    classes: x,
    classNames: r,
    styles: c,
    unstyled: u,
    vars: v,
    varsResolver: q
  });
  return /* @__PURE__ */ a(
    W,
    {
      ...N("root"),
      ref: e,
      variant: m,
      mod: [{ grow: t }, V],
      size: b,
      ...j,
      children: w
    }
  );
});
y.classes = x;
y.displayName = "@mantine/core/Group";
const ee = k(function(e, l) {
  const r = L(e.attribute, e), { getError: i, getValue: n, setValue: c, mutateOptions: u } = r, g = l || F(null), d = i(), f = F(null);
  B(g, () => ({
    ...P(r),
    focus() {
      f.current.focus();
    },
    setOptions(o) {
    },
    getOptions() {
    }
  }), [r]);
  var h = r.getFieldProps();
  h.onChange = (t, o) => {
    e.readOnly || (c(t.currentTarget.value), e.onChange && e.onChange(t.currentTarget.value));
  };
  const C = (t) => {
    if (t) {
      if (t instanceof Array)
        return t.map((m, b) => /* @__PURE__ */ a(
          p,
          {
            ref: f,
            label: m.label,
            value: m.value,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
      if (typeof t == "object")
        return Object.keys(t).map((o, v) => /* @__PURE__ */ a(
          p,
          {
            ref: f,
            label: t[o],
            value: o,
            error: d.message,
            defaultValue: e.defaultValue,
            checked: n()
          }
        ));
    }
    return /* @__PURE__ */ a("div", { children: "No options provided" });
  };
  return /* @__PURE__ */ a(_, { children: !u.visible && /* @__PURE__ */ a(
    S,
    {
      label: z(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ a(
        p.Group,
        {
          label: e.label,
          ...h,
          description: e.description,
          children: /* @__PURE__ */ a(y, { mt: "xs", children: C(e.options) })
        }
      )
    }
  ) });
});
export {
  ee as MantineRadioGroup
};
