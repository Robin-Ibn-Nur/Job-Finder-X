import React from 'react';
import JobCategoryList from './JobCategoryList';


const Home = () => {
    return (

        <div>
            <section>
                <a href="#" className="lg:flex flex-col justify-between items-center my-40 mx-auto h-auto w-5/6 bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div className="flex flex-col p-4 leading-normal">
                        <h5 className="mb-2 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">Unlock Your Career Potential with <span className='text-[#7E90FE]'>JobFinderX</span>.</h5>
                        <p className="mb-3 text[#757575;] font-normal text-gray-700 dark:text-gray-400">JobFinderX is a job search platform that helps job seekers find suitable employment opportunities based on their skills, qualifications, and experience. The platform provides a user-friendly interface that allows job seekers to search and filter through job listings from a variety of industries and locations.</p>
                        <button className='bg-[#7E90FE] p-4 rounded text-2xl font-bold text-sky-50 mr-96'>Get Started</button>
                    </div>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-[500px] 
            md:w-3/6 md:rounded-none md:rounded-l-lg" src="https://img.freepik.com/free-vector/job-interview-vector_23-2147499572.jpg?w=740&t=st=1681210556~exp=1681211156~hmac=d380e63d427b12025bdaadfdfc01c07a29748dbd85961d0f373b2f47e3d8ecd0" alt="" />


                </a>
            </section>

            {/* job category list */}
            <div className='mt-40'>
                <JobCategoryList />
            </div>
        </div>

    );
};

export default Home;