/* eslint-disable no-param-reassign */
// https://github.com/chakra-ui/chakra-ui/blob/ff0dfb2b735a047c7a811f65b20fb81fa3db6f4a/packages/utils/src/object.ts 에서 복사됨

/**
 * 문자열 경로를 사용하여 깊게 중첩된 객체에서 값을 가져옵니다.
 * 값을 기억합니다.
 * @param obj - 객체
 * @param path - 문자열 경로
 * @param fallback  - 대체값
 */
export function get(
  obj: Record<string, any>,
  path: string | number,
  fallback?: any,
  index?: number
) {
  const key = typeof path === 'string' ? path.split('.') : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

type Get = (
  obj: Readonly<Record<string, unknown>>,
  path: string | number,
  fallback?: any,
  index?: number
) => any;

/**
 * 함수의 반환 값을 메모이제이션합니다.
 * @param fn - 메모이제이션 할 함수
 */
export const memoize = (fn: Get) => {
  const cache = new WeakMap();

  const memoizedFn: Get = (obj, path, fallback, index) => {
    if (typeof obj === 'undefined') {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    const map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    const value = fn(obj, path, fallback, index);

    map.set(path, value);

    return value;
  };

  return memoizedFn;
};

export const memoizedGet = memoize(get);
