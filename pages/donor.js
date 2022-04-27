import React from 'react'
import { Header, Menu } from '../components'
import { useRouter } from 'next/router'

const Donor = (props) =>{
  const router = useRouter()

const handleApprove=(id)=>{
  const obj={
    donorId:id
  }
  fetch('http://fyyp.herokuapp.com/admin/approvedonor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }),
  router.reload(window.location.pathname)

}
const handleReject=(id)=>{
  const obj={
    donorId:id
  }
  fetch('http://fyyp.herokuapp.com/admin/rejectdonor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  }),
  router.reload(window.location.pathname)

}


  return(
        <>
            <Header/>
            <Menu active="donor"/>
        
        <div className='md:-mt-72 overflow-x-auto md:w-[550px] md:mx-52 lg:overflow-visible mt-20 lg:mx-96 '>
         <h2 className='font-bold md:absolute md:-mt-14 text-lg '>Donor Requests</h2>
            <table className="table-auto  md:w-full w-32 border-collapse border border-slate-400 ...">
  <thead className='bg-orange-400'>
    <tr>
    <th className="border px-6 py-1 border-slate-300 ...">Sr.</th>
      <th className="border px-6 py-1 border-slate-300 ...">Name</th>
      <th className="border px-6 py-1 border-slate-300 ...">Email</th>
      <th className="border px-6 py-1 border-slate-300 ...">Phone</th>
      <th className="border px-6 py-1 border-slate-300 ...">City</th>
      <th className="border px-6 py-1 border-slate-300 ...">Country</th>
      <th className="border px-6 py-1 border-slate-300 ...">Signup Type</th>
      <th className="border px-6 py-1 border-slate-300 ...">Action</th>

    </tr>
  </thead>
  <tbody>
    {
      props.data.map((item,index)=>{
        return(
          <tr key={index}>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{index+1}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{item.name}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{item.email}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{item.phone}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{item.city}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{item.country}</td>
          <td className="border px-6 py-4 text-center border-slate-300 ...">
            {item.signupType==1&&'Email' || item.signupType==2&&'Facebook' || item.signupType==3&&'Google'}</td>

          <td className='space-x-2 mt-6 mx-1 justify-center flex '>
          <button onClick={()=>handleApprove(item._id)} className="bg-orange-400 px-1 py-1 text-white rounded-sm hover:bg-orange-300">Approve</button>
          <button onClick={()=>handleReject(item._id)} className="bg-red-400 px-3 text-white rounded-sm hover:bg-red-300">Reject</button>
    
          </td>
    
        </tr>
        )
      })
    }
    
  </tbody>
</table>

        </div>

        </>
    )
}

export default Donor


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://fyyp.herokuapp.com/admin/donorrequests`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}