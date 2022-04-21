import React from 'react';
import Highcharts from 'highcharts'
import BarChart from 'highcharts-react-official'
import {annualConsumptionCalculator, annualEnergy} from "../../../util";


function BarChartEnergy({info}) {
    const annualConsumption = info && annualConsumptionCalculator(info.electricityRate, info.monthlyBill);
    const solar = info && annualEnergy(info.panelArea, info.irradiation)
    const config = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Yearly Energy Consumption Vs. Generation(Kwh)'
        },
        xAxis: {
            categories: [''],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Energy (Kwh)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' Kwh'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.3)',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Solar Generated',
            data: [parseInt(solar)]
        }, {
            name: 'Total Consumed',
            data: [parseInt(annualConsumption)]
        }],
    }

    return (
        <div>
            <BarChart highcharts={Highcharts} options={config}/>
        </div>
    );
}

export default BarChartEnergy;