import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context'
import { FetchVideos2 } from './singleVideo'
import { Link } from 'react-router-dom'
import { MdOutlineFavorite } from 'react-icons/md'
import { PulseLoader } from 'react-spinners'

const FAVCOMP = () => {



  const { VideosID, setVideosID } = useContext(GlobalContext)
  const [FavorVideos, SetFavorVideos] = useState([])
  const [CurrFav, SetFav] = useState(true)

  //for error fatching , spinners etc..
  const [ErrorMsg, SetMsg] = useState(true);
  const [SpinnerLoad, SetLoading] = useState(false)

  useEffect(() => {
    SetFavorVideos([])
    if (VideosID.length > 0) {
      SetLoading(true)
      async function FetchingFav() {
        try {

          for (let x in VideosID) {
            await FetchVideos2(`videos?part=snippet&id=${VideosID[x]}`).then((video) => { SetFavorVideos((prev) => [...prev, video.items[0]]) })
            SetMsg(false)
            SetLoading(false)
          }
        } catch (error) {
          SetLoading(false)
          SetMsg(true)
        }
      }
      FetchingFav()
    }

  }, [VideosID])
  console.log(FavorVideos)

  function RemoveItem(IDX) {
    const obj = VideosID.filter((video) => video !== IDX)
    setVideosID(obj)
    SetFav(!CurrFav)
  }
  return (
    <div className='text-white
    grid grid-rows-[1fr,200px]
    md:grid
    md:grid-cols-2 
    
     h-lvh 
     bg-black overflow-x-hidden	 '>
        <div className='grid grid-cols-1 ' >
          {
            FavorVideos.length ?
              FavorVideos.map((eachvideo, index) =>
                VideosID.includes(eachvideo.id) ?

                  <div style={{ margin: '2px', borderRadius: '4px' }}
                    className='grid 
                    relative
                    // grid-rows[auto,1fr]
                    md:grid-cols-[auto,1fr,60px] '>
                    <Link
                      to={`/video/${eachvideo?.id}`}>
                      <div>
                        <img
                          src={eachvideo?.snippet?.thumbnails?.high?.url}
                          style={{ width: '300px' }}>
                        </img>
                      </div>
                    </Link>
                    <Link
                      to={`/video/${eachvideo?.id}`}>
                      <div  className='grid 
                      grid-rows-[auto,60px]'>
                        <div><p className='font-bold text-xl p-1'>{eachvideo.snippet.title}</p>
                        </div>
                        <div >
                          <p>{eachvideo.snippet.channelTitle}</p>
                        </div>
                      </div>

                    </Link>
                    <div className='z-20 pt-2
                    absolute
                  
                    md:block
                    justify-self-center hover:cursor-pointer' 
                    style={{top:'0',right:'0'}}>
                     
                      {
                        VideosID.includes(eachvideo.id) ? <MdOutlineFavorite size={34}
                          color='red'
                          onClick={() => RemoveItem(eachvideo.id)} /> : null


                      }
                    </div>
                  </div> : null
              ) : SpinnerLoad == false && ErrorMsg == true ?
                <div >
                  <h2 className='text-2xl font-bold underline p-1'>No item Available!</h2>
                </div> :
                SpinnerLoad == true ?
                  <div >
                    <PulseLoader color='#FFFFFF'  margin={5} size={34}/>


                  </div> :
                  null}



        </div>
      <div className='md:block hidden' style={{ borderLeft: '1px solid white' }}>



      </div>

    </div>
  )
}

export default FAVCOMP