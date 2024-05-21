

import React from 'react'
import FEED from './FEED'
import FAVCOMP from './FAVCOMP'
const FavResult = () => {
    return (
        <div className=' bg-black   overflow-y-hidden '>
        <FEED PropComponent={<FAVCOMP/>} allowance={false}/>

</div>
    )
}

export default FavResult