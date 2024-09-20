
import { FaArrowRightLong } from "react-icons/fa6";
import img from '../../assets/image/Group 429.png'

const MobileBanking = () => {
  return (
    
        <div className="flex flex-row-reverse items-center ">
           {/* content  */}
           <div className='md:w-2/5 space-y-4 lg:ml-20'>
               <p className="text-red-500 font-medium">MOBILE TRANSACTION</p>
               <h1 className='text-6xl font-bold text-[#857885]'>Smart Mobile  <br /> <span className="text-[#5C0E62]">Banking</span></h1>
               <p className="lg:pr-32">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
               <button className="flex items-center gap-x-2 text-[#5C0E62] font-bold">Learn more <FaArrowRightLong /></button>
           </div>
           {/* img */}
           <div className='md:w-3/5'>
           <img src={img}  className='w-full' alt="" />
           </div>
       </div>
     
  );
};

export default MobileBanking;
