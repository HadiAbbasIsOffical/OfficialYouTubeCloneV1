import React from 'react'

const FAVCOMPVID = () => {
  return (
    <div className='text-white grid grid-cols-2 max-h-lvh bg-black' style={{ border: '1px solid white' }}>
    <div>
      <div className='grid grid-cols-1' >
        {
          FavorVideos.length ?
            FavorVideos.map((eachvideo, index) =>
            VideosID.includes(eachvideo.id)?

                <div style={{ border: '1px solid white', margin: '2px' }}
                  className='grid grid-cols-[auto,1fr,60px]'>
              <Link
                to={`/video/${eachvideo?.id}`}>
                  <div style={{ border: '1px solid white' }}>
                    <img
                      src={eachvideo?.snippet?.thumbnails?.high?.url}
                      style={{ width: '200px' }}>
                    </img>
                  </div>
                  </Link>
                  <Link
                to={`/video/${eachvideo?.id}`}>
                  <div style={{ border: '1px solid white' }} className='grid grid-cols-[auto,60px]'>
                    <p>{eachvideo.snippet.title}</p>

                  </div>

                  </Link>
                  <div className='z-20 pt-2 justify-self-center' >
                      {
                        VideosID.includes(eachvideo.id) ? <MdOutlineFavorite size={34}
                          color='red'
                          onClick={() => RemoveItem(eachvideo.id)} /> : null


                      }
                    </div>
                </div>:null
            ) :
            <div stlye={{ border: '1px solid white' }}>No items avalible</div>}


      </div>
    </div>
    <div style={{ borderLeft: '1px solid white' }}>
    </div>

  </div>)
}

export default FAVCOMPVID