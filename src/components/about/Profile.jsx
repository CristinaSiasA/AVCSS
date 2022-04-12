import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import persons from '../../employees_data.xml'

function Profile() {
    let params = useParams()
    let [person, setPerson] = useState(null)
    useEffect(() => {
        const id = params.id
        const found = persons.find((p) => p.id === parseInt(id))
        setPerson(found)
    }, [])
    return (
        <Layout>
            {person && (
                <div className="container d-flex justify-content-center">
                    <div className="card p-3 border-1 m-5">
                        <div className="d-flex align-items-center">
                            <div className="image">
                                <img src={`${person.image}`} className="rounded" />
                            </div>
                            <div className="ms-3 w-100">
                                <h4 className="mb-0 mt-0 name">{person.name}</h4>
                                <span className="profession">{person.role}</span>
                                <div className="p-2 mt-2 bg-dark d-flex justify-content-center rounded text-white stats">
                                </div>
                            </div>
                        </div>
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{ __html: person.description }}
                        />
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default Profile
