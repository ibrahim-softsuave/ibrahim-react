import React from 'react'
import './login.css'
import { useRef,useState,useEffect,useContext} from 'react'
import AuthContext from '../login/context/Authprovider'
import axios from './api/axios'
const LOGIN_URL='/login'

const Login  = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef =useRef();
  const errRef = useRef();

  const [user,setUser]=useState('');
  const [pwd,setPwd]=useState('');
  const [errmsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);
  
  useEffect(()=>{
    userRef.current.focus()
  },[])
  
  useEffect(()=>{
    setErrMsg('')
  },[user,pwd])
const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const response = await axios.post(LOGIN_URL,{userName:user,password:pwd}
    );
    console.log(JSON.stringify(response?.data));
    setAuth({ user, pwd });
    setUser('');
    setPwd('');
    setSuccess(true);
} catch (err) {
    if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
    } else {
        setErrMsg('Login Failed');
    }
    errRef.current.focus();
}

}

  return (
   
    <div className='outer'>
       <>{success ?(
        <section className='sec'>
          <h1>you are logged in!</h1>
          <br/>
          <p>
            <a href='http://localhost:3000/home'>Go to Home</a>
          </p>
        </section>
       ):
            <section className='sec'>
              <p ref={errRef} className={errmsg ? "errmsg":"offscreen"} aria-live="assertive">{errmsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} className='frm'>
                  <label className='labe'>
                    User Name :
                    <input type="text"
                          id='username'
                          ref={userRef}
                          autoComplete='off'
                          value={user}
                          required
                          onChange={(e)=>setUser(e.target.value)}
                         ></input>
                  </label>
                  <label className='labe'>
                    Password :
                    <input type="password"
                     id='password'
                     value={pwd}
                     required
                     onChange={(e)=>setPwd(e.target.value)}></input>
                  </label>
                  <button>Submit</button>
                </form>
                <p style={{textAlign:'center'}}>
                  Need an account ?
                </p>
                <p style={{textAlign:'center',display:'inline-block'}}>
                <a href="https://google.com">Signup</a>
                </p>
            </section>
}
            </>
  </div>
  
  )
}

export default Login 