"use client"
import React, {useState} from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [Maintask, setMaintask] = useState([]);
  const submithandler=(e)=>{
    e.preventDefault();
    setMaintask([...Maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(Maintask);

  };
  const DeleteHandler=(i)=>{
    let copytask = [...Maintask]
    copytask.splice(i,1)
   setMaintask(copytask)

  }


  let renderTask = <h2 className='text-2xl text-green-50 font-extrabold'>Feels Empty Innit?</h2>;
  if(Maintask.length>0){
  renderTask=Maintask.map((t,i)=>{
    return(

    <div className='flex justify-between'>
      <h5 className='text-white text-2xl font-extrabold'>{t.title}</h5>
      <h5 className='text-green-500 text-2xl font-extrabold justify content-center'>{t.desc}</h5>
      <button className=' text-xl bg-amber-50 px-1.5 py-0.8 rounded-xl font-extrabold m-1'onClick={()=>
      {DeleteHandler()
      }}>X</button>
    </div>
   
    )

  });
}

  
  
  return (
    <>
   
    <h1 className='bg-black text-white font-bold text-center text-4xl py-2.5' >
      ListOne
    </h1>
    <center><h1 className='text-red-950 font-bold'>Start Customizing Your Own TO-DO List!</h1></center>
    <center><form onSubmit={submithandler}>
      <input className='bg-black text-white p-1.5 m-5' type='text' placeholder='Enter Activity' value={title} onChange={(e)=>{
        settitle(e.target.value)

      }} >

      </input>

      <input className='bg-black text-white p-1.5 m-5' type='text' placeholder='Enter Duration' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }} >
      </input>
      <button  className='bg-green-400 p-2 2 m-8 text-white text-5px'> Add</button>
    </form></center>
    <hr/>
    <div className='p-8 bg-blue-600'>
      <ul>
        {renderTask}
      </ul>

    </div>


    
    
    </>
  )
}

export default page