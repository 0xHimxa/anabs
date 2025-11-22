export default function Initial_Navigation(){



    return(
         <div className="bg-[#1A237E] shadow-2xl px-10 py-4 flex justify-between shadow-xl  h-[70px]">
        <h1 className=" font-bold text-2xl text-[#00E5FF]">ANABS</h1>
        <nav className="flex gap-7 text-xl text-primary-white-text   nav-name       ">
          <a href="" className="hover:text-[#00E5FF]  px-4">
            Benefits
          </a>
          <a href="" className="hover:text-link-hover-color  px-4">
           Testimonials
          </a>
          <a href="" className="hover:text-link-hover-color  px-4">
            About
          </a>

          <a href="/login" className="hover:text-link-hover-color px-4">Login</a>
        </nav>
      </div>
    )
}