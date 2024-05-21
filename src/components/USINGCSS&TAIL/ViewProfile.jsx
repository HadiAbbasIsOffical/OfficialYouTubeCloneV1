

import React, { useContext, useEffect, useState } from 'react'
import { PiEmptyBold } from "react-icons/pi";

import SideBar from './SideBar'
import ProfileFetching from './Apis/FetchProfile'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import './ProfileInformation/pi.css'
import Upfront from './ProfileInformation/Upfront';
import { GlobalContext } from './context';
import GetChannelVid from './Apis/ChannelVideos';
import EachVideo from './EachVideo';
import PlayDetails from './Apis/PlaylistDetails';
import Playlist from './PlaylistInfo/Playlist';
const ViewProfile = () => {

  const { id } = useParams()
  console.log(id)
  const [UserInfo, SetinfoUser] = useState([])
  const { UpFront, SetUpFront } = useContext(GlobalContext)
  const [VideoInfo, SetVidInfo] = useState([])
  const [PlaylistDetails, SetPlaylist] = useState([])
  useEffect(() => {
    const fetchProfileAndVideos = async () => {
      const profileInfo = await ProfileFetching(id);
      SetinfoUser(profileInfo?.items[0]);

      const videoInfo = await GetChannelVid(id);
      SetVidInfo(videoInfo.items);
    };

    fetchProfileAndVideos();
  }, [id])
  useEffect(() => {
    if (UserInfo?.contentDetails?.relatedPlaylists?.uploads) {
      const fetchPlaylistDetails = async () => {
        const relatedPlaylist = UserInfo.contentDetails.relatedPlaylists.uploads;
        const playlistInfo = await PlayDetails(relatedPlaylist);
        SetPlaylist(playlistInfo?.items);
      };

      fetchPlaylistDetails();
    }
  }, [UserInfo])
  console.log(PlaylistDetails,'is playlistdetails')
  return (
    <div className='bg-black  grid grid-cols-[200px,1fr]
    overflow-auto'
      >

      {/* This is sideMenu */}
      <div>
        <SideBar />

      </div>
      {
        UpFront == true ? <Upfront country={UserInfo?.snippet?.country} descrip={UserInfo?.brandingSettings?.channel?.description} stats={UserInfo?.statistics} /> : null
      }

      <div className="grid grid-rows-[400px,auto,1fr]"
        onClick={() => UpFront == true ? SetUpFront(false) : null}>
        <div className="grid grid-rows-[200px,1fr] mr-14"
          >

          {/* This is background and channel info portion */}
          <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>

          </div>
          {/* This is Title name ,pic, info */}
          <div  className='grid grid-cols-[200px,1fr]'>
            <div className='mr-2' >
              <img src={UserInfo?.snippet?.thumbnails?.high?.url}
                className='w-13 h-13 rounded-full'
              
                alt='Profile_pic'></img>
            </div>
            <div  className='grid grid-cols-1'>
              <div className='font-bold'>
                <p className='text-white text-4xl'>{UserInfo?.brandingSettings?.channel?.title}</p>
              </div>
              <div >
                <h4 className='text-white font-bold'>{UserInfo?.snippet?.customUrl} .
                  {
                    Number(UserInfo?.statistics?.subscriberCount) > 999 && UserInfo?.statistics?.subscriberCount.length == 4 ?
                      UserInfo?.statistics?.subscriberCount.slice(0, -3) + "." + UserInfo?.statistics?.subscriberCount.slice(1, 2) + "K" :
                      Number(UserInfo?.statistics?.subscriberCount) > 99999 && UserInfo?.statistics?.subscriberCount == 6 ? UserInfo?.statistics?.subscriberCount.slice(0, -3) + "M" :
                        Number(UserInfo?.statistics?.subscriberCount) > 99999 && UserInfo?.statistics?.subscriberCount.slice(0, -6).length == 3 ?
                          UserInfo?.statistics?.subscriberCount.slice(0, -6) + "." + UserInfo?.statistics?.subscriberCount.slice(3, 4) + "M" :
                          Number(UserInfo?.statistics?.subscriberCount) > 99999 && UserInfo?.statistics?.subscriberCount.slice(0, -6).length == 2 ?
                            UserInfo?.statistics?.subscriberCount.slice(0, -6) + "." + UserInfo?.statistics?.subscriberCount.slice(2, 3) + "M" :
                            Number(UserInfo?.statistics?.subscriberCount) > 99999 && UserInfo?.statistics?.subscriberCount.slice(0, -6).length == 1 ?
                              UserInfo?.statistics?.subscriberCount.slice(0, -6) + "." + UserInfo?.statistics?.subscriberCount.slice(1, 2) + "M"
                              : Number(UserInfo?.statistics?.subscriberCount) > 999 ? UserInfo?.statistics?.subscriberCount.slice(0, -3) + "K" :
                                UserInfo?.statistics?.subscriberCount
                  } Subscribers</h4>
              </div>
              <div  className='text-wrap'>
                <h4 className='text-white '>{UserInfo?.brandingSettings?.channel?.description ? UserInfo?.brandingSettings?.channel?.description?.substr(0, 87) + "..." : 'Channel'}<Button style={{ color: 'white', background: 'black' }} onClick={() => SetUpFront(!UpFront)}>more</Button></h4>
              </div>
              <div >
                <Stack direction="row" spacing={2}>
                  <Button style={{ color: 'black', background: 'white' }}>Subscribe</Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        {
        PlaylistDetails?  

        
        <div className='grid grid-rows-[auto,1fr]' style={{ color: 'white' }}>
          
          
          <div className=''>
            <p className='text-4xl font-semibold from-neutral-800 '>PlayLists:</p>
          </div>
          <div className='min-w-[200px] '>
          {
            PlaylistDetails ?
              PlaylistDetails.map((each) =>


                <div className='flex' >
                  <Playlist Playlist={each} />


                </div>

              ) : 
             null
          }
          </div>

        </div>:null}
        <div className='grid grid-rows-[50px,1fr]'>
        <div className=''>
            <p className='text-4xl font-semibold text-white'>Uploads:</p>
          </div>
          <div className='grid grid-cols-3 min-h-screen'>
            {
              VideoInfo ?
                VideoInfo.map((video) =>
                  <EachVideo NewVid={video} />) : 
null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile