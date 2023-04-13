import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
    { name: 'Assignment 1', value: 60 },
    { name: 'Assignment 2', value: 60 },
    { name: 'Assignment 3', value: 60 },
    { name: 'Assignment 4', value: 60 },
    { name: 'Assignment 5', value: 50 },
    { name: 'Assignment 6', value: 60 },
    { name: 'Assignment 7', value: 60 },
    { name: 'Assignment 8', value: 60 },

];


const Statistics = () => {
    return (
        <div className='text-center'>
            <h1 className='text-center font-semibold text-4xl my-10'>Details Page</h1>
            <h3 className='text-3xl font-bold my-5'>Avarage Marks: 58.75</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;