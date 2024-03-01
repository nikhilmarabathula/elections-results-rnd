import { useEffect, useState } from "react";
import { getSearchResults } from "../services/apiSearchResults";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [assembliesData, setAssembliesData] = useState([]);

  useEffect(function () {
    async function fetchSearchResults() {
      const results = await getSearchResults();
      setAssembliesData(results);
    }
    fetchSearchResults();
  }, []);

  useEffect(
    function () {
      if (searchValue === "") {
        setFilteredResults([]);
      } else {
        let filteredResultsTemp = assembliesData.filter((assemblyData) =>
          assemblyData.name.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredResults(filteredResultsTemp);
      }
    },
    [assembliesData, searchValue]
  );

  return {
    searchValue,
    setSearchValue,
    filteredResults,
    setFilteredResults,
  };
};

export default useSearch;
