import BarChartEnergy from "./BarChartEnergy";
import SelfSufficiency from "./SelfSufficiencyChart";
import React from "react";

export default function ChartsComponents() {
    return (
        <div className="section_container_white py-5">
            <div className="container">
               <div className="row text-center justify-content-center">
                    <div className="col-md-5 m-2 bg-light">
                        <BarChartEnergy/>
                    </div>
                   <div className="col-md-5 p-2 m-2 bg-light">
                        <SelfSufficiency/>
                   </div>
                </div>
            </div>
        </div>
    )

}