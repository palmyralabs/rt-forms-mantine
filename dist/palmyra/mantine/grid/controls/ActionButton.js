import { jsx as n, Fragment as o } from "react/jsx-runtime";
import { topic as r } from "@palmyralabs/ts-utils";
import { Button as s } from "@mantine/core";
const p = (t, e) => {
  r.publish(t + "/" + e, {});
}, m = (t) => {
  const e = t.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(s, { ...t, onClick: () => p(t.topic, t.name), children: /* @__PURE__ */ n("span", { children: t.label }) }) });
}, i = (t) => {
  const e = t.props.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(s, { ...t.props, onClick: () => p(t.props.topic, t.name), className: "py-action-button", children: /* @__PURE__ */ n("span", { children: t.props.label }) }) });
}, u = (t) => /* @__PURE__ */ n(i, { props: t, name: "new" }), b = (t) => /* @__PURE__ */ n(i, { props: t, name: "edit" }), d = (t) => /* @__PURE__ */ n(i, { props: t, name: "delete" });
export {
  m as ActionButton,
  d as DeleteButton,
  b as EditButton,
  u as NewButton
};
