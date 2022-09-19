import React from 'react';
import { Line } from '@ant-design/plots';

const LineChart = () => {
    const data = [
        {
            "Date": "0",
            "scales": 1800
        },
        {
            "Date": "7",
            "scales": 600
        },
        {
            "Date": "14",
            "scales": 1200
        },
        {
            "Date": "21",
            "scales": 210.287

        },
        {
            "Date": "28",

        }
    ];

    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };
    return (
        <div>
            <Line {...config} />
        </div>
    );
};

export default LineChart;