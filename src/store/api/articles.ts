const BASE_URL =
  "https://api.spaceflightnewsapi.net/v3" || process.env.BASE_URL;

export function getAllArticles() {
  const request = fetch(`${BASE_URL}/articles`)
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
