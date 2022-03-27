const BASE_URL =
  "https://api.spaceflightnewsapi.net/v3" || process.env.BASE_URL;

export async function getAllReports(page = 1) {
  const request = await fetch(`${BASE_URL}/reports?_limit=10&_start=${page}`);
  return request;
}

export async function getReportsCount() {
  const request = await fetch(`${BASE_URL}/reports/count`);
  return request;
}

export async function getReportById(id: number) {
  const request = await fetch(`${BASE_URL}/reports/${id}`);
  return request;
}
