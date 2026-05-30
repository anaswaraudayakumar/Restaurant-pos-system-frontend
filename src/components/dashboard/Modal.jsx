import React ,{useState}from 'react'
import { motion } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import { useMutation } from "@tanstack/react-query";
import { addTableAPI } from '../../services/allApi';
import { toast } from 'react-toastify';

function Modal({setIsTableModalOpen}) {
    const [tableData,setTableData] = useState({
        tableNo:"",
        seats:""
    })
    const handleInputChange =(e)=>{
        const { name,value } = e.target
        setTableData((prev)=>({...prev,[name]:value}))
    }
    const handleCloseModal = ()=>{
        setIsTableModalOpen(false)
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        // console.log(tableData);
        tableMutation.mutate(tableData)
    }
    const tableMutation = useMutation({
     mutationFn:(reqData)=> addTableAPI(reqData),
     onSuccess:(data)=>{
      toast.success(data.data.message)
      setIsTableModalOpen(false)
      // console.log(data);
      
     },
     onError:(error)=>{
      console.log(error);
      toast.error("Table Already Exist")
      
     }

    })

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <motion.div
      initial={{opacity:0,scale:0.9}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.9}}
      transition={{duration:0.3,ease:"easeInOut"}}
      className='bg-neutral-800 p-6 rounded-lg shadow-lg w-96'
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">
                Add Table 
            </h2>
            <button onClick={handleCloseModal} className='text-white hover:text-red-600 '>
                <IoMdClose size={24}/>
            </button>
        </div>
        {/* Modal Body */}

<form onSubmit={handlesubmit} className="space-y-4 mt-10">
  <div>
    <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
      Table Number
    </label>
    <div className="flex item-center rounded-lg py-3 px-4 bg-neutral-950">
      <input
        type="number"
        name="tableNo"
        value ={tableData.tableNo}
        onChange={handleInputChange}
        className="bg-transparent flex-1 text-white focus:outline-none"
        required
      />
    </div>
  </div>
   <div>
    <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
      Number of seat
    </label>
    <div className="flex item-center rounded-lg py-3 px-4 bg-neutral-950">
      <input
        type="number"
        name="seats"
         value ={tableData.seats}
        onChange={handleInputChange}
        className="bg-transparent flex-1 text-white focus:outline-none"
        required
      />
    </div>
  </div>
  <button type='submit' className='w-full rounded-lg mt-6 py-3 text-lg bg-amber-500 text-gray-950 font-bold'>
    Add Table
  </button>
</form>
      </motion.div>
    </div>
  )
}

export default Modal