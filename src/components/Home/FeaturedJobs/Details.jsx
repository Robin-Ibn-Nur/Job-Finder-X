import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState({});

    console.log(detailsData, id);

    async function fetchData() {
        try {
            const response = await fetch('/public/jobs.json');
            const data = await response.json();
            const jobs = data.find(job => job.id === id);
            console.log(data);
            console.log(jobs);
            setDetailsData(jobs || {});
        } catch (error) {
            console.error(error);
            setDetailsData({ error: 'Could not fetch job details' });
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);




    return (
        <div>
            <h1>Details Page</h1>
            {detailsData ? (
                <div>
                    <p>Company Name: {detailsData.company_name}</p>
                    <p>Location: {detailsData.location}</p>
                    <p>Error: {detailsData.error}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Details;