export async function getData (API_LINK) {
  const res = await fetch(API_LINK)
  const data = res.json()

  return data
}
