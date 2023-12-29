export function urlQueryBuilder(
  ...args: Array<[string, string | number | undefined | null]>
) {
  const validArgs = args.filter(
    ([argKey, argVal]) => argVal !== undefined && argVal !== null,
  );
  if (validArgs.length === 0) return '';
  const queryArgs = validArgs.map(([argKey, argVal]) => argKey + '=' + argVal);
  return queryArgs.join('&&');
}
