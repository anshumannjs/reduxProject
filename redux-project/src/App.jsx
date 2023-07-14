import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import fetchData from './reduxComponents/actions';

function App() {
  let data={};
  data=useSelector((state)=>state);
  const dispatch=useDispatch();


  return (
    <>
      <button onClick={()=>{dispatch(fetchData())}} className='border border-black'>
        Fetch Data
      </button>
      
      <div className='text-black space-y-5'>
        {
          (data==undefined?"":
            data.map((val,i)=>{
              return(
                <div className='space-y-3 border border-black'>
                  <div className='flex space-x-3'>
                    <span className='font-bold'>Title:</span>
                    <span>{data[i].title}</span>
                  </div>

                  <div className='flex space-x-3'>
                    <span className='font-bold'>Body:</span>
                    <span>{data[i].body}</span>
                  </div>
                </div>
              )
            })
          )
        }
      </div>
    </>
  )
}

export default App
