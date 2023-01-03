import React from 'react'
import Attach from '../assets/util-icon/attach-50.png'
import Image from '../assets/util-icon/image-64.png'



const Input = () => {
  return (
    <div className='input'>
        <textarea type="text" placeholder='Your message here' />
        <div className='send'>
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor = "file">
                <img src={Image} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input