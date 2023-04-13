import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./AppliedJobs.css"

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    const { company_logo, job_title, company_name } = jobs;
    return (
        <>
            <h1 className='text-center font-semibold text-4xl my-10'>Details Page</h1>
            <div>
                <div class="share black">
                    <a href="#">Share</a>
                    <div>
                        <ul>
                            <li><a href="#">google+</a></li>
                            <li><a href="#">facebook</a></li>
                            <li><a href="#">twitter</a></li>
                        </ul>
                    </div>
                </div>
                {
                    jobs?.map(job => <div key={job?.id} className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={job?.company_logo} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{job?.job_title}</h1>
                                <p className="py-6">{job?.company_name}</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </>
    );
};

export default AppliedJobs;