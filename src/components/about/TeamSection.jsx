import React, {useEffect, useState} from 'react';
import TeamCard from "./TeamCard";
import {Modal} from 'antd';


function TeamSection({title, subtitle, bannerId}) {
    const [personList, setPerson] = useState([]);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(null)
    const [details, setDetails] = useState(null)

    useEffect(() => {
        fetch("https://5g9nne7sn6.execute-api.us-east-1.amazonaws.com/employees")
            .then(res => res.json())
            .then(data => {
                setPerson(data)
            })
            .catch(err => console.log(err));
    }, [])

    function handleOnClick(e) {
        setVisible(true)
        let currentId = parseInt(e.target.dataset.id)
        setId(currentId)
        let currentElement = personList.find(person => person.id === currentId)
        setDetails(currentElement)

    }

    return (
        <div className="section_container_light py-5 ">
            <div className="container">
                <div>
                    <h1 className="py-5">~ MEET OUR <span style={{color: '#4cb269'}}>TEAM</span> ~</h1>
                </div>

                <>
                    <Modal
                        style={{ top: 50 }}
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={600}
                        footer={null}
                    >
                        {
                           visible && details && (
                               <div className="card p-4 border-0">
                                   <img src={details.image} className="card-img-top" alt="..."/>
                                   <div className="card-body">
                                       <h1 className="card-title pt-5">{details.name}</h1>
                                       <h6 className="card-title text-muted text-centerGIT">{details.role}</h6>
                                       <p className="card-text text-justify lead pt-3">{details.description.p}</p>
                                   </div>
                               </div>
                           )
                        }

                    </Modal>
                </>

                <div className="row flex-wrap align-items-center my-3 mx-5">
                    {personList && personList.map(person => (
                <div className="col-lg-3 col-sm-5 p-3 ">
                        <TeamCard  key={person.id} name={person.name} role={person.role} url={person.image}
                                  onclick={handleOnClick} id={person.id}/>
                </div>
                    ))}
                </div>
                </div>
        </div>
    )
}

export default TeamSection;