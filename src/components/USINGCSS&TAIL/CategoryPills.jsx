import React, { useState } from 'react'
import { categories } from './ButtonsCategories'
import { useContext } from 'react'
import { GlobalContext } from './context'
import Button from '@mui/material/Button';

const CategoryPills = () => {
  const {ButSelected,SetSelected} = useContext(GlobalContext)

  return (

        <div className=' top-0 bg-black
        ml-[-2px]
         overflow-x-auto overflow-y-hidden
          py-3 px-4 flex gap-7
           transition-transform
           z-10'>
  
  {
    categories.map((category)=>
    <Button 
    style={category.name==ButSelected?{background:'white',color:'black'}:{color:'white'}} 
    onClick={()=>SetSelected(category.name)}
    className='text-nowrap flex-row'>
            {category.name}
      
    </Button>

  )
  }
        </div>

  )
}

export default CategoryPills