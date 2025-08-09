import React from 'react'

export default function UpdatePolicy() {
    return (
        <div className='container' >
            <div className='' style={{ width: '30%', marginLeft: '35%' }}>
                <h1 className="text-center text-success mt-3 ">Update</h1>
                <div
                    className="d-flex"
                    role="search"
                    style={{ justifyContent: "center", marginBottom: "20px" }}
                >
                    <div className='inputGroupContainer'>
                        <div className='input-group'>
                            <input type="text" className='form-control' />
                            <span className='input-group-text'>
                                <i className='fa fa-search'></i>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container'>
                <form action="">
                    <div className='row'>
                        <div
                            className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-2 mb-4 shadow"
                            style={{ opacity: "0.9" }}
                        >
                            <h2 className='text-center m-2'>Update</h2>
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Number</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Holder</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Policy Type</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Amount</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>Start-Date</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-table'>End-Date</label>
                                        <input type="text"
                                            className='form-control' name="" id="" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="">Policy Number</label>
                                        <input type="text" className='form-control' name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="" style={{display:'flex', justifyContent:'center'}}><button className='btn btn-success'>Update</button></div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        // <div className='container'>
        //     {/* <div className=''> */}
        //         <h2>Update Policy</h2>
        //         <div className='inputGroupContainer'>
        // <div className='input-group'>
        // <input type="number" className='' name="" id="" />
        // <span className='input-group-text'><i className='fa fa-search'></i></span>
        // </div>
        //         </div>
        //         <form className='d-flx colomn justify-content-center bgsuccess'>
        //             <div className='row gap-4'>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Policy Id</label>
        //                     <input type="number" className='form-control' name="" id="" />

        //                 </div>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Policy Number</label>
        //                     <input type="text" className='form-control' name="" id="" />

        //                 </div>
        //             </div>
        //             <div className='row gap-4'>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Policy Holder</label>
        //                     <input type="text" className='form-control' name="" id="" />

        //                 </div>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Policy Type</label>
        //                     <input type="number" className='form-control' name="" id="" />

        //                 </div>
        //             </div>
        //             <div className='row gap-4'>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Amount</label>
        //                     <input type="number" className='form-control' name="" id="" />

        //                 </div>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Start Date</label>
        //                     <input type="date" className='form-control' name="" id="" />

        //                 </div>
        //             </div>
        //             <div className='row gap-4'>
        //                 <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>End Date</label>
        //                     <input type="date" className='form-control' name="" id="" />

        //                 </div>
        //                 {/* <div className='col-5'>
        //                     <label htmlFor="" className='form-label'>Policy Number</label>
        //                     <input type="number" className='form-control' name="" id="" />

        //                 </div> */}
        //             </div>
        //             <button className='btn btn-success'>Submit</button>
        //         </form>
        //     {/* </div> */}
        // </div>
    )
}
