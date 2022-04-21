import React, {useContext} from 'react';
import { Pie } from '@ant-design/plots';
import {CalculationContext} from "../../../context";

// import {
//     annualEnergy,
//     gridUsage
// } from "../../../util";
//
//
// const data = useContext(CalculationContext);
// const solar = data && annualEnergy(data.panelArea,data.irradiation)
// const grid = data && gridUsage(data.electricityRate, data.monthlyBill, data.panelArea, data.irradiation)



const DemoPie = () => {

    const data = [
        {
            type: 'Grid Energy',
            value: 27,
        },
        {
            type: 'Self Produced',
            value: 25,
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
export default DemoPie;