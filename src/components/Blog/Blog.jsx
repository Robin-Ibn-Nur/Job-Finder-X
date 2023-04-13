import React from 'react';


const Blog = () => {
    return (
        <section>
            <div className="container italic flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-xl underline  font-medium tracking-wider text-center uppercase">Blog</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl ">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">When should you use context API?</h3>
                        <p className="mt-1 dark:text-gray-400">Context API should be used when we have data or state that needs to be shared between multiple components that are not necessarily in a parent-child relationship. Context API allows us to create global state that can be accessed by any component in our React application.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is a custom hook?</h3>
                        <p className="mt-1 dark:text-gray-400">A custom hook is a JavaScript function that uses one or more of the built-in React hooks such as (useState, useEffect, useContext, etc.) By creating a custom hook, we can extract reusable logic from a component and abstract it away into a separate function that can be shared and used across multiple components. Custom hooks follow a naming convention that begins with the word "use" and are just regular JavaScript functions that can accept arguments and return values.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is useRef?</h3>
                        <p className="mt-1 dark:text-gray-400">useRef is a React Hook that lets us reference a value that's not needed for rendering. useRef returns an object with a single property:</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is useMemo?</h3>
                        <p className="mt-1 dark:text-gray-400">useMemo is a React Hook that lets us cache the result of a calculation between re-renders.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;