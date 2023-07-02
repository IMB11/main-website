export default function (url: string) {
  const baseURL = process.env.API_URL ?? "http://localhost:3000"
  return useFetch(baseURL + url)
}
