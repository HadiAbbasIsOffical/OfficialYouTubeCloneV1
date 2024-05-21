import React, { useContext, useState } from 'react';
import './pi.css';
import { GlobalContext } from '../USINGCSS&TAIL/context';

const PopUpError = () => {
    const { Disclaimer, SetDisclaimer } = useContext(GlobalContext);
    const [IsOpen, SetOpen] = useState(false);

    const togglePopup = () => {
        SetDisclaimer(!Disclaimer);
    };

    return (
        <div className='max-h-screen backdrop z-20 hover:cursor-pointer' onClick={()=>SetDisclaimer(false)}>
           
            <div className={`fixed w-[500px] h-[300px] md:left-[33%] grid grid-rows-[auto,1fr] top-[15%] z-20 drop-shadow-lg rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 my-3 ${IsOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
                <div className='grid md:grid-cols-[1fr,40px] grid-cols-[1fr,1fr,1fr] bg-gradient-to-r from-gray-500 to-fuchsia-500' >
                    <div></div>
                    <div onClick={togglePopup} style={{ cursor: 'pointer' }} className='hidden md:block text-xl bold cross_but' >X</div>
                    <div className='md:hidden block hover:font-bold cross_but font-bold'>Close</div>
                </div>
                <div >
                    <h1>Feature Not Added</h1>
                    <h4>Coming Soon!</h4>
                </div>
            </div>
        </div>
    );
}

export default PopUpError;
