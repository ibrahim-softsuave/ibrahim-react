import React, { useState } from 'react'
import './leftside.css' 
import  * as Aaicons  from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useContext } from 'react';
import AuthContext from './login/context/Authprovider';
import axios from './login/api/axios';
const USER='/intelletUsers'

export const Leftside = () => {
    const user=useContext(AuthContext);
    const[formData,setFormData]=useState({});
    const[success,setSuccess]=useState(true);

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setFormData( values =>({...values,[name]:value}))
    }
    const handleNext=(e)=>{
        e.preventDefault();
        setSuccess(!success)
        console.log(formData);

    }
    const handleBack=()=>{
        setSuccess(!success)
    }
  return (
    <div className='overAll'>{success?(<>
    <div className='element'>
        <div className='left-element'>  
        <div className='top-elem'>
            <IconContext.Provider value={{color:'Gold'}}>
            <p  style={{marginTop:'150px',fontSize:'35px'}}><Aaicons.AiOutlineDollar/></p></IconContext.Provider>
            <p >Pay Someone</p>
            <p >you can pay some one in 4 easy steps</p>
        </div>
        <form autoComplete='off'>
            <label >Pay : </label>
                <input list='pay-list'></input>
                <datalist id='pay-list'>
                    <option value={['hello']}/>
                </datalist><br></br>
            <label >Pay : </label>
                <input type="text" name='pay' value={formData.pay} onChange={handleChange}></input><br/>
            <label >From : </label>
                <input type="text" name='from' value={formData.from } onChange={handleChange}></input><br/>
            <label >Amount :</label >
                <input type="text" name='amount' value={formData.amount} onChange={handleChange}></input><br/>
            <label >Payment Reason :</label>
                <input type="text" name='reason' value={formData.reason} onChange={handleChange}></input><br/>
            <label >send advice to :</label>
                <input type="text" name='advice' value={formData.advice} onChange={handleChange}></input><br/>
            <label >withholding tax : </label>
                <input type="text" name='tax' value={formData.tax} onChange={handleChange}></input><br/>
            <label className='label'>supporting documents : </label>
                <input type="text" name='doc' value={formData.doc} onChange={handleChange}></input><br/>
            <div className='form-footer'>
            <a href="/payment-form">cancel</a>
            <button>save as draft</button>
            <button onClick={handleNext}>next</button>
            </div>
        </form>
        </div>
        <div className='right-elemnt'>right side</div>
    </div>
    </>):(
    <div className='review'>
        <div className='review-container'>
            <p>Review and Continue</p>
            <p>please review your payment all the details are correct</p>
            <div className='rectangle'></div>
            <button onClick={handleBack}>back</button>
        </div>
     
    </div>
    )
    }
    </div>
  )
}
