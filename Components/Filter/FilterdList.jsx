import React from 'react'
import Card from '../Utils/Card'

const FilterdList = ({data}) => {
  return (
    <div className=' flex flex-row justify-center items-center gap-3 flex-wrap p-4'>
    {data.map((car,ind)=>{return(<Card key ={ind} data ={car}/>)})}
   
     
  </div>
  )
}

export default FilterdList