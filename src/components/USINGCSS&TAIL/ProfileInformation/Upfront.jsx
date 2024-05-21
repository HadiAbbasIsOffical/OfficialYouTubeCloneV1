import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from '../context';

import { FaVideo } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GiShadowFollower } from "react-icons/gi";
import { FiGlobe } from "react-icons/fi";
import './pi.css';


const Upfront = ({ descrip=null, stats, country }) => {
    const { UpFront, SetUpFront } = useContext(GlobalContext)
    const [Oftext, AllowText] = useState(false)
    useEffect(() => {
        if (Oftext) {
            SetDesc(-1);
        } else {
            SetDesc(370);
        }
    }, [Oftext]);
    const [DescText, SetDesc] = useState(370)
    function Increment(){
            if (Oftext) {
                SetDesc(370);
                AllowText(false);
            } else {
                SetDesc(-1);
                AllowText(true);
            }
        
    }
    return (
        <div className={`fixed w-[600px] 
    h-[500px] left-[33%]
    grid grid-rows-[auto,1fr]
    
    top-[15%] z-20
    drop-shadow-lg rounded-lg bg-gradient-to-r from-violet-500
     to-fuchsia-500 my-3
     ${UpFront ? 'animate-slide-in' : 'animate-slide-out'}
   `}
        >

            <div
                className='grid grid-cols-[1fr,30px]
                drop-shadow-lg rounded-lg bg-black bg-opacity-80'>
                <div
                    className='grid grid-cols h-auto'>
                    <div>
                        <h1 className='text-2xl font-bold'
                            style={{ color: 'white' }} >About</h1>
                    </div>
                    <div className=' drop-shadow-lg rounded-lg text-wrap border-black border-opacity-100 '>
                        {descrip && descrip.length > 393 ?
                            <h4 className='drop-shadow-lg rounded-lg text-wrap border-black border-opacity-100' style={{ color: 'white' }}>{descrip.slice(0,DescText) + "..."}<span className='font-bold  text-1xl hover:opacity-5 hover:cursor-pointer  ' onClick={() =>Increment()}>
                                {
                                    Oftext==true?'Less':'More'
                                }
                            </span></h4>

                            :
                            <h4 className='drop-shadow-lg rounded-lg text-wrap border-black border-opacity-100' style={{ color: 'white' }}>{descrip && descrip.length?descrip
                                
                                
                                :
                                
                                <h4 className='drop-shadow-lg rounded-lg text-wrap border-black border-opacity-100 h-[80px]' style={{ color: 'gray' }}>No profile info available.</h4>
                                }</h4>

                        }
                    </div>

                </div>
                <div>
                    <RxCross2 size={30}
                        className='hover:opacity-10 hover:cursor-pointer ' onClick={() => { SetUpFront(false) }} />

                </div>
            </div>
            <div className='grid grid-rows-[70px,1fr]'>
                <div className='drop-shadow-lg rounded-lg bg-black bg-opacity-80 my-3'>
                    <h1 className='text-2xl font-bold ml-3'
                        style={{ color: 'white' }}>Channel Details</h1>
                </div>
                <div className='grid 
                grid-cols-1 drop-shadow-lg rounded-lg bg-black bg-opacity-80 my-3'>
                    <div
                        className='grid grid-cols-[80px,1fr]
                        drop-shadow-lg rounded-lg bg-black bg-opacity-25
                        '>
                        <div className='ml-4'>
                            <FaVideo color={'white'} size={30} />
                        </div>
                        <div>
                            <p style={{ color: 'white' }}>Total Video Count: {stats?.videoCount} </p>
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-[80px,1fr]
                        drop-shadow-lg rounded-lg bg-black bg-opacity-[0.3]
                        '>
                        <div className='ml-4'>
                            <MdReviews color={'white'} size={30} />
                        </div>
                        <div>
                            {
                                stats?.viewCount ?
                                <p style={{ color: 'white' }}>Total View Count: {
                                    Number(stats.viewCount) > 999 && stats.viewCount.length == 4 ?
                                        stats.viewCount.slice(0, -3) + "." + stats.viewCount.slice(1, 2) + "K" :
                                        Number(stats.viewCount) > 99999 && stats.viewCount.length == 6 ? stats.viewCount.slice(0, -3) + "M" :
                                            Number(stats.viewCount) > 99999 ? stats.viewCount.slice(0, -6) + "M"
                                                : Number(stats.viewCount) > 999 ? stats.viewCount.slice(0, -3) + "K" :
                                                    stats.viewCount
                                } </p>
                                :null
                            }
                           

                        </div>
                    </div>
                    <div
                        className='grid grid-cols-[80px,1fr]
                        drop-shadow-lg rounded-lg bg-black bg-opacity-[0.37]
                        '>
                        <div className='ml-4' >
                            <GiShadowFollower color={'white'} size={30} />
                        </div>
                        <div>
                            <p style={{ color: 'white' }}>Total Subscribers:
                                {
                                    Number(stats.subscriberCount) > 999 && stats.subscriberCount.length == 4 ?
                                        stats.subscriberCount.slice(0, -3) + "." + stats.subscriberCount.slice(1, 2) + "K" :
                                        Number(stats.subscriberCount) > 99999 && stats.subscriberCount == 6 ? stats.subscriberCount.slice(0, -3) + "M" :
                                            Number(stats.subscriberCount) > 99999 && stats.subscriberCount.slice(0, -6).length == 3 ?
                                                stats.subscriberCount.slice(0, -6) + "." + stats.subscriberCount.slice(3, 4) + "M" :
                                                Number(stats.subscriberCount) > 99999 && stats.subscriberCount.slice(0, -6).length == 2 ?
                                                    stats.subscriberCount.slice(0, -6) + "." + stats.subscriberCount.slice(2, 3) + "M" :
                                                    Number(stats.subscriberCount) > 99999 && stats.subscriberCount.slice(0, -6).length == 1 ?
                                                        stats.subscriberCount.slice(0, -6) + "." + stats.subscriberCount.slice(1, 2) + "M"
                                                        : Number(stats.subscriberCount) > 999 ? stats.subscriberCount.slice(0, -3) + "K" :
                                                            stats.subscriberCount
                                }
                            </p>

                        </div>
                    </div>
                    <div
                        className='grid grid-cols-[80px,1fr]
                        drop-shadow-lg rounded-lg bg-black bg-opacity-[0.4]
                        '>
                        <div className='ml-4'>
                            <FiGlobe color={'white'} size={30} />
                        </div>
                        <div>
                            <p style={{ color: 'white' }}>Country: {country?country:'Null'}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Upfront