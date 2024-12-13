import { useContext } from 'react'
import { ProfileContext } from './context/ProfileContext'
export default function DetailedProfile() {
  const { 
        profile
    } = useContext(ProfileContext)  
  return (
    <div className="container mt-4">
      <div className="row">
        {profile.map(user => (
          <div className="col-lg-4 col-md-12 mb-4" key={user.id}>
            <div className="card" style={{ width: '100%' }}>
              <img className="card-img-top" src={user.image} alt={user.name} />
              <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <p className="card-text">{user.description}</p>
                <p>Skills: {user.skills.join(', ')}</p>
                <p>Experience: {user.experience}</p>
                <p>Education: {user.education}</p>
                <p>Hobbies: {user.hobbies}</p>
                <p>
                  Social Links: 
                  <a href={user.socialLinks.linkedIn} className="ms-2">LinkedIn</a>, 
                  <a href={user.socialLinks.github} className="ms-2">GitHub</a>, 
                  <a href={user.socialLinks.twitter} className="ms-2">Twitter</a>
                </p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
