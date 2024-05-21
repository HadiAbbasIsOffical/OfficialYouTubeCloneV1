import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { useContext } from 'react';
import { GlobalContext } from './context';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import PopUpError from '../CompNotAdded/PopUpErrorComp';
const SideBar = () => {
    const{Selected,SetSelectedSide,SetSelected,Disclaimer,SetDisclaimer}=useContext(GlobalContext)
    function SetProperties(SelectedCat,SetSide){
        SetSelected(SelectedCat)
        SetSelectedSide(SetSide)
    }
    //          Disclaimer==true?<PopUpError/>:null

    return (
        
        <nav className='md:flex md:flex-row  
        
        md:sticky md:top-0 md:left-0 md:mr-10'
        >
            {/* {
          Disclaimer==true?<PopUpError/>:null

            } */}
            <div className='  w-full md:w-auto
             md:h-lvh transition-transform 
            
             ease-in-out duration-300
             md:flex 
             md:flex-col
              justify-center
             md:justify-normal
             mx-2
             gap-5
            flex
             md:mr-[6px] '
                style={{ borderRight: '1px solid grey' }}>
                <Link to='/'>
                    <div class="sidebar-link mr-0 ml-0" 
                    onClick={()=>SetProperties('New','home')}>
                        <FaHome style={Selected =='home'?{color:'grey'}:{color:'white'}} size={30}/>

                        <p className='sidebar-text text-fuchsia-50'>Home</p>
                    </div></Link>
                <div className=' sidebar-link hover:cursor-pointer' onClick={()=>SetDisclaimer(Disclaimer!=true?true:null)}>
                    <SiYoutubeshorts  size={30} color='white' />
                {/* style={Selected =='shorts'?{color:'grey'}:{color:'white'}} size={30} onClick={()=>SetSelectedSide('shorts')} */}
                    <p className='sidebar-text  text-fuchsia-50'>Shorts</p>                </div>
                <div className='sidebar-link  hover:cursor-pointer' onClick={()=>SetDisclaimer(Disclaimer!=true?true:null)}>
                    <MdOutlineSubscriptions size={30}  color='white'/>
                    {/*  style={Selected =='subs'?{color:'grey'}:{color:'white'}} onClick={()=>SetSelectedSide('subs')} */}
                    <p className='sidebar-text text-fuchsia-50'>Subscriptions</p>
                </div>
                <div className= 'sidebar-link hover:cursor-pointer md:flex hidden' onClick={()=>SetDisclaimer(Disclaimer!=true?true:null)}>
                    <TbBrandYoutubeKids size={30} color='white'/>
                    {/* style={Selected =='orig'?{color:'grey'}:{color:'white'}} onClick={()=>SetSelectedSide('orig')} */}
                    <p className='sidebar-text text-fuchsia-50'>Orignals</p>
                </div>
                <Link
                to='/Favoriates'>
                <div class="sidebar-link"
                 onClick={()=>SetProperties('abc','favs')}>
                    <MdOutlineFavorite size={30} style={Selected =='favs'?{color:'grey'}:{color:'white'}}/>
                    <p className='sidebar-text  text-fuchsia-50'>Favoriates</p>
                </div>
                </Link>
            </div>
            <div>

            </div>



        </nav>
    )
}

export default SideBar