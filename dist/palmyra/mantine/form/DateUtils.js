import u from "dayjs";
const Y = (i) => {
  const s = i.serverPattern || i.valueFormat || "YYYY-MM-DD", o = i.type, n = (e, t) => e ? u(e, t) : null, c = (e, t) => {
    if (e && e.isValid && e.isValid())
      return e.format(t);
  };
  return { parse: (e) => {
    if (o == "range") {
      if (e && typeof e == "string") {
        var t, r;
        const l = e.charAt(0);
        if (l == ">")
          t = n(e.slice(1), s);
        else if (l == "<")
          r = n(e.slice(1), s);
        else {
          const f = e.split("...");
          t = n(f[0], s), f[1] && (r = n(f[1], s));
        }
      }
      return [t, r];
    } else
      return n(e, s);
  }, format: (e) => {
    if (o == "range") {
      if (e) {
        const t = c(e[0], s), r = c(e[1], s);
        if (t)
          return r ? t + "..." + r : ">" + t;
        if (r)
          return "<" + r;
      }
    } else
      return c(e, s);
  }, revert: (e) => {
    const t = (r) => r && r.isValid() && r.toDate() || null;
    return o == "range" ? [t(e[0]), t(e[1])] : t(e);
  }, convert: (e) => {
  } };
};
export {
  Y as DateUtils
};
