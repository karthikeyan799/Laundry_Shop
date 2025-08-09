import axios from 'axios'
import React, { useEffect,useState } from 'react'
// import { data } from 'react-router-dom';

export default function Fetch() {
  const [patient, setPatient] = useState([]);


useEffect(()=>{
  loadCustomers();
  // fetch("http://localhost:8080/getall")
  // .then((res)=>res.json)
  // .then((data)=>setPatient(data));
},[]);

const loadCustomers=async ()=>{

try{
const result =await axios.get("http://localhost:8080/getall");
setPatient(result.data);
console.log(result.data);
}catch(error){
  console.error("error loading patient:",error);
}
}

  return (
    <div className='container bg-primary-subtle h-75 mt-2'>
      <div className=''>
        <h2 className='text-center mt-3'>Fetch Record</h2>
          <div className='d-flex justify-content-end mb-1'>
                    <div className='inputGroupContainer'>
                        <div className='input-group'>
                            <input type="search" className='form-control' />
                            <span className='input-group-text'><i className='fa fa-search'></i></span>

                        </div>
                    </div>
                </div>
        {/* <div className='sFetch d-flex justify-content-center align-items-center row'>
          <input type="text" className='form-control w-25 col-6' name="patientId" id="patientId" />
          <button className='btn btn-success col-1'>S</button>
        </div> */}
      </div>
      {/* <table className="table table-bordered table-striped mt-2"> */}
      <table className="table table-bordered table-striped">
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
      <tbody>
         {/* {patient.map((pat,index)=>( */}
         { patient ? (patient.map((patient,index)=>(
          <tr>
            <th scope='row' key={index}>
              {patient.id}
            </th>
            {/* {patient.id} */}
            <td>{patient.pname}</td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.eMail}</td>
            <td>{patient.city}</td>
            <td>{patient.salary}</td>
            <td>{patient.phoneNo}</td>
          </tr>
         ))):" no fetching record"}
      </tbody>
      </table>
    </div>
  );
}
