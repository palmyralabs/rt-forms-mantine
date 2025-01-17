function i() {
  return (n) => {
    let t = n.getValue();
    if (typeof t == "string" && (t = t.replace(/,/g, "")), t = Number(t), !isFinite(t) || t === 0)
      return "0";
    if (t !== 0) {
      const o = t.toFixed(0), e = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
      return Number(o).toLocaleString("en-IN", e);
    } else
      return "0";
  };
}
function m(n) {
  if (n !== 0 && n !== void 0 && n !== null) {
    const t = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
    return Number(n).toLocaleString("en-IN", t);
  } else
    return "0";
}
export {
  m as formatAmount,
  i as formatCurrency
};
