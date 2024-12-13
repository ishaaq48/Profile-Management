
import { useContext } from 'react'
import { ProfileContext } from './context/ProfileContext'
export default function AdminPanel() {
    const { 
        name,setName,
        description, setDescription,
        addProfile,
        image, setImage,
        coordinates, setCoordinates,
        skills,setSkills,
        experience, setExperience,
        education, setEducation,
        hobbies, setHobbies,
        socialLinks, setSocialLinks,

    } = useContext(ProfileContext)
    const  handleSubmit = (e) => {
        e.preventDefault()
        const [lat, long] = coordinates.split(',').map(coord => parseFloat(coord.trim()));
        const newProfile = {
        name,
        description,
        image,
        coordinates: [lat, long],
        skills,
        experience,
        education,
        hobbies,
        socialLinks,
        };

        addProfile(newProfile);
        
        setName('');
        setDescription('');
        setImage('');
        setCoordinates('');
        setSkills([]);
        setExperience('');
        setEducation('');
        setHobbies('');
        setSocialLinks({ linkedIn: '', github: '', twitter: '' });
    }
  return (
    <div className="container">
        <h3>AdminPanel</h3>
        <form 
            className='form-control d-flex flex-column mb-3 gap-2'
            onSubmit={handleSubmit}
            >
        <label>Name:</label>
        <input 
            className='form-control'
            type="text"
            name='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter your name'
            />
        <label>Description</label>
        <textarea 
            className='form-control'
            type="text"
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder='ex: Frontend Developer'
        />
        <label>Image-Url</label>
        <input
            className='form-control' 
            type="text"
            name='image' 
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            placeholder='ex: https://via.placeholder.com/150'
        />
        <label>Coordinates</label>
        <input
            className='form-control' 
            type="text"
            name='coordinates' 
            value={coordinates}
            onChange={(e)=>setCoordinates(e.target.value)}
            placeholder='ex: 111222, 333444'           
        />
        <label>Skills (comma-separated):</label>
        <input 
            className='form-control'
            type="text" 
            value={skills.join(', ')} onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))} 
            />

        <label>Experience:</label>
        <textarea 
            className='form-control' 
            value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Work experience" />

        <label>Education:</label>
        <textarea 
            className='form-control' 
            value={education} 
            onChange={(e) => setEducation(e.target.value)} 
            placeholder="Education background" />

        <label>Hobbies:</label>
        <input 
            className='form-control' 
            type="text" 
            value={hobbies} 
            onChange={(e) => setHobbies(e.target.value)} 
            placeholder="Hobbies" />

        <label>Social Links:</label>
        <input 
            className='form-control' 
            type="text" 
            placeholder="LinkedIn URL"
            value={socialLinks.linkedIn} 
            onChange={(e) => setSocialLinks({ ...socialLinks, linkedIn: e.target.value })} />
        <input 
            className='form-control' 
            type="text" 
            placeholder="GitHub URL" 
            value={socialLinks.github} 
            onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })} />
        <input 
            className='form-control' 
            type="text" 
            placeholder="Twitter URL" 
            value={socialLinks.twitter} 
            onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })} />
        <button className='btn btn-success'>Save</button>
    </form>
    
    </div>
    
  )
}
