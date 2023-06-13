import Image from 'next/image'
import {usestate} from 'react'
export default function Home() {
  const handleSubmit = (e) => {    e.preventDefault();    setLoading(true);     fetch("https://techxmail.onrender.com/sendmail", {      method: "POST",      body: JSON.stringify({        name: form.name,        mail: "paulambrose5002@gmail.com",        text: `Message : ${form.message} \n Name: ${form.name} \n Email: ${form.email}`,        subject: "Someone just sent You a message on your portfolio",      }),      headers: {        "Content-Type": "application/json",      },    }).then(      () => {        setLoading(false);        alert("Thank you. I will get back to you as soon as possible.");         setForm({          name: "",          email: "",          message: "",        });      },      (error) => {        setLoading(false);        console.error(error);         alert("Ahh, something went wrong. Please try again.");      }    );  };
  return (
    <main className="min-h-screen text-white p-5  ">
        <div className='rounded-full py-2 flex  sticky top-10 bg-black left-0 right-0 my-6 justify-between border px-6 capitalize items-center'>
          <h1>LOgo</h1>
          <h1>join</h1>
        </div>

<div className='grid grid-cols-1 place-items-center  md:grid-cols-2'>
<div className='text px-10 pt-10'>
     <h1 className='text-[3rem] font-bold'>Unleash Your Cinematic Experience <br /> with Blockbuster <span className='text-blue-700'>Entertainment</span></h1> 
        
     <div className='text  pt-3 '>
      
        <h1>Get paid directly to your bank account. No cards needed.</h1>
          
        </div>
        <div className="w-full  md:w-96 md:max-w-full ">
  <div className="p-6">
    <form className=' grid grid-cols-2  place-items-center '
      method="POST"
      action="https://herotofu.com/start"
      enctype="multipart/form-data"
    >
      <label className="block mb-6">
        <span className="text-gray-300">Email address</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            rounded-md
            shadow-sm
            outline-0
            border-b-6
            border-white
          
            bg-transparent
            placeholder-gray-600
            text-gray-300
          "
          placeholder="joe.bloggs@example.com"
        />
      </label>
      <div className="mb-6">
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-[rgb(21,78,255)]
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
         
          "
        >
          Subscribe
        </button>
      </div>
      <div>

     
      </div>
    </form>
  </div>
</div>

        </div>
<div>

<div className=' md:pt-0'>
<div className="max-w-sm mt-10 bg-white border relative border-gray-200 rounded-lg  shadow dark:bg-[rgb(0,21,48)] dark:border-gray-700">
    <div className='transform rotate-60 '>
        <img className="rounded-t-lg  " src="https://img.freepik.com/premium-vector/minimalist-music-player-app-interface_23-2148512113.jpg?size=626&ext=jpg&uid=R83135877&ga=GA1.2.1814511041.1683935768&semt=ais" alt="" />
    </div>
    <div className="p-5">
        
    </div>
</div>

</div>
</div>




</div>

    </main>
  )
}
