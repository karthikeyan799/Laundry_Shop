import React, { useState } from 'react'
import axios from "axios"
export default function Add() {

    const [customers, setCustomer] = useState({
        customerId: '',
        customerName: "",
        customerAge: "",
        eMail: "",
        salary: "",
        gender: "",
        phoneNumber: "",
        city: '',
        eMailError: '',
        phoneNumberError: ''

    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        // setCustomer({ ...customer, [e.target.name]: e.target.value });
        setCustomer({ ...customers, [e.target.name]: e.target.value });
    }
    const clear=()=>{
        customers.city="",
        customers.customerAge="",
        customers.customerName="",
        customers.eMail="",
        customers.gender="",
        customers.phoneNumber="",
        customers.salary=""
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit clicked")
        const validationError = validation(customers);
        if (Object.keys(validationError).length === 0) {
            console.log("Form data is valid:", customers);
        } else {
            setErrors(validationError);
        }
        try {
             console.log("try block enter")
            const result = await axios.post("http://localhost:8080/addCustomer", customers)
            const datas = result.data.customer;
            console.log("try block")
            if (datas === null) {
                alert("Add Customer Is Failure")
                setErrors(validateForm(customers))
            } else if (!result.data.customer) {
                // setErrors({eMailError:"Duplicate Email",phoneNumberError:"Duplicate Number"})
                // setErrors({phoneNumberError:"Dup numb"})
                console.log(' duplicate mail');
                setErrors(validation(customers))
               
            }
            else {
                setCustomer(result.data.customer);
                alert("Added Successfull...");
                console.log(result.data);
                // clear();
                // setCustomer(clear());
                // setRecord(true);
                //   setIsSubmit(true)
                //   setErrors("")
            }
            // setErrors(validateForm(customers));
            // })
            // .catch((error) => {
            //   console.log("Error added data: " + error);
            // });
        } catch (err) {

            console.log("Add is error" + err)
        } finally {
            console.log("Add method is clicked")
        }
    };


    return (
        <div className='container bg-ino' style={{ width: '80%', height: '100%' }}>
            {/* h-75  */}
            <div className="row responsive bg-warning border rounder shadow">
                <div className="col-md-10 offset-md-1  p-2 mt-4 " style={{ opacity: "0.9" }}>
                    {/* <form onSubmit={handleSubmit} className='pt-5 pb-5 gap-3'> */}
                        <h2 className='text-center'>Add Customer</h2>
                        <hr />
                        <div className=''>


                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>Customer Name</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <input type="text"
                                                value={customers.customerName}
                                                onChange={handleChange}
                                                className='form-control'
                                                name="customerName" id="customerName" />
                                            <span className='input-group-text'>
                                                <i className='fa fa-home'></i>
                                            </span>
                                        </div>
                                    </div>
                                    {errors.customerName && (
                                        <span className="text-danger">{errors.customerName}</span>
                                    )}
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>Customer Age</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <input type="number"
                                                className='form-control'
                                                value={customers.customerAge}
                                                onChange={handleChange}
                                                name="customerAge" id="customerAge" />
                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.customerAge && (
                                        <span className='text-danger'>{errors.customerAge}</span>
                                    )}
                                </div>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>Customer Gender</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            {/* <input type="text" value={customer.gender} onChange={handleChange} className='form-control' name="" id="" /> */}
                                            <select
                                                id="gender"
                                                value={customers.gender}
                                                name="gender"
                                                onChange={handleChange}
                                                className={"form-control text-center"}
                                            >
                                                <option value="">--Select--</option>

                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>


                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.gender && (
                                        <span className="text-danger">{errors.gender}</span>
                                    )}
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>PhoneNo</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <input type="text"
                                                className='form-control'
                                                value={customers.phoneNumber}
                                                onChange={handleChange}
                                                name="phoneNumber" />
                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.phoneNumber && (
                                        <span className='text-danger'>{errors.phoneNumber}</span>
                                    )}
                                </div>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>E-Mail</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <input type="text"
                                                className='form-control'
                                                value={customers.eMail}
                                                onChange={handleChange}
                                                name="eMail" />
                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.eMail && (
                                        <span className='text-danger'>{errors.eMail}</span>
                                    )}
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>Salary</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <input type="number"
                                                className='form-control'
                                                value={customers.salary}
                                                onChange={handleChange}
                                                name="salary" id="salary" />
                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.salary && (
                                        <span className='text-danger'>{errors.salary}</span>
                                    )}
                                </div>
                                <div className='col'>
                                    <label htmlFor="" className='form-label'>City</label>
                                    <div className='inputFormContainer'>
                                        <div className='input-group'>
                                            <select
                                                className={"form-control text-center"}
                                                id="city"
                                                value={customers.city}
                                                name="city"
                                                // size={1}
                                                // style={{height:"100px"}}
                                                onChange={handleChange}
                                            >
                                                <option value="">--Select--</option>

                                                <option value="Ariyalur">Ariyalur</option>
                                                <option value="Chengalpattu">Chengalpattu</option>
                                                <option value="Chennai">Chennai</option>
                                                <option value="Coimbatore">Coimbatore</option>
                                                <option value="Cuddalore">Cuddalore</option>
                                                <option value="Dharmapuri">Dharmapuri</option>
                                                <option value="Dindugal">Dindugal</option>
                                                <option value="Erode">Erode</option>
                                                <option value="Kallakurichi">Kallakurichi</option>
                                                <option value="Kanchipuram">Kanchipuram</option>
                                                <option value="Karur">Karur</option>
                                                <option value="Krishnagiri">Krishnagiri</option>
                                                <option value="Madurai">Madurai</option>
                                                <option value="Mayiladuthurai">Mayiladuthurai</option>
                                                <option value="Nagapattinam">Nagapattinam</option>
                                                <option value="Kanniyakumari">Kanniyakumari</option>
                                                <option value="Namakkal">Namakkal</option>
                                                <option value="Perambalure">Perambalure</option>
                                                <option value="Pudukottai">Pudukottai</option>
                                                <option value="Ramanadhapuram">Ramanadhapuram</option>
                                                <option value="Ranipet">Ranipet</option>
                                                <option value="Salem">Salem</option>
                                                <option value="Sivagangai">Sivagangai</option>
                                                <option value="Tenkasi">Tenkasi</option>
                                                <option value="Thanjavur">Thanjavur</option>
                                                <option value="Theni">Theni</option>
                                                <option value="Thiruvallure">Thiruvallure</option>
                                                <option value="Thiruvarur">Thiruvarur</option>
                                                <option value="Thoothukudi">Thoothukudi</option>
                                                <option value="Trichirappalli">Trichirappalli</option>
                                                <option value="Thirunelveli">Thirunelveli</option>
                                                <option value="Triuppure">Triuppure</option>
                                                <option value="Triruvannamalai">Triruvannamalai</option>
                                                <option value="Nilagiri">Nilagiri</option>
                                                <option value="Vellore">Vellore</option>
                                                <option value="Villupuram">Villupuram</option>
                                                <option value="Virudhunagar">Virudhunagar</option>
                                            </select>

                                            <span className='input-group-text'><i className='fa fa-home'></i></span>
                                        </div>
                                    </div>
                                    {errors.city && (
                                        <span className='text-danger'>{errors.city}</span>
                                    )}
                                </div>


                            </div>
                            <div className='col d-flex justify-content-center mt-5'>

                                <div className='inputFormContainer'>
                                    <div className='input-group'>
                                        <button 
                                            className='btn btn-success' onClick={handleSubmit}>Add <i className='fa fa-send'></i></button>
                                        {/* <span className='input-group-text'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </div>

            {/* <div className='row mt-3'>
                    <label htmlFor="" className='col-6'>Patient Name:</label>
                    <div className='inputGroupContainer col'>
                        <div className='input-group'>
                        <span class="input-group-text"><i class="fa fa-user-circle-o"></i></span>
                        
                        <input className='form-control' value={patient.pname} onChange={handleChange} placeholder='Patient Name' type="text" name="pname" id="pname" />
                    </div></div>
                </div> */}

            {/* <div className='row'>
                    <label htmlFor="" className='col-6'>Paient Age</label>
                    <div className='inputGroupContainer col-4'>
                        <div className='input-group'>
                            <span className='input-group-text'>
                            <i class="bi bi-person-circle"></i>
                            </span>
                      
                        <input className='form-control' placeholder='Patient Age'
                         type="text" value={patient.age} name="age" id="age" onChange={handleChange} />
                    </div></div>
                </div> */}
            {/* </div> */}
            {/* <div className=''> */}
            {/* <div className='row'>
                    <label htmlFor="" className='col-6'>Gender</label>
                    <div className='inputGroupContainer col-4'>
                        <div className='input-group'>
                            <span className='input-group-text'>
                            <i class="bi bi-person-circle"></i>
                            </span>
                     
                        <select className='form-control text-center' value={patient.gender} onChange={handleChange} name="gender" id="">
                            <option value="">-- Choose Gender --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div></div>
                </div> */}
            {/* <div className='row'>
                    <label htmlFor="" className='col-6'>Phone No</label>
                    <div className='inputGroupContainer col-4'>
                        <div className='input-group'>
                            <span className='input-group-text'>
                            <i class="bi bi-person-circle"></i>
                            </span>
                        <input className='form-control' value={patient.phoneNo} onChange={handleChange} placeholder='Phone No' type="text" name="phoneNo" id="phoneNo" />
                    </div>
                </div></div>
            </div> */}
            {/* <div className=''>
                <div className='row'>
                    <label htmlFor="" className='col-6'>DOB</label>
                    <div className='inputGroupContainer col-4'>
                        <div className='input-group'>
                            <span className='input-group-text'>
                            <i class="bi bi-person-circle"></i>
                            </span>
                        <input className='form-control' value={patient.dob} onChange={handleChange} type="date" name="dob" id="dob" />
                    </div></div>
                </div> */}
            {/* <div className='row'>
                    <label htmlFor="bloods" className='col-6'>Choose Blood Group</label>
                    <div className='inputGroupContainer col-4'>
                        <div className='input-group'>
                            <span className='input-group-text'>
                            <i class="bi bi-person-circle"></i>
                            </span>
                        <select className='form-control text-center' value={patient.bloodGroup} onChange={handleChange} name="bloodGroup" id="bloodGroup">
                        <option value="">Select Blood group</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                        </select>
                    </div></div>
                </div> 
            // </div>*/}
            {/* <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
        // </div> */}
        </div >
    )
    function validation() {
        // let cName= document.getElementById('cname')
        let errors = {};
        if (customers.customerName === "") {
            errors.customerName = "Name is Required";
            console.log("Name is Required");
        } else if (!customers.customerName.match("^[A-Za-z]+$")) {
            errors.customerName = "Name is Does'n match"
        } else {
            errors.customerName = ""
        }
        if (customers.customerAge === "") {
            errors.customerAge = "Age is required";
        } else if (customers.customerAge < 18) {
            errors.customerAge = "Min age is 18";
        } else if (customers.customerAge > 58) {
            errors.customerAge = "Max age is 58";
        }

        if (customers.gender === "") {
            errors.gender = "Gender is reqired";
        }
        // let eVal='
        if (customers.eMail === "") {
            errors.eMail = "E-Mail is reqired";
        } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/i.test(customers.eMail)) {
            errors.eMail = "Invalid E-Mail address";
        }
        if (customers.salary === "") {
            errors.salary = "Salary is reqired";
        } else if (customers.salary < 20000) {
            errors.salary = "Min salary 20000";
        } else if (customers.salary > 80000) {
            errors.salary = "Max salary 80000";
        }
        if (customers.city === "") {
            errors.city = "City is reqired";
        }
        // if (customer.phoneNumber === "") {
        //     errors.phoneNumber = "Phone Number is reqired";
        // } else if (/^[0-9]{10}$/i.test(customer.phoneNumber)) {
        //     errors.phoneNumber = "Invalid Phone Number";
        // }
        return errors;

    }
}
