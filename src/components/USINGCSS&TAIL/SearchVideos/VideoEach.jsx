

import { Link } from 'react-router-dom'
import { GlobalContext } from '../context';
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext, useState } from 'react';
import React from 'react';

//console.log(NewVid?.id?.videoId)

const VideoEach = ({ NewVid }) => {
    console.log('we here')
    const { VideosID, setVideosID, } = useContext(GlobalContext)
    const [FavState, NewState] = useState(true)
    // const [FavState, NewState] = useState(true)
    let ID = NewVid.id.videoId


    function RemoveItem() {
        console.log('item removed', ID)
        let itemToBe = VideosID.filter((item, i) => item !== ID)
        setVideosID(itemToBe)


    }
    return ( 
        NewVid.id.kind == 'youtube#video' ?

            <div className=' place-items-baseline	 grid grid-cols-[1fr,auto] mt-4 mx-5 ml-[-2px] 
             text-wrap hover:cursor-pointer shadow-slate-100'

            >

                <Link to={`/video/${NewVid?.id?.videoId}`}>

                    <div className='grid md:grid-cols-[auto,1fr] grid-rows-[auto,1fr] justify-center'>
                        <div className=''>
                            <img
                                src={NewVid?.snippet?.thumbnails?.medium?.url}
                                alt='video'
                                style={{ borderRadius: '10px' }}
                                className='lg:w-[320px] w-auto min-w-[300px]'>
                            </img>
                        </div>
                            <div className='grid grid-rows-[auto,auto] sm:w-[160px]'>
                <div className='m-1 md:w-auto w-auto h-auto'>
                    <p className=' font-bold text-white' style={{ fontSize: '19px' }}>{NewVid.snippet.title}</p></div>
                <div className='m-1'>
                    <p className='text-sky-100 font-bold'>{NewVid.snippet.channelTitle}</p></div>
                            </div> 
                    </div>
                </Link >
                <div>

                </div>

              
            </div>

            : console.log('empty')
    )
}

export default React.memo(VideoEach)