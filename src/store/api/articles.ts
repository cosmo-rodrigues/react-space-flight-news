const BASE_URL = process.env.BASE_URL;

export async function getAllArticles() {
  const request = await fetch(`${BASE_URL}/articles`);
  return request;
}

export async function getArticlesCount() {
  const request = await fetch(`${BASE_URL}/articles/count`);
  return request;
}

export async function getArticleById(id: number) {
  const request = await fetch(`${BASE_URL}/articles/${id}`);
  return request;
}

export async function getLaunchById(id: number) {
  const request = await fetch(`${BASE_URL}/articles/launch/${id}`);
  return request;
}

export async function getEventById(id: number) {
  const request = await fetch(`${BASE_URL}/articles/event/${id}`);
  return request;
}
