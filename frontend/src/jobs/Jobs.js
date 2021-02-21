import React, {useEffect, useState} from "react";
import JoblyApi from "../api/api";
import SearchForm from "../SearchForm";
import JobCardList from "./JobCardList";
import "./Jobs.css";

const Jobs = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        search()
    }, []);

    async function search(title) {
        let jobsList = await JoblyApi.getJobs(title);
        setJobs(jobsList);
    }
    
    if (!jobs) return <h1>Loading...</h1>

    return (
        <div className="Jobs mt-5 col-sm-12 col-md-8 offset-sm-0 offset-md-2">
            <div className="Jobs-card card border-0">
                <div className="Jobs-search-div p-0 card-body">
                <SearchForm search={search} />

                </div>
            </div>
            {jobs.length
                    ? <JobCardList jobs={jobs} />
                    : <p>No results found.</p>
                }
        </div>

    )
}

export default Jobs;