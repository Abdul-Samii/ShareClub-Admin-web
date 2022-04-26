import React from 'react'


const Header = () =>{
    return(
        <div className='bg-orange-400 top-0 sticky z-50 shadow-lg h-14 flex'>
            <div className='flex justify-start flex-grow '>
                <h1 className='font-bold mt-4 ml-4 text-white'>Admin Control Panel</h1>
            </div>

        

            {/* RIGHT */}
            <div className='flex justify-end flex-grow'>
                <h1 className='font-bold mr-4 mt-3 text-white'>Logout</h1>
            </div>
        </div>
    )
}

export default Header;