function d(s, n) {
  if (!s || !n)
    return n;
  const t = s.getHours(), c = s.getMinutes(), o = s.getSeconds(), u = s.getMilliseconds(), e = new Date(n);
  return e.setHours(t), e.setMinutes(c), e.setSeconds(o), e.setMilliseconds(u), e;
}
export {
  d as a
};
