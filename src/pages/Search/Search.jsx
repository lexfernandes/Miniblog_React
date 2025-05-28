import React from "react";

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Search = () => {
  return (
    <div>
      <h2>Search</h2>
      <p>{search}</p>
    </div>
  );
};

export default Search;
