import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  useContext, useState } from 'react';
import { ProfileContext  } from './context/ProfileContext';
import Map from './Map';

export default function UserCard() {
  const { profile,deleteProfile } = useContext(ProfileContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [showMap, setShowMap] = useState(false)

   const filteredProfiles = profile.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const toggleMap = () => setShowMap(!showMap);
  return (
    <>
          <div className="container mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or description..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
          </div>
          <div className="row">
                {filteredProfiles.map(user => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={user.image} alt={user.name} />
                            <div className="card-body">
                                <h3 className="card-title">{user.name}</h3>
                                <p className="card-text">{user.description}</p>
                                <button className="btn btn-primary" onClick={toggleMap}>
                                    {showMap ? "Hide Map" : "Show Map"}
                                </button>
                                <button
                                    className="btn btn-danger ms-2"
                                    onClick={() => deleteProfile(user.id)}
                                >
                                    Delete
                                </button>
                                {showMap && <Map coordinates={user.coordinates} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
    </>
    
  );
}
