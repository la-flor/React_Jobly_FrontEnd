import React from "react";
import JobCard from "./JobCard";

function JobCardList({ jobs, apply }) {

  return (
      <div className="JobCardList">
        {jobs.map(job => (
            <JobCard
                key={job.id}
                id={job.id}
                companyName={job.companyName}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
            />
        ))}
      </div>
  );
}

export default JobCardList;