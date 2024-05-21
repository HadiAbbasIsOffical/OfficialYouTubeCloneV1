

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FetchVideos2 } from './USINGCSS&TAIL/singleVideo'
import RelatedVidFetch from './USINGCSS&TAIL/SearchVideos/RelatedVideos'
import Button from '@mui/material/Button';
import SideVideos from './USINGCSS&TAIL/SideRelated/SideVideos'
import StatsInfo from './USINGCSS&TAIL/Apis/Stats'

import { BiDislike, BiLike, BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import LikeCount from './USINGCSS&TAIL/LikeCount'
import FetchComments from './USINGCSS&TAIL/Apis/Comments'
import ProfileFetching from './USINGCSS&TAIL/Apis/FetchProfile'
// import Stack from '@mui/material/Stack';
import { Stack } from '@mui/material'

const VideoDetail = () => {
  const { id } = useParams()
  const [VideoDetails, SetVideoDetails] = useState([])
  const [RelatedVideos, SetRelated] = useState([])
  const [Stats, SetStats] = useState({})
  const [CommentsFile, SetComments] = useState([])
  const [DefaultComments, SetDefault] = useState(5)
  const [ProfileInfo, SetProfileInfo] = useState([])
  const [Oftext, AllowText] = useState(false)
  const [DescText, SetDesc] = useState(300)

  useEffect(() => {

    FetchVideos2(`videos?part="contentDetails&statistics&snippet&id=${id}`).then((video) => SetVideoDetails(video.items[0].snippet))
    RelatedVidFetch(id).then((videositem) => SetRelated(videositem.items))
    FetchComments(id).then((comments) => SetComments(comments.items))

    async function FetchStats() {
      await StatsInfo(`${id}`).then((data) => SetStats(data.items[0]))
    }
    FetchStats()

  }, [id])
  useEffect(() => {
    if (Oftext) {
      SetDesc(-1);
    } else {
      SetDesc(300);
    }
  }, [Oftext]);
  useEffect(() => {
    if (VideoDetails.channelId) {
      let ChannelId = VideoDetails.channelId
      ProfileFetching(ChannelId).then((Context) => SetProfileInfo(Context.items[0]))
    }

  }, [VideoDetails, id])

  function Increment() {
    if (Oftext) {
      SetDesc(300);
      AllowText(false);
    } else {
      SetDesc(-1);
      AllowText(true);
    }

  }
  console.log('profileinfo1',ProfileInfo,ProfileInfo?.snippet?.thumbnails?.high?.url)
  // console.log(CommentsFile)
  return (

ProfileInfo?
  <div className="xl:grid xl:grid-cols-[2fr,1fr] bg-black min-h-screen ">
  <div className="bg-black text-white p-6 lg:grid-rows-[auto,1fr]">

    <div className="mb-6 flex">
      <ReactPlayer width={1100}
        height={500} url={`https://youtube.com/watch?v=${id}`} playing={true} controls />
    </div>
    <div>
      <h1 className="md:text-3xl text-2xl font-bold mb-4">{VideoDetails.title}</h1>
      {/* <Link
          to={`/ViewProfile/${id}`}>            </Link> */}
      
      <div className="grid grid-cols-2 gap-4 ">
        <Link to={`/OfficialYouTubeCloneV1/ViewProfile/${VideoDetails.channelId}`}>
          <div className="flex gap-4">

            <img src={ProfileInfo?.snippet?.thumbnails?.high?.url} alt="profile" className="w-11 h-11 rounded-full" />
            <div className="col-span-2 flex flex-col justify-center">
              <p className="text-lg font-semibold">{VideoDetails.channelTitle}</p>
              <p> {
                Number(ProfileInfo?.statistics?.subscriberCount) > 999 && ProfileInfo?.statistics?.subscriberCount == 4 ?
                  ProfileInfo?.statistics?.subscriberCount.slice(0, -3) + "." + ProfileInfo?.statistics?.subscriberCount.slice(1, 2) + "K" :
                  Number(ProfileInfo?.statistics?.subscriberCount) > 99999 && ProfileInfo?.statistics?.subscriberCount == 6 ?
                    ProfileInfo?.statistics?.subscriberCount.slice(0, -3) + "M" :
                    Number(ProfileInfo?.statistics?.subscriberCount) > 99999 && ProfileInfo?.statistics?.subscriberCount.slice(0, -6).length == 3 ?
                      ProfileInfo?.statistics?.subscriberCount.slice(0, -6) + "." + ProfileInfo?.statistics?.subscriberCount.slice(3, 4) + "M" :
                      Number(ProfileInfo?.statistics?.subscriberCount) > 99999 && ProfileInfo?.statistics?.subscriberCount.slice(0, -6).length == 2 ?
                        ProfileInfo?.statistics?.subscriberCount.slice(0, -6) + "." + ProfileInfo?.statistics?.subscriberCount.slice(2, 3) + "M" :
                        Number(ProfileInfo?.statistics?.subscriberCount) > 99999 && ProfileInfo?.statistics?.subscriberCount.slice(0, -6).length == 1 ?
                          ProfileInfo?.statistics?.subscriberCount.slice(0, -6) + "." + ProfileInfo?.statistics?.subscriberCount.slice(1, 2) + "M"
                          : Number(ProfileInfo?.statistics?.subscriberCount) > 999 ? ProfileInfo?.statistics?.subscriberCount.slice(0, -3) + "K" :
                            ProfileInfo?.statistics?.subscriberCount
              }
                Subscribers</p>
            </div>

          </div>
        </Link>

      <div className='grid ml-4 md:ml-0 md:flex items-center gap-4 justify-self-end '>
        <div >

           <Stack direction="row" spacing={2}>
            <Button style={{ color: 'black', background: 'white' }}>Subscribe</Button>
          </Stack> 
        </div>

        <div className='flex-item ml-auto 
        md:border-solid md:border-2 border-gray-800	
         rounded-full px-2'>
          <div className='grid grid-cols-2 md:flex md:border-l-indigo-50 rounded-full' >
            <div className='md:m-1 md:mx-2  md:block grid justify-self-center hover:opacity-60 hover:ease-in-out hover:cursor-pointer active:opacity-50'>
              <BiSolidLike color='white' size={30} />
              <h4 className='font-bold pl-2'>{Stats?.statistics?.likeCount > 999 && Stats?.statistics?.likeCount.toString().length == 4 ? Stats?.statistics?.likeCount.toString().slice(0, -3) + "." + Stats?.statistics?.likeCount.toString().slice(1, 2) + "K"
                : Stats?.statistics?.likeCount > 999 ? Stats?.statistics?.likeCount.toString().slice(0, -3) + "K" :
                  Stats?.statistics?.likeCount}</h4>

            </div>
            <div className='md:m-1  md:mx-2 md:block grid justify-self-center  hover:opacity-60 hover:ease-in-out hover:cursor-pointer active:opacity-50' style={{ borderLeft: '1px solid white' }}>
              <div className='pl-2'>
                <BiSolidDislike color='white' size={30} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className='grid grid-rows-[auto,1fr] mt-2 drop-shadow-lg rounded-lg bg-white bg-opacity-10'>
      <div className='drop-shadow-lg rounded-lg bg-white bg-opacity-10 	'>

        {
          Stats && <LikeCount ViewCount={Stats?.statistics?.viewCount} />
        }
        {
          VideoDetails?.description?.length > 300 ?
            <p class="pl-2 opaity-4  text-wrap"> {VideoDetails?.description?.slice(0, DescText)}...
              <span className='font-bold  text-1xl hover:opacity-5 hover:cursor-pointer  '
                onClick={() => Increment()}>   {
                  Oftext == true ? 'Less' : 'More'
                }</span></p>
            :
            <p class="pl-2 opaity-4  text-wrap"> {VideoDetails?.description}</p>
        }

      </div>
      <div className='flex flex-col'>
        <div>
          <p className='text-3xl m-2 mb-4 font-bold'>{CommentsFile ? CommentsFile.length : null}
           Comments {!CommentsFile ? "Are Disabled" : null}{CommentsFile ? ":" : null}</p>
        </div>
        <div className='ml-2 flex flex-col '>
          {
            CommentsFile ? CommentsFile.map((eachCom, index) =>
              index < DefaultComments ?
                <div className='drop-shadow-lg rounded-lg bg-white bg-opacity-10 my-3'>
                  <div className='grid grid-cols-[auto,1fr]'>
                    <div>
                      <img
                        src={eachCom?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
                        }
                        style={{ width: '35px', borderRadius: '60%', margin: '4px' }}>
                      </img>
                    </div>
                    <div className='ml-2 grid grid-rows-[auto,auto]'>
                      <div className='mb-2'>
                        <Link to={`/OfficialYouTubeCloneV1/ViewProfile/${eachCom?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}>

                          <p className='font-bold'>{eachCom?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                        </Link>

                      </div>
                      <div className='mb-2 grid grid-rows-[auto,auto]'>
                        <div className='mb-2'>
                          <p>{eachCom?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
                        </div>
                        <div className='flex'>
                          <div className='mr-2'>
                            <BiLike color='white' size={25} /></div>
                          <div>
                            <span>{eachCom?.snippet?.topLevelComment?.snippet?.likeCount > 999 && eachCom?.snippet?.topLevelComment?.snippet?.likeCount.toString().length == 4 ?
                              eachCom?.snippet?.topLevelComment?.snippet?.likeCount.toString().slice(0, -3) + "." + eachCom?.snippet?.topLevelComment?.snippet?.likeCount.toString().slice(1, 2) + "K"
                              : eachCom?.snippet?.topLevelComment?.snippet?.likeCount > 999 ? eachCom?.snippet?.topLevelComment?.snippet?.likeCount.toString().slice(0, -3) + "K" : eachCom?.snippet?.topLevelComment?.snippet?.likeCount == 0 ? null :
                                eachCom?.snippet?.topLevelComment?.snippet?.likeCount}

                            </span>
                          </div>
                          <BiDislike color='white' size={25} />
                        </div>
                      </div>

                    </div>

                  </div>
                </div> : null

            ) : null
          }
          <div>
            {
              CommentsFile ?
                DefaultComments >= CommentsFile.length ? null :
                  <button className='drop-shadow-lg rounded-lg bg-black bg-opacity-70 px-4 py-1 hover:opacity-10' onClick={() => SetDefault(DefaultComments + 5)}>Load more</button>
                : null
            }
          </div>

        </div>
      </div>

    </div>
  </div>
  <div style={{ marginLeft: '2px' }} className='grid grid-rows-[auto,1fr] bg-black ' >
    <div>
      {
        RelatedVideos?
        RelatedVideos.map((each) => <SideVideos video={each} />):null
      }
    </div>
    <div className='drop-shadow-lg rounded-lg bg-white bg-opacity-10 my-3'>
      <p className='text-white'>@madeby HadiAbbasIsOffical</p>
    </div>



  </div>
</div>

  :null)
    }
export default VideoDetail