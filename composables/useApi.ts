export default async function (route: string) {
  const runtimeConfig = useRuntimeConfig();

  const res = (await fetch(`${runtimeConfig.public.apiURL}${route}`)).json();
  return res;
}
