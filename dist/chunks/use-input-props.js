import "react";
import "react/jsx-runtime";
import { u as I, e as O } from "./factory.js";
function D(c, u, _) {
  const r = I(c, u, _), {
    label: y,
    description: d,
    error: t,
    required: o,
    classNames: s,
    styles: p,
    className: m,
    unstyled: e,
    __staticSelector: i,
    __stylesApiProps: a,
    errorProps: w,
    labelProps: A,
    descriptionProps: b,
    wrapperProps: f,
    id: n,
    size: l,
    style: h,
    inputContainer: v,
    inputWrapperOrder: x,
    withAsterisk: N,
    variant: P,
    vars: W,
    mod: S,
    ...k
  } = r, { styleProps: q, rest: z } = O(k), C = {
    label: y,
    description: d,
    error: t,
    required: o,
    classNames: s,
    className: m,
    __staticSelector: i,
    __stylesApiProps: a || r,
    errorProps: w,
    labelProps: A,
    descriptionProps: b,
    unstyled: e,
    styles: p,
    size: l,
    style: h,
    inputContainer: v,
    inputWrapperOrder: x,
    withAsterisk: N,
    variant: P,
    id: n,
    mod: S,
    ...f
  };
  return {
    ...z,
    classNames: s,
    styles: p,
    unstyled: e,
    wrapperProps: { ...C, ...q },
    inputProps: {
      required: o,
      classNames: s,
      styles: p,
      unstyled: e,
      size: l,
      __staticSelector: i,
      __stylesApiProps: a || r,
      error: t,
      variant: P,
      id: n
    }
  };
}
export {
  D as u
};
