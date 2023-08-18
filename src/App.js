import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      {/* app body */}
      <div className='app_body'>
        <BrowserRouter>
          <Routes>
            <Route path='/app' element={
              <>
                <Sidebar />
                <Chat />
              </>
            } />
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;