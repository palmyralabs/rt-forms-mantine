const Q = (n) => {
  const o = () => {
    const t = JSON.stringify(e);
    sessionStorage.setItem(n.lsKey, t);
  }, i = () => {
    const t = sessionStorage.getItem(n.lsKey);
    if (t)
      try {
        return JSON.parse(t);
      } catch {
        console.error("invalid data for tableFilter ", n.lsKey);
      }
    return {};
  }, e = i();
  return {
    getLSOptions: () => e,
    setSortColumns: (t) => {
      t ? e.sort = t : delete e.sort, o();
    },
    setQuickSearch: (t) => {
    },
    setFilter: (t) => {
      t ? e.filter = t : delete e.filter, o();
    },
    setPage: (t) => {
      const r = i().limit || 15, s = t || 0;
      e.offset = s * r, o();
    },
    setPageSize: (t) => {
      const r = i().offset || 0, s = t > 0 || t == -1 ? t : 15, c = Math.floor(r / s) * s;
      e.limit = s, e.offset = c, o();
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
