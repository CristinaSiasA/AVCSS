import React from 'react';
import '../common/BasicSection';
import PersonList from "./Person_List";


function TeamSection() {
    return (
        <div className="container p-5">
           <PersonList/>
        </div>
    );
}

export default TeamSection;