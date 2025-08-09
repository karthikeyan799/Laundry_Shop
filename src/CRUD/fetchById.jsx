import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FetchById() {
  // useEffect(() => {
  //   // fetchRecord();
  //   alert("hi everyone...")
  // }, []);
  const [fetch, setfetch] = useState({
    patientId: ''
  })
  const [records, setRecord] = useState(false);


  const onInputChange = (e) => {
    setfetch({ patientId: e.target.value });
  };
  const fetchRecord = async () => {
    try {
      const record = await axios.get(`http://localhost:8080/fetchPolicyById?id=${fetch.patientId}`,
      );
      const rec = record.data.policy;

      if (rec === null) {
        // errors.customerId="CustomerId is NOt Found demo";
        alert("CustomerId is Not Found ");
        // setErrors(validateForm(fetch))
        // errors.customerId="invalidid"
        setRecord(false)
      }
      else {
        setfetch(rec)
        // setFetch(rec);
        alert("successfull karthi")
        console.log(rec)
        setRecord(true)


      }
      console.log("fetchById is success...")
    } catch (err) {
      console.log("id not found " + err)
    } finally {
      console.log("Fetch method is clicked")
    }
  }

  return (
    <div className='container fetcbyid'>
      <div className='container' >
        <div className='' style={{ width: '30%', marginLeft: '35%' }}>
          <h1 className="text-center text-success mt-0">Update</h1>
          <div
            className="d-flex"
            role="search"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            <div className='inputGroupContainer'>
              <div className='input-group'>
                <input type="number" className='form-control' name='id' value={fetch.patientId} onChange={onInputChange} />
                <span className='input-group-text' ><i className='fa fa-search' onClick={fetchRecord}></i></span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        {/* <h2>Search Id</h2>
        <div className='inputGroupContainer'>
          <div className='input-group'>
            <input type="number" className='form-contrl' name='id' value={fetch.patientId} onChange={onInputChange} />
            <span className='input-group-text' ><i className='fa fa-search' onClick={fetchRecord}></i></span>
          </div>
        </div> */}
        <table className="table table-striped res table-primary ">
          <thead className="table-dark tabletr">
            <tr>
              <th>Id</th>
              <th>PolicyHolder</th>
              <th>PolicyType</th>
              <th>PolicyNumber</th>
              <th>Amount</th>
              <th>EndDate</th>
            </tr>
          </thead>
          <tbody>
            {fetch ? (
              <tr>
                <td>{fetch.policyId}</td>
                <td>    {fetch.policyHolder}</td>
                <td>    {fetch.policyType}</td>
                <td>{fetch.policyNumber}</td>
                <td>    {fetch.policyAmount}</td>
                <td>    {fetch.policyEndDate}</td>
              </tr>) : <p>No Search Data</p>}
          </tbody>
        </table>
        {/* {fetch.policyId}
        {fetch.policyType}
        {fetch.policyNumber} */}
      </div>
    </div>
  )
}
