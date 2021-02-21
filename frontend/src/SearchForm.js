import React, { useState } from "react";
import "./SearchForm.css"

/* Search form used in CompanyList and JobList to filter results */

function SearchForm({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div className="SearchForm my-5 mx-0">
        <form className="SearchForm-form form-inline" onSubmit={handleSubmit}>
          <input
              className="form-control form-control-lg flex-grow-1"
              name="searchTerm"
              placeholder="Enter search term.."
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit" className="SearchForm-btn btn btn-lg btn-primary m-1">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
