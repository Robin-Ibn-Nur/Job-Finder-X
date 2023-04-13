import React from 'react';
import Banner from './Banner/Banner';
import JobCategoryList from './JobCategoryList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';


const Home = () => {
    return (
        <div>
            <section>
                <Banner />
            </section>
            <section className='my-5 text-center mx-auto'>
                <JobCategoryList />
            </section>
            <section className='my-5 text-center mx-auto'>
                {/* featured Jobs */}
                <FeaturedJobs />
            </section>
        </div>

    );
};

export default Home;