import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { Button as n } from "@mantine/core";
import { PickerInputBase as v } from "./PickerInputBase.js";
import { useDisclosure as m } from "@mantine/hooks";
import { useState as h } from "react";
const I = (t) => {
  const [o, u] = h(""), [c, i] = m(!1), d = () => {
  }, s = (r) => {
    u((p) => p + r);
  }, l = (r) => /* @__PURE__ */ e(n, { onClick: () => s(r.label), children: r.label }), b = (r) => /* @__PURE__ */ e(n, { children: r.label });
  return /* @__PURE__ */ e(
    v,
    {
      formattedValue: o,
      dropdownOpened: c,
      dropdownHandlers: i,
      onClear: d,
      wrapperProps: { label: t.label, error: t.error },
      shouldClear: !1,
      value: o,
      dropdownType: "popover",
      type: "PickerInputBase",
      __staticSelector: "DatePickerInput",
      children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("table", { children: [
        /* @__PURE__ */ a("tr", { children: [
          /* @__PURE__ */ e(l, { label: "1", value: 1 }),
          /* @__PURE__ */ e(l, { label: "2", value: 2 }),
          /* @__PURE__ */ e(l, { label: "3", value: 3 })
        ] }),
        /* @__PURE__ */ a("tr", { children: [
          /* @__PURE__ */ e(l, { label: "4", value: 4 }),
          /* @__PURE__ */ e(l, { label: "5", value: 5 }),
          /* @__PURE__ */ e(l, { label: "6", value: 6 })
        ] }),
        /* @__PURE__ */ a("tr", { children: [
          /* @__PURE__ */ e(l, { label: "7", value: 7 }),
          /* @__PURE__ */ e(l, { label: "8", value: 8 }),
          /* @__PURE__ */ e(l, { label: "9", value: 9 })
        ] }),
        /* @__PURE__ */ a("tr", { children: [
          /* @__PURE__ */ e(l, { label: ".", value: 1 }),
          /* @__PURE__ */ e(l, { label: "0", value: 0 }),
          /* @__PURE__ */ e(b, { label: "D" })
        ] })
      ] }) })
    }
  );
};
export {
  I as NumberPickerInput
};
