import React from 'react';
import './teamCard.css'

function TeamCard({name, role, url, onclick, id}) {
    return (

            <div className="card">
                <img className="card-img-top" src={url} alt="Team Photo"/>
                <div className="card-body">
                    <h4 className="card-title mt-4">{name}</h4>
                    <h6 className="card-title text-muted pb-4">{role}</h6>
                    <button className="btn btn-dark mb-3" onClick={onclick} data-id={id}>View Details > </button>
                </div>
            </div>

    )
}

export default TeamCard;
