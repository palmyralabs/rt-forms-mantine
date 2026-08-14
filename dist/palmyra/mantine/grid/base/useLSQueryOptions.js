import { getGridStore as S } from "./gridPersistence.js";
const p = (s) => {
  const r = s.pageSize ? s.pageSize : 15, a = r instanceof Array ? r[0] : r, l = S(s.mode), o = () => {
    l.write(s.lsKey, t);
  }, n = () => l.read(s.lsKey) || {}, t = n();
  return t.limit == null && (t.limit = a), {
    getLSOptions: () => t,
    setSortColumns: (e) => {
      e ? t.sort = e : delete t.sort, o();
    },
    setQuickSearch: (e) => {
      t.offset = 0, o();
    },
    setFilter: (e) => {
      e ? t.filter = e : delete t.filter, t.offset = 0, o();
    },
    setPage: (e) => {
      const c = n().limit || a || 15, i = e || 0;
      t.offset = i * c, o();
    },
    setPageSize: (e) => {
      const c = n().offset || 0, i = e > 0 || e == -1 ? e : 15, f = Math.floor(c / i) * i;
      t.limit = i, t.offset = f, o();
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
  p as useLSQueryOptions
};
