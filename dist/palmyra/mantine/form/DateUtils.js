import u from "dayjs";
const Y = (i) => {
  const n = i.serverPattern || i.valueFormat || "YYYY-MM-DD", o = i.type, s = (e, r) => e ? u(e, r) : null, l = (e, r) => e && e.isValid && e.isValid() ? e.format(r) : null;
  return { parse: (e) => {
    if (o == "range") {
      if (e && typeof e == "string") {
        var r, t;
        const f = e.charAt(0);
        if (f == ">")
          r = s(e.slice(1), n);
        else if (f == "<")
          t = s(e.slice(1), n);
        else {
          const c = e.split("...");
          r = s(c[0], n), c[1] && (t = s(c[1], n));
        }
      }
      return [r, t];
    } else
      return s(e, n);
  }, format: (e) => {
    if (o == "range") {
      if (e) {
        const r = l(e[0], n), t = l(e[1], n);
        return r ? t ? r + "..." + t : ">" + r : t ? "<" + t : null;
      }
    } else
      return l(e, n);
  }, revert: (e) => {
    const r = (t) => t && t.isValid() && t.toDate() || null;
    return o == "range" ? [r(e[0]), r(e[1])] : r(e);
  }, convert: (e) => {
  } };
};
export {
  Y as DateUtils
};
