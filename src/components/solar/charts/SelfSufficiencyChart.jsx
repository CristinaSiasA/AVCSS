import React from 'react';
import {Pie} from '@ant-design/plots';
import {annualEnergy, gridUsage} from "../../../util";

const SelfSufficiencyChart = ({info}) => {
    const solar = info && annualEnergy(info.panelArea, info.irradiation)
    const grid = info && gridUsage(info.electricityRate, info.monthlyBill, info.panelArea, info.irradiation)

    const data = [
        {
            type: 'Grid Energy',
            value: grid >= 0 ? grid : 0,
        },
        {
            type: 'Self Produced',
            value: Math.abs(solar),
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{percentage}',
            style: {
                textAlign: 'center',
                fontSize: 14,
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
                content: 'Self Sufficiency',
            },
        },
    };
    return (
        <div>
            <Pie {...config} />
        </div>
    )
};
export default SelfSufficiencyChart;