const u = (r, e) => {
  const s = e?.axiosCustomizer;
  return !r && !s ? e : {
    ...e || {},
    axiosCustomizer: (t) => {
      s && s(t), r && t.interceptors.response.use(void 0, (o) => {
        try {
          r(o);
        } catch {
        }
        return Promise.reject(o);
      });
    }
  };
};
export {
  u as buildFetchFailureStoreOptions
};
