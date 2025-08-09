import axios from 'axios';
import React, { useState } from 'react'

export default function Update() {
  const [customer, setCustomer] = useState({
    customerId: '',
    customerName: "",
    customerAge: "",
    eMail: "",
    salary: "",
    gender: "",
    phoneNumber: "",
    city: ''
  })
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false)
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked")
    // const validationError = validation(customer);
    try {
      const result = await axios.get(`http://localhost:8080/fetchCustomerId?customerId=${customer.customerId}`)
      const rec = result.data.customer;
      // setCustomer(result.data.customer);
      setValid(true);

      if (rec === null) {
        alert("CustomerId is not found");
        setValid(false);
      } else {
        alert("successfull...")
        setCustomer(rec);
      }
    } catch (error) {
      setValid(false);
    }
    // if (Object.keys(validationError).length === 0) {
    // if (validationError == 0) {karthi
    //   console.log("Form data is valid:", customer);
    //   const validationError = validation(customer);
    // } else {
    //   setErrors(validationError);
    // }

  }
  return (
    <div className='container bg-info'>
      <h2 className='text-center'>Update Customer</h2>
      <hr />
      <div className='d-flex justify-content-center' >

        <div className='inputGroupContainer' >
          <div className='input-group'>
            <input type="number" className='form-control' value={customer.customerId} onChange={handleChange} style={{ width: "25%" }} name="customerId" />
            <span className='input-group-text'><i className='fa fa-search' onClick={handleSubmit}></i></span>
          </div>
        </div>
      </div>
      {valid ? (
        <div className='pt-5 gap-3' style={{ widows: '100%' }}>
          {/* <div className='d-flex justify-content-center pt-5 gap-3' > */}

          <div className='row'>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>Customer Id</label>
              {/* <div className='inputFormContainer'>
                <div className='input-group'> */}
                  <input value={customer.customerId} className='form-control' />
                  {/* <span className='input-group-text'><i className='fa fa-home'></i></span> */}
                {/* </div>
              </div> */}
            </div>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>Customer Name</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="text" value={customer.customerName} onChange={handleChange} className='form-control' name="customerName" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.customerName && (
                <span className="text-danger">{errors.customerName}</span>
              )}
            </div>
          </div>

          <div className='row'>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>Customer Age</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="number" value={customer.customerAge} onChange={handleChange} className='form-control' name="customerAge" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.customerAge && (
                <span className='text-danger'>{errors.customerAge}</span>
              )}
            </div>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>Customer Gender</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="text" value={customer.gender} onChange={handleChange} className='form-control' name="gender" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.gender && (
                <span className="text-danger">{errors.gender}</span>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>PhoneNo</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="number" value={customer.phoneNumber} onChange={handleChange} className='form-control' name="phoneNumber" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.phoneNumber && (
                <span className='text-danger'>{errors.phoneNumber}</span>
              )}
            </div>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>E-Mail</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="text" value={customer.eMail} onChange={handleChange} className='form-control' name="eMail" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.eMail && (
                <span className='text-danger'>{errors.eMail}</span>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>Salary</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="number" value={customer.salary} onChange={handleChange} className='form-control' name="salary" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.salary && (
                <span className='text-danger'>{errors.salary}</span>
              )}
            </div>
            <div className='col mb-3'>
              <label htmlFor="" className='form-label'>City</label>
              <div className='inputFormContainer'>
                <div className='input-group'>
                  <input type="text" value={customer.city} onChange={handleChange} className='form-control' name="city" id="" />
                  <span className='input-group-text'><i className='fa fa-home'></i></span>
                </div>
              </div>
              {errors.city && (
                <span className='text-danger'>{errors.city}</span>
              )}
            </div>


          </div>
          <div className='col'>

            <div className='inputFormContainer'>
              <div className='input-group'>
                <button className='btn btn-success'>Update <i className='fa fa-send'></i></button>
                {/* <span className='input-group-text'></span> */}
              </div>
            </div>
          </div>
        </div>) : <p className='text-danger text-center'>No matches</p>}
    </div>
  )
  // function validation() {
  //   // let cName= document.getElementById('cname')
  //   let errors = {};
  //   if (customer.customerName === "") {
  //     errors.customerName = "Name is Required";
  //     console.log("Name is Required");
  //   } else if (!customer.customerName.match("^[A-Za-z]+$")) {
  //     errors.customerName = "Name is Does'n match"
  //   } else {
  //     errors.customerName = ""
  //   }
  //   if (customer.customerAge === "") {
  //     errors.customerAge = "Age is required";
  //   } else if (customer.customerAge < 18) {
  //     errors.customerAge = "Min age is 18";
  //   } else if (customer.customerAge > 58) {
  //     errors.customerAge = "Max age is 58";
  //   }

  //   if (customer.gender === "") {
  //     errors.gender = "Gender is reqired";
  //   }
  //   // let eVal='
  //   if (customer.eMail === "") {
  //     errors.eMail = "E-Mail is reqired";
  //   } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/i.test(customer.eMail)) {
  //     errors.eMail = "Invalid E-Mail address";
  //   }
  //   if (customer.salary === "") {
  //     errors.salary = "Salary is reqired";
  //   } else if (customer.salary < 20000) {
  //     errors.salary = "Min salary 20000";
  //   } else if (customer.salary > 80000) {
  //     errors.salary = "Max salary 80000";
  //   }
  //   if (customer.city === "") {
  //     errors.city = "City is reqired";
  //   }
  //   if (customer.phoneNumber === "") {
  //     errors.phoneNumber = "Phone Number is reqired";
  //   } else if (/^[0-9]{10}$/i.test(customer.phoneNumber)) {
  //     errors.phoneNumber = "Invalid Phone Number";
  //   }
  //   return errors;

  // }
}
