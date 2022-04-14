import React from 'react';
import './teamCard.css'

function TeamCard({name, role, url, onclick, id}) {
    return (

            <div className="card">
                <img className="card-img-top" src={url} alt="Team Photo"/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title text-muted pb-5">{role}</h5>
                    <button className="btn btn-primary" onClick={onclick} data-id={id}>View Details > </button>
                </div>
            </div>

    )
}

export default TeamCard;
