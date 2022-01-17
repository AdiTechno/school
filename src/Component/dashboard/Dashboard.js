import React from 'react'
import Chart from '../charts/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';

import {Feedata} from '../../Feedata'
import './dashboard.css'
export default function Dashboard() {
    return (
        <div className="dashboard">
            <FeaturedInfo/>
            <Chart data={Feedata} title="Collection" grid dataKey="Fee" dataKey1="Conveyance"/>
           
        </div>
    )
}
