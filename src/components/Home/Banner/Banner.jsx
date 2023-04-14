import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="card mx-auto w-4/5 mt-5 lg:card-side bg-base-100 shadow-xl">

                <div className="card-body">
                    {/* <h2 className="card-title">New album is released!</h2> */}
                    <h5 className=" mb-2 text-5xl font-bold tracking-tight ">Unlock Your Career Potential <br /> with <span className='text-[#7E90FE]'>JobFinderX.</span></h5>
                    <p className="mb-3 text[#757575;] font-normal text-gray-700 dark:text-gray-400">JobFinderX is a job search platform that helps job seekers find suitable employment <br /> opportunities based  on their skills, qualifications, and experience. <br /> The platform provides a user-friendly interface that allows job seekers to search <br /> and filter through job listings from a variety of industries and locations.</p>
                    {/* <p>Unlock Your Career Potential with <span className='text-[#7E90FE]'>JobFinderX</span>.</p> */}
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <figure><img className='h-[400px]' src="https://img.freepik.com/free-vector/job-interview-vector_23-2147499572.jpg?w=740&t=st=1681210556~exp=1681211156~hmac=d380e63d427b12025bdaadfdfc01c07a29748dbd85961d0f373b2f47e3d8ecd0" alt="Album" /></figure>
            </div>
        </div>
    );
};

export default Banner;