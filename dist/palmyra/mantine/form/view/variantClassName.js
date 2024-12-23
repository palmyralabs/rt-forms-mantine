const l = (e, t) => {
  if (!t) return "";
  switch (e) {
    case "outlined":
      return "text-view-value-outlined";
    case "filled":
      return "text-view-value-filled";
    default:
      return "text-view-value";
  }
};
export {
  l as getVariantClassName
};
