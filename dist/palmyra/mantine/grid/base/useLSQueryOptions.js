const Q = (s) => {
  const n = s.pageSize ? s.pageSize : 15, a = n instanceof Array ? n[0] : n, r = () => {
    const t = JSON.stringify(e);
    sessionStorage.setItem(s.lsKey, t);
  }, c = () => {
    const t = sessionStorage.getItem(s.lsKey);
    if (t)
      try {
        return JSON.parse(t);
      } catch {
        console.error("invalid data for tableFilter ", s.lsKey);
      }
    return {};
  }, e = c();
  return e.limit == null && (e.limit = a), {
    getLSOptions: () => e,
    setSortColumns: (t) => {
      t ? e.sort = t : delete e.sort, r();
    },
    setQuickSearch: (t) => {
    },
    setFilter: (t) => {
      t ? e.filter = t : delete e.filter, r();
    },
    setPage: (t) => {
      const i = c().limit || a || 15, o = t || 0;
      e.offset = o * i, r();
    },
    setPageSize: (t) => {
      const i = c().offset || 0, o = t > 0 || t == -1 ? t : 15, l = Math.floor(i / o) * o;
      e.limit = o, e.offset = l, r();
    },
    resetSortOptions: () => {
    },
    resetQuickSearch: () => {
    },
    resetFilter: () => {
    },
    resetPage: () => {
    },
    reset: () => {
    },
    resetPageSize: () => {
    }
  };
};
export {
  Q as useLSQueryOptions
};
