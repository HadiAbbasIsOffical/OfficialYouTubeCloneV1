import VideoEach from './VideoEach'
import EachVideo from '../EachVideo'
import { useState,useEffect } from 'react'
import { FetchNewApi } from '../FetchData'

const Videosprop = ({typeIn}) => {
    const[Videos,SetVideos]=useState([])
    useEffect(()=>{
        FetchNewApi(typeIn).then((data)=>SetVideos(data.items))
    },[typeIn])
  return (
        
    Videos.length?
       <div className='flex flex-1 flex-col justify-center overflow-x-hidden'>
            {Videos.map((item, index) => (
                <VideoEach NewVid={item}/>
            ))}

        </div>
    :null
  )
}

export default Videosprop