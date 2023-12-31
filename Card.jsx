import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import ItemCard from './ItemCard';


const Card = () => {
  return (
    <>
    <div className='fixed right-0 top-0 lg:w-[20vw] bg-white w-full h-full mb-3'>
 <div className='flex justify-between items-center my-3 p-5'>
    <span> 
         my order
    </span>
    <IoCloseCircleSharp className='border-2 border-gray-600 text-gray-600
    font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer'/>
</div>

<ItemCard />
<ItemCard />
<ItemCard />

<div className='absolute bottom-0'>
  <h3 className='font-semibold'>items :</h3>
  <h3 className='font-semibold'>Totel Amount :</h3>
  <hr className='w-[90vw] lg:w-[18vw] my-2'/>
  <button className='bg-green-500 font-bold px-3 text-white py-2 hover:bg-green-600 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>Checkout</button>
</div>




    </div>

    
    </>
  )
}

export default Card