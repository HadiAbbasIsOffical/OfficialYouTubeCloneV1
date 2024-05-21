import React, { useEffect, useState } from 'react'
import { FetchNewApi } from '../FetchData'
import { Link } from 'react-router-dom'

const ChannelSearch = ({ UserInfo }) => {
    const [AllProfiles, SetProfiles] = useState([])
    useEffect(() => {
        FetchNewApi(UserInfo).then((data) => SetProfiles(data.items))
    }, [UserInfo])
    console.log(AllProfiles.length)
    return (

        AllProfiles ?
            <div className='flex sm:flex-col md:grid md:grid-cols-6 overflow-x-hidden'>
                {
                    AllProfiles.map((profile) =>
                        profile.id.kind == 'youtube#channel' ?
                    <Link to={`/ViewProfile/${profile?.id?.channelId}`}>
                            <div className='grid grid-cols-[auto,1fr] m-1'
                            >
                                <div>
                                    {/* ?image */}
                                    <img
                                        className='shrink'

                                        style={{ width: '120px', borderRadius: '60%', margin: '4px' }}
                                        src={profile?.snippet?.thumbnails?.high?.url}>
                                    </img>
                                </div>
                                <div className='grid grid-rows-[auto,auto,1fr] ml-2 mt-3'>
                                    <div className='font-bold text-white'>
                                        <p className='text-2xl'>{profile?.snippet?.channelTitle}</p>
                                    </div>
                                    <div className=''>
                                        <p className=' text-white'>@{profile?.snippet?.title} .Subscribers</p>
                                    </div>
                                    <div>
                                        <p className=' text-white'>{profile?.snippet?.description.length>30?profile?.snippet?.description.slice(0,30)+"..":profile?.snippet?.description}</p>
                                    </div>
                                </div>


                            </div>
                            </Link>
                            : null)
                }
            </div>

            : null


    )
}
//changeasdasd

export default ChannelSearch