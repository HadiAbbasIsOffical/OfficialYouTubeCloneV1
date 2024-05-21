import React from 'react'
import SideBar from './SideBar'
import CategoryPills from './CategoryPills'
import VideoPill from './VideoPill'
import { useParams } from 'react-router-dom'
import Videosprop from './SearchVideos/Videosprop'
import { useContext } from 'react'

import { GlobalContext } from './context'
import ChannelSearch from './ProfileInformation/ChannelSearch'
const SearchResult = () => {
  const { Selected, SetSelectedSide, ButSelected, SetSelected } = useContext(GlobalContext)
  let { id } = useParams()
  SetSelectedSide('abc')
  SetSelected('asca')
  return (
    <div className='grid  md:grid-cols-[100px,1fr]'>
      <div className='md:z-10 mb-4'>
        <SideBar />

      </div>
      <div className='grid md:grid-rows-[80px,1fr] grid-rows-1 mx-3'>
        <div className='md:block hidden'><CategoryPills /></div>
        {/* <div></div> */}
        <div className='grid lg:grid-rows-[auto,2fr] grid-rows-[auto,2fr]'>
          <div className='mb-3'>
            <ChannelSearch UserInfo={id} />
          </div>
          <div className='grid lg:grid-cols-[2fr,1fr] grids-cols-1 '>
            <Videosprop typeIn={id} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult