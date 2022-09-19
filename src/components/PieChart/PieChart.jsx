import React from 'react';
import { Pie } from '@ant-design/plots';
import './PieChart.css';


const PieChart = () => {
    const data = [
        {
            type: '50% TV',
            value: 50,
        },
        {
            type: '25% Laptop',
            value: 25,
        },
        {
            type: '25% Others',
            value: 25,
        }
    ];
    const config = {
        appendPadding: 3,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.8,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 12,
            },

        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'AntV\nG2Plot',
            }
        },
    };


    return (
        <div className='mx-auto'>
            <Pie {...config} style={{ height: '340px', width: 'auto' }} />
        </div>
    );
};

export default PieChart;