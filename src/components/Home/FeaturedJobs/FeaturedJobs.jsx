import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            
        </div>
    );
};

export default FeaturedJobs;