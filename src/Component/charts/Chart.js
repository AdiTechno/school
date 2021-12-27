import './chart.css'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function chart({title,data,dataKey,dataKey1,grid}) {
    
    return (
        <div className='chart'>
            <h3 className="chartTitle">Collection Analysis {title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                    <Line type="monotone" dataKey={dataKey1} stroke='darkcyan'/>
                    <YAxis/>
                    <Tooltip/>
                    {grid && <CartesianGrid/>} 
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
