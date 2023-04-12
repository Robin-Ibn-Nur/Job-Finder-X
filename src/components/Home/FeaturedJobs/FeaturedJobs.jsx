import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';
// const data = jobs.slice(0, 4);
    // console.log(data);
const FeaturedJobs = () => {
    const jobs = useLoaderData();
    
    const [displayData, setDisplayData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const newDisplayData = showAll ? jobs : jobs.slice(0, 4);
        setDisplayData(newDisplayData);
    }, [jobs, showAll]);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <section className="text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="text-black">
                    <p className="p-2  text-center uppercase text-4xl font-bold leading-none text-center sm:text-5xl">Featured Jobs</p>
                    <h1 className="text-sm font-medium tracking-wider">Top Opportunities: Discover the Latest Featured Jobs in Your Field</h1>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        displayData.map(d => <Job
                            key={d.id}
                            d={d}
                            handleShowAll={handleShowAll}
                            showAll={showAll}
                        ></Job>)
                    }

                </div>
                <div className="flex justify-center">
                    {
                        !showAll && (
                            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                        )
                    }
                    {/* <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button> */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedJobs;