// @ts-nocheck
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";

import { actions as articlesActions } from "../../store/modules/articles";

export function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

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
      <h1>Home</h1>
    </Container>
  );
}
