import { useContext, useEffect } from "react";
import ElasticSearchField from "./ElasticSearchFilters/ElasticSearchField.jsx";
import ElasticSizeOfItemsPerPage from "./ElasticSearchFilters/ElasticSizeOfItemsPerPage.jsx";
import { FontSizeChanger } from "./ElasticSearchFilters/FontSizeChange.jsx";
import ElasticPagination from "./ElasticSearchFilters/ElasticPagination.jsx";
import ElasticContainer from "./ElasticContent/ElasticContainer.jsx";
import { ElasticSearchContext } from "../../contexts/ElasticSearchContext.js";

export default function ElasticSearch() {
  const { search, page, size, error, fetchData } =
    useContext(ElasticSearchContext);

  useEffect(() => {
    fetchData(search, page, size);
  }, [search, page, size]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={"container mx-auto px-5"}>
      <div className={"searchBar py-3"}>
        <ElasticSearchField />
        <div className={"flex gap-5 flex-col sm:flex-row py-3 justify-between"}>
          <FontSizeChanger />
          <ElasticSizeOfItemsPerPage />
        </div>
        <ElasticContainer />
        <ElasticPagination />
      </div>
    </div>
  );
}
