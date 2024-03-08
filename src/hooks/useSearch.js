import { useEffect, useState } from "react";
import { getSearchResults } from "../services/apiSearchResults";
import { useSelector } from "react-redux";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [segmentsData, setSegmentsData] = useState([]);

  const searchCategory = useSelector(
    (state) => state.searchResults.segmentCategory
  );

  useEffect(
    function () {
      async function fetchSearchResults() {
        const results = await getSearchResults(searchCategory);
        setSegmentsData(results);
      }
      fetchSearchResults();
    },
    [searchCategory]
  );

  useEffect(
    function () {
      if (searchValue === "") {
        setFilteredResults([]);
      } else {
        let filteredResultsTemp = segmentsData.filter((segmentData) =>
          segmentData.name.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredResults(filteredResultsTemp);
      }
    },
    [segmentsData, searchValue]
  );

  return {
    searchValue,
    setSearchValue,
    filteredResults,
    setFilteredResults,
  };
};

export default useSearch;
