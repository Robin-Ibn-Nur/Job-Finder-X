import React, { useEffect, useState } from 'react';
import Category from './Category';



const JobCategoryList = () => {
    // const data = [
    //     {
    //         "job_title": "Financial Analyst",
    //         "jobs_available": 50,
    //         "salary_range": "$60,000 - $80,000",
    //         "experience_level": "Entry-level"
    //     },
    //     {
    //         "job_title": "Investment Banker",
    //         "jobs_available": 20,
    //         "salary_range": "$100,000 - $150,000",
    //         "experience_level": "Senior"
    //     },
    //     {
    //         "job_title": "Accountant",
    //         "jobs_available": 30,
    //         "salary_range": "$50,000 - $70,000",
    //         "experience_level": "Entry-level"
    //     },
    //     {
    //         "job_title": "Financial Advisor",
    //         "jobs_available": 15,
    //         "salary_range": "$80,000 - $100,000",
    //         "experience_level": "Mid-level"
    //     }
    // ]

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = '/public/cards.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2  text-center uppercase text-4xl font-bold leading-none text-center sm:text-5xl">Job Category List</p>
                <h1 className="text-sm font-medium tracking-wider">Explore thousands of job opportunities with all the information you need. Its your future</h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-4 mt-5'>
                    {
                        data.map(card => <Category key={card.id} card={card} />)
                    }
                </div>
            </div>

        </section>

    );
};

export default JobCategoryList;