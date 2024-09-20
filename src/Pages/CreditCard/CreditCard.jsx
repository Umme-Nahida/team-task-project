import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../Shares/Container/Container";
import img from '../../assets/image/image14.png'


const CreditCard = () => {
    return (
        <Container>
        <div className="flex items-center ">
           {/* content  */}
           <div className='md:w-2/5 space-y-4 lg:ml-20'>
               <p className="text-red-500 font-medium">CREDIT CARD</p>
               <h1 className='text-6xl font-bold text-[#857885]'>Payment <br /> <span className="text-[#5C0E62]">Gets Easier</span></h1>
               <p className="lg:pr-32">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
               <button className="flex items-center gap-x-2 text-[#5C0E62] font-bold">Learn more <FaArrowRightLong /></button>
           </div>
           {/* img */}
           <div className='md:w-3/5'>
           <img src={img}  className='w-full' alt="" />
           </div>
       </div>
      </Container>
    );
};

export default CreditCard;