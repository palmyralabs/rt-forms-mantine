import { jsx as f } from "react/jsx-runtime";
import { Autocomplete as m } from "@mantine/core";
import { useState as v, useEffect as g } from "react";
const y = function(t) {
  const [l, o] = v(t.value), u = t.data || [], { onValueChange: h, getOptionKey: c, getOptionValue: i, ...s } = t;
  g(() => {
    o(t.value);
  }, [t.value]);
  const r = u.map((e, n) => {
    var a = {
      label: i(e) + "",
      value: c(e) + ""
    };
    return a;
  });
  return /* @__PURE__ */ f(
    m,
    {
      ...s,
      filter: ({ options: e }) => e,
      data: r,
      value: l,
      ...{
        onChange: (e) => {
          const n = u.find((a) => e == i(a));
          o(e), n ? t.onValueChange(n, e) : t.onChange && t.onChange(e);
        }
      }
    }
  );
};
export {
  y as ServerLookup
};
