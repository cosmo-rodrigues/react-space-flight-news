// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";

import { actions as articlesActions } from "../../store/modules/articles";
import { SearchBar } from "../../components/SearchBar";
import { useSearch } from "../../hooks/useSearch";
import { Articles } from "../../components/Articles";
import { Pagination, Stack } from "@mui/material";

export function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filteredData, handleFilter, wordEntered } = useSearch(data);
  const [articles, setArticles] = useState([]);
  const [range, setRange] = useState({ from: 0, to: 10 });
  const [page, setPage] = useState(1);

  function fetchUsers() {
    dispatch(
      articlesActions.getAllArticles((next) => {
        setLoading(false);
        return setData(next);
      })
    );
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (filteredData) {
      return setArticles(filteredData);
    }
    return setArticles(data);
  }, [filteredData]);

  function handleChange(event, value) {
    if (value > page && value <= 10) {
      setPage(value);
      setRange((prev) => {
        return {
          ...prev,
          from: range.to,
          to: range.to + 10,
        };
      });
    }
    if (value < page && value > 0) {
      setPage(value);
      setRange((prev) => {
        return {
          ...prev,
          from: range.from - 10,
          to: range.to - 10,
        };
      });
    }
  }

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <SearchBar value={wordEntered} handleFilter={handleFilter} />
          {wordEntered
            ? articles.map((article) => (
                <Articles
                  key={`${article.id}`}
                  title={article.title}
                  summary={article.summary}
                  newsSite={article.newsSite}
                  imageUrl={article.imageUrl}
                  updatedAt={article.updatedAt}
                />
              ))
            : data
                .slice(range.from, range.to)
                .map((article) => (
                  <Articles
                    key={`${article.id}`}
                    title={article.title}
                    summary={article.summary}
                    newsSite={article.newsSite}
                    imageUrl={article.imageUrl}
                    updatedAt={article.updatedAt}
                  />
                ))}
          <Stack spacing={2}>
            <Pagination
              count={10}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </>
      )}
    </Container>
  );
}
