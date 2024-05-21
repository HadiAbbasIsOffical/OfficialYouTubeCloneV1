import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CgPlayList } from "react-icons/cg";
import FetchPlayitems from '../Apis/PlaylistItemsfetch';

const Playlist = ({Playlist}) => {
    console.log(Playlist,'has been executed!!')
    useEffect(()=>{
      FetchPlayitems(Playlist.id).then((item)=>console.log(item))
    },[])
  return (
    <div className=' block m-3 md:ml-[2px] 
    relative text-wrap hover:cursor-pointer
    '
    >
        <div style={{
            position: 'absolute',
            zIndex:3,
            bottom:'-25px', right: '0',paddingBottom:'1px'
        }}
          >
            <CgPlayList size={140} />

        </div>
            <div className=' relative'>
                <img
                    src={Playlist?.snippet?.thumbnails?.high?.url}
                    alt='video'
                    style={{ borderRadius: '10px' }}
                    className='lg:w-[450px] lg:h-[280px] w-[500px] h-[300px]'>
                </img>
            </div>
            <div className='text-wrap w-[400px] '>
                <div className='md:grid md:grid-cols-[1fr]'>
                    
                    <div className='grid grid-rows-[1fr,30px]'>
                        <p className=' font-bold text-2xl text-white'>{Playlist?.snippet?.title}</p>
                       <div className='grid grid-cols-[auto,1fr]'>
                         <p className='text-sky-100 font-bold'>{Playlist?.snippet?.channelTitle}</p></div>
                        
                         </div>
                </div>
            </div>

    </div>
  )
}

export default Playlist