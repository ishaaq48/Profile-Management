
import { useContext } from 'react'
import { ProfileContext } from './context/ProfileContext'
export default function AdminPanel() {
    const { 
        name,setName,
        description, setDescription,
        profile,addProfile,
        image, setImage,
        coordinates, setCoordinates
    } = useContext(ProfileContext)
    const  handleSubmit = (e) => {
        e.preventDefault()
        const [lat, long] = coordinates.split(',').map(coord => parseFloat(coord.trim()));
        const newProfile = {
        name,
        description,
        image,
        coordinates: [lat, long]
        };
        addProfile(newProfile);
        setName('');
        setDescription('');
        setImage('');
        setCoordinates('');
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
            className=''
            type="text"
            name='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        <label>Description</label>
        <textarea 
            type="text"
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
        />
        <label>Image-Url</label>
        <input 
            type="text"
            name='image' 
            value={image}
            onChange={(e)=>setImage(e.target.value)}
        />
        <label>Coordinates</label>
        <input 
            type="text"
            name='coordinates' 
            value={coordinates}
            onChange={(e)=>setCoordinates(e.target.value)}
        />
        <button className='btn btn-primary'>Submit</button>
    </form>
    
    </div>
    
  )
}
