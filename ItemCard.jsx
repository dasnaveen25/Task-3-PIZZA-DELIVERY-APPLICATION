import React from 'react'
import { FaPlus, FaMinus} from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className='flex gap-3 shadow-md rounded-lg p-2 mb-3'>
    <MdDeleteOutline  className='absolute right-7 cursor-pointer text-gray-700 hover:text-red-600'/>
  <img src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png" 
  alt=""
  className='w-[51px] h-[50px]'

   />
   <div className='leading-5'>
    <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
    <div className='flex justify-between gap-3'>
    <span className='text-green-500 font-bold'> ₹120</span>
<div className='flex gap-3 justify-center items-center absolute right-7 '>
    <FaPlus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
    <span>1</span>
    <FaMinus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl  transition-all ease-linear cursor-pointer'/>
    </div>
    </div>
   </div>
    </div>
  )
}

export default ItemCard