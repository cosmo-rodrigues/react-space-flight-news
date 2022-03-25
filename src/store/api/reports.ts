const BASE_URL = process.env.BASE_URL;

export async function getAllReports() {
  const request = await fetch(`${BASE_URL}/reports`);
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
