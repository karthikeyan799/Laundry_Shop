import { useState } from 'react'
import './App.css'
import Login from './Body/Login'
import FetchById from './CRUD/fetchById'
import FetchAllPolicy from './CRUD/FindAllPolicy'
import Home from './Body/Home'
import Navbar from './Body/Navbar'
import Dashboard from './Dashboard'
import Update from './Pages/Update'
import Delete from './Pages/Delete'
import Fetch from './Pages/Fetch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Body/Search'
import Add from './Pages/Add'
import AddPolicy from './CRUD/AddPolicy'
import CRUD from './CRUD/CRUD'
import UpdatePolicy from './CRUD/UpdatePolicy'
import Footer from './Body/Footer'
import FetchAll from './Pages/FetchAll'
import PageNotFound from './Body/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' Component={Login} />
          <Route path='/search' element={<Search />} />

          <Route path='/crud' Component={CRUD}>
          {/* crud */}
            <Route path='fetchById' element={<FetchById />} />
            <Route exact path='addPolicy' element={<AddPolicy />} />
            <Route path='update' element={<UpdatePolicy />} />
            <Route path='fetchAllPolicy' element={<FetchAllPolicy />} />
          </Route>

          <Route path='/dashboard' element={<Dashboard />} >
            <Route exact path='add' element={<Add />} />
            <Route path='update' element={<Update />} />
            <Route path='fetchAll' element={<FetchAll />} />
            <Route path='delete' element={<Delete />} />
            <Route path='fetch' element={<Fetch />} />
          </Route>
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
