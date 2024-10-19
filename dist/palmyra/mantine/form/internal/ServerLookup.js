import { jsx as f } from "react/jsx-runtime";
import { Autocomplete as m } from "@mantine/core";
import { useState as v, useEffect as g } from "react";
const y = function(e) {
  const [c, o] = v(e.value), u = e.data || [], { onValueChange: h, getOptionKey: i, getOptionValue: l, ...r } = e;
  g(() => {
    o(e.value);
  }, [e.value]);
  const s = u.map((n, t) => {
    var a = {
      label: l(n) + "",
      value: i(n) + ""
    };
    return a;
  });
  return /* @__PURE__ */ f(
    m,
    {
      ...r,
      data: s,
      value: c,
      ...{
        onChange: (n) => {
          const t = u.find((a) => n == l(a));
          o(n), e.onChange && e.onChange(n), t && e.onValueChange(t);
        }
      }
    }
  );
};
export {
  y as ServerLookup
};
