import React, { useEffect, useState } from 'react';
import Category from './Category';



const JobCategoryList = () => {
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