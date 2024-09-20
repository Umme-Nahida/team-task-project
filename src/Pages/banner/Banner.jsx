import img from "../../assets/image/banner.png";
import Container from "../../Shares/Container/Container";
import Navber from "../../Shares/Navber/Navber";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#5C0E62] to-[#00B5D0] pt-5">
      <Navber></Navber>
      <Container>
        <div className="flex flex-col lg:flex-row items-center py-10">
          {/* content  */}
          <div className="md:w-1/2 space-y-8 ml-5 text-white">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Get Your <br /> Payment Faster
            </h1>
            <p className="lg:w-[400px]">
              Blinqpay helps businesses in Africa get paid by anyone, anywhere
              in the world
            </p>
            <button className="btn py-2 px-8 rounded-none">Start Now</button>
          </div>
          {/* img */}
          <div className="md:w-1/2">
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
