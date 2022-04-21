import React from 'react';

const EstimationCard = ({icon, title, data, unit}) => {
    return (
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card border-0 shadow rounded-xs pt-2 back-green">
                <div className="card-body text-center rounded">
                    <i className={`${icon} text-success pb-3`} style={{fontSize: "60px"}}/>
                    <h4 className="text-muted">{title}</h4>
                    <h2 className="mt-4 mb-3 text-success font-weight-bold">
                        {data} {unit}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default EstimationCard;