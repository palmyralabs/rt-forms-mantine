import { jsx as l } from "react/jsx-runtime";
import { Button as i } from "@mantine/core";
import { PickerInputBase as d } from "./PickerInputBase.js";
import { useDisclosure as f } from "@mantine/hooks";
import { useState as k } from "react";
import { d as y } from "../../../../chunks/index3.js";
import '../../../../assets/NumberPickerInput.css';const A = [
  [{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }],
  [{ label: "4", value: 4 }, { label: "5", value: 5 }, { label: "6", value: 6 }],
  [{ label: "7", value: 7 }, { label: "8", value: 8 }, { label: "9", value: 9 }],
  [
    { label: ".", value: "." },
    { label: "0", value: 0 },
    { label: /* @__PURE__ */ l(y, { className: "py-number-btn-icon" }), value: "D", isAction: !0 }
  ],
  [{ label: "Clear All", value: "CA", isAction: !0 }]
], D = (o) => {
  const [u, n] = k(""), [b, m] = f(!1), s = () => {
    n("");
  }, t = (e) => {
    e === "D" ? n((a) => a.slice(0, -1)) : e === "CA" ? s() : n((a) => a + e);
  }, p = (e) => /* @__PURE__ */ l(i, { onClick: () => t(e.label), className: "py-number-btn", children: e.label }), v = (e) => /* @__PURE__ */ l(i, { onClick: () => t(e.value), className: "py-number-btn", children: e.label });
  return /* @__PURE__ */ l(
    d,
    {
      formattedValue: u,
      dropdownOpened: b,
      dropdownHandlers: m,
      onClear: s,
      wrapperProps: { label: o.label, error: o.error },
      shouldClear: !1,
      value: u,
      dropdownType: "popover",
      type: "PickerInputBase",
      __staticSelector: "DatePickerInput",
      children: /* @__PURE__ */ l("div", { className: "py-number-picker-container", children: A.map((e, a) => /* @__PURE__ */ l("div", { className: "py-number-picker", children: e.map((r, c) => r.isAction ? /* @__PURE__ */ l(v, { label: r.label, value: r.value }, c) : /* @__PURE__ */ l(p, { label: r.label, value: r.value }, c)) }, a)) })
    }
  );
};
export {
  D as NumberPickerInput
};
