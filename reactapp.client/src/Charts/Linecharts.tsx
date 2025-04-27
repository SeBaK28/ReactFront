import React from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Dzien1',
        pv: 2,
    },
    {
        name: 'Dzien2',
        pv: 1,
    },
    {
        name: 'Dzien3',
        pv: 10,
    },
    {
        name: 'Dzien4',
        pv: 4,
    },
    {
        name: 'Dzien5',
        pv: 5,
    },
    {
        name: 'Dzien6',
        pv: 4,
    },
    {
        name: 'Dzien7',
        pv: 4,
    },
];

const LineCharts = () => {
    return (
        <div style={{width: '75%', margin:'0 auto'} }>        
            <LineChart width={700} height={275} data={data}>
                <YAxis />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name"/>
            </LineChart>
        </div>
    );
};

export default LineCharts;
