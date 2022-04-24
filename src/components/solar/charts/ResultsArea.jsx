import React, {useContext} from 'react';
import {CalculationContext} from "../../../context";
import EstimationCard from "../EstimationCard";
import {
    annualConsumptionCalculator,
    annualEnergy,
    annualSaving, carbonEmission,
    gridUsage, investmentCost, payBack,
    totalPanelsCalculator,
} from "../../../util";


//the results are shown using context and displayed in the estimation card component
function ResultsArea() {
    const data = useContext(CalculationContext);
    const annualConsumption = data && annualConsumptionCalculator(data.electricityRate,data.monthlyBill);
    const totalPanel = data && totalPanelsCalculator(data.panelArea);
    const solar = data && annualEnergy(data.panelArea,data.irradiation)
    const grid = data && gridUsage(data.electricityRate, data.monthlyBill, data.panelArea, data.irradiation)
    const saving = data && annualSaving(data.electricityRate, data.panelArea, data.irradiation)
    const investment= data && investmentCost(data.panelArea)
    const pay= data && payBack(data.electricityRate, data.panelArea, data.irradiation)
    const emission= data && carbonEmission(data.panelArea,data.irradiation)
    return (
        <div className="section_container_light py-5">
            <div className="container">
                <h1 className="pb-5">~ YOUR <span style={{color: '#4cb269'}}>ESTIMATED</span> SAVINGS! ~</h1>
                <div className="row">
                    <EstimationCard icon="bi bi-lightbulb" title="Your Estimated Annual Energy Consumption" data={annualConsumption && annualConsumption}
                                    unit={"Kmh"}/>
                    <EstimationCard icon="bi bi-grid-3x3" title="Estimated Solar Panels Required" data={totalPanel && totalPanel}
                                    unit={"Panels"}/>
                    <EstimationCard icon="bi bi-sunrise" title="Annual Solar Energy Generated" data={solar && solar} unit={"Kmh"}/>
                    <EstimationCard icon="bi bi-lightning" title="Annual Grid Energy Usage" data={grid && grid} unit={"Kmh"}/>
                    <EstimationCard icon="bi bi-piggy-bank" title="Estimated Annual Savings" data={saving && saving} unit={"€"}/>
                    <EstimationCard icon="bi bi-coin" title=" Estimated Investment Between" data={investment && `${investment.min}-${investment.max}`} unit={"€"}/>
                    <EstimationCard icon="bi bi-cash-coin" title="Estimated Investment Pay Back" data={pay && pay}
                                    unit={"Years"}/>
                    <EstimationCard icon="bi bi-arrow-down-circle" title="Carbon Emissions Reduction per Year" data={emission && emission}
                                    unit={"lbs CO2"}/>

                </div>
            </div>
        </div>
    );
}

export default ResultsArea;