import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(function retrieveInitialCompanyList() {
        search();
    }, []);

    async function search(name) {
        let companies = await JoblyApi.getCompanyList(name);
        setCompanies(companies);
    }


    return (
        <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div className="CompanyList-list">
                  {companies.map(company => (
                      <CompanyCard
                          key={company.handle}
                          handle={company.handle}
                          name={company.name}
                          description={company.description}
                          logoUrl={company.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p>No results found!</p>
            )}
      </div>
    )
}

export default CompanyList;