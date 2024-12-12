// import { useState } from "react"
import UserCard from "./components/UserCard"
import { ProfileProvider } from "./components/context/ProfileContext";
import AdminPanel from "./components/AdminPanel";
function App() {
  
  return (
    <ProfileProvider>
     <h1>Profile Management</h1>
     <UserCard />
     <AdminPanel />
    </ProfileProvider>
  )
}

export default App
