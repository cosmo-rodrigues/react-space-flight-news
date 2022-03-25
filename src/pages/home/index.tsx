// @ts-nocheck
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, UserCardWrapper } from './styles';

export function Home() {
  const [data, setData] = useState<IUserProps>([]);
  const dispatch = useDispatch();

  function fetchUsers() {
    dispatch(
      fakerActions.fetchAllUsersFaker((next) => {
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
