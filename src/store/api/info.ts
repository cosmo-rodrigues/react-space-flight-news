const BASE_URL = process.env.BASE_URL;

export async function getSitesNameList() {
  const request = await fetch(`${BASE_URL}/info`);
  return request;
}
