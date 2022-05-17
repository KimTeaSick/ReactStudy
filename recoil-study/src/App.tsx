import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from './Page/MainPage';
import TouchRecoil from './Page/TouchRecoil';

function App() {

  return (
    <div>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/recoil`} element={<TouchRecoil />} />
      </Routes>
    </div>
  )
}

export default App
