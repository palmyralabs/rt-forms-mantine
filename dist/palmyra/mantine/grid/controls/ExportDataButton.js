import { jsx as t, Fragment as d, jsxs as m } from "react/jsx-runtime";
import { P as x, a as u, b as f, c as b } from "../../../../chunks/index6.js";
import { b as y } from "../../../../chunks/index2.js";
import { useRef as P } from "react";
import { DropdownButton as v } from "../../widget/DropdownButton.js";
import '../../../../assets/ExportDataButton.css';const j = (e) => {
  const { exportOption: c } = e, i = P(null), r = e.visible != !1, s = (o) => {
    const n = e.queryRef.current, p = { ...n.getQueryRequest(), format: o, limit: -1 };
    n.export(p), i.current.close();
  }, l = {
    csv: () => s("csv"),
    pdf: () => s("pdf"),
    excel: () => s("excel"),
    doc: () => s("doc")
  }, a = {
    csv: /* @__PURE__ */ t(b, { className: "py-export-button-list-icon" }),
    pdf: /* @__PURE__ */ t(f, { className: "py-export-button-list-icon" }),
    excel: /* @__PURE__ */ t(u, { className: "py-export-button-list-icon" }),
    doc: /* @__PURE__ */ t(x, { className: "py-export-button-list-icon" })
  };
  return /* @__PURE__ */ t(d, { children: r && /* @__PURE__ */ t(
    v,
    {
      title: "Export",
      ref: i,
      disabled: e.disabled,
      PrefixAdornment: /* @__PURE__ */ t(y, { className: "py-export-button-icon" }),
      children: /* @__PURE__ */ t("div", { onClick: (o) => o.stopPropagation(), className: "py-export-button-container", children: /* @__PURE__ */ t("ul", { children: Object.entries(c).map(([o, n]) => /* @__PURE__ */ m("li", { onClick: l[o], children: [
        a[o],
        /* @__PURE__ */ t("span", { className: "py-export-list-text", children: n })
      ] }, o)) }) })
    }
  ) });
};
export {
  j as ExportDataButton
};
