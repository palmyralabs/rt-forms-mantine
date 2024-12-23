import { jsx as t, Fragment as m, jsxs as d } from "react/jsx-runtime";
import { P as x, a as u, b as f, c as b } from "../../../../chunks/index4.js";
import "@mantine/core";
import { DropdownButton as y } from "../../widget/DropdownButton.js";
import { b as P } from "../../../../chunks/index2.js";
import { useRef as v } from "react";
import '../../../../assets/ExportDataButton.css';const q = (e) => {
  const { exportOption: r } = e, n = v(), c = e.visible != !1, s = (o) => {
    const i = e.queryRef.current, p = { ...i.getQueryRequest(), format: o, limit: -1 };
    i.export(p), n.current.close();
  }, l = {
    csv: () => s("csv"),
    pdf: () => s("pdf"),
    excel: () => s("excel"),
    doc: () => s("doc")
  }, a = {
    csv: /* @__PURE__ */ t(x, { className: "py-export-button-list-icon" }),
    pdf: /* @__PURE__ */ t(u, { className: "py-export-button-list-icon" }),
    excel: /* @__PURE__ */ t(f, { className: "py-export-button-list-icon" }),
    doc: /* @__PURE__ */ t(b, { className: "py-export-button-list-icon" })
  };
  return /* @__PURE__ */ t(m, { children: c && /* @__PURE__ */ t(
    y,
    {
      title: "Export",
      ref: n,
      disabled: e.disabled,
      PrefixAdornment: /* @__PURE__ */ t(P, { className: "py-export-button-icon" }),
      children: /* @__PURE__ */ t("div", { onClick: (o) => o.stopPropagation(), className: "py-export-button-container", children: /* @__PURE__ */ t("ul", { children: Object.entries(r).map(([o, i]) => /* @__PURE__ */ d("li", { onClick: l[o], children: [
        a[o],
        /* @__PURE__ */ t("span", { className: "py-export-list-text", children: i })
      ] }, o)) }) })
    }
  ) });
};
export {
  q as ExportDataButton
};
