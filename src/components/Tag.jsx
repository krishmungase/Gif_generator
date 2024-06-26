import React, { useState } from 'react'
import Spinner from './Spinner';
import usegif from './usegif';

const Tag = () => {
    const [tag, setTag] = useState('cat');
    const { gif, loading, fetchData } = usegif(tag);

    return (
        <div className='w-1/2 bg-[#FFF2E1]  rounded-md mt-10 flex items-center justify-center flex-col shadow-[0_3px_10px_rgb(250,250,250,0.2)]'>
            <h1 className='text-center my-4 text-lg font-bold underline'>Random {tag} GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width='450' />)
            }
            <input type="text" name="" className='w-1/2 text-center rounded-lg font-semibold mx-auto mt-3' placeholder='Enter Keyword' onChange={() => setTag(e.target.value)} value={tag} />
            <button className='w-1/2 bg-[#A79277] text-lg text-[#FFF2E1] rounded-lg font-semibold mx-auto mt-4 mb-7' onClick={() => fetchData(tag)}>Generate</button>
        </div>
    )
}

export default Tag

