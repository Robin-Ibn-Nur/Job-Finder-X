import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ d }) => {
    const {
        id,
        company_logo,
        company_name,
        job_title,
        location,
        remote_or_onsite,
        fulltime_or_parttime,
        salary

    } = d;

    return (
        <>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={company_logo} />
                <div className="p-6 space-y-2 w-max">
                    <h3 className="text-2xl font-semibold ">{job_title}</h3>
                    <span className="text-xs dark:text-gray-400">{company_name}</span>
                    <p className='flex justify-between'>
                        <span className='border rounded p-1 bg-[#7E90FE]'>{remote_or_onsite}</span>
                        <span className='border rounded p-1 bg-[#7E90FE]'>{fulltime_or_parttime}</span></p>
                    <div className='my-5'>
                        <p><span className='text-2xl'>ϙ</span> Location: {location}</p>
                        <p>Salary: {salary}</p>
                    </div>
                </div>
                <Link to={`/details/${id}`} className="btn bg-[#7E90FE] my-5">View Details</Link>
            </div>
        </>
    );
};

export default Job;