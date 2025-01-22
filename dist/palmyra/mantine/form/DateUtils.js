import u from "dayjs";
const m = () => "DD-MM-YYYY", p = () => "DD-MM-YYYY hh:mm:ss", D = (i) => {
  const n = i.serverPattern || i.valueFormat || m(), o = i.type, s = (e, t) => e ? u(e, t) : null, l = (e, t) => e && e.isValid && e.isValid() ? e.format(t) : null;
  return { parse: (e) => {
    if (o == "range") {
      if (e && typeof e == "string") {
        var t, r;
        const f = e.charAt(0);
        if (f == ">")
          t = s(e.slice(1), n);
        else if (f == "<")
          r = s(e.slice(1), n);
        else {
          const c = e.split("...");
          t = s(c[0], n), c[1] && (r = s(c[1], n));
        }
      }
      return [t, r];
    } else
      return s(e, n);
  }, format: (e) => {
    if (o == "range") {
      if (e) {
        const t = l(e[0], n), r = l(e[1], n);
        return t ? r ? t + "..." + r : ">" + t : r ? "<" + r : null;
      }
    } else
      return l(e, n);
  }, revert: (e) => {
    const t = (r) => r && r.isValid() && r.toDate() || null;
    return o == "range" ? [t(e[0]), t(e[1])] : t(e);
  }, convert: (e) => {
  } };
};
export {
  D as DateUtils,
  m as getDefaultDatePattern,
  p as getDefaultDateTimePattern
};
