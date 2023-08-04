//import Image from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar'

import Banner from './Components/Banner'

import Lists from './Compnents/Lists'
import Fav from './Compnents/Fav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <>
{/* <Navbar/>
<Banner/>
<Lists/> */}
<BrowserRouter>
<Navbar />

<Routes>
  <Route
    path="/"
    element={
      <>
        <Banner/>
        <Lists/>
      </>
    }
  />
  <Route path="/fav" element={<Fav/>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
