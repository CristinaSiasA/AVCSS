import { Link } from 'react-router-dom'

function Person({ person }) {
    return (
        <div className="cards">
            <img src={`${person.image}`} className="card-img-top" alt="image" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3 name-small">{person.name}</h5>
                <Link className="btn btn-dark mt-1" to={`profile/${person.id}`}>
                    View More >
                </Link>
            </div>
        </div>
    )
}

export default Person