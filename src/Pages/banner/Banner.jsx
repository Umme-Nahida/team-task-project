import img from '../../assets/image/banner.png'
import Container from '../../Shares/Container/Container';

const Banner = () => {
    return (
       <Container>
         <div className="flex items-center ">
            {/* content  */}
            <div className='md:w-1/2 space-y-3 '>
                <h1 className='text-6xl font-bold'>Get Your <br /> Payment Faster</h1>
                <p>Blinqpay helps businesses in Africa get paid by anyone, anywhere in the world</p>
                <button className='btn py-2 px-8 rounded-none'>Start Now</button>
            </div>
            {/* img */}
            <div className='md:w-1/2'>
            <img src={img}  className='w-full' alt="" />
            </div>
        </div>
       </Container>
    );
};

export default Banner;