function i() {
  return (o) => {
    let t = o.getValue();
    if (typeof t == "string" && (t = t.replace(/,/g, "")), t = Number(t), !isFinite(t) || t === 0)
      return "0";
    if (t !== 0) {
      const n = t.toFixed(0), e = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
      return Number(n).toLocaleString("en-IN", e);
    } else
      return "0";
  };
}
function m(o, t) {
  if (o !== 0 && o !== void 0 && o !== null) {
    const n = { minimumFractionDigits: 0, maximumFractionDigits: t || 0 };
    return Number(o).toLocaleString("en-IN", n);
  } else
    return "0";
}
export {
  m as formatAmount,
  i as formatCurrency
};
