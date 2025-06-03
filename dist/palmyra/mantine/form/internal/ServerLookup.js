import { jsx as f } from "react/jsx-runtime";
import { Autocomplete as v } from "@mantine/core";
import { useState as m, useEffect as g } from "react";
const x = function(e) {
  const [l, o] = m(e.value), u = e.data || [], { onValueChange: C, getOptionKey: r, getOptionValue: i, ...c } = e;
  g(() => {
    o(e.value);
  }, [e.value]);
  const d = u.map((n, t) => {
    var a = {
      label: i(n) + "",
      value: r(n) + ""
    };
    return a || "No Data Available";
  }), s = {
    onChange: (n) => {
      const t = u.find((a) => n == i(a));
      o(n), t ? e.onValueChange(t, n) : e.onChange && e.onChange(n);
    }
  };
  return /* @__PURE__ */ f(
    v,
    {
      ...c,
      filter: ({ options: n }) => n,
      data: d,
      dropdownOpened: e.dropdownOpened,
      value: l,
      ...s
    }
  );
};
export {
  x as ServerLookup
};
