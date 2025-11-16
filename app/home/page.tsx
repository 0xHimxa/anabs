"use client"
import '../general.css'

export default  function Home(){
    
    return(

        <div>
              <div className="h-screen bg-primary  w-full flex flex-col dark:bg-primary-dark">
        <div className="bg-white-500 px-6 py-4 mb-8 text-black-100 dark:text-white flex justify-between shadow-xl">
          {/* to add font size  and font weight */}
          <h1 className="text-xl  font-bold">My website</h1>
          <nav className=" flex gap-4">
            {/* instead of adding padding to each add flex and use gap */}
            <a href="">home</a>
            <a href="">Blog</a>
            <a href="">about</a>
            <button onClick={()=> document.documentElement.classList.toggle('dark')}>Toggle</button>
          </nav>
        </div>
       
      </div>
        </div>
    )
}