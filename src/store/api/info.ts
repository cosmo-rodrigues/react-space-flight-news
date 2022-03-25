const BASE_URL =
  "https://api.spaceflightnewsapi.net/v3" || process.env.BASE_URL;

export async function getSitesNameList() {
  const request = await fetch(`${BASE_URL}/info`);
  return request;
}
