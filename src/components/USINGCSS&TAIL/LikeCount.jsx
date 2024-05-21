import React from 'react'
import { useState,useEffect } from 'react';
const LikeCount = ({ ViewCount }) => {
    const [tempStr, setTempStr] = useState('');
    useEffect(() => {
        if (ViewCount) {
            let formatedString = '';

            let tempViewCount = ViewCount.split('').reverse().join('');
            for (let i = 0; i < ViewCount.length; i++) {
                if (i > 0 && i % 3 === 0) {
                    formatedString += ',';
                }
                formatedString += ViewCount[i];
            }
            formatedString = formatedString.split('').reverse().join('');

            setTempStr(formatedString);
        }
    }, [ViewCount]);


    return (
        <div>
            <h4 className='font-bold pl-2'>{tempStr} Views</h4>
        </div>
    )
}


export default LikeCount;