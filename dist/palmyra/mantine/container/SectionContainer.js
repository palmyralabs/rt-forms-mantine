import { jsx as e, Fragment as t, jsxs as c } from "react/jsx-runtime";
import { Accordion as n } from "@mantine/core";
import '../../../assets/SectionContainer.css';const d = (i) => {
  const r = i.title || "";
  return /* @__PURE__ */ e(t, { children: /* @__PURE__ */ e("div", { className: "section-container", children: /* @__PURE__ */ e(n, { ...i, children: /* @__PURE__ */ c(n.Item, { value: r, children: [
    /* @__PURE__ */ e(n.Control, { children: r }),
    /* @__PURE__ */ e(n.Panel, { children: i.children })
  ] }, r) }) }) });
};
export {
  d as SectionContainer
};
