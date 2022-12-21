import React from 'react';
import addPhoto from "../images/icons8-image-file-add-48.png" ;

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Gather</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={addPhoto} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
        <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;