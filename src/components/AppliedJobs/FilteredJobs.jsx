import React from 'react';
import { Link } from 'react-router-dom';

const FilteredJobs = ({ job }) => {
    const {
        id,
        company_logo,
        job_title,
        company_name,
        location,
        remote_or_onsite,
        fulltime_or_parttime,
        salary
    } = job;


    const containerStyle = {
        backgroundImage: `url(${company_logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div>
            <section className="border rounded-3xl mx-auto w-[1300px] border-red-300 my-7 text-black">
                <div className="container flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3" style={containerStyle}></div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none">{job_title}</h2>
                        <p className="mt-4 mb-8 text-sm">{company_name}</p>
                        <p className='flex gap-5'>
                            <span className='text-[#7E90FE] border outline outline-offset-2 outline-[#7E90FE] px-2 rounded-md '>{remote_or_onsite}</span>
                            <span className='text-[#7E90FE] border outline outline-offset-2 outline-[#7E90FE] px-2 rounded-md '>{fulltime_or_parttime}</span>
                        </p>
                        <div className='mt-5 flex items-center justify-start'>
                            <p><span className=''>🌍</span> {location}</p>
                            <p className='ml-10'><span className='text-sm'>💲</span> Salary: {salary}</p>
                        </div>
                    </div>
                    <Link to={`/details/${id}`} className="self-center px-[18px] py-[15px] text-md font-medium rounded w-[157px] dark:bg-violet-400 dark:text-gray-900">View Details</Link>
                </div>
            </section>
        </div>
    );
};

export default FilteredJobs;