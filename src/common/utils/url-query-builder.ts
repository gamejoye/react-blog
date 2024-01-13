export function urlQueryBuilder(
  params: Record<string | number, string | number>,
) {
  const entries = Object.entries(params).filter(
    ([key, value]) => value !== undefined,
  );
  const query = entries.map(([key, value]) => `${key}=${value}`).join('&');
  return query;
}
