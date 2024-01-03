export function urlQueryBuilder(
  params: Record<string | number, string | number>
) {
  const query = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
  return query;
}
