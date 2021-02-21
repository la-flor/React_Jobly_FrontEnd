import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import CompanyCard from "./CompanyCard";

function CompanyJobOpenings() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyJobs() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <h1>Loading...</h1>

  return (
      <div className="CompanyJobOpenings mt-5 col-sm-12 col-md-8 offset-sm-0 offset-md-2">
        <CompanyCard 
            handle={company.handle} 
            name={company.name} 
            description={company.description} 
            logoUrl={company.logoUrl} />
        <JobCardList 
            jobs={company.jobs} />
      </div>
  );
}

export default CompanyJobOpenings;
