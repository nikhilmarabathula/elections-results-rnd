import { useEffect, useState } from "react";
import { getSearchResults } from "../services/apiSearchResults";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(function () {
    async function fetchSearchResults() {
      const results = await getSearchResults();
      setFilteredResults(results);
    }
    fetchSearchResults();
  }, []);

  useEffect(function () {}, [searchValue]);

  return {
    searchValue,
    setSearchValue,
    filteredResults,
    setFilteredResults,
  };
};

export default useSearch;
