import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './Main.css';
import Header from './Header'; 
import Sidebar from './Sidebar';
import Timeline from './Timeline'; 

const App = () => {
  const [user] = useState({
    username: 'feliciathegoat',
    profilePicture: 'https://via.placeholder.com/50', // Replace with actual or default profile pic
  });

  return (
    <div className="app-container">
      <Header user={user} />
      <div className="main-content">
        <Sidebar user={user} />
        <Timeline user={user} />
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
