import { jsx as m } from "react/jsx-runtime";
import { Autocomplete as r } from "@mantine/core";
import { useState as d, useEffect as g, useMemo as h } from "react";
const v = [], E = (function(e) {
  const [i, u] = d(e.value), o = e.data || v, { onValueChange: V, getOptionValue: c, ...l } = e;
  g(() => {
    u(e.value);
  }, [e.value]);
  const f = h(() => {
    const n = [];
    return o.forEach((t, s) => {
      const a = c(t);
      console.log(a, t), a != null && n.push(a + "");
    }), n;
  }, [o]);
  return /* @__PURE__ */ m(
    r,
    {
      ...l,
      data: f,
      value: i,
      ...{
        onChange: (n) => {
          const t = o.find((s) => n == c(s));
          u(n), t ? e.onValueChange(t, n) : e.onChange && e.onChange(n);
        }
      }
    }
  );
});
export {
  E as MantineAutoComplete
};
