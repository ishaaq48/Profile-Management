
import { useContext } from 'react'
import { ProfileContext } from './context/ProfileContext'
export default function AdminPanel() {
    const { 
        name,setName,
        description, setDescription,
        addProfile,
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
        <button className='btn btn-success'>Save</button>
    </form>
    
    </div>
    
  )
}
