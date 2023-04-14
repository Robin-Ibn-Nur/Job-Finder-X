import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./AppliedJobs.css"
import FilteredJobs from './FilteredJobs';

const AppliedJobs = () => {
    const data = useLoaderData();
    const [isRemote, setIsRemote] = useState(false);
    const [isOnsite, setIsOnsite] = useState(false);

    const jobs = isRemote || isOnsite
        ? data?.filter((job) => job.remote_or_onsite === (isRemote ? 'Remote' : 'Onsite'))
        : data;

    return (
        <div>
            <h1 className='text-center font-semibold text-4xl my-10'>Applied Jobs</h1>
            <div className='text-center font-bold'>
                <label className='mr-5'>
                    <input
                        type="checkbox"
                        checked={isRemote}
                        onChange={(e) => setIsRemote(e.target.checked)}
                    />
                    Remote Only
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={isOnsite}
                        onChange={(e) => setIsOnsite(e.target.checked)}
                    />
                    Onsite Only
                </label>
            </div>
            {
                jobs?.map(job => <FilteredJobs
                    key={job?.id}
                    job={job}
                ></FilteredJobs>)
            }
        </div>
    );

};

export default AppliedJobs;