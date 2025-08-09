import axios, { } from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddPolicy() {
    useEffect(() => {
        loadCustomer();
    }, [])
    const [add, setAdd] = useState([])
    const [poli, setPoli] = useState({

        policyAmount: '',
        policyEndDate: '',
        policyHolder: '',
        policyNumber: '',
        policyStartDate: '',
        policyType: '',
        // customer: {
        customerId: ''
        // }
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setPoli(prev => ({
            ...prev,
            [name]: value
        }));
        // if (name === 'customerId') {
        //     setPoli((prev) => ({
        //         ...prev,
        //         customer: {
        //             // ...prev.customer,
        //             ...prev,
        //             customerId: value
        //         }
        //     }));
        // } else {
        //     setPoli((prev) => ({
        //         ...prev,
        //         [name]: value
        //     }));
        // }
    };

    const loadCustomer = async () => {
        try {
            const result = await axios.get("http://localhost:8080/fetchAllCustomer");
            const rec = result.data.listCustomer;
            setAdd(rec);
            console.log(rec)
            console.log(result.data);
        } catch (err) {
            console.log(err);

        }
    };
    const addPolicy = async () => {

        const payload = {
            ...poli,
            policyAmount: parseFloat(poli.policyAmount),
            customer: {
                customerId: parseInt(poli.customerId)
            }
        };

        try {

            const result = await axios.post("http://localhost:8080/createPolicy", payload);
            const rec = result.data.policy;
            console.log(result);
            setPoli(rec)

            alert('success...');
        } catch (err) {
            console.log(err);
            alert('error');
        }
    }


    return (

        <div className="container" style={{ borderTopLeftRadius: "50px" }}>
            <div style={{ width: "30%", marginLeft: "35%" }}>

                <h1 className="text-center text-success mt-3 ">Add Policy</h1>
                <div
                    className="d-flex"
                    role="search"
                    style={{ justifyContent: "center", marginBottom: "20px" }}
                >
                    <div className="inputGroupContainer">
                        <div className="input-group">
                            <select name="customerId" id="customerId" value={poli.customerId} onChange={onInputChange} >
                                <option value="">--Select--</option>
                                {add.map((id) => (
                                    <option key={id.customerId} >{id.customerId}</option>
                                ))}

                            </select>
                            <span className="input-group-text">
                                <i className="fa fa-search" onClick={loadCustomer}></i>
                            </span>
                        </div>
                        {/* {errors.customerId && (
                            <span className="text-danger">{errors.customerId}</span>
                        )} */}
                    </div>
                </div>
            </div>

            <div className="conatainer ">
               
                {/* <form */}
                {/* // onSubmit={(e) => onSubmit(e)} */}

                {/* > */}
                    <div className="row ">
                        <div
                            className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 mb-4 shadow"
                            style={{ opacity: "0.9" }}
                        >
                            {/* <h2 className="text-center m-2"> Update Customer</h2> */}

                            <div>
                                <div className="row">


                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="CustomerName" className="form-table">
                                                Policy Holder
                                            </label>
                                            <input
                                                type={"text"}
                                                className="form-control"
                                                placeholder="Enter your name"
                                                name='policyHolder'
                                                value={poli.policyHolder}
                                                onChange={onInputChange}
                                            />
                                            {/* {errors.customerName && (
                                                    <span className="error">{errors.customerName}</span>
                                                )} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="CustomerAge" className="form-table">
                                                Policy Type
                                            </label>
                                            <input
                                                type={"text"}
                                                className="form-control"
                                                placeholder="Enter your name"
                                                name='policyType' value={poli.policyType} onChange={onInputChange}
                                            />
                                            {/* {errors.customerAge && (
                                                    <span className="text-danger">
                                                        {errors.customerAge}
                                                    </span>
                                                )} */}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="E-Mail" className="form-table">
                                                Policy Number
                                            </label>
                                            <input
                                                type={"text"}
                                                className="form-control"
                                                placeholder="Enter your name"
                                                name='policyNumber'
                                                value={poli.policyNumber} onChange={onInputChange}
                                            />
                                            {/* {errors.eMail && (
                                                    <span className="text-danger">{errors.eMail}</span>
                                                )} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="PhoneNumber" className="form-table">
                                                Policy Amount
                                            </label>
                                            <input
                                                type={"number"}
                                                className="form-control"
                                                placeholder="Enter your name"
                                                name='policyAmount'
                                                value={poli.policyAmount}
                                                onChange={onInputChange}
                                            />
                                            {/* {errors.phoneNumber && (
                                                    <span className="text-danger">
                                                        {errors.phoneNumber}
                                                    </span>
                                                )} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="City" className="form-table">
                                                Policy-Start-Date
                                            </label>
                                            <input type="date"
                                                className='form-control'
                                                name='policyStartDate'
                                                value={poli.policyStartDate}
                                                onChange={onInputChange} />


                                            {/* {errors.city && (
                                                    <span className="text-danger">{errors.city}</span>
                                                )} */}
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="Gender" className="form-table">
                                                Policy-End-Date
                                            </label>
                                            <input type="date"
                                                className='form-control'
                                                name='policyEndDate'
                                                value={poli.policyEndDate}
                                                onChange={onInputChange} />


                                            {/* {errors.gender && (
                                                    <span className="text-danger">{errors.gender}</span>
                                                )} */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="Salary" className="form-table">
                                                Salary
                                            </label>
                                            <input
                                                type={"number"}
                                                className="form-control"
                                                placeholder="Enter your salary"
                                                name="salary"
                                          
                                            />{" "}
                                          
                                        </div>
                                    </div>

                                </div> */}
                                <div style={{ textAlign: "center" }}>
                                    {/* <button
                                        type="submit"
                                        className="btn btn-outline-primary "
                                    >
                                        Update

                                    </button> */}
                                    <button className='btn btn-outline-success' onClick={addPolicy}>Submit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
                {/* ) : (
                    // ""
                    <p className="text-danger text-center">no records matches</p>
                )} */}
            </div>
        </div>


        // <div className='container mt-0'>
        //     {/* <div> */}
        //     <div className='row responsive'>
        //         <div className="col-md-6 offset-md-3 bg-warning border rounder p-2 mt-4 shadow" style={{ opacity: "0.9" }}>

        //             <label htmlFor="" className='form-label'>Customer Id</label>
        //             <div className='inputGroupContainer'>
        //                 <div className='input-group'>
        //                     <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                     {/* <input type="number" className='form-control' name='customerId' value={poli.customerId} onChange={onInputChange} /> */}
        //                     <select name="customerId" id="customerId" value={poli.customerId} onChange={onInputChange} >
        //                         <option value="">--Select--</option>
        //                         {add.map((id) => (
        //                             <option key={id.customerId} >{id.customerId}</option>
        //                         ))}

        //                     </select>
        //                 </div>
        //             </div>

        //         </div>
        //         <div className='row align-center m-3'>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy Holder</label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="text" className='form-control' name='policyHolder' value={poli.policyHolder} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy Type </label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="text" className='form-control' name='policyType' value={poli.policyType} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='row align-center m-3'>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy Number</label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="text" className='form-control' name='policyNumber' value={poli.policyNumber} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy Amount</label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="number" className='form-control' name='policyAmount' value={poli.policyAmount} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='row align-center m-3'>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy Start Date</label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="date" className='form-control' name='policyStartDate' value={poli.policyStartDate} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='col-4'>
        //                 <label htmlFor="" className='form-label'>Policy End Date</label>
        //                 <div className='inputGroupContainer'>
        //                     <div className='input-group'>
        //                         <span className='input-group-text'><i className='fa fa-circle-profile'>*</i></span>
        //                         <input type="date" className='form-control' name='policyEndDate' value={poli.policyEndDate} onChange={onInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <button className='btn btn-success' onClick={addPolicy}>Submit</button>
        //         {/* </div> */}
        //     </div>
        // </div>
    )
}
