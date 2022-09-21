import React from 'react';
import { Line } from '@ant-design/plots';

const LineChart = () => {
    const data = [
        {
            "Date": "0",
            "scales": 600
        },
        {
            "Date": "07",
            "scales": 900
        },
        {
            "Date": "14",
            "scales": 700
        },
        {
            "Date": "21",
            "scales": 1100


        },
        {
            "Date": "28",

        }
    ];

    const config = {
        height: 260,
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            tickCount: 5,
        },
        yAxis: {
            tickCount: 3
        },
        smooth: true,
        lineStyle: {
            lineWidth: 5,
        },


    };
    return (
        <div>
            <Line {...config} />
        </div>
    );
};

export default LineChart;