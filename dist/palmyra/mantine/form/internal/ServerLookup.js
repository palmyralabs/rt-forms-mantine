import { jsx as f } from "react/jsx-runtime";
import { Autocomplete as m } from "@mantine/core";
import { useState as v, useEffect as g } from "react";
const x = function(e) {
  const [l, a] = v(e.value), u = e.data || [], { onValueChange: C, getOptionKey: r, getOptionValue: i, ...c } = e;
  g(() => {
    a(e.value);
  }, [e.value]);
  const d = u.map((n, t) => {
    var o = {
      label: i(n) + "",
      value: r(n) + ""
    };
    return o;
  }), s = {
    onChange: (n) => {
      const t = u.find((o) => n == i(o));
      a(n), t ? e.onValueChange(t, n) : e.onChange && e.onChange(n);
    }
  };
  return /* @__PURE__ */ f(
    m,
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
