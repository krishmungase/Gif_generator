import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import usegif from './usegif';
import Tag from './Tag';

const Random = () => {


  const { gif, loading, fetchData } = usegif();



  const clickHandler = () => {
    fetchData();
  }
  return (
    <div className='w-1/2 bg-[#FFF2E1]  rounded-md mt-10 flex items-center justify-center flex-col shadow-[0_3px_10px_rgb(250,250,250,0.2)]'>
      <h1 className='text-center my-4 text-lg font-bold underline'>A Random GIF</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width='450' />)
      }

      <button className='w-1/2 bg-[#A79277] text-lg text-[#FFF2E1] rounded-lg font-semibold mx-auto my-7' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
