import { createContext, useState,useEffect } from 'react'

export const ProfileContext = createContext() 

// eslint-disable-next-line react/prop-types
export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(()=>{
        const savedProfiles = localStorage.getItem('profiles')
        return savedProfiles ? JSON.parse(savedProfiles) : []
    })
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [socialLinks, setSocialLinks] = useState({ linkedIn: '', github: '', twitter: '' });
    const addProfile = (newProfile) => {
        setProfile((prevProfiles) => [...prevProfiles, { ...newProfile, id: Date.now() }])
    }
    const deleteProfile = (id) =>{
        setProfile((prevProfiles) =>
            prevProfiles.filter((profile) => profile.id !== id  )
        )
    }
    useEffect(() => {
        // Save profiles to localStorage whenever the profile state changes
        localStorage.setItem('profiles', JSON.stringify(profile));
    }, [profile]);
    return (
        <ProfileContext.Provider 
        value={{ 
        name, setName,
        description,setDescription,
        image,setImage,
        coordinates,setCoordinates,
        profile, addProfile,
        skills,setSkills,
        experience, setExperience,
        education, setEducation,
        hobbies, setHobbies,
        socialLinks, setSocialLinks,
        deleteProfile
        }}>
            {children}
        </ProfileContext.Provider>
    )
}
