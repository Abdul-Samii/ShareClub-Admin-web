import React from 'react'
import { Header, Menu } from '../components'

const Needy = () =>{
    return(
        <>
            <Header/>
            <Menu active="needy"/>
        
        <div className='md:-mt-72 overflow-x-auto md:w-[550px] md:mx-52 lg:overflow-visible  mt-20 lg:mx-96 '>
         <h2 className='font-bold md:absolute md:-mt-14 text-lg '>Needy Requests</h2>
            <table class="table-auto  md:w-full w-32 border-collapse border border-slate-400 ...">
  <thead className='bg-orange-400'>
    <tr>
      <th class="border border-slate-300 ...">Name</th>
      <th class="border border-slate-300 ...">Email</th>
      <th class="border border-slate-300 ...">Phone</th>
      <th class="border border-slate-300 ...">City</th>
      <th class="border border-slate-300 ...">Country</th>
      <th class="border border-slate-300 ...">Signup Type</th>
      <th class="border border-slate-300 ...">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr >
      <td class="border px-6 py-4 text-right border-slate-300 ...">AbdulSami</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">demo@gmail.com</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">03412312312</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Islamabad</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Pakistan</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Email</td>
      <div className='space-x-2 mt-3 justify-center flex '>
      <button class="bg-orange-400 px-1 py-1 text-white rounded-sm hover:bg-orange-300">Approve</button>
      <button class="bg-red-400 px-3 text-white rounded-sm hover:bg-red-300">Reject</button>

      </div>

    </tr>
    <tr>
    <td class="border px-6 py-4 text-right border-slate-300 ...">AbdulSami</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">demo@gmail.com</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">03412312312</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Islamabad</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Pakistan</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Email</td>
      <div className='space-x-2 mt-3 justify-center flex '>
      <button class="bg-orange-400 px-1 py-1 text-white rounded-sm hover:bg-orange-300">Approve</button>
      <button class="bg-red-400 px-3 text-white rounded-sm hover:bg-red-300">Reject</button>

      </div>

    </tr>
    <tr>
    <td class="border px-6 py-4 text-right border-slate-300 ...">AbdulSami</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">demo@gmail.com</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">03412312312</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Islamabad</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Pakistan</td>
      <td class="border px-6 py-4 text-right border-slate-300 ...">Email</td>
      <div className='space-x-2 mt-3 justify-center flex '>
      <button class="bg-orange-400 px-1 py-1 text-white rounded-sm hover:bg-orange-300">Approve</button>
      <button class="bg-red-400 px-3 text-white rounded-sm hover:bg-red-300">Reject</button>

      </div>

    </tr>
  </tbody>
</table>

        </div>

        </>
    )
}

export default  Needy