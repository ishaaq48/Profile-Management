# Profile Management

A profile management application built with React, Bootstrap, and Leaflet. This application includes features such as profile creation, editing, deletion, detailed profile view, and navigation using React Router.

## Features:
- Add, view, edit, and delete user profiles.
- Display detailed profile information, including skills, experience, education, hobbies, and social links.
- Interactive map integration using Leaflet.
- Responsive design with Bootstrap.
- Navigation between pages using React Router.

---
## Skills:
  1. HTML
  2. CSS
  3. Bootstrap
  4. React
  5. React Router
  6. Leaflet

## Installations

1. Bootstrap
 ```bash
 npm install bootstrap@5.3.3  
```
2. Leaflet
 ```bash
 npm install leaflet react-leaflet
 npm install leaflet-defaulticon-compatibility       
```
3. Router
```bash
 npm install react-router-dom       
```

## Project Structure
  ```bash
  src/
├── components/
│   ├── Navbar.js       # Navbar for navigation
│   ├── AdminPanel.js   # Admin panel for profile creation
│   ├── UserCard.js     # Display user profiles
│   ├── DetailedProfile.js # Detailed profile view
│   ├── Map.js          # Map integration using Leaflet
├── context/
│   └── ProfileContext.js # Context for state management
├── App.js              # Main App component
├── index.js            # Entry point

```
## How to Start Project

```bash
npm run dev
```
