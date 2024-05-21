import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  VideoDetail from './components/VideoDetail'
import NewNavbar from './components/USINGCSS&TAIL/NewNavbar'
import ViewProfile from './components/USINGCSS&TAIL/ViewProfile'
import CreatorHub from './components/USINGCSS&TAIL/CreatorHub'
import FEED from './components/USINGCSS&TAIL/FEED'
import SearchResult from './components/USINGCSS&TAIL/SearchResult'
import FavResult from './components/USINGCSS&TAIL/FavResult'

export default function App() {
    return (


        <BrowserRouter>
            <div className='max-h-screen flex flex-col overflow-x-hidden  overflow-y-scroll:hidden' style={{ background: 'black' }}>
                <NewNavbar/>

                <Routes>
                    <Route path='/OfficialYouTubeCloneV1' exact element={<FEED />} />
                    <Route path='/OfficialYouTubeCloneV1/video/:id' element={<VideoDetail />} />
                    <Route path='/OfficialYouTubeCloneV1/CreatorHub/' element={<CreatorHub />} />
                    <Route path='/OfficialYouTubeCloneV1/SearchVideo/:id' element={<SearchResult />} />
                    <Route path='/OfficialYouTubeCloneV1/Favoriates' element={<FavResult />} />
                    <Route path='/OfficialYouTubeCloneV1/ViewProfile/:id' element={<ViewProfile />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

