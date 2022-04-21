import React, {useEffect, useState} from 'react';
import {Col, InputNumber, Row, Slider} from "antd";
import ResultsArea from "./charts/ResultsArea";
import ChartsComponents from "./charts";
import './solarCalculator.css'
import {CalculationContext} from "../../context";
import AlertComponent from "../common/AlertComponent";




const CalculatorComponent = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8080/irradiance');
            const fetchedIrradiances = await response.json(response);
            setLocations(fetchedIrradiances);
        }

        fetchData();
    }, [])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const [billValue, setBillValue] = useState(1)
    const [areaValue, setAreaValue] = useState(1)
    const [rateValue, setRateValue] = useState(null)
    const [irradiationValue, setIrradiationValue] = useState(null)
    const [calculationData, setCalculationData] = useState(null)

    function handleBill(value) {
        setBillValue(value)
    }

    function handleRate(e) {
        setRateValue(e.target.value)
    }

    function handleArea(value) {
        setAreaValue(value)
    }

    function handleIrradiation(e) {
        setIrradiationValue(e.target.value)
    }
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

   async function handleCalculate() {
        setLoading(true)
        setError(false)
        await timeout(3000)
        const payload = {
            monthlyBill: parseInt(billValue),
            electricityRate: parseFloat(rateValue),
            panelArea: parseInt(areaValue),
            irradiation: parseInt(irradiationValue)
        }
        if(Object.values(payload).includes(NaN)){
            setError(true)
            setLoading(false)
        } else {
            setLoading(false)
            setError(false)
            setCalculationData(payload)
            setShow(true)
        }


    }

    return (
        <>
            <div className="solarCalculator p-5">
                <div className="container p-5 rounded wrapper">
                    <div className="CalculatorTop">
                        <h1 className="text-white">Solar Savings Calculator</h1>
                        <p className="text-center text-white py-3 px-5">Estimate the annual electricity bill savings and payback period for an investment in a domestic solar PV system using this simple calculator. <br/> Select the fields and Click the button below to come up with an estimate.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col bg-white pt-4  m-2 rounded">
                            <div>
                                <h5 className="text-center text-muted">Electricity Bill</h5>
                            </div>
                            <div className="pt-5">
                                <>
                                    <Row>
                                        <Col span={12}>
                                            <Slider
                                                min={1}
                                                max={300}
                                                onChange={handleBill}
                                                value={typeof billValue === 'number' ? billValue : 1}
                                                tooltipVisible
                                            />
                                        </Col>
                                        <Col span={1}>
                                            <InputNumber
                                                min={1}
                                                max={300}
                                                style={{margin: '0 16px'}}
                                                value={billValue}
                                                onChange={handleBill}
                                            />
                                        </Col>
                                    </Row>
                                </>
                                <p className="pt-2 text-muted">Monthly Average(€)</p>
                            </div>
                        </div>
                        <div className="col bg-white pt-4 m-2 rounded">
                            <div>
                                <h5 className="text-center text-muted">Electricity Rate</h5>
                            </div>
                            <div className="text-center pt-5 px-3">
                                <select onChange={handleRate}>
                                    <option>Select Price</option>
                                    <option value={.23}>I don't Know</option>
                                    <option value={.12}>€0.12 per unit</option>
                                    <option value={.13}>€0.13 per unit</option>
                                    <option value={.14}>€0.14 per unit</option>
                                    <option value={.15}>€0.15 per unit</option>
                                    <option value={.16}>€0.16 per unit</option>
                                    <option value={.17}>€0.17 per unit</option>
                                    <option value={.18}>€0.18 per unit</option>
                                    <option value={.19}>€0.19 per unit</option>
                                    <option value={.20}>€0.20 per unit</option>
                                    <option value={.21}>€0.21 per unit</option>
                                    <option value={.22}>€0.22 per unit</option>
                                    <option value={.23}>€0.23 per unit</option>
                                    <option value={.24}>€0.24 per unit</option>
                                    <option value={.25}>€0.25 per unit</option>
                                    <option value={.26}>€0.26 per unit</option>
                                    <option value={.27}>€0.27 per unit</option>
                                    <option value={.28}>€0.28 per unit</option>
                                    <option value={.29}>€0.29 per unit</option>
                                    <option value={.30}>€0.30 per unit</option>
                                </select>
                            </div>

                            <p className="text-muted text-center pt-4">Price per Kwh (€) day time rate</p>

                        </div>
                        <div className="col bg-white pt-4  m-2 rounded">
                            <div>
                                <h5 className="text-center text-muted">Shadow Free Area</h5>
                            </div>
                            <div className="pt-5 px-2">
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={2}
                                            max={100}
                                            onChange={handleArea}
                                            value={typeof areaValue === 'number' ? areaValue : 2}
                                            tooltipVisible
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={2}
                                            max={100}
                                            style={{margin: '0 16px'}}
                                            value={areaValue}
                                            onChange={handleArea}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <p className="text-muted text-center pt-2">Area for placing the panels (m2)</p>
                        </div>

                        <div className="col text-center bg-white pt-4 m-2 rounded">
                            <div>
                                <h5 className="text-center text-muted">Select Your Location</h5>
                            </div>
                            <div className="pt-4 px-3 pb-4">
                                <select onChange={handleIrradiation}>
                                    <option selected>County</option>
                                    {locations && locations.map(location => (
                                        <option key={location.id}
                                                value={location.irradiation}>{location.county}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {error && <AlertComponent type="danger" message="Please select all the required fields"/>}
                        <button className="my-btn--primary my-btn--large font-weight-bold mt-3" onClick={handleCalculate} disabled={loading}>
                            {loading ?
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>

                                :"CALCULATE NOW!"}

                        </button>
                    </div>
                </div>
            </div>


            {show && !error &&
            <CalculationContext.Provider value={calculationData}>
                <ResultsArea/>
                <ChartsComponents/>
            </CalculationContext.Provider>

            }


        </>
    );
};

export default CalculatorComponent;