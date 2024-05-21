import React, { useEffect } from 'react';
import './FEEDCSS.css';
import SideBar from './SideBar';

import './VideoDisplay.css';
import CategoryPills from './CategoryPills';
import VideoPill from './VideoPill';


const FEED = ({PropComponent=<VideoPill/>,PropWidth='1fr',allowance=true}) => {

    return (
        <div className='grid md:grid-cols-[100px,1fr]
        overflow-auto'>
          <div className='z-10 md:mb-0 mb-4'>
            <SideBar />

             </div> 
               <div className={`grid grid-rows-${allowance==true?`[90px,${PropWidth}]`:`[${{PropWidth}}]`} mx-3 `}>
                {
                  allowance==true?
                  <div style={{ minHeight: '90px' }} className=' overflow-x-auto overflow-y-hidden'>
                  <CategoryPills /></div>
                  :null
                }
                {PropComponent}
                </div>
        </div>
    );
}

export default FEED;
