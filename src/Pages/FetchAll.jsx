import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchAll() {
  const [patient, setPatient] = useState([])
  const fetchAll = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fetchAllCustomer");
      setPatient(result.data.listCustomer);
      console.log(result.data.listCustomer);
    } catch (error) {
      console.log("Policy Error" + error);
    }
  }
  useEffect(() => {
    fetchAll();
  }, [])
  return (
    <div className='container bg-secondary h-75 mt-3'>
      <h1>Fetch All Records</h1>
      <hr />
      <table className="table table-bordered table-striped" >
        <thead className=''>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Gender</th>
            <th scope='col'>E-Mail</th>
            <th scope='col'>City</th>
            <th scope='col'>Salary</th>
            <th scope='col'>PhoneNo</th>
          </tr>
        </thead>
        <tbody >
          {/* {patient.map((pat,index)=>( */}
          {patient ? (patient.map((patient, index) => (
            <tr style={{overflowX:'scroll'}}>
              <th scope='row' key={index}>
                {patient.customerId}
              </th>
              {/* {patient.customerId} */}
              <td>{patient.customerName}</td>
              <td>{patient.customerAge}</td>
              <td>{patient.gender}</td>
              <td>{patient.eMail}</td>
              <td>{patient.city}</td>
              <td>{patient.salary}</td>
              <td>{patient.phoneNo}</td>
            </tr>
          ))) : " no fetching record"}
        </tbody>
      </table>
      <button className='btn btn-danger'>Previous</button>
      <button className='btn btn-success mb-1'>Next</button>
    </div>
  )
}
