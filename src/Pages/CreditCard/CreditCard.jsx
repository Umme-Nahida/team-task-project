import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../Shares/Container/Container";
import img from '../../assets/image/image14.png'


const CreditCard = () => {
    return (
        <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center ">
           {/* content  */}
           <div className='w-full md:w-2/5 text-left space-y-4 pl-5 lg:pl-0 lg:ml-20'>
               <p className="text-red-500 font-medium">CREDIT CARD</p>
               <h1 className='text-2xl lg:text-6xl font-bold text-[#857885]'>Payment <span className="text-[#5C0E62]">Gets Easier</span></h1>
               <p className="lg:pr-32">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
               <button className="flex items-center  gap-x-2 text-[#5C0E62] font-bold">Learn more <FaArrowRightLong /></button>
           </div>
           {/* img */}
           <div className='w-full md:w-3/5'>
           <img src={img}  className='w-full' alt="" />
           </div>
       </div>
      </Container>
    );
};

export default CreditCard;