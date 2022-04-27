import React,{useState} from 'react'
import { Header, Menu } from '../components'
import { useRouter } from 'next/router'

const Category = (props) =>{

    const {categories} = props.data
    const router = useRouter()
    const [category,setCategory] = useState()

    const handleDelete=(id)=>{
        
        fetch('http://fyyp.herokuapp.com/admin/category/'+id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          
        }),
        router.reload(window.location.pathname)
      
      }  
      
      const handleAddCategory=()=>{
          const obj={
              name:category
          }
        !category? alert("Enter Category Name")
        :(
        fetch('http://fyyp.herokuapp.com/admin/category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        }),
        router.reload(window.location.pathname)
        )
      }  
console.log(category)
    return(
        <div>
            <Header/>
            <Menu active="category"/>
        
        
        <div className='md:-mt-80 absolute overflow-x-auto md:w-[550px] md:pl-20 lg:overflow-visible
          mt-20 md:ml-52 lg:ml-96 ml-14'>
        {/* <h3 className='font-bold md:absolute'>Add New Category</h2> */}
            <div className='space-x-6'>
                <input value={category} onChange={(item)=>setCategory(item.target.value)} placeholder='Enter Category Name...' className='mt-16'/>
                <button onClick={()=>handleAddCategory()} className='bg-orange-400 px-4 py-1 font-semibold rounded-md hover:bg-orange-300 active:bg-red-400'>Add</button>
            </div>
        </div>



        {/* VIEW */}
        <div className='md:-mt-28 overflow-x-auto md:w-[550px] md:mx-52 lg:overflow-visible  
        mt-64 lg:mx-96 pl-20 w-96  '>
         <h2 className='font-bold md:absolute md:-mt-14 text-lg'>Categories</h2>
            <table className="table-auto  md:w-full w-32 border-collapse border border-slate-400 ...">
  <thead className='bg-orange-400'>
    <tr>
      <th className="border border-slate-300 ...">Sr.</th>
      <th className="border border-slate-300 ...">Category</th>
      <th className="border border-slate-300 ...">Action</th>

    </tr>
  </thead>
  <tbody>
  {
      categories.map((item,index)=>{
        return(
          <tr key={index}>
          <td className="border px-6 py-4 text-center border-slate-300 ...">{index+1}</td>
      <td className="border px-6 py-4 text-center border-slate-300 ...">{item.name}</td>
      <td className='space-x-2 mt-3 justify-center flex '>
      <button onClick={()=>handleDelete(item._id)} className="bg-red-400 px-3 text-white rounded-sm hover:bg-red-300">Delete</button>

      </td>
    
        </tr>
        )
      })
    }
    
  </tbody>
</table>

        </div>

        </div>
    )
}

export default Category

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://fyyp.herokuapp.com/admin/category`)
    console.log("MAI ",res)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }