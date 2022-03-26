// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";

import { actions as articlesActions } from "../../store/modules/articles";
import { SearchBar } from "../../components/SearchBar";
import { useSearch } from "../../hooks/useSearch";
import { Articles } from "../../components/Articles";

export function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { filteredData, handleFilter, wordEntered } = useSearch(data);

  function fetchUsers() {
    dispatch(
      articlesActions.getAllArticles((next) => {
        return setData(next);
      })
    );
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <SearchBar value={wordEntered} handleFilter={handleFilter} />
      {wordEntered
        ? filteredData.map((article) => (
            <Articles
              key={`${article.id}`}
              title={article.title}
              summary={article.summary}
              newsSite={article.newsSite}
              imageUrl={article.imageUrl}
              updatedAt={article.updatedAt}
            />
          ))
        : data.map((article) => (
            <Articles
              key={`${article.id}`}
              title={article.title}
              summary={article.summary}
              newsSite={article.newsSite}
              imageUrl={article.imageUrl}
              updatedAt={article.updatedAt}
            />
          ))}
    </Container>
  );
}
