import  * as Faicons  from "react-icons/fa";
import  * as Aaicons  from "react-icons/ai";
import  * as HIicons  from "react-icons/hi2";
import  * as Ioicons  from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import './navbar.css'
import { IconContext } from "react-icons/lib";

export default function Header(){
    const [state,setState]=useState(false);
    const  showSidebar=()=>setState(!state);
    return(
        <>
        <IconContext.Provider value={{color:'#fff'}}>
         <div className="navbar">
            <Link to="#" className="menu-bars">
                    <Faicons.FaBars onClick={showSidebar}/>
                    <span style={{color:'#fff',fontSize:'35px',height:'45px'}}>IGBT Bank</span>
            </Link> 
            <span className="nav-items">
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><Faicons.FaUserCircle/></span>
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><Aaicons.AiFillFileText/></span>
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><Aaicons.AiOutlineMessage/></span>
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><HIicons.HiDocumentCheck/></span>
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><Ioicons.IoPulse/></span>
            <span style={{color:'#fff',fontSize:'35px',height:'45px'}}><Ioicons.IoAlertCircle/></span>
            </span>
        </div>
        <nav className={state ?'nav-menu active':"nav-menu"}>
            <ul style={{ width:'100%'}} onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                    <Aaicons.AiOutlineClose/>
                    </Link>
                </li>
            {SidebarData.map((item,index)=>{
              return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        {item.title}
                    </Link>
                </li>
              )  
            })}

            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}