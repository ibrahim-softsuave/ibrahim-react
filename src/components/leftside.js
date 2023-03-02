import React, { useState } from 'react'
import './leftside.css' 
import  * as Aaicons  from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useContext,useEffect } from 'react';
import AuthContext from './login/context/Authprovider';
import axios from './login/api/axios';
const USER='/intelletUsers'
const resentList='/recentList'
export const Leftside = () => {
    const user=useContext(AuthContext);
    const[formData,setFormData]=useState({});
    const[success,setSuccess]=useState(true);
    const[recData,setRecData]=useState([]);
    const[usersNames,setUserNames]=useState([]);
    console.log(usersNames);

    useEffect(()=>{
        axios.get(resentList).then((response)=>{
            setRecData(response.data);
        })
    },[]);

    const handleChange=async(e)=>{
        const accountNo=user.auth.accountNo
        const name=e.target.name
        const value=e.target.value
        setFormData( values =>({...values,[name]:value}))
        await axios.get(USER,{params :{searchItem:value,accountNo:user.auth.account_no}}).then((response)=>{
            setUserNames(response.data.query);
        })
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
    <div className='previous-next'>Back to previous</div>
    <div className='element'>
        <div className='left-element'>  
            <div className='top-elem'>
                <IconContext.Provider value={{color:'Gold'}}>
                <p  style={{ fontSize:'35px'}}><Aaicons.AiOutlineDollar/></p></IconContext.Provider>
                <p >Pay Someone</p>
                <p >you can pay some one in 4 easy steps</p>
            </div>
            <form autoComplete='off'>
                <label >Pay : </label>
                    <input style={{fontSize:'22px',borderRadius:'0.5rem',padding:'0.25rem',width:'290px'}} list='pay-list' name='pay' value={formData.pay} onChange={handleChange}></input>
                    <datalist id='pay-list'>
                        {usersNames.map((items,index)=>{
                            return(
                                <option id={index} value={items.userName}/>
                            )
                        })
                        }
                    </datalist><br></br>
                <label >From : </label>
                    <input type="text" name='from' value={formData.from } onChange={handleChange}></input><br/>
                <label >Amount :</label >
                    <input type="text" name='amount' value={formData.amount} onChange={handleChange}></input><br/>
                <label >Payment Reason :</label>
                    <input type="text" name='reason' value={formData.reason} onChange={handleChange}></input><br/>
                <label>Description for benificiary:</label>
                    <input type="text" name='benfi' value={formData.benifi} onChange={handleChange}></input><br/>
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
        <div className='right-elemnt'>
            <div style={{textAlign:'left',fontSize:'25px',margin:'10px',padding:'10px'}}>
                Recent Payments
            </div>
            {recData.map((item,index)=>{
                return(
                    <div id={index} className="recplace">
                        <p style={{display:'flex',justifyContent:'space-between'}}>{item.entryTime}<p>{item.amount}{item.currencyType}</p></p>
                        <p>{item.pay}</p> <p>{item.place}</p> <p>{item.IFSCcode}</p> <p>{item.status}</p>
                    </div>
                )
            })
            }
        </div>
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
