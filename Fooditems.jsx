import React from 'react'
import Foodcard from './Foodcard'
import FoodData from './data/Fdata'
const Fooditems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>

  {FoodData.map((food)=>{
    return <Foodcard 
    key={food.id}
     id={food.id}
name={food.name}
price={food.price}
desc={food.desc}
rating={food.rating}
img={food.img}
     />;
  })}
    </div>
  )
}

export default Fooditems








