const BASE_URL =
  "https://api.spaceflightnewsapi.net/v4/articles";

export function getAllArticles(page = 1) {
  const request = fetch(`${BASE_URL}/articles/?limit=100&offset=${page}`)
    .then((data) => data.json())
    .catch((erro) => console.error(erro));

  return request;
}

export function getArticlesCount() {
  const request = fetch(`${BASE_URL}/articles/count`)
    .then((data) => data.json())
    .catch((erro) => console.error(erro));

  return request;
}

export function getArticleById(id: number) {
  const request = fetch(`${BASE_URL}/articles/${id}`)
    .then((data) => data.json())
    .catch((erro) => console.error(erro));

  return request;
}

export function getLaunchById(id: number) {
  const request = fetch(`${BASE_URL}/articles/launch/${id}`)
    .then((data) => data.json())
    .catch((erro) => console.error(erro));
  return request;
}

export function getEventById(id: number) {
  const request = fetch(`${BASE_URL}/articles/event/${id}`)
    .then((data) => data.json())
    .catch((erro) => console.error(erro));
  return request;
}
