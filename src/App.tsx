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
          <Button
          label="No icon"
          background="#9DDADB"
          close={close}
          textcolor="#fff"
          textalign='left'
        />
          <Button
          icon={profile} 
          label="Enabled chip"
          background="#FF8B8B"
          textcolor="#fff"
          textalign='left'
        />
          <Button
          label="No icon no close"
          background="#9DDADB"
          textcolor="#fff"
          textalign='left'
          />
    </div>
  );
}

export default App;
