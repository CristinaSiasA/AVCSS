import {useContext, useState} from 'react';
import Highcharts from 'highcharts'
import BarChart from 'highcharts-react-official'
import {CalculationContext} from "../../../context";

import {
    annualConsumptionCalculator,
    annualEnergy
} from "../../../util";




function BarChartEnergy(props) {
    const data = useContext(CalculationContext);
    const annualConsumption = data && annualConsumptionCalculator(data.electricityRate, data.monthlyBill);
    const solar = data && annualEnergy(data.panelArea, data.irradiation)

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
            data: {solar}
        }, {
            name: 'Total Consumed',
            data: [annualConsumption]
        }],
    }

    return (
        <div>
          <BarChart highcharts={Highcharts} options={config}/>
        </div>
    );
}

export default BarChartEnergy;