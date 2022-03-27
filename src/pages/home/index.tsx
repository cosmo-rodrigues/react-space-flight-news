// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
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
  const { filteredData, handleFilter, wordEntered } = useSearch(data);
  const [currentPage, setCurrentPage] = useState(1);

  let pageSize = 10;
  const pagesTotal = Math.floor(data.length / pageSize);
  const articlesPagesAmount = data.length;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

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
      <Stack spacing={2}>
        <Pagination
          onClick={(page) => handleChangePage(page)}
          count={pagesTotal}
          page={currentPage}
          color="primary"
        />
      </Stack>
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
        : currentTableData.map((article) => (
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
        <Pagination count={10} color="primary" />
      </Stack>
    </Container>
  );
}
