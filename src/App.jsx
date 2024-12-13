import { ProfileProvider } from "./components/context/ProfileContext";
import NavBar from "./components/NavBar";
function App() {
  
  return (
    <ProfileProvider>
     <h1>Profile Management</h1>
     <NavBar />
    </ProfileProvider>
  )
}

export default App
