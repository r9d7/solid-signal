import type { JSX } from "astro/jsx-runtime";

export function sample<T extends unknown>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function forwardReturned<TArg extends unknown | undefined>(
  arg: TArg,
  successCb: (arg: NonNullable<TArg>) => JSX.Element,
  errorCb?: () => JSX.Element,
) {
  return arg ? successCb(arg!) : errorCb?.();
}
