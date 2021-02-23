import React, { useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";

import "./JobCard.css";

function JobCard({ id, title, salary, equity, companyName }) {

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(function updateAppliedStatus() {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
      <div className="JobCard card my-4 p-4"> {applied}
          <h6 className="card-title">{title}</h6>
          <div className="JobCard-btn-div">
            <button
                className="JobCard-btn btn font-weight-bold text-uppercase"
                onClick={handleApply}
                disabled={applied}
            >
              {applied ? "Applied" : "Apply"}
            </button>
          </div>
          <p>{companyName}</p>
          {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
          {equity && <div><small>Equity: {equity}</small></div>}

      </div>
  );
}

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}

export default JobCard;