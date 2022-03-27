const BASE_URL =
  "https://api.spaceflightnewsapi.net/v3" || process.env.BASE_URL;

export async function getAllBlogs(page = 1) {
  const request = await fetch(`${BASE_URL}/blogs?_limit=10&_start=${page}`);
  return request;
}

export async function getBlogsCount() {
  const request = await fetch(`${BASE_URL}/blogs/count`);
  return request;
}

export async function getBlogById(id: number) {
  const request = await fetch(`${BASE_URL}/blogs/${id}`);
  return request;
}

export async function getLaunchById(id: number) {
  const request = await fetch(`${BASE_URL}/blogs/launch/${id}`);
  return request;
}

export async function getEventById(id: number) {
  const request = await fetch(`${BASE_URL}/blogs/event/${id}`);
  return request;
}
