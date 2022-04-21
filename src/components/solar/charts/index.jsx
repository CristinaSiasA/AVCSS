import BarChartEnergy from "./BarChartEnergy";
import SelfSufficiency from "./SelfSufficiencyChart";
import React, {useContext} from "react";
import {CalculationContext} from "../../../context";

export default function ChartsComponents() {
    const data = useContext(CalculationContext);
    return (
        <div className="section_container_white py-5">
            <div className="container">
               <div className="row text-center justify-content-center">
                    <div className="col-md-5 m-2 bg-light">
                        <BarChartEnergy info={data}/>
                    </div>
                   <div className="col-md-5 p-2 m-2 bg-light">
                        <SelfSufficiency info={data}/>
                   </div>
                </div>
            </div>
        </div>
    )

}