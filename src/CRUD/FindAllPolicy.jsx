import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'


export default function FindAllPolicy() {
    const [customers, setCustomers] = useState([]);
    const fetchAll = async () => {
        try {
            const result = await axios.get("http://localhost:8080/fetchAllPolicy");
            setCustomers(result.data.listPolicy);
            console.log(result.data.listPolicy);
        } catch (error) {
            console.log("Policy Error ...:" + error);
        }
        // const fetch= async axios.get
    }
    useEffect(() => {
        fetchAll();
    }, []);
    return (
        <div className='container bg-secondary'>
            {/* <div> */}
                <h2 className='text-center mt-2'>Fetch All Policy</h2>
                <div className='d-flex justify-content-end mb-1'>
                    <div className='inputGroupContainer'>
                        <div className='input-group'>
                            <input type="search" className='form-control' />
                            <span className='input-group-text'><i className='fa fa-search'></i></span>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='overflow-y auto'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Id</th>
                                    <th scope='col'>PolicyTYpe</th>
                                    <th scope='col'>PolicyNumber</th>
                                    <th scope='col'>PolicyHolder</th>
                                    <th scope='col'>Amount</th>
                                    <th scope='col'>EndDate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers && customers.map((policy, index) => (
                                    <tr>
                                        <td key={index}>{policy.policyId}</td>
                                        <td>{policy.policyType}</td>
                                        <td>{policy.policyNumber}</td>
                                        <td>{policy.policyHolder}</td>
                                        <td>{policy.policyAmount}</td>
                                        <td>{policy.policyEndDate}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className='btn btn-warning mb-2' >Next</button>
                        </div>
                    </div>


                {/* </div> */}
            </div>
        </div >
    )
}
