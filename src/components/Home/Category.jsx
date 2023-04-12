import React from 'react';

const Category = ({ card }) => {
    console.log(card);
    const { jobs_available, logo, title } = card;
    return (
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={logo} />
                <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-snug">Jobs Available: {jobs_available}+</p>
                    <p>{title}</p>
                </div>

            </div>

        </div>
    );
};

export default Category;