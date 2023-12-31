import React from 'react'
import { IoStarSharp } from "react-icons/io5";


const Foodcard = ({id, name, price, desc, img, rating}) => {
  return (
 <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded gap-3'>
 <img src={img}
 alt=''
 className='w-auto h-[140px] hover:scale-105 cursor-grab transition-all duration-500 ease-out' />
<div className='text-sm justify-between flex'>
<h2 className=''>{name}</h2>
   <span className='text-green-500 flex '>{price}</span>
</div>
<p className='text-sm font-normal'>
      {desc.slice(0,70)}...
       </p>
       <div className='flex justify-between'>
           <span className='flex justify-center items-center'>
           <IoStarSharp  className='mr-1 text-sky-300'/> {rating}
           </span>
           <button className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to card</button>
       </div>

 </div>





  )
}

export default Foodcard