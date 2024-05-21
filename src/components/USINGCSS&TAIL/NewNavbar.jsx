import React, { useContext, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { SiYoutubestudio } from "react-icons/si";

import { RxCross2 } from "react-icons/rx";
import { IoMicOutline, IoSearch } from "react-icons/io5";


import { LuUpload } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GlobalContext } from './context';
import CreatorHub from './CreatorHub'
import PopUpError from '../CompNotAdded/PopUpErrorComp';
import { CiMicrophoneOn } from 'react-icons/ci';
const NewNavbar = () => {
  const [ShowFullScreen, SetFullScreen] = useState(false)
  const [SearchTo, SetSearch] = useState('')
  const { SetSelected, SetSelectedSide, Disclaimer, SetDisclaimer } = useContext(GlobalContext)
  const navigate = useNavigate();

  function ToHomeThings() {
    SetSearch('');
    SetSelected('New')
    SetSelectedSide('home')
  }
  function ResetDefaults() {
    SetSearch('');
    SetFullScreen(!ShowFullScreen)
  }
  const handleSubmit=(e)=>{
    console.log('hehe')
    e.preventDefault();
    if(SearchTo.length>0) {
      navigate.push(`/SearchVideo/${SearchTo}`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className=' md:flex md:gap-7 
    grid grid-cols-[auto,1fr,30px]
     lg:justify-between 
      justify-stretch
     md:justify-evenly'>
      <div

        className={`space-x-2 ml-2 shrink-0  items-center  h-24 ${ShowFullScreen ? 'hidden md:flex' : 'flex'}`}>
        <div className='lg:block hidden z-10 '>
          <RxHamburgerMenu size={30} color='white' />

        </div>
        {
          Disclaimer==true?<PopUpError/>:null
        }

        <Link
          to='/OfficialYouTubeCloneV1'
        >
          <img
            onClick={() => ToHomeThings()}
            // className={`${ShowFullScreen ? 'none' : 'block'}`}
            className='w-[160px] '

            src='https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png'></img>
        </Link>
      </div>
      {/* for short  scfreen */}

      <div className='md:hidden flex items-center justify-center gap-2 '>

        <div className={`${ShowFullScreen ? 'flex m-3' : 'hidden'}`}>
          <div>
            <input placeholder='Search'
              value={SearchTo}
              onChange={(e) => SetSearch(e.target.value)}
              className={`flex-1 p-2 `} /></div>

          <div className=' mt-1 ml-1'

            onClick={() => SetFullScreen(false)}>
            <RxCross2 color='white' size={30} />
          </div>
        </div>
        <div>
        <Link to={SearchTo.length > 0 ? `/OfficialYouTubeCloneV1/SearchVideo/${SearchTo}` 
        
        : null}>

          <IoSearch
            onClick={() => ResetDefaults()}

            size={30} color='white' />
</Link>
        </div>

        <div>
          <IoMicOutline size={30} color='white' />

        </div>
        <div>
        <CgProfile color='white' size={30} onClick={() => SetDisclaimer(!Disclaimer)}/>

        </div>
      </div>
      <div className='md:flex hidden flex-1 ml-12 items-center self-center justify-center'>

        <input placeholder='Search'
          className=' p-2  flex-1 flex-shrink flex'
          value={SearchTo}
          onChange={(e) => SetSearch(e.target.value)}>
        </input>

        <Link to={SearchTo.length > 0 ? `/OfficialYouTubeCloneV1/SearchVideo/${SearchTo}` 
        
        : null}>
      <IoSearch color='white' size={30} className='mx-2'/>
          
        </Link>
        <IoMicOutline size={30} color='white' />
      </div>
      <div className=' hidden sm:flex '>
        <div className='flex '>
          <div className='flex gap-2 shrink-0 lg:ml-[370px] justify-center' style={{ width: '200px', margin: '25px', }}>

            <div className=' flex gap-2'>
              <div className='flex shrink-0'>
                <LuUpload size={30} color='white' />
              </div>
              <div className='flex shrink-0'>
                <SiYoutubestudio size={30} color='white' />
              </div>
              <div className='flex shrink-0'>
                <IoMdNotifications size={30} color='white' />
              </div>
              <div className='flex shrink-0'
                onClick={() => SetDisclaimer(!Disclaimer)}>

                <CgProfile color='white' size={30} />


              </div>
            </div>

          </div>

        </div>
      </div>
    </div> </form>
  )
 
}

export default NewNavbar