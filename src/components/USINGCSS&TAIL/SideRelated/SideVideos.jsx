

import React from 'react'
import { Link } from 'react-router-dom'

const SideVideos = ({ video }) => {
    console.log(video)
    let VidID = video?.id?.videoId
    return (
        <Link to={`/OfficialYouTubeCloneV1/video/${VidID}`}>
            <div className='
              bg-black  m-3
              md:flex  gap-6 
              '>
                <div className='md:mr-2 shrink-0 '>
                    <img //250px to 200
                     className='xl:max-w-[180px] xl:w-[170px] w-auto'

                        style={{ borderRadius: '6px'}}
                        src={video?.snippet?.thumbnails?.medium?.url}
                        onerror='https://www.parksmarina.com/images/not_available.png'
                        alt="thumb.img" />
                </div>
                <div className='flex flex-col sm::w-[300px]'>
                    <div>
                        <p style={{ color: 'white' }}>{video.snippet.title}</p>
                    </div>
                    <div >
                        <p style={{ color: 'grey' }}>{video.snippet.channelTitle}</p>
                    </div>

                </div>
            </div></Link>
    )
}

export default SideVideos