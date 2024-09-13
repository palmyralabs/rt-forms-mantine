import { jsx as n, Fragment as o } from "react/jsx-runtime";
import "../../../../chunks/NoopConverter.js";
import "dayjs";
import { o as r } from "../../../../chunks/topic.js";
import { B as s } from "../../../../chunks/Button.js";
const p = (t, e) => {
  r.publish(t + "/" + e, {});
}, b = (t) => {
  const e = t.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(s, { ...t, onClick: () => p(t.topic, t.name), children: /* @__PURE__ */ n("span", { children: t.label }) }) });
}, i = (t) => {
  const e = t.props.visible != !1;
  return /* @__PURE__ */ n(o, { children: e && /* @__PURE__ */ n(s, { ...t.props, onClick: () => p(t.props.topic, t.name), className: "py-action-button", children: /* @__PURE__ */ n("span", { children: t.props.label }) }) });
}, d = (t) => /* @__PURE__ */ n(i, { props: t, name: "new" }), h = (t) => /* @__PURE__ */ n(i, { props: t, name: "edit" }), B = (t) => /* @__PURE__ */ n(i, { props: t, name: "delete" });
export {
  b as ActionButton,
  B as DeleteButton,
  h as EditButton,
  d as NewButton
};
