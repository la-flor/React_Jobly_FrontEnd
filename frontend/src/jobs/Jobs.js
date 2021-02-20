import React, {useEffect, useState} from "react";
import JoblyApi from "../api/api";
import SearchForm from "../SearchForm";
import JobCardList from "./JobCardList";

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
        <div className="Jobs">
            <SearchForm search={search} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p>No results found.</p>
            }
        </div>

    )
}

export default Jobs;