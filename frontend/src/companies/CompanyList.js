import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";
import "./CompanyList.css";

function CompanyList() {
    const [companies, setCompanies] = useState([]);

    useEffect(function retrieveInitialCompanyList() {
        search();
    }, []);

    async function search(name) {
        const companies = await JoblyApi.getCompanyList(name);
        setCompanies(companies);
    }

    return (
        <div className="CompanyList mt-5 col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <div className="CompanyList-card card border-0">
                <div className="card-body">
                <SearchForm search={search} />
                
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
                                    style={"title"}
                                />
                            ))}
                            </div>
                        ) : (
                            <p>No results found!</p>
                        )}
                </div>
            </div>
      </div>
    )
}

export default CompanyList;