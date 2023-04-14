import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakeDb';

const Details = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        async function fetchJob() {
            try {
                const response = await fetch('/jobs.json');
                const data = await response.json();
                const jobData = data.find((e) => e.id === parseInt(id))
                setJob(jobData);
            } catch (error) {
                console.error(error);
            }
        }
        fetchJob();
    }, [id]);

    if (!job) {
        return <div className='text-2xl text-center'>Loading...</div>;
    }
    const handleApplyJob = (id) => {
        addToDb(id)
        toast.success('You Applied successfully')
    }

    return (
        <div>
            <h1 className='text-center font-semibold text-4xl my-10'>Details Page</h1>
            {job &&
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center my-5">
                    <div className='grid gap-5'>
                        <p><span className='font-bold'>Job Description:</span> {job.job_description}</p>
                        <p><span className='font-bold'>Job Responsibility: </span>{job.job_responsibility}</p>
                        <p> <span className='font-bold'>Educational Requirements:</span></p>
                        <p>{job.educational_requirements}</p>
                        <p> <span className='font-bold'>Experiences:</span></p>
                        <p>{job.experiences}</p>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content bg-indigo-400">
                        <div className="card-body text-black">
                            <h2 className="card-title font-bold">Job Details</h2>
                            <hr />
                            <p><span className='font-bold'>Salary:</span>
                                {job.salary}</p>
                            <p><span className='font-bold'>Job Title</span>
                                {job.job_title}</p>
                            <p className='font-bold card-title my-2'>Contact Information</p>
                            <hr />
                            <p><span className='font-bold'>Phone:</span>  {job.contact_information.phone}</p>
                            <p><span className='font-bold'>Email:</span>  {job.contact_information.email}</p>
                            <p><span className='font-bold'>Address:</span>  {job.location}</p>
                            <div className="card-actions justify-center mt-5">
                                <button onClick={() => handleApplyJob(id)} className="btn">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;