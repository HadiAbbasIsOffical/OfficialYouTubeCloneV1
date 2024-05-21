

import { Link } from 'react-router-dom'
import {GlobalContext} from './context'
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext,useState } from 'react';
import React from 'react';
//console.log(NewVid?.id?.videoId)

const EachVideo = ({ NewVid  }) => {
    const {VideosID,setVideosID,} = useContext(GlobalContext)
    const[FavState, NewState]=useState(true)

    // const [FavState, NewState] = useState(true)
        let ID=NewVid.id.videoId


function RemoveItem(){
    console.log('item removed',ID )
    let itemToBe=VideosID.filter((item,i)=>item !==ID)
    setVideosID(itemToBe)
    

}
    return (
        NewVid.id.kind === 'youtube#video' ?

            <div className=' block  md:m-6 m-2 md:ml-[-2px] 
            relative text-wrap hover:cursor-pointer'
            >
                <div style={{
                    position: 'absolute',
                    zIndex:3,
                    top: '0', right: '0',paddingBottom:'6px'
                }}
                    onClick={() => NewState(!FavState)}>
                    {
                        VideosID.includes(ID)?<MdOutlineFavorite size={30} 
                        color='red'
                        onClick={()=>RemoveItem()}/>: <MdFavoriteBorder 
                        size={30} color='red'
                        onClick={()=> setVideosID(PrevItem=>[...PrevItem,ID])} />

                    }

                </div>
                <Link to={`/video/${NewVid?.id?.videoId}`}>
                    <div className=' relative'>
                        <img
                            src={NewVid?.snippet?.thumbnails?.high?.url}
                            alt='video'
                            style={{ borderRadius: '10px' }}
                            className='lg:w-[450px] lg:h-[280px] w-[500px] h-[300px]'>
                        </img>
                    </div>
                    <div className='text-wrap w-[auto] sm:w-[400px] '>
                        <div className='md:grid md:grid-cols-[50px,1fr] '>
                            <img
                                src='https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png'
                                alt='profile'
                                style={{ width: '35px', borderRadius: '60%', margin: '4px' }}></img>
                            <div className='grid grid-rows-[1fr,30px]'>
                                <p className=' font-bold text-white'>{NewVid.snippet.title}</p>
                               <div className='grid grid-cols-[auto,1fr]'>
                                 <p className='text-sky-100 font-bold'>{NewVid.snippet.channelTitle}</p></div>
                                
                                 </div>
                        </div> 
                    </div>
                </Link >

            </div>
            : console.log('empty')
    )
}

export default React.memo(EachVideo)