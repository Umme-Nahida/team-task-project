import img from "../../assets/image/banner.png";
import Container from "../../Shares/Container/Container";
import Navber from "../../Shares/Navber/Navber";
import bgImg from "../../assets/image/bg-img1.png";
import LogoSection from "../LogoSection/LogoSection";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className=" pt-5 bg-cover bg-no-repeat h-full lg:h-screen"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Navber></Navber>
        <Container>
          <div className="flex flex-col lg:flex-row items-center py-10">
            {/* content  */}
            <div className="md:w-2/5 space-y-8 ml-5 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Get Your <br /> Payment Faster
              </h1>
              <p className="">
                Blinqpay helps businesses in Africa get paid by anyone, anywhere
                in the world
              </p>
              <button className="btn py-2 px-8 rounded-none">Start Now</button>
              <div className="lg:hidden">
              <LogoSection></LogoSection>
              </div>
            </div>
            {/* img */}
            <div className="md:w-3/5">
              <img src={img} className="w-full" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
