export default function (url: string) {
  return useFetch(useRuntimeConfig().public.apiURL + url)
}
