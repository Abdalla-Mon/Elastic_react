import { Pagination } from "@mui/material";
import { useContext } from "react";
import { ElasticSearchContext } from "../../../contexts/ElasticSearchContext.js";

export default function ElasticPagination() {
  const { page, setPage, size, data } = useContext(ElasticSearchContext);
  if (!data) {
    return null;
  }
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { total } = data;
  const count = Math.ceil(total / size);
  return (
    <Pagination
      count={count}
      color="primary"
      page={+page}
      onChange={handleChange}
      className={"mx-auto w-fit my-5"}
    />
  );
}
