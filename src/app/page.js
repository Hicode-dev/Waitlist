import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen text-white p-5  ">
        <div className='rounded-full py-3 flex  sticky top-10 bg-black left-0 right-0 mt-10 justify-between border px-6 capitalize items-center'>
          <h1>LOgo</h1>
          <h1>join</h1>
        </div>

<div className='grid grid-cols-1 place-items-center  md:grid-cols-2'>
<div className='text px-10 pt-10'>
     <h1 className='text-[3rem] font-bold'>Unleash Your Cinematic Experience <br /> with Blockbuster <span className='text-blue-700'>Entertainment</span></h1> 
        
     <div className='text  pt-3 '>
      
        <h1>Get paid directly to your bank account. No cards needed.</h1>
          
        </div>
        <div class="w-full  md:w-96 md:max-w-full ">
  <div class="p-6">
    <form className=' grid grid-cols-2  place-items-center '
      method="POST"
      action="https://herotofu.com/start"
      enctype="multipart/form-data"
    >
      <label class="block mb-6">
        <span class="text-gray-300">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-gray-600
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            bg-transparent
            placeholder-gray-600
            text-gray-300
          "
          placeholder="joe.bloggs@example.com"
        />
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
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
<div class="max-w-sm mt-10 bg-white border relative border-gray-200 rounded-lg  shadow dark:bg-[rgb(0,21,48)] dark:border-gray-700">
    <div className='transform rotate-60 '>
        <img class="rounded-t-lg  " src="https://img.freepik.com/premium-vector/minimalist-music-player-app-interface_23-2148512113.jpg?size=626&ext=jpg&uid=R83135877&ga=GA1.2.1814511041.1683935768&semt=ais" alt="" />
    </div>
    <div class="p-5">
        
    </div>
</div>

</div>
</div>




</div>

    </main>
  )
}
