import { jsx as v } from "react/jsx-runtime";
import { Autocomplete as g } from "@mantine/core";
import { useState as O, useEffect as b } from "react";
const _ = (function(e) {
  const [a, o] = O(e.value), t = e.data || [], { onValueChange: y, getOptionKey: u, getOptionValue: l, ...d } = e;
  b(() => {
    o(e.value);
  }, [e.value]);
  const s = !t || t.length === 0, c = typeof e.noOptionsLabel == "function" ? e.noOptionsLabel(a) : e.noOptionsLabel || "--No options available--", f = s ? [{
    label: c,
    value: "__empty__",
    inputValue: a,
    disabled: !e.renderOption
  }] : t.map((n) => ({
    label: l(n) + "",
    value: u(n) + "",
    disabled: n?.disabled || !1
  })), m = {
    onChange: (n) => {
      const i = t.find((r) => n == l(r));
      o(n), i ? e.onValueChange(i, n) : e.onChange && e.onChange(n);
    }
  };
  return /* @__PURE__ */ v(
    g,
    {
      ...d,
      filter: ({ options: n }) => n,
      data: f,
      dropdownOpened: e.dropdownOpened,
      value: a,
      ...m
    }
  );
});
export {
  _ as ServerLookup
};
