import React from 'react'

const Menu = () => {
  return (
    <div className='mx-2 p-5 '>
    <h3 className='text-xl font-semibold'>
    Food Content
    </h3>
    <div className='my-4 flex gap-3 overflow-x-hidden scroll-smooth lg:overflow-x-hidden'>
<button className='px-3 py-2 bg-green-400 rounded-lg hover:bg-green-500 font- hover:text-white'>
    all
</button>
<button className='px-3 py-2 bg-green-400 rounded-lg hover:bg-green-500 font- hover:text-white'>
    Brackcfast
</button>
<button className='px-3 py-2 bg-green-400 rounded-lg hover:bg-green-500 font- hover:text-white'>
    Lunch
</button>
<button className='px-3 py-2 bg-green-400 rounded-lg hover:bg-green-500 font- hover:text-white'>
    Dinner
</button>


    </div>
    
    </div>
  )
}

export default Menu