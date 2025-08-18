import React, { useEffect } from "react";
import { useRef,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({site:"", username:"", password:""})
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(()=>{
    let passwords = localStorage.getItem("passwords")
    if(passwords){
      setpasswordArray(JSON.parse(passwords))
    }
  },[])

  const copyText = (text)=>{
    toast('🦄 Copied to clipboard!', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false,
    pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
  // Copies text to the clipboard using the Clipboard API.
    navigator.clipboard.writeText(text)
  }

  const showPassword = ()=>{
    if(ref.current.src.includes("icons/eyecross.png")){
      ref.current.src = "icons/eye.png"
      passwordRef.current.type ="password"  // Sets input type to "password" (hide).
    }else{
      ref.current.src = "icons/eyecross.png"
      passwordRef.current.type ="text"      //Sets input type to "text" (show).
    }
    
  }

   const savePassword = ()=>{
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){
      // Updates state by appending a new entry {...form, id: uuidv4()}
      setpasswordArray([...passwordArray,{...form,id:uuidv4()}])

      // Writes the updated list to localStorage, calls uuidv4() again, generating a second, different id for storage
      localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
      console.log(...passwordArray,form)

      setform({site:"", username:"", password:""})
      toast('Password saved!', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: false,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }
    else{
        toast('Error: Password not saved!',{position: "top-right",autoClose: 2000, theme: "dark"})
    }
   }

   const  deletePassword = (id)=>{
    // console.log("deleting password with id", id)
    let c  = confirm("Do you really want to delete this password")
    if(c){
      // Removes the item with matching `id` from state using filter.
      setpasswordArray(passwordArray.filter((item)=>item.id!==id))
      // Persists the filtered array to localStorage
      localStorage.setItem("passwords",JSON.stringify(passwordArray.filter((item)=>item.id!==id)))
      toast('Password Deleted', { position: "top-center", autoClose: 2000, hideProgressBar: false, closeOnClick: false,
        pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    }  
    
 }

  const editPassword = (id)=>{
    // console.log("editing password with id", id)
    // Finds the entry by id and sets it into the form for editing.
    setform(passwordArray.filter(i=>i.id===id)[0])
    // Removes the original entry from the list (you’ll re-save after editing).
    setpasswordArray(passwordArray.filter(i=>i.id!==id))
  }

   const handleChange = (e)=>{
    // Updates the form by spreading existing fields and replacing the field whose name matches the input with 
    // the new value. This powers all three inputs
      setform({...form, [e.target.name]:e.target.value})
   }

  return (
    <>
    <ToastContainer position="top-center"  autoClose={5000} hideProgressBar={false} newestOnTop={false}
     closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />


      <div className="absolute inset-0 -z-10 h-full w-full bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,
      transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full
         bg-blue-300 opacity-20 blur-[100px]"></div>
      </div>

      <div className="p-2 pt-3 md:mycontainer flex-grow">

        <h1 className="text-4xl font-bold text-center">
         <span className="text-blue-500">🔐</span>Secure
         <span className="text-blue-500">Vault</span>
        </h1>
  
        <p className="text-blue-600 text-lg text-center font-medium">Your Secure Password Manager</p>

        {/* INPUT FIELDS */}
        <div className="text-black flex flex-col p-4 gap-6 items-center max-w-6xl mx-auto">
          {/* website URL */}
          <div className="w-full">
            <input value={form.site} onChange={handleChange} className="rounded-xl border-2
             border-blue-400 w-full p-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 
             transition-all duration-300 shadow-sm" placeholder="Enter website URL" type="text" name="site" id="site"/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            {/* Username */}
           <div className="md:w-3/4 ">
             <input value={form.username} onChange={handleChange} className="rounded-xl border-2
              border-blue-400 w-full p-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 
              transition-all duration-300 shadow-sm" placeholder="Enter Username" type="text" name="username" id="username"/>
           </div>

           <div className="md:w-1/4 relative">
            {/* Password */}
             <input ref={passwordRef} value={form.password} onChange={handleChange} className="rounded-xl border-2
              border-blue-400 w-full p-4 py-3 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 
              transition-all duration-300 shadow-sm" placeholder="Enter Password" type="password" name="password" id="password"/>
             <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"  onClick={showPassword}>
               <img ref={ref} className="p-1" width={30} src="icons/eye.png" alt="eye" />
             </span>
           </div> 
          </div>

         {/* SAVE BUTTON */}
          <button onClick={savePassword} className="flex justify-center gap-2 items-center bg-gradient-to-r from-blue-500 to-blue-600
           hover:from-blue-600 hover:to-blue-700 rounded-xl px-8 py-3 w-fit border-0 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            <lord-icon src="https://cdn.lordicon.com/vjgknpfx.json" trigger="hover" stroke="bold"
            state="hover-swirl" colors="primary:#ffffff,secondary:#ffffff">
            </lord-icon>Save Password
          </button>
        </div> 

          {/* TABLE */}
        <div className="passwords max-w-7xl mx-auto">
          <h2 className="font-bold text-2xl py-4 text-center text-gray-800">Your Passwords</h2>
          {passwordArray.length === 0 && <div className="text-center text-gray-600 py-8 bg-white rounded-xl shadow-sm border
           border-gray-200">🔒 No passwords stored yet. Start by adding your first one above!</div> }
          {passwordArray.length != 0 && <div className="overflow-x-auto">
            <table className="table-auto w-full rounded-xl overflow-hidden min-w-[600px] shadow-lg border border-gray-200">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <tr>
                  <th className="py-4 px-3 font-semibold">Website</th>
                  <th className="py-4 px-3 font-semibold">Username</th>
                  <th className="py-4 px-3 font-semibold">Password</th>
                  <th className="py-4 px-3 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="bg-gray-50">
                {passwordArray.map((item,index)=>{
                  return <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                    {/* WEBSITE URL */}
                  <td className="py-4 px-3 border-b border-gray-200 text-center">
                    <div className="flex justify-center items-center gap-2"><a href={item.site} target="blank"
                     className="hover:text-blue-600 transition-colors font-medium">
                     {item.site}</a>
                     <div className="size-8 px-1 py-1 rounded-full hover:bg-blue-100 transition-all duration-200" 
                      onClick={()=>copyText(item.site)}><img className="cursor-pointer transition-transform duration-200
                      hover:scale-125 hover:opacity-80" width={30} src="icons/copy.png" /></div>
                    </div>
                  </td>

                  {/* USERNAME */}
                  <td className="py-4 px-3 border-b border-gray-200 text-center">
                   <div className="flex justify-center items-center gap-2"><span className="break-all font-medium">{item.username}</span>
                     <div className="size-8 px-1 py-1 rounded-full hover:bg-blue-100 transition-all duration-200" 
                      onClick={()=>copyText(item.username)}><img className="cursor-pointer transition-transform duration-200
                      hover:scale-125 hover:opacity-80" width={30} src="icons/copy.png" /></div>
                   </div>
                  </td>

                  {/* PASSWORD */}
                  <td className="py-4 px-3 border-b border-gray-200 text-center">
                    <div className="flex justify-center items-center gap-2"><span className="break-all font-mono bg-gray-100 px-2 
                     py-1 rounded">{item.password}</span>
                      <div className="size-8 px-1 py-1 rounded-full hover:bg-blue-100 transition-all duration-200" 
                      onClick={()=>copyText(item.password)}><img className="cursor-pointer transition-transform duration-200
                      hover:scale-125 hover:opacity-80" width={30} src="icons/copy.png" /></div>
                    </div>
                  </td>

                  {/* EDIT & DELETE */}
                  <td className="py-4 px-3 border-b border-gray-200 text-center">
                    <div className="flex justify-center items-center gap-3">  
                       {/* Edit */}
                      <span onClick={()=>{editPassword(item.id)}} className="size-8 px-1 py-1 rounded-full hover:bg-green-100 
                      transition-all duration-200"><img className="cursor-pointer transition-transform duration-200
                       hover:scale-150 hover:opacity-80" width={30} src="icons/edit.png" /></span>    
                       {/*DELETE */}
                      <span onClick={()=>{deletePassword(item.id)}} className="size-8 px-1 py-1 rounded-full hover:bg-red-100 
                      transition-all duration-200"><img className="cursor-pointer transition-transform duration-200
                      hover:scale-150 hover:opacity-80" width={30} src="icons/delete.png" /></span>             
                    </div>
                  </td>

                </tr>
                })}
              </tbody>
            </table>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Manager;
