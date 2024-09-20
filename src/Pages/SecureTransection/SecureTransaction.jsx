import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/image/Mask-Group.png"
const SecureTransaction = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  items-center gap-y-10 py-10 lg:py-28">
        {/* content  */}
        <div className='md:w-2/5 space-y-4 ml-5 lg:ml-20'>
            <p className="text-red-500 font-medium">MOBILE TRANSACTION</p>
            <h1 className=' text-2xl lg:text-6xl font-bold text-[#857885]'>Smart Mobile  <span className="text-[#5C0E62]">Banking</span></h1>
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

export default SecureTransaction;