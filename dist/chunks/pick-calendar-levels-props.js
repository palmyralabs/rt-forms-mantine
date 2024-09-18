import { jsx as Q } from "react/jsx-runtime";
function U(e, n) {
  if (n === "range" && Array.isArray(e)) {
    const [t, r] = e;
    return t ? r ? `${t.toISOString()} – ${r.toISOString()}` : `${t.toISOString()} –` : "";
  }
  return n === "multiple" && Array.isArray(e) ? e.map((t) => t == null ? void 0 : t.toISOString()).filter(Boolean).join(", ") : !Array.isArray(e) && e ? e.toISOString() : "";
}
function X({ value: e, type: n, name: t, form: r }) {
  return /* @__PURE__ */ Q("input", { type: "hidden", value: U(e, n), name: t, form: r });
}
X.displayName = "@mantine/dates/HiddenDatesInput";
function ee(e) {
  const {
    maxLevel: n,
    minLevel: t,
    defaultLevel: r,
    level: a,
    onLevelChange: o,
    nextIcon: i,
    previousIcon: l,
    date: s,
    defaultDate: u,
    onDateChange: d,
    numberOfColumns: c,
    columnsToScroll: m,
    ariaLabels: D,
    onYearSelect: p,
    onMonthSelect: h,
    onYearMouseEnter: g,
    onMonthMouseEnter: y,
    onNextMonth: S,
    onPreviousMonth: f,
    onNextYear: L,
    onPreviousYear: I,
    onNextDecade: O,
    onPreviousDecade: x,
    withCellSpacing: M,
    highlightToday: P,
    __updateDateOnYearSelect: A,
    __updateDateOnMonthSelect: C,
    // MonthLevelGroup props
    firstDayOfWeek: b,
    weekdayFormat: F,
    weekendDays: Y,
    getDayProps: k,
    excludeDate: w,
    renderDay: v,
    hideOutsideDates: N,
    hideWeekdays: _,
    getDayAriaLabel: H,
    monthLabelFormat: $,
    // YearLevelGroup props
    monthsListFormat: j,
    getMonthControlProps: E,
    yearLabelFormat: T,
    // DecadeLevelGroup props
    yearsListFormat: W,
    getYearControlProps: B,
    decadeLabelFormat: R,
    // External picker props
    allowSingleDateInRange: V,
    allowDeselect: q,
    // Other props
    minDate: z,
    maxDate: G,
    locale: J,
    ...K
  } = e;
  return {
    calendarProps: {
      maxLevel: n,
      minLevel: t,
      defaultLevel: r,
      level: a,
      onLevelChange: o,
      nextIcon: i,
      previousIcon: l,
      date: s,
      defaultDate: u,
      onDateChange: d,
      numberOfColumns: c,
      columnsToScroll: m,
      ariaLabels: D,
      onYearSelect: p,
      onMonthSelect: h,
      onYearMouseEnter: g,
      onMonthMouseEnter: y,
      onNextMonth: S,
      onPreviousMonth: f,
      onNextYear: L,
      onPreviousYear: I,
      onNextDecade: O,
      onPreviousDecade: x,
      withCellSpacing: M,
      highlightToday: P,
      __updateDateOnYearSelect: A,
      __updateDateOnMonthSelect: C,
      // MonthLevelGroup props
      firstDayOfWeek: b,
      weekdayFormat: F,
      weekendDays: Y,
      getDayProps: k,
      excludeDate: w,
      renderDay: v,
      hideOutsideDates: N,
      hideWeekdays: _,
      getDayAriaLabel: H,
      monthLabelFormat: $,
      // YearLevelGroup props
      monthsListFormat: j,
      getMonthControlProps: E,
      yearLabelFormat: T,
      // DecadeLevelGroup props
      yearsListFormat: W,
      getYearControlProps: B,
      decadeLabelFormat: R,
      // External picker props
      allowSingleDateInRange: V,
      allowDeselect: q,
      // Other props
      minDate: z,
      maxDate: G,
      locale: J
    },
    others: K
  };
}
export {
  X as H,
  ee as p
};
