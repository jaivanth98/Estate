import React from 'react';
import {housesData} from "../data"
import { useParams } from 'react-router-dom';
import {BiBed,BiBath,BiArea} from "react-icons/bi"
import { Link } from 'react-router-dom';
const PropertyDetails = () => {
  const {id}= useParams()
  const house = housesData.find(house =>{
    return house.id === parseInt(id)
  })
  return <section>
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full '>
            {house.type}
          </div>
          <div className='bg-violet-700 text-white px-3 rounded-full'>
            {house.country}
          </div>
        
        </div>
        <div className='text-3xl font-semibold text-violet-600'>${house.price}</div>
         </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt=''/>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
          <div className='flex gap-x-2 items-center'>
              <BiBed/>
              <div>{house.bedrooms}</div>
          </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath/>
              <div>{house.bathrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
              <BiArea/>
              <div>{house.surface}</div>
          </div>
          </div>
       
          <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'><img src={house.agent.image}/></div>
            <div>
              <div className='font-bold text-lg'>
                {house.agent.name}
                <Link to={""}>View Listings</Link>
              </div>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Name*' type='text'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Email*' type='text'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder="Phone*"type='text'/>
            <textarea className='border border-gray-300 focus:border-violet outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 'defaultValue="Hellom I am interested in [modern apartment]" placeholder='Message*'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
              <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>call</button>
            </div>
          </form>
        </div>
        </div>
      </div>
   
  </section>;
};

export default PropertyDetails;
