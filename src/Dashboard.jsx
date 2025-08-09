import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import AddComponent from
import Update from './Pages/Update'
import Delete from './Pages/Delete'
import Fetch from './Pages/Fetch'
import Navbar from './Body/Navbar'
export default function Dashboard() {
    // const buttonStyle = {
    //     width: "100%",
    //     padding: "10px",
    //     margin: "5px 0",
    //     fontSize: "16px",
    //     cursor: "pointer"
    // };
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ width: "15%", padding: "10px", 
            // background: "#f4f4f4"
background:"green"
             }}>
                <h2 className='text-center '>CUSTOMER</h2>
                <ul style={{ listStyleType: "none", padding: '0',lineHeight:"70px" }}>
                    <li ><Link to="/dashboard/add"><button className='btn btn-light' style={{ width: '100%' }} ><i className="bi bi-person-circle">Add</i> </button></Link></li>
                    <li><Link to="/dashboard/update"><button className='btn btn-light' style={{ width: '100%' }}>Update</button></Link></li>
                    <li><Link to="/dashboard/fetch"><button className='btn btn-light' style={{ width: '100%' }}>Fetch</button></Link></li>
                    <li><Link to="/dashboard/fetchAll"><button className='btn btn-light' style={{ width: '100%' }}>FetchAll</button></Link></li>
                </ul>
            </div>


            <div style={{ flex: 1, padding: "20px" }}>

                <Outlet />
            </div>
        </div >
    )
}
