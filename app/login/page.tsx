
import "../general.css";
import "./login.css"
import "../f-home.css";
import { FcGoogle } from "react-icons/fc";

import  Initial_Navigation from '@/app/_component/Navigations/f-home'

export default function Login_Page(){


    return(
        <>
        <Initial_Navigation/>
      <div className=" h-screen bg-[#F1F5F9] w-full flex justify-center items-center">


<div className="bg-[#FFFFFF] h-[80%] w-[70%] pr-20 pl-10 pt-12 flex flex-col gap-15
 login-box ">

    <h1 className=" text-2xl text-center">Welcome Back</h1>


<form action="" className=" flex flex-col gap-4 h-[45%]">

<div className=" mb-4 pt-3 pb-2  border-1 border-gray-400 input-box"><input type="text" placeholder="Enter Email" className="w-[100%] h-7 border-none rounded pr-2 pl-2 text-lg input-f"/></div>
<div className=" pt-3 pb-2  border-1 border-gray-400 input-box"><input type="text" placeholder="Password" className="w-[100%] h-7 border-none rounded pr-2 pl-2 text-lg input-f"/></div>
<div className=" flex justify-between">
<div className="after-form-input">
    <input type="checkbox" name="remberme" id="" />
    <span  className="text-base pl-1">Remember me</span>
</div>
<div className="after-form-input">
    <a href="">Forget password</a>
</div>

</div>

<div className="bg-[#1A237E] pt-2 pb-2 rounded mt-15">
    <input type="button" value="LogIn" className="w-[100%] h-7 border-none rounded pr-2 pl-2 text-lg input-f text-white text-xl font-bold"/>
</div>



</form>

<div className="flex justify-center w-[70%] ml-20 pb-3
pt-3 rounded border-1 border-solid google-box">
    <FcGoogle  className="self-center text-2xl"/>
<span className="pl-2">Contiue with Google</span>

</div>

<div className="flex  justify-center relative bottom-10 create-acc">
    <span>Don't have account <a href="">SignUp now?</a></span>
</div>


</div>


      </div>
        </>
    )
}