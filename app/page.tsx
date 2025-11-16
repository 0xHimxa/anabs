import "./general.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#F7F9FC] h-screen w-full flex flex-col ">
      <div className="bg-[#1A237E] shadow-2xl px-10 py-4 flex justify-between shadow-xl  h-[70px]">
        <h1 className=" font-bold text-2xl text-[#00E5FF]">ANABS</h1>
        <nav className="flex gap-7 text-xl text-primary-white-text       h:absolute hover:left-10  ">
          <a href="" className="hover:text-[#00E5FF]  px-4">
            Benefits
          </a>
          <a href="" className="hover:text-link-hover-color  px-4">
           Testimonials
          </a>
          <a href="" className="hover:text-link-hover-color  px-4">
            About
          </a>

          <a className="hover:text-link-hover-color px-4">Login</a>
        </nav>
      </div>

      <section className="flex flex-col justify-center items-center flex-grow gap-4">
        <Image src="/sale.png" alt="sale image" width={100} height={100} />
        <h1 className="text-xl text-[#1E293B] font-bold">
          Maximize Profit Per Bottle. Minimize Delivery Waste.
        </h1>
        <div className=" text-lg text-[#64748B]">
          Anabs uncovers seasonal sales trends, optimizes delivery routes, and
          tracks reusable assets so you can scale efficiently.
        </div>
        <a
          href=""
          className="bg-[#FFD700] text-[#441C55] over:text-link-hover-color pr-5 pl-5 pt-4 pb-4 rounded shadow-2xl font-bold"
        >
          Get Started Free
        </a>
      </section>

      <section className="flex-grow">
        <h1 className="text-center text-xl font-bold mb-6">
          {" "}
          Testimonials From Our Customers
        </h1>
        <div className="grid grid-cols-2 gap-10 px-4">
          <div className="bg-[#1F2633] flex flex-col gap-4 px-6 py-5 rounded shadow-3xl">
            <div className="text-gray-300">
              "Anabs gave us the first clear view of our true sales
              profitability by delivery route. We cut three high-cost routes
              that were barely breaking even and focused resources on the top
              performers. Our net profit per truck run has increased by 15%
              since implementation. It’s essential for our distribution
              strategy."
            </div>
            <p className="text-white  text-sm ">
            <strong>  — Hamza S.</strong>, production Manager 
            <strong className="pl-1">Asipita Beverage Ltd.</strong></p>
          </div>

          <div className="bg-[#1F2633] flex flex-col gap-4 px-6 py-5 rounded shadow-3xl">
            <div className="text-gray-300">
              "Anabs gave us the first clear view of our true sales
              profitability by delivery route. We cut three high-cost routes
              that were barely breaking even and focused resources on the top
              performers. Our net profit per truck run has increased by 15%
              since implementation. It’s essential for our distribution
              strategy."
            </div>
            <p className="text-white text-sm ">
            <strong>  — Pauly C.</strong>, Nazifi Manager <strong> Jafmas Beverage Ltd.</strong>
            </p>
          </div>
        </div>
      </section>
      {/* <footer>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
