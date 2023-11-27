export default async function (route: string) {
  const runtimeConfig = useRuntimeConfig();

  const res = await useFetch(`${runtimeConfig.public.apiURL}${route}`);
  return res.data;
}
