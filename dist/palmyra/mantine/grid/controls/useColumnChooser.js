import { useMemo as u, useState as l } from "react";
const a = (i) => i.name ? i.name : i.attribute, c = (i, n) => {
  const s = u(() => {
    const o = {};
    return (n?.defaultHidden || []).forEach((r) => {
      o[r] = !1;
    }), o;
  }, []), [t, e] = l(s);
  return {
    columnVisibility: t,
    setColumnVisibility: e,
    columnChooserProps: {
      columns: i,
      visibility: t,
      onVisibilityChange: e
    }
  };
};
export {
  a as getColumnId,
  c as useColumnChooser
};
