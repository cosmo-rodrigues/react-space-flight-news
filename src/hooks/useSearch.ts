//@ts-nocheck
import { useEffect, useState } from "react";

export function useSearch(data) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  function handleFilter(value) {
    const searchWord = value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  return { filteredData, handleFilter, wordEntered };
}
