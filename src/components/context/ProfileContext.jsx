import { createContext, useState } from 'react'

export const ProfileContext = createContext() 

// eslint-disable-next-line react/prop-types
export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState([])
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const addProfile = (newProfile) => {
        setProfile((prevProfiles) => [...prevProfiles, newProfile])
    }

    return (
        <ProfileContext.Provider 
        value={{ 
        name, setName,
        description,setDescription,
        image,setImage,
        coordinates,setCoordinates,
        profile, addProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}
