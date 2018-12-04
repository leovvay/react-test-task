import 'babel-polyfill'

export async function apiFetch({ url, onSuccess, onError }) {
  try {
    const res = await fetch(url)
    const json = await res.json()
    if (!res.ok)
      throw new Error(JSON.stringify(json))
    return onSuccess(json)
  } catch (err) {
    return onError(err)
  }
}
