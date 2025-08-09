import React from 'react'
// import './Body/Login.css'
import '../Body/Login.css'
export default function Login() {
    return (
        <div className='container-fluid log'>

            <form className='form row'>
                <div className='col-6 dimg'>
                    <img className="img" src="src/assets/3d-cartoon-baby-genius-photo.jpg" alt="bad" /> </div>
                <div className='col-6 dform'>
                    <h2 className='login'>Login</h2><hr />
                    <div className='row'>
                        <label htmlFor="" className='control-label'>UserName</label>
                        <div className='input-group-container'>

                            <input type="text" placeholder='User Name' className='form-control' name="username" id="username" />
                        </div>

                    </div>
                    <div className='row mt-2'>
                        <label htmlFor="">password</label>
                        <div className='input-group-container'>
                            <input type="text" className='form-control' placeholder='Password' name="password" id="password" />
                        </div>

                    </div>
                    <p className='p'>
                        Don't have an Account? <a href="#">Register</a>
                    </p>
                    <div>
                        <button className='btn btn-success' type='submit'>LogIn</button>
                    </div>
                </div>
            </form>
     
        </div >
    )
}
