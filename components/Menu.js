import React from 'react'
import { useRouter } from 'next/router';

const Menu = (props) =>{
    const router = useRouter()
    return(
        <>
        <div  className=' bg-white  md:w-40 lg:w-60 z-50 md:h-96 lg:ml-4 shadow-lg rounded-lg'>
            <ul className='flex md:flex-col space-x-8 md:space-x-0  pl-10 md:-ml-6 md:justify-center flex-grow shadow-md md:shadow-none w-full md:w-56  
            text-orange-500 font-normal  absolute md:mt-16 md:space-y-2 '>
                <li onClick={()=>router.push('/needy')} className='hover:cursor-pointer
                 hover:font-bold' >Needy Requests</li>

                <li onClick={()=>router.push('/donor')} className='hover:cursor-pointer
                 hover:font-bold'>Donor Requests</li>

                <li  className='hover:cursor-pointer hover:font-bold'>Manage Category</li>
                
            </ul>
        </div>
        

        </>

    )
}

export default Menu;