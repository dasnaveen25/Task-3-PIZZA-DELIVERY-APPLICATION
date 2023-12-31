import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex flex-col lg:flex-row justify-between mx-6 py-2 mb-8' >
<div className='text-xl font-bold text-gray-600'>
<h3>{new Date().toUTCString().slice(0 ,16)}</h3>
<h1 className='text-2xl font-bold'>darkCoheck</h1>
</div>
<div>

</div>
<input type='search'
 name='search'
 id=''
 placeholder='Search here'
 autoComplete='off'
 className='p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[20vw]'

 />

   </nav>
  )
}

export default Navbar