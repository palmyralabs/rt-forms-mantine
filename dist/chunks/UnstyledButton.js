import { jsx as d } from "react/jsx-runtime";
import "react";
import { u as f, d as B, B as U } from "./factory.js";
import { p as _ } from "./polymorphic-factory.js";
var o = { root: "m_87cf2631" };
const b = {
  __staticSelector: "UnstyledButton"
}, e = _(
  (n, r) => {
    const t = f("UnstyledButton", b, n), {
      className: a,
      component: s = "button",
      __staticSelector: c,
      unstyled: l,
      classNames: m,
      styles: p,
      style: u,
      ...y
    } = t, i = B({
      name: c,
      props: t,
      classes: o,
      className: a,
      style: u,
      classNames: m,
      styles: p,
      unstyled: l
    });
    return /* @__PURE__ */ d(
      U,
      {
        ...i("root", { focusable: !0 }),
        component: s,
        ref: r,
        type: s === "button" ? "button" : void 0,
        ...y
      }
    );
  }
);
e.classes = o;
e.displayName = "@mantine/core/UnstyledButton";
export {
  e as U
};
