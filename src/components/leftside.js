import React from 'react'
import './leftside.css' 
import  * as Aaicons  from "react-icons/ai";

export const Leftside = () => {
  return (
    <div className='element'>
        <div className='left-element'>
        <Aaicons.AiOutlineDollar/>
        <p>Pay Someone</p>
        <p>you can pay some one in 4 easy steps</p>
        <form className='form'>
            <label>
                Pay :
                <input type="text"></input>
            </label>
            <label >
                Form :
                <input type="text"></input>
            </label>
            <label>
                Amount :
                <input type="text"></input>
            </label>
            <label>
                Payment Reason :
                <input type="text"></input>
            </label>
            <label>
              send advice to :
                <input type="text"></input>
            </label>
            <label>
                withholding tax :
                <input type="text"></input>
            </label>
            <label>
                supporting documents :
                <input type="text"></input>
            </label>

          
        </form>
    
        </div>
        <div className='right-elemnt'>right side</div>
    </div>
  )
}
