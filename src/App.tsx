import React from 'react';
import Button from './Components/Button'
import './index.css';
import profile from './assets/profile.svg'
import close from './assets/close.svg'




function App() {
  return (
    <div className="app">
        <Button
          icon={profile} 
          label="Enabled chip"
          background="#FF8B8B"
          close={close}
          textcolor="#fff"
        />
    </div>
  );
}

export default App;
