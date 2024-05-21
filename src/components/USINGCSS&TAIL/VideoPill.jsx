import React, { useEffect, useState } from 'react'
import  { FetchNewApi } from './FetchData'
import EachVideo from './EachVideo'
import { useContext } from 'react'
import { GlobalContext } from './context'
const VideoPill = () => {
    const[Videos,SetVideos]=useState([])
    const{ButSelected,SetSelected}=useContext(GlobalContext)
useEffect(()=>{
    FetchNewApi(ButSelected).then((data)=>SetVideos(data.items))
},[ButSelected])
    return (
     
    Videos.length?
       <div className='flex flex-wrap justify-center overflow-x-hidden'>
            {Videos.map((item, index) => (
                <EachVideo NewVid={item}/>
            ))}

        </div>
    :null
    )
}

export default VideoPill