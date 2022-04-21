export function annualConsumptionCalculator(electricityRate, monthlyBill) {
    if (electricityRate !== undefined && monthlyBill !== undefined) {
        let yearlyBill = (monthlyBill * 12)
        return (yearlyBill / electricityRate).toFixed(0)
    }
}

export function totalPanelsCalculator(panelArea) {
    return parseInt(panelArea / 2)
}

export function annualEnergy(panelArea, irradiation) {
    const panelYield = .15
    const performanceRatio = .75
    return (panelArea * panelYield * irradiation * performanceRatio).toFixed(0)

}

export function gridUsage(electricityRate, monthlyBill, panelArea, irradiation) {
    const annualEnergyConsumption = annualConsumptionCalculator(electricityRate, monthlyBill)
    const energyGenerated = annualEnergy(panelArea, irradiation)
    return (annualEnergyConsumption - energyGenerated)
}

export function annualSaving(electricityRate, panelArea, irradiation) {
    const energyGenerated = annualEnergy(panelArea, irradiation)
    return (energyGenerated * electricityRate).toFixed(0)

}

export function investmentCost(panelArea) {
    const total = totalPanelsCalculator(panelArea)

    const panelCostMax = 400
    const panelCostMin = 300
    const investmentCostMax = (panelCostMax * total)
    const investmentCostMin = (panelCostMin * total)
    return {
        min: investmentCostMin,
        max: investmentCostMax
    }
}

export function payBack(electricityRate, panelArea, irradiation){
    const {min,max} = investmentCost(panelArea)
    const estimatedInvestment = (max+min)/2
    const annualSavings = annualSaving(electricityRate, panelArea, irradiation)
    return (estimatedInvestment / annualSavings).toFixed(0)
}


export function carbonEmission(panelArea, irradiation){
    const energyGenerated = annualEnergy(panelArea, irradiation)
    const lbsCarbon = .846
    return  (energyGenerated * lbsCarbon).toFixed(0)
}






